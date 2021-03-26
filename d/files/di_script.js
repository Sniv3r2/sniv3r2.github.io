(function($){
	$.drugInteractions = {
		// General settings 
		appVersion      : "1.1",
		isBeta          : false, // When true, app shows beta flags to user
		uriBase         : "https://www.uptodate.com/services/app/drug/interaction/",
		uriEventBase	: "https://www.uptodate.com/services/app/event/drug/interaction/",
		searchPageSize  : 50,
		deviceClass     : "",
		currentScreen   : "disclaimer",
		disclaimerShown : true,
		changeInProgress: false,
        removeDuplicate : true, ///edit

		// Placeholders
		acRequest       : null,
		acPending       : 0,
		acResult        : [],
		drugList        : [],
		interactRequest : null,
		interactResult  : [],
		docRequest      : null,
		docResult       : [],
		currentState    : {
			analyzeList: null,
			doc: null
		},
		
		// AJAX error handlers
		statusCode      : {
			400: function() {
				$$.docResult = ({html: "<p class='error'>There was an error retrieving the document you requested. Please try again.</p>"});
				$$.refreshDocument("Error");
				$$.ui("document");
			},
			403: function() {
				$$.docResult = ({html: "<p class='error'>You do not have permission to access the LexiComp Drug Interactions application.</p>"});
				$$.refreshDocument("Error");
				$$.ui("document");
			},
			404: function() {
				$$.docResult = ({html: "<p class='error'>There was an error retrieving the document you requested. Please try again.</p>"});
				$$.refreshDocument("Error");
				$$.ui("document");
			},
			500: function() {
				$$.docResult = ({html: "<p class='error'>There was an error retrieving the document you requested. Please try again.</p>"});
				$$.refreshDocument("Error");
				$$.ui("document");
			}
		}
	};

	window.$$ = $.drugInteractions;

	$.extend({
		getUrlVars: function(){
			var vars = [], hash;
			var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
			for(var i = 0; i < hashes.length; i++)
			{
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
			return vars;
		},
		getUrlVar: function(name){
			return $.getUrlVars()[name];
		}
	});

	if(!$("html").hasClass("lt-ie9")) {
		window.onpopstate = function () {
			var targetUrl = location.href;
			if (targetUrl.search('/drug-interactions') === -1){
				console.log(targetUrl);
				location.reload();
				return true;
			}
		}
	}


	$(document).ready(function(){
		$$.init();
	});
})(jQuery);
// Configure the app before user interaction
$$.init = function() {
	// Detect browser size and set appropriately, for legacy browser compatibility
	$("body").removeClass("init");
	var responsify = function() {
		var firstRun = !!!$$.deviceClass;

		// If you have IE 6 or 7 don't even consider being responsive
		if ($("html").hasClass("lt-ie8")) {
			$("body").addClass("largeSize basicSize");
			$$.deviceClass = "basic";
			return false;
		}
		var w = $(window).width();
		if (w < 768 && !$("html").hasClass("lt-ie9")) {
			if ($$.deviceClass !== "mobile" || ($("body").hasClass("mediumSize") && $$.deviceClass == "mobile")) {
				$("body").removeClass("mediumSize").removeClass("largeSize").addClass("smallSize").addClass("isDesktop");
				$$.deviceClass = "mobile";
				if (!firstRun) $$.ui($$.currentScreen);
			}
		} else if (w > 1024 || $("html").hasClass("lt-ie9")) {
			if ($$.deviceClass !== "desktop") {
				$("body").removeClass("smallSize").removeClass("mediumSize").addClass("largeSize").addClass("isDesktop");
				$$.deviceClass = "desktop";
				if (!firstRun) $$.ui($$.currentScreen);
			}
		} else {
			if ($$.deviceClass !== "mobile" || (!$("body").hasClass("mediumSize") && $("body").hasClass("smallSize"))) {
				$("body").removeClass("smallSize").removeClass("largeSize").addClass("mediumSize").addClass("smallSize").addClass("isDesktop");
				$$.deviceClass = "mobile";
				if (!firstRun) $$.ui($$.currentScreen);
			}
		}
	};
	$(window).resize(function(){
		responsify();
		$$.init.setDrugListHeight();
	});
	responsify();

	$(function() {
		FastClick.attach(document.body);
	});
	
	// Fix for rotation issues on mobile devices
	var orientationFix = function() {
		if (window.innerHeight < window.innerWidth && $$.deviceClass !== "desktop") {
			$("html").addClass("landscape-layout");
		} else {
			$("html").removeClass("landscape-layout");
		}
	};
	$(window).bind('orientationchange', function(event) {
		orientationFix();
	});
	orientationFix();
	
	if (!!$$.isBeta) {
		$("body").addClass("beta");
	}

	var disableNavBar = $.getUrlVar('disableNavBar');
	if (!!disableNavBar && disableNavBar === "true") {
		$("body").addClass("disableNavBar");
	}

	// Initalize cookies
	Cookies.json = true;
	if (!!Cookies.get('utd-drugint-disclaimerShown')) {
		$$.disclaimerShown = Cookies.get('utd-drugint-disclaimerShown');
		if ($$.disclaimerShown === true) {
			$$.currentScreen = "druglist";
		}
	}

	if (!!Cookies.get('utd-drugint-druglist')) {
		$$.drugList = Cookies.get('utd-drugint-druglist');
	}

	if (!!Cookies.get('utd-drugint-state')) {
		$$.currentState = Cookies.get('utd-drugint-state');
	}

	$$.init.disclaimer();
	$$.init.drugList();
	$$.init.autoComplete();
	$$.init.analyze();
	$$.init.document();

	if ($$.deviceClass == "basic") {
		$$.init.legacySupport();
	} else {
		// If hash exists, use it as current screen
		if (location.hash) {
			$$.currentScreen = location.hash.substring(4);
			switch($$.currentScreen) {
				case "document":
					if (!!$$.currentState.doc) {
						$$.getDocument($$.currentState.doc);
					} else {
						$$.currentScreen = "analyze";
					}
					break;
				default:
					break;
			}
		}

		window.onhashchange = function(){
			if (!$$.changeInProgress) {
				var newScreen = location.hash.substring(4);
				switch(newScreen) {
					case "document":
						if (!!$$.currentState.doc) {
							$$.getDocument($$.currentState.doc);
						} else {
							newScreen = "analyze";
						}
						break;
					default:
						break;
				}
				$$.ui(newScreen);
			}
		};

		// Set initial UI screen
		$$.ui($$.currentScreen);
	}
};

$$.init.setDrugListHeight = function(){
	if ($("body").hasClass("largeSize")){
		$(".druglist-guidance .drugList").css({"max-height": $(".sidebar").height() - 370 + 'px'});
	}
};

$$.init.disclaimer = function() {
	// Continue button on disclaimer
	$(".disclaimer-continue").on("click", function(){
		$$.disclaimerShown = true;
		Cookies.set('utd-drugint-disclaimerShown', $$.disclaimerShown);
		$$.ui("druglist");
	});
};

// Support function for legacy browsers on init
$$.init.legacySupport = function() {
	$$.docResult = ({html: "<p class='error'>The Drug Interactions feature is only available to users of Internet Explorer 8 and above.</p>"});
	$$.refreshDocument("Error");
	$$.ui("document");
};

$$.init.makeUrl = function(url, params) {
	// Adds the context path as a prefix to the specified relative URL and
	// returns the new URL. This is equivalent to using the Struts html:link
	// tag (with the page attribute) within a JSP.
	var u = url;
	if (params) {
		u = u + (url.indexOf('?') > -1 ? "&" : "?") + $.param(params);
	}
	return u;
},

$$.init.postSimpleEvent = function(eventUrl, eventParams){
	// Utility method which handles submitting of an
	// event to the server
	var eventUrl = this.makeUrl(eventUrl, eventParams);
	$.ajax({
		url: eventUrl,
		type: "POST",
		contentType: "application/json;charset=UTF-8",
		data: {},
		cache: false});
	return true;
};


var toolbarMiddleMobileAnalyze;

$$.init.analyze = function() {
	toolbarMiddleMobileAnalyze = $("#toolbar-middle .mobile-analyze, .desktop-analyze .intCountBar .intCount");

	$("#analyze-back").on("click", function(){
		$$.ui("druglist");
	});

    //begin edit
	$("#toolbar-right").on("click", ".mobile-analyze", function(){
	    var html = $("#desktop-riskRatings").html();
	    $$.docResult = ({ html: html });
	    $$.refreshDocument("Risk Ratings");
	    $$.ui("document");	    
	});

    
    //end edit
};

// Take the current drug list and request a Lexi interaction
$$.getInteraction = function(id) {

	// Clear existing interaction HTML
	$("#analyze-copyright").empty();
	$(".desktop-analyze > .intList, .mobile-analyze > .intList").empty().removeClass("error");
	$(".iv-disclaimer-mobile-style").remove();

	// Cancel pending AJAX request to prevent overlap
	if (!!$$.interactRequest) {
		$$.interactRequest.abort();
	}


	// Retrieve the search term, if any
	var searchTerm = null;
	searchTerm = $$.getUrlParam("search", location.search);

	toolbarMiddleMobileAnalyze.text("Loading...");

    ///begin edit
	var idList = [];
	if (!!id) {
		$$.currentState.analyzeList = id;
		idList.push(id);
	} else {
		$$.currentState.analyzeList = null;
		
		idList = $$.drugList;
	    //$.each($$.drugList, function(i,v){
		//	idList.push(v.id);
		//});
	}
	Cookies.set('utd-drugint-state', $$.currentState);
        
	var result = $$.localSearchInteractions(idList);
    	
	$$.interactResult = result;

	$$.refreshInteractions();	
    ///end edit
};

$$.getUrlParam= function(name, url){
	if (typeof url != "undefined"){
		return decodeURIComponent((url.match(RegExp("[?|&]"+name+'=(.+?)(&|$)'))||[,null])[1]);
	}
	else {
		return decodeURIComponent((location.search.match(RegExp("[?|&]"+name+'=(.+?)(&|$)'))||[,null])[1]);
	}
};

// Take the latest interactions list and display
$$.refreshInteractions = function() {
	$(".disclaimer-container").remove();
	var intHtml = $("<ul/>").attr("class","intList utd-listView");
	var amt = $$.interactResult.length;
	if (amt == 0) {
		toolbarMiddleMobileAnalyze.text("");
		$(".desktop-analyze > .intList, .mobile-analyze > .intList").replaceWith("<div class='intList error'>No interactions of Risk Level A or greater identified.</div>");
	} else if (amt == 1) {
		toolbarMiddleMobileAnalyze.text("1 Result");
	} else {
		toolbarMiddleMobileAnalyze.text(amt + " Results");
	}
	if (amt > 0) {
		$.each($$.interactResult, function (i, v) {
			var li = $("<li/>").addClass("intItem").attr("url", v.url).appendTo(intHtml);
			var href = $("<a />").appendTo(li);
			var risk = $("<span/>").text(v.risk).addClass("intRiskRating").addClass("rating" + v.risk).appendTo(href);
			var drug1 = $("<span/>").text(v.drug1.name).addClass("intDrug").appendTo(href);
			var drug2 = $("<span/>").text(v.drug2.name).addClass("intDrug").appendTo(href);
			var hideDrugs =  $("<span/>").text(v.drug1.name +" | "+v.drug2.name).addClass("hideDrug").attr("dnames", v.drug1.name +" | "+v.drug2.name).hide().appendTo(href);
		});
		$(".desktop-analyze > .intList, .mobile-analyze > .intList").replaceWith(intHtml);

		$(".desktop-analyze > .intList, .mobile-analyze > .intList").on("click", ".intItem", function(){
			var docID = $(this).attr("url");
			var dNames = $(this).find(".hideDrug").attr("dnames");
			$$.getDocument(docID, dNames);
			$$.ui("document");
		});
	}
	$(".desktop-analyze > .intList, .mobile-analyze > .intList").after("<div class='disclaimer-container'/>");
	$(".disclaimer-container").html($("#disclaimer-analyze-content").html());
	$(".disclaimer-container").after("<div class='hasItems iv-disclaimer-mobile-style'><p><strong>NOTE:</strong> This tool does not address chemical compatibility related to I.V. drug preparation or administration.</p></div>");};

$$.init.autoComplete = function() {
	$("#search-back").on("click", function(){
		$$.acLastTerm = "";
		$$.ui("druglist");
	});

	$(".search-input").on("paste",function(e){
		var element = this;
		setTimeout(function () {
			var term = $(element).val();
			$$.autoComplete(term);
		}, 0);
	});

	$(".search-input").on("keyup", function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		var acList = $(".autoCompleteList");
		var currentAc = $(".current-ac");
		if (keycode == '13') { // enter
			if ($$.deviceClass !== "desktop" && $$.deviceClass !== "basic") $(".search-input").blur();
			if (currentAc.length) {
				currentAc.click();
			} else {
				if ($(".autoCompleteList").attr("term") === $(this).val()) {
					$(".autoCompleteList li:first").click();
				}
			}
		} else if (keycode == '38') { // up
			if (currentAc.length) {
				if (currentAc.prev().length) {
					currentAc.removeClass("current-ac").prev().addClass("current-ac");
				}
			}
		} else if (keycode == '40') { // down
			if (currentAc.length) {
				if (currentAc.next().length) {
					currentAc.removeClass("current-ac").next().addClass("current-ac");
				}
			} else {
					$(".autoCompleteList").find("li:first-child").addClass("current-ac");
			}
		} else {
			var term = $(this).val();
			$$.autoComplete($.trim(term));
		}
		if ((keycode == '38' || keycode == '40') && currentAc.length) {
			currentAc = $(".current-ac");
			var h = acList.height();
			var d = currentAc.position().top;
			if (d > h) {
				var scroll = d - h + acList.scrollTop();
				acList.scrollTop(scroll);
			}
			if (d < 0) {
				var scroll = acList.scrollTop() + d;
				acList.scrollTop(scroll);
			}
		}
	});
};

