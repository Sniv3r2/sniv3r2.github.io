if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        var k;
        if (this == null)
            throw new TypeError('"this" is null or not defined');
        var o = Object(this);
        var len = o.length >>> 0;
        if (len === 0)
            return -1;
        var n = +fromIndex || 0;
        if (Math.abs(n) === Infinity)
            n = 0;
        if (n >= len)
            return -1;
        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        while (k < len) {
            if (k in o && o[k] === searchElement)
                return k;
            k++;
        }
        return -1;
    };
}

var GET = function () {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&#]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

var parseSearchQuery = function (query) {
    if (!query)
        return;
    q = query.toLowerCase();
    q = q.replace(/\+/g, ' ');
    words = q.split(" ");
    keywords = [];
    for (var i = 0; i < words.length; i++)
        keywords.push([words[i], null, false]);
}

function loadScript(url, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = function () {
        callback();
    }
    
    script.onreadystatechange = function () {
        if (this.readyState == 'complete') callback();
    }
    head.appendChild(script);
}
    

var minimator = function (x, y, z) {
    if (x < y && x < z) return x;
    if (y < x && y < z) return y;
    return z;
}

var levenshteinenator = function (str1, str2) {
    var v1;
    var len1 = str1.length;
    var len2 = str2.length;
    if (len1 > 3 && str2.search(str1) > -1) { return 0; };
    if (len1 < len2) {
        var t1 = str1;
        str1 = str2;
        str2 = t1;
        var t2 = len1;
        len1 = len2;
        len2 = t2;
    };
    var v4 = new Array();
    v4[0] = new Array();
    for (var i = 0; i < len2 + 1; i++) {
        v4[0][i] = i;
    };
    for (var i1 = 1; i1 < len1 + 1; i1++) {
        v4[i1] = new Array();
        v4[i1][0] = i1;
        for (var i2 = 1; i2 < len2 + 1; i2++) {
            v1 = (str1.charAt(i1 - 1) == str2.charAt(i2 - 1)) ? 0 : 1;
            v4[i1][i2] = minimator(v4[i1 - 1][i2] + 1, v4[i1][i2 - 1] + 1, v4[i1 - 1][i2 - 1] + v1);
        };
    };
    return v4[len1][len2];
};

var findSimilar = function (pattern, arr, count) {
    var ratioArr = [];
    var lpattern = pattern.toLowerCase();
    for (var i = 0; i < arr.length; i++) {
        ratioArr.push([arr[i], levenshteinenator(lpattern, arr[i].toLowerCase())]);
    }
    ratioArr = ratioArr.sort(function (a, b) { return ((a[0].length * .01) + a[1]) - ((b[0].length * .01) + b[1]) });
    arr = [];
    for (var i = 0; i < ratioArr.length && i < count; i++) arr.push(ratioArr[i][0]);
    return arr;
}

var findSimilarInObject = function (pattern, obj, count) {
    var ratioArr = [];
    var lpattern = pattern/*.toLowerCase()*/;
    for (var itm in obj) {
        ratioArr.push([itm, levenshteinenator(lpattern, itm/*.toLowerCase()*/)]);
    }
    ratioArr = ratioArr.sort(function (a, b) { return ((a[0].length * .01) + a[1]) - ((b[0].length * .01) + b[1]) });
    arr = [];
    for (var i = 0; i < ratioArr.length && i < count; i++) arr.push(ratioArr[i][0]);
    return arr;
}

var skipWords = [];

var keywords;//array of [word, [sugesstions], skip]
var keywordIndex;
var keyword;
var keywordString;
var articlesDictionary = {};

var processSearch = function (done) {
    keywordIndex = -1;
    var finished = function () {
        var resultArticles = [];
        for (var art in articlesDictionary)
            resultArticles.push([art, articlesDictionary[art]]);
        resultArticles.sort(function (a, b) { return b[1] - a[1]; });

        done(resultArticles);
    };

    var loadedIndices = [];
    var handler = function () {
        if ((keywordIndex != -1) && (keywordIndex < keywords.length)) {
            var keyword = keywords[keywordIndex];
            var keywordString = keyword[0];

            var stemDict2ch = stemDict[keywordString.substr(0, 2)];
            if (!stemDict2ch)  {
                keywordIndex++;
                handler();
                return;
            }
            var index2ch = index[keywordString.substr(0, 2)];

            if (stemDict2ch[keywordString] == undefined)
                keyword[1] = findSimilarInObject(keywordString, stemDict2ch, 6);

            var kw;
            if (keyword[1] == null)
                kw = keyword[0];
            else {
                if (keyword[1].length > 0)
                    kw = keyword[1][0];
                else
                    kw = null;
            }

            var keywordArticles = (kw!=null) ? index2ch[stemDict2ch[kw]] : null;
            if (keywordArticles != null) {
                for (var i = 0; i < keywordArticles.length; i++) {
                    var k = keywordArticles[i][0];
                    var v = (keywords.length - keywordIndex) / (keywordArticles[i][1]);
                    if (articlesDictionary[k])
                        articlesDictionary[k] += v;
                    else
                        articlesDictionary[k] = v;
                }
            }
        }

        keywordIndex++;
        if (keywordIndex >= keywords.length) {
            finished();
            return;
        }

        keyword = keywords[keywordIndex];
        keywordString = keyword[0];
        var ch2 = keywordString.slice(0, 2);
        if ((loadedIndices.indexOf(ch2) == -1) && (indices.indexOf(ch2)!=-1)) {
            loadedIndices.push(ch2);
            loadScript('qindex/' + ch2 + '.js', handler);
        }
        else 
            handler();
    };

    handler();
}
 
function setInnerHtml(id, html) {
    //var newdiv = document.createElement("div");
    //newdiv.innerHTML = html;
    //document.getElementById(id).appendChild(newdiv);
    document.getElementById(id).innerHTML = html;
}

function chkIsDesktop() {
    return (window.innerWidth > 768);
}

function navigateToLink(target) {
    window.location = target;
}

function doSearch(query, prefix, type) {
    var q;
    q = encodeURIComponent(query)
        .replace(/%20/g, "+");
	if (!prefix)
	    prefix = "";
	if  (!type)
		type="";
	else
		type = "&t=" +type;
	var address = prefix + "search.htm?s=" + q + type;
	navigateToLink(address);
}

var stemmer = (function(){
  var step2list = {
      "ational" : "ate",
      "tional" : "tion",
      "enci" : "ence",
      "anci" : "ance",
      "izer" : "ize",
      "bli" : "ble",
      "alli" : "al",
      "entli" : "ent",
      "eli" : "e",
      "ousli" : "ous",
      "ization" : "ize",
      "ation" : "ate",
      "ator" : "ate",
      "alism" : "al",
      "iveness" : "ive",
      "fulness" : "ful",
      "ousness" : "ous",
      "aliti" : "al",
      "iviti" : "ive",
      "biliti" : "ble",
      "logi" : "log"
    },

    step3list = {
      "icate" : "ic",
      "ative" : "",
      "alize" : "al",
      "iciti" : "ic",
      "ical" : "ic",
      "ful" : "",
      "ness" : ""
    },

    c = "[^aeiou]",          // consonant
    v = "[aeiouy]",          // vowel
    C = c + "[^aeiouy]*",    // consonant sequence
    V = v + "[aeiou]*",      // vowel sequence

    mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
    mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
    s_v = "^(" + C + ")?" + v;                   // vowel in stem

  function dummyDebug() {}

  function realDebug() {
    console.log(Array.prototype.slice.call(arguments).join(' '));
  }

  return function (w, debug) {
    var
      stem,
      suffix,
      firstch,
      re,
      re2,
      re3,
      re4,
      debugFunction,
      origword = w;

    if (debug) {
      debugFunction = realDebug;
    } else {
      debugFunction = dummyDebug;
    }

    if (w.length < 3) { return w; }

    firstch = w.substr(0,1);
    if (firstch == "y") {
      w = firstch.toUpperCase() + w.substr(1);
    }

    // Step 1a
    re = /^(.+?)(ss|i)es$/;
    re2 = /^(.+?)([^s])s$/;

    if (re.test(w)) { 
      w = w.replace(re,"$1$2"); 
      debugFunction('1a',re, w);

    } else if (re2.test(w)) {
      w = w.replace(re2,"$1$2"); 
      debugFunction('1a',re2, w);
    }

    // Step 1b
    re = /^(.+?)eed$/;
    re2 = /^(.+?)(ed|ing)$/;
    if (re.test(w)) {
      var fp = re.exec(w);
      re = new RegExp(mgr0);
      if (re.test(fp[1])) {
        re = /.$/;
        w = w.replace(re,"");
        debugFunction('1b',re, w);
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1];
      re2 = new RegExp(s_v);
      if (re2.test(stem)) {
        w = stem;
        debugFunction('1b', re2, w);

        re2 = /(at|bl|iz)$/;
        re3 = new RegExp("([^aeiouylsz])\\1$");
        re4 = new RegExp("^" + C + v + "[^aeiouwxy]$");

        if (re2.test(w)) { 
          w = w + "e"; 
          debugFunction('1b', re2, w);

        } else if (re3.test(w)) { 
          re = /.$/; 
          w = w.replace(re,""); 
          debugFunction('1b', re3, w);

        } else if (re4.test(w)) { 
          w = w + "e"; 
          debugFunction('1b', re4, w);
        }
      }
    }

    // Step 1c
    re = new RegExp("^(.*" + v + ".*)y$");
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      w = stem + "i";
      debugFunction('1c', re, w);
    }

    // Step 2
    re = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = new RegExp(mgr0);
      if (re.test(stem)) {
        w = stem + step2list[suffix];
        debugFunction('2', re, w);
      }
    }

    // Step 3
    re = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = new RegExp(mgr0);
      if (re.test(stem)) {
        w = stem + step3list[suffix];
        debugFunction('3', re, w);
      }
    }

    // Step 4
    re = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
    re2 = /^(.+?)(s|t)(ion)$/;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = new RegExp(mgr1);
      if (re.test(stem)) {
        w = stem;
        debugFunction('4', re, w);
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1] + fp[2];
      re2 = new RegExp(mgr1);
      if (re2.test(stem)) {
        w = stem;
        debugFunction('4', re2, w);
      }
    }

    // Step 5
    re = /^(.+?)e$/;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = new RegExp(mgr1);
      re2 = new RegExp(meq1);
      re3 = new RegExp("^" + C + v + "[^aeiouwxy]$");
      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
        w = stem;
        debugFunction('5', re, re2, re3, w);
      }
    }

    re = /ll$/;
    re2 = new RegExp(mgr1);
    if (re.test(w) && re2.test(w)) {
      re = /.$/;
      w = w.replace(re,"");
      debugFunction('5', re, re2, w);
    }

    // and turn initial Y back to y
    if (firstch == "y") {
      w = firstch.toLowerCase() + w.substr(1);
    }


    return w;
  }
})();

function setLinks() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = linkOnClick;
    }
}
function linkOnClick(event) {
    var h = this.href;

    if (h.startsWith("http"))
        return;

    var s = rootElement.style.fontSize.match(/[0-9\.]*/)[0];

    if ((s == "1") || (s == "1.0"))
        return;

    if (h.indexOf('&size=') != -1) {
        h = h.replace(/&size=[0-9\.]*/, "&size=" + s);
    } else {
        if (h.indexOf('?') != -1) {
            h = h + "&size=" + s;
        } else {
            h = h + "?&size=" + s;
        }
    }
    this.href = h;
}

function sizeText(size) {
    rootElement.style.fontSize = size + "em";
};
function resizeText(multiplier) {
    rootElement.style.fontSize = parseFloat(rootElement.style.fontSize) + (multiplier * 0.2) + "em";
};

function initSize() {
    if (rootElement.style.fontSize == "") {
        rootElement.style.fontSize = "1.0em";
    }
    var gFontSize = GET()['size'];
    if (gFontSize) {
        sizeText(gFontSize);
    }
}