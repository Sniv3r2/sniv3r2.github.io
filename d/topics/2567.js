var data={"title":"Calculator: Cirrhosis probability in hepatitis C (FIB-4) in adults","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n<form name=\"FIB4_form\" id=\"FIB4_form\" action=\"\" onsubmit=\"return false;\" onkeydown=\"formKeyDown(event);\" onkeypress=\"return validNumberField(event);\" onkeyup=\"FIB4_fx();\" onreset=\"rrclr();\">\n\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"EBMcalc Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\n \nCalculator: Cirrhosis probability in hepatitis C (FIB-4) in adults\n</span></td></tr></table><br />&nbsp;<br />\n\n<center>\n<div id=\"calc_equation\">\n<table cellspacing=\"0\" cellpadding=\"10\" summary=\"EBMcalc Table\"><tr><td align=\"left\" bgcolor=\"#6c9a9c\"><span class=\"medCalcFontFormuli\">FIB-4 = Age * AST / (Platelets * sqr(ALT))</span></td></tr></table><br />&nbsp;<br />\n</div>\n</center>\n\n<div id=\"calc_main\">\n<center><table cellpadding=\"6\" cellspacing=\"0\" width=\"95%\" summary=\"EBMcalc Table\"><tr><td align=\"right\" width=\"50%\">\n<center>\n<span class=\"medCalcFontIO\">\nInput:\n</span>\n<br />&nbsp;<br />\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"EBMcalc Table\">\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Age</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Age_param\" size=\"6\" value=\"\" onblur=\"FIB4_fx(); minMaxCheck();\" onchange=\"FIB4_fx();\" /></td>\n<td align=\"left\" width=\"125\" valign=\"top\"> <select name=\"Age_unit\" onchange=\"FIB4_fx();\" style=\"width:115px;\" class=\"medCalcFontSelect\">\n<option value=\"0.0833333333333333|0|mo\">mo</option>\n<option value=\"1|0|yr\" selected=\"selected\">yr</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Platelets</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Platelets_param\" size=\"6\" value=\"\" onblur=\"FIB4_fx(); minMaxCheck();\" onchange=\"FIB4_fx();\" /></td>\n<td align=\"left\" width=\"125\" valign=\"top\"> <select name=\"Platelets_unit\" onchange=\"FIB4_fx();\" style=\"width:115px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|#/10^9/L\">#/10^9/L</option>\n<option value=\"0.001|0|#/microL\">#/microL</option>\n<option value=\"1|0|10^9/L\" selected=\"selected\">10^9/L</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">AST</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"AST_param\" size=\"6\" value=\"\" onblur=\"FIB4_fx(); minMaxCheck();\" onchange=\"FIB4_fx();\" /></td>\n<td align=\"left\" width=\"125\" valign=\"top\"> <span style=\"white-space: nowrap;\"><span class=\"medCalcFontOneBold\">U/L</span>\n</span> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">ALT</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"ALT_param\" size=\"6\" value=\"\" onblur=\"FIB4_fx(); minMaxCheck();\" onchange=\"FIB4_fx();\" /></td>\n<td align=\"left\" width=\"125\" valign=\"top\"> <span style=\"white-space: nowrap;\"><span class=\"medCalcFontOneBold\">U/L</span>\n</span> </td></tr>\n\n\n</table>\n</center>\n</td><td align=\"left\" bgcolor=\"#eeeeee\">\n<center><span class=\"medCalcFontIO\">Result:</span>\n\n<br />&nbsp;<br />\n<table bgcolor=\"#eeeeee\" summary=\"EBMcalc Table\" cellspacing=\"4\">\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">FIB-4</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"FIB4_param\" size=\"6\" onfocus=\"blur();\" /></td>\n<td valign=\"top\" align=\"left\"><span class=\"medCalcFontOne\">\n<span style=\"white-space: nowrap;\"><span class=\"medCalcFontOneBold\">Points</span>\n</span>\n</span></td>\n</tr>\n\n\n<tr><td colspan=\"3\">&nbsp;<br /></td></tr>\n<tr><td colspan=\"3\" align=\"center\"><span class=\"medCalcFontOneBold\">Decimal precision &nbsp;</span>\n<select name=\"decpts\" onchange=\"FIB4_fx();\" class=\"medCalcFontSelect\">\n<option>0</option>\n<option>1</option>\n<option selected=\"selected\">2</option>\n<option>3</option>\n\n</select></td></tr>\n\n</table>\n</center><br />&nbsp;<br />\n<div id=\"calc_buttons\">\n<center>\n<span class=\"medCalcFontOne\">\n\n\n\n\n\n<input type=\"reset\" name=\"reset\" value=\"Reset form\" />\n\n</span>\n</center>\n</div>\n</td></tr></table>\n</center>\n\n<br />&nbsp;<br />\n<table width=\"70%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"EBMcalc Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">    \n<span class=\"medCalcFontTitleBox\">\n\n FIB-4 interpretation\n</span></td></tr></table><br />&nbsp;<br />\n<center>\n<table border=\"1\" cellpadding=\"4\" cellspacing=\"0\" summary=\"RRTable\">\n<tr id=\"rr1_1\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">Points &lt;1.45:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">Cirrhosis less likely</span></td></tr>\n<tr id=\"rr1_2\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">Points &ge;1.45 and &le;3.25:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">Indeterminate</span></td></tr>\n<tr id=\"rr1_3\"><td align=\"right\" style=\"border-right: 0px;\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">Points &gt;3.25:</span></td>\n<td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">Cirrhosis more likely</span></td></tr>\n\n</table>\n</center>\n<br />&nbsp;<br />\n\n\n</div><div id=\"pretextrefs\">\n&nbsp;\n</div>\n\n<div id=\"calc_notes\">\n<span class=\"medCalcFontOneBold\">Notes</span>\n<ul class=\"medCalcFontOne\">\n<li><b>FIB-4</b>: Fibrosis-4; <b>ALT</b>: alanine aminotransferase; <b>AST</b>: aspartate aminotransferase.</li>\n<li><b>Platelets</b> is the platelet count.</li>\n<li>The <b>FIB-4</b> index diagnostic cutoffs produce a negative predictive value of 94.7% with sensitivity 73.4% and a positive predictive value of 82.1% with a specificity of 98.2%.</li>\n\n</ul>\n</div>\n\n\n<div id=\"calc_tables\">\n\n</div>\n\n<br />&nbsp;<br />\n\n<div id=\"calc_refs\">\n<span class=\"medCalcFontRef\"><b>References</b></span>\n<ol>\n<li><span class=\"medCalcFontRef\">Udell JA, Wang CS, Tinmouth J, et. al.  Does this patient with liver disease have cirrhosis?. <i>JAMA</i>. 2012 Feb 22;307(8):832-42.</span></li>\n<li><span class=\"medCalcFontRef\">Vallet-Pichard A, Mallet V, Nalpas B, et. al. FIB-4: an inexpensive and accurate marker of fibrosis in HCV  infection. comparison with liver biopsy and fibrotest. <i>Hepatology</i>. 2007 Jul;46(1):32-6.</span></li>\n\n</ol>\n</div>\n\n</form>\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 109106 Version 3.0</div></div>","outline":null,"javascript":"\n/* <![CDATA[ */\n\nvar lastChar = '';\n\nfunction log(i){\nreturn Math.log(i) * Math.LOG10E;   \n}\n\nfunction ln(i){\nreturn Math.log(i);\n}\n\nfunction sq(i){\nreturn i * i;\n}\n\nfunction sqr(i){\nreturn Math.sqrt(i);\n}\n\n\nfunction power(x,y){\nreturn Math.pow(x,y);\n}\n\nfunction eTo(x){\nreturn Math.exp(x);\n}\n\n\nfunction fixDP(r, dps) {\nif (isNaN(r)) return \"NaN\";\nvar msign = '';\nif (r < 0) msign = '-';\nx = Math.abs(r);\nif (x > Math.pow(10, 21)) return msign + x.toString();\nvar m = Math.round(x * Math.pow(10, dps)).toString();\nif (dps == 0) return msign + m;\nwhile (m.length <= dps) m = \"0\" + m;\nreturn msign + m.substring(0, m.length - dps) + \".\" + m.substring(m.length - dps);\n}\n\nfunction alertNaN(){\nalert('This field is improperly formatted. You may only input the digits 0-9 and a decimal point.');  \ndoCalc = false; \nclrResults();\n}\n\nfunction validNumberField(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\nvar val = field.value;\nvar charCode = event.charCode;\nvar key = String.fromCharCode(charCode);\n\nif(charCode == 0 || charCode == 13) {\n  return true;\n}\n\nif(key == ' ') {\nalert('Numeric field cannot contain spaces.');\n  return false;\n}\t\n\t\t\nif(key == '.') { return validDecimalPoint(val, key); }\nif(key == '-') { return validMinus(val, key); }\n\nif(isNaN(parseInt(key))) {\nalertNaN();\nreturn false;\n}\n\t\nreturn validFloat(val, key);\n}\nreturn true;\n}\n\nfunction validDecimalPoint(val, key) {\nif(val.length == 0 && lastChar != '.') {\n  lastChar = '.';\n  return true;\n}\nif(val.indexOf('.') >= 0 || lastChar == '.') {\n alertNaN();\n return false;\n}\nif(validFloat(val, key)) {\n lastChar = key;\n return true;\n}\nlastChar = '';\nreturn false;\n}\n\nfunction validMinus(val, key) {\nif(val.length == 0) {\n  return true;\n}\nif(val.length > 1) {\n alertNaN();\n return false;\n}\nreturn validFloat(val, key);\n}\n\n\nfunction validFloat(val, key) {\nvar currentVal = parseFloat(val + key);\nif(isNaN(val + key) || isNaN(currentVal)) {\nalertNaN();\nreturn false;\n}\nreturn true;\n}\n\nfunction formKeyDown(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\n  var val = field.value;\n  var keyCode = event.keyCode;\n  if(keyCode == 8 || keyCode == 127) {\n    // backspace or delete\n    if(lastChar == '.') {\n      lastChar = '';\n    }\n    if(field.value.length == 3 && field.value[0] == '0' && field.value[1] == '.') {\n      // this handles a backspace on an input like \".5\", which is saved internally as \"0.5\"\n      //   otherwise, if you leave the field after the backspace, it retains \"0.5\" as the value, most likely an iOS bug\n      field.value = ''; \n    }\n  }\n}\nclrResults();\n}\n\nfunction clrValue(field) {\n field.value = '';\n lastChar = '';\n}\n\nvar currenttimeout;\n\n\nvar calctxt = ''; \nvar xmltxt = ''; \nvar xmlresult = '';\nvar htmtxt = ''; \nvar postNow = false;\nvar printing = false;\n\nfunction FIB4_fx() {\ncurrenttimeout = self.setTimeout('minMaxCheck();', 4500);\n\nwith(document.FIB4_form){\n\n\ndoCalc = true;\nparam_value = parseFloat(Age_param.value);\nunit_parts = Age_unit.options[Age_unit.selectedIndex].value.split('|');\nAge = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(Platelets_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Platelets_unit.options[Platelets_unit.selectedIndex].value.split('|');\nPlatelets = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(AST_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nAST = param_value;\nparam_value = parseFloat(ALT_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nALT = param_value;\ndp = decpts.options[decpts.selectedIndex].text;\nFIB4 =  Age * AST / (Platelets * sqr(ALT));\n\nif (doCalc) FIB4_param.value = fixDP(FIB4, dp);\n\nif (isNaN(FIB4_param.value)) FIB4_param.value = '';\n\n\nif (doCalc){\nrrclr();\nif (FIB4 <1.45){ document.getElementById('rr1_1').bgColor = '#cccccc';\n}\nif ((FIB4 >=1.45) && (FIB4 <=3.25)){ document.getElementById('rr1_2').bgColor = '#cccccc';\n}\nif (FIB4 >3.25){ document.getElementById('rr1_3').bgColor = '#cccccc';\n}\n\n\n}\n\n\n}\n\n}\n\nfunction minMaxCheck(){\nif (printing) return;\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.FIB4_form){\n\nif (Age_param.value && isNaN(Age_param.value)){ clrValue(Age_param); alertNaN('Age'); }\nif (Age_param.value && Age < 18) {\nAge = 0;\nclrValue(Age_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for Age is 18 yr.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Age_param.value && Age > 120) {\nclrValue(Age_param);\nclrResults();\nAge = 0;\ndoCalc = false;\n alert(\"The maximum value for Age is 120 yr.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Platelets_param.value && isNaN(Platelets_param.value)){ clrValue(Platelets_param); alertNaN('Platelets'); }\nif (AST_param.value && isNaN(AST_param.value)){ clrValue(AST_param); alertNaN('AST'); }\nif (ALT_param.value && isNaN(ALT_param.value)){ clrValue(ALT_param); alertNaN('ALT'); }\n\n\n}\n\n}\n\nfunction clrResults(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.FIB4_form){\n\nFIB4_param.value = '';\n\nrrclr();\n\n}\n\n}\n\nvar Age = null,\nPlatelets = null,\nAST = null,\nALT = null,\nFIB4 = null,\nparam_value = null;\n\n\n\n\n\n\n\n\n\n\nfunction rrclr(){\ndocument.getElementById('rr1_1').bgColor = '';\ndocument.getElementById('rr1_2').bgColor = '';\ndocument.getElementById('rr1_3').bgColor = '';\n}\n\n\n\n\n/* ]]> */\n"}