// Request auto-complete results and display them
$$.autoComplete = function(term,page) {
	// Do not proceed if term is same as $$.acLastTerm
	if (term !== $$.acLastTerm || !!page) {
		if (term.length >= 1) {
			// Cancel pending AJAX request to prevent overlap
			if (!!$$.acRequest) {
				$$.acRequest.abort();
			}

			// Add delay to prevent firing while user is typing
			if ($$.acPending) {
				clearTimeout($$.acPending);
			}

			var idList = [];
			$.each($$.drugList, function (i, v) {
				idList.push(v.id);
			});
                        
			$$.acPending = setTimeout(function () {
			    $$.acLastTerm = term;

			    ///begin edit
			    var result = $$.localAutoComplete(term, (!!page ? page : 1), $$.searchPageSize, idList);

			    $$.acResult = result			    
			    ///end edit

			    $(".autoCompleteList").show();
			    (!!page ? $$.refreshAutoComplete(term, true) : $$.refreshAutoComplete(term, false));
			}, 200);
		    
		} else {
			$$.acResult = [];
			$(".autoCompleteList").hide();
			$$.acLastTerm = "";
			$$.refreshAutoComplete();
		}
	}
};

// Take the latest auto complete list and display
$$.refreshAutoComplete = function(term,isPaging) {
	var acHtml = $("<ul term='" + term + "'/>").attr("class","autoCompleteList utd-listView");
	if ($$.acResult.totalPages > 0) {
		$.each($$.acResult.items, function(i,v) {
			var li = $("<li/>").attr("drugid", v.id).attr("drugname", v.name).appendTo(acHtml);
			if(!v.duplicateDrugPresent){
				var href = $("<a/>").text(v.name).appendTo(li);
				li.addClass("autoCompleteItem");
			}
			else{
				var app = li.append(v.name).append('<div>This item is already in your list</div>').addClass("autoCompleteLabel");
			}
		});
		if ($$.acResult.totalPages > $$.acResult.page) {
			var li = $("<li/>").addClass("autoCompleteNextPage").attr("nextPage", $$.acResult.page + 1).appendTo(acHtml);
			var href = $("<a/>").text("Show More Results").appendTo(li);
		}
		(!!isPaging ? $(".autoCompleteList").append($(acHtml).html()) : $(".autoCompleteList").replaceWith(acHtml));

		$(".autoCompleteNextPage").one("click", function(){
			$$.autoComplete($("." + $$.deviceClass + "-search .search-input").val(),$(this).attr("nextpage"));
			$(this).remove();
		});


		$(".autoCompleteItem").one("click", function(){
			var drug = {
				name: $(this).attr("drugname"),
				id: $(this).attr("drugid")
			};
			$$.addDrug(drug);
			$$.acLastTerm = "";
			$$.ui("druglist");
			if ($$.deviceClass === "desktop") {
				$(".search-input").focus();
			}
		});

		$(".ui-druglist #header-container, .autoCompleteList").one("touchstart", function(){
			$(".search-input").blur();
		});

		$('.search-input,.autoCompleteList').on('click', function(e) {
			e.stopPropagation();
		});

		if ($$.deviceClass == "desktop") {
			$(document).one('click', function (e) {
				$(".autoCompleteList").hide();
				$$.acLastTerm = "";
			});
		}

	} else {
		$(".autoCompleteList").empty().append("<li class='error'>No items found for this term.</li>");
	}
};

var toolbarMiddleMobileDocument;
var docContainer;

$$.init.document = function() {
	toolbarMiddleMobileDocument = $("#toolbar-middle").find(".mobile-document");
	docContainer = $("#docContents");
	
	$("#toolbar-left").find(".mobile-document").on("click", function(){
		$$.ui("analyze");
	});
};

// Request a document from Lexi
$$.getDocument = function(docID, drugNames) {
	docContainer.empty().html("<p style='color: #999'>Loading...</p>");

	if (!!$$.docRequest) {
		$$.docRequest.abort();
	}

	$$.currentState.doc = docID;
	Cookies.set('utd-drugint-state', $$.currentState);

    ///begin edit
	$$.localGetDocument(docID, drugNames, function (result) {
	    $$.docResult = ({ html: result });

	    $$.refreshDocument();
	});
	
    ///end edit	    
};

// Take the latest document and display
$$.refreshDocument = function(title) {
	if (!!title) {
		toolbarMiddleMobileDocument.text(title);
		$$.currentState.doc = null;
		Cookies.set('utd-drugint-state', $$.currentState);
	} else {
		toolbarMiddleMobileDocument.text("Interaction Details");
	}
	docContainer.html($$.docResult.html);
	if (!title && $$.deviceClass == "basic") {
		docContainer.prepend("<button onclick='$$.ui(\"analyze\")'>Back</button>");
	}
};
var maxDrugs = 50; // Max number of drugs able to be added to the list

$$.init.drugList = function() {
	$("#druglist-add").on("click", function(){
		$$.ui("search");
	});

	$(".analyze-button").on("click", function(){
		if ($$.drugList.length <= 1) {
			return false;
		}
		$$.ui("analyze");
		$$.getInteraction();
	});

	$("#toolbar-left").on("click", ".druglist-normal", function(){
		$("html").addClass("state-druglist-editing");
	});

	$("#toolbar-right").on("click", ".druglist-editing", function(){
		$("html").removeClass("state-druglist-editing");
	});

	$("#toolbar-left, .desktop-toolbar").on("click", ".druglist-editing, .new-list-button", function(){
		//$$.init.postSimpleEvent($$.uriEventBase + "clear-list/json");
		$$.drugList = [];
		$$.ui("druglist");
	});

	$$.refreshDrugList();
};

// Take the latest drug list and display
$$.refreshDrugList = function() {
	var dlHtml = $("<ul/>").attr("class","utd-listView drugList");
	$.each($$.drugList, function(i,v) {
		var li = $("<li><a  class='removedrug'>&#8211;</a></li>").attr("drugname", v.name).attr("drugid", v.id).addClass("drugListItem").appendTo(dlHtml);
		var href = $("<a  />").text(v.name).appendTo(li);
	});
	$(".drugList").replaceWith(dlHtml);

	$(".removedrug").on("click", function(e){
		var drug = $(this).parent().attr("drugid");
		$$.removeDrug(drug);
		e.stopPropagation();
	});

	$(".drugListItem").on("click", function(){
		if (!$("html").hasClass("state-druglist-editing")) {
		    $$.getInteraction({ id: $(this).attr("drugid"), name: $(this).attr("drugname") });
			$$.ui("analyze");
		}
	});

	$(".noItems").remove();
	$(".hasItems").remove();
	$(".iv-disclaimer-mobile-bottom").remove();


	$("#main-container > .mobile-druglist").removeClass("analyze-visible");
	if ($$.drugList.length > 0) {
		if ($$.drugList.length == 1) {
			$("#druglist-step3,#druglist-step1").hide();
			$("#druglist-step2,#druglist-step12,#druglist-desk1,#druglist-desk2").show();
			$(".desktop-toolbar .analyze-button").addClass("analyze-disable");
		} else {
			$(".desktop-toolbar .analyze-button").removeClass("analyze-disable");
			$("#druglist-step12,#druglist-desk2").hide();
			$("#druglist-step3,#druglist-desk1").show();
			$("#main-container > .mobile-druglist").addClass("analyze-visible");
			setTimeout(function(){
				$$.init.setDrugListHeight();
			}, 100);
		}
		$(".drugList").after("<div class='hasItems iv-disclaimer-mobile-style'><p><strong>NOTE:</strong> This tool does not address chemical compatibility related to I.V. drug preparation or administration.</p></div>");
	} else {
		$(".desktop-toolbar .analyze-button").addClass("analyze-disable");
		$("#toolbar-left .druglist-normal").show();
		$("#druglist-step3,#druglist-step2,#druglist-desk1,.hasItems").hide();
		$("#druglist-step1,#druglist-step12").show();
		$("#toolbar-left").find(".druglist-normal").hide();
		$("html").removeClass("state-druglist-editing");
		$(".drugList").after("<div class='noItems'><p>Your list is empty. <br/><br/>Add your first item using '<span class='plus'>+</span>'<br/><br/><br/></p></div>");
		$(".noItems").after("<div class='iv-disclaimer-mobile-style iv-disclaimer-mobile-bottom'><p><strong>NOTE:</strong> This tool does not address chemical compatibility related to I.V. drug preparation or administration.</p></div>");
	}
	$(".iv-disclaimer").show();

	Cookies.set('utd-drugint-druglist', $$.drugList);
};

// Add a drug to the drug list, if it doesn't already exist
$$.addDrug = function(drugItem) {
	var isInList = false;
	$.each($$.drugList, function(i,v) {
		if (v.id === drugItem.id) {
			isInList = true;
			return false;
		}
	});
	if (!isInList) {
		if ($$.drugList.length == maxDrugs) {
			alert("The maximum number of items you can analyze is 50. Remove some items and try again.");
			return false;
		}
		$$.drugList.push(drugItem);
		//$$.init.postSimpleEvent($$.uriEventBase + "add-drug/json", { 'drugName': drugItem.name });
		$(".autoCompleteList").hide();
    	$(".search-input").val("");
	}
	$$.ui("druglist");
};

// Remove a drug from the drug list, if it exists
$$.removeDrug = function(drugId) {
	$.each($$.drugList, function(i,v) {
		if (v.id === drugId) {
			$$.drugList.splice(i, 1);
			return false;
		}
	});
	$$.ui("druglist");
};

// Handles switching between various UI states
$$.ui = function(screen) {
	var allStates = ['disclaimer','search','druglist','analyze','document'];

	$$.changeInProgress = true;
	var changeInProgressTimeout = setTimeout(function(){$$.changeInProgress = false;},100);

	// Make sure screen is valid
	if ($.inArray(screen, allStates) !== -1) {
		$.each(allStates, function(i,v) {
			$(".mobile-" + v + "," + ".desktop-" + v).hide();
		});
		$("html").attr("id","ui-"+screen);
		$$.currentScreen = screen;
		$("." + $$.deviceClass + "-" + screen).show();

		switch(screen) {
		    case "disclaimer":
                //begin edit
		        $("#disclaimer").empty().html($("#disclaimer-content").html());
			    $("#disclaimer").append("<p class='version'>App Version " + $$.appVersion + "</p>");
			    if (!!$$.isBeta) {
			        $("#disclaimer").find("p:last").append(" BETA");
			    }
                //end edit
				////location.hash = "di-disclaimer";
				break;
			case "search":
					$(".search-input").val("").focus();
					$(".autoCompleteList").hide();
					$(".autoCompleteList").empty();
					$("#main-container > .mobile-druglist").removeClass("analyze-visible");
				break;
			case "druglist":
				$$.refreshDrugList();
			    ////location.hash = "di-druglist";
				break;
			case "analyze":
				if (!$$.interactRequest) {
					if (!!$$.interactResult && ($$.drugList.length > 0)) {
						$$.getInteraction();
					} else {
						if (!!$$.currentState.analyzeList) {
							$$.getInteraction($$.currentState.analyzeList);
						} else {
							if ($$.disclaimerShown === true) {
								$$.ui("druglist");
							} else {
								$$.ui("disclaimer");
							}

						}
					}
				}
				//location.hash = "di-analyze";
				break;
			case "document":
				//location.hash = "di-document";
				break;
			default:
				break;
		}
	}
};

$$.localAutoComplete = function (term, page, pageSize, drugList) {
    var drugs =[];

    //getFirst
    var minIndex = 0;
    var maxIndex = ds.length - 1;
    var currentIndex;
    var currentElement;

    var lTerm = term.toLowerCase();

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = ds[currentIndex][1].toLowerCase();

        if (currentElement < lTerm) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > lTerm) {
            maxIndex = currentIndex - 1;
        }
        else {
            break;
        }
    }
    if (minIndex > maxIndex) {
        if (currentIndex > maxIndex)
            currentIndex = maxIndex;
    }//*/
    //end getFirst

    var count = 0;
    var start = (page - 1) * pageSize; //0
    var end = start + 50;

    for (var i = currentIndex; i < ds.length; i++) {
        if (ds[i][1].toLowerCase().startsWith(lTerm)) {
            if ((count=>start) && (count < end))
                drugs.push(ds[i]);
            count++;
        }
        else {
            if (ds[i][1].toLowerCase() > lTerm)
                break;
        }
    }//*/
    
    var result = {
        items: [],
        page: page,
        totalPages: Math.ceil(count / pageSize)
    };

    for (var i = 0; i < drugs.length; i++) {
        result.items.push({
            id: drugs[i][0],
            name: drugs[i][1],
            duplicateDrugPresent: $$.localIsDrugInList(drugList, drugs[i][0]),
        });
    }

    return result;
};

$$.localIsDrugInList = function(drugList, id) {
    for (var i = 0; i < drugList.length; i++) {
        if (id.split('b')[0] == drugList[i].split('b')[0])
            return true;
    }
    return false;
};

$$.localSearchInteractions = function (drugList) {
    //Get Interactions List
    var interactions = [];
    if (drugList.length == 1) {
        if (dis[drugList[0].id]) {
            var n;
            n = 0;
            dInteractions = dis[drugList[0].id][n];
            for (var ii = 0; ii < dInteractions.length; ii++) {
                var int = dInteractions[ii];

                interactions.push({
                    drug1: {
                        name: drugList[0].name,
                    },
                    drug2: {
                        name: is[int][1][1 - n],
                    },
                    risk: is[int][0],
                    url: int
                });
            }
            n = 1;
            dInteractions = dis[drugList[0].id][n];
            for (var ii = 0; ii < dInteractions.length; ii++) {
                var int = dInteractions[ii];

                interactions.push({
                    drug1: {
                        name: drugList[0].name,
                    },
                    drug2: {
                        name: is[int][1][1 - n],
                    },
                    risk: is[int][0],
                    url: int
                });
            }
        }
    } else {
        var os = {};
        for (var i = 0; i < drugList.length; i++) {
            if (dis[drugList[i].id]) {
                var dInteractions;
                var n;
                n = 0;
                dInteractions = dis[drugList[i].id][n];
                for (var ii = 0; ii < dInteractions.length; ii++) {
                    var int = dInteractions[ii];
                    if (!os[int])
                        os[int] = [null, null];
                    var name = drugList[i].name;
                    if (os[int][n] == null) {
                        if (os[int][1 - n] != name)
                            os[int][n] = name;
                    }
                }
                n = 1;
                dInteractions = dis[drugList[i].id][n];
                for (var ii = 0; ii < dInteractions.length; ii++) {
                    var int = dInteractions[ii];
                    if (!os[int])
                        os[int] = [null, null];
                    var name = drugList[i].name;
                    if (os[int][n] == null) {
                        if (os[int][1 - n] != name)
                            os[int][n] = name;
                    }
                }
            }
        }

        //Parse Interactions
        for (var int in os) {
            if ((os[int][0]==null) || (os[int][1]==null))
                continue;
            
            interactions.push({
                drug1: {
                    name: os[int][0],                
                },
                drug2: {
                    name: os[int][1],
                },
                risk: is[int][0],
                url: int
            });            
        }
    }

    //Sort Interaction List
    interactions = interactions.sort(function (a, b) {
        return b.risk.charCodeAt(0) - a.risk.charCodeAt(0);
    })
        
    //Remove Duplicate
    if ($$.removeDuplicate) {
        for (var i = 0; i < interactions.length; i++) {
            for (var ii = 0; ii < i; ii++) {
                if ((interactions[i].drug1.name == interactions[ii].drug1.name) && (interactions[i].drug2.name == interactions[ii].drug2.name)) {
                    interactions.splice(i, 1);
                    i--;
                    break;
                }
            }
        }
    }

    var result = interactions;    
    return result;
};

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

var docs;
$$.localGetDocument = function (id, drugNames, success) {
    var base = "drugs-interactions/interactions";
    var idGroup = (id - id % 100) / 100;

    var handler = function () {
        var result = docs[idGroup][id];
        success(result);
    };
    
    if ((!docs) || (!docs[idGroup]))
        loadScript(base + "/" + idGroup + ".js", handler);
    else
        handler();
};