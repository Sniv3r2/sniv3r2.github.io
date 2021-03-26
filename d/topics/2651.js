var data={"title":"Calculator: Model of Endstage Liver Disease (MELD) score (not for liver transplantation listing purposes, not appropriate for patients under age 12 years)","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n<form name=\"MELD_form\" id=\"MELD_form\" action=\"\" onsubmit=\"return false;\" onkeydown=\"formKeyDown(event);\" onkeypress=\"return validNumberField(event);\" onkeyup=\"MELD_fx();\">\n\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\n \nCalculator: Model of Endstage Liver Disease (MELD) score (not for liver transplantation listing purposes, not appropriate for patients under age 12 years)\n</span></td></tr></table><br />&nbsp;<br />\n\n<center>\n<div id=\"calc_equation\">\n<table cellspacing=\"0\" cellpadding=\"10\" summary=\"MedCalc 3000 Table\"><tr><td align=\"left\" bgcolor=\"#6c9a9c\"><span class=\"medCalcFontFormuli\">MELDscore = Math.round((9.57 * ln(Creatinine)) + (3.78 * ln(Bilirubin)) + (11.2 * ln(INR)) + 6.43)</span></td></tr></table><br />&nbsp;<br />\n</div>\n</center>\n\n<div id=\"calc_main\">\n<center><table cellpadding=\"6\" cellspacing=\"0\" width=\"95%\" summary=\"MedCalc 3000 Table\"><tr><td align=\"right\" width=\"50%\">\n<center>\n<span class=\"medCalcFontIO\">\nInput:\n</span>\n<br />&nbsp;<br />\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Age</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Age_param\" size=\"6\" value=\"\" onblur=\"MELD_fx(); minMaxCheck();\" onchange=\"MELD_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"Age_unit\" onchange=\"MELD_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"0.0833333333333333|0|mo\">mo</option>\n<option value=\"1|0|yr\" selected=\"selected\">yr</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Creatinine</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Creatinine_param\" size=\"6\" value=\"\" onblur=\"MELD_fx(); minMaxCheck();\" onchange=\"MELD_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"Creatinine_unit\" onchange=\"MELD_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"100|0|g/L\">g/L</option>\n<option value=\"1000|0|g/dL\">g/dL</option>\n<option value=\"1|0|mg%\">mg%</option>\n<option value=\"1|0|mg/dL\" selected=\"selected\">mg/dL</option>\n<option value=\"100|0|mg/mL\">mg/mL</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Bilirubin</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Bilirubin_param\" size=\"6\" value=\"\" onblur=\"MELD_fx(); minMaxCheck();\" onchange=\"MELD_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"Bilirubin_unit\" onchange=\"MELD_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"100|0|g/L\">g/L</option>\n<option value=\"1000|0|g/dL\">g/dL</option>\n<option value=\"1|0|mg%\">mg%</option>\n<option value=\"1|0|mg/dL\" selected=\"selected\">mg/dL</option>\n<option value=\"100|0|mg/mL\">mg/mL</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">INR</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"INR_param\" size=\"6\" value=\"\" onblur=\"MELD_fx(); minMaxCheck();\" onchange=\"MELD_fx();\" /></td>\n<td align=\"left\">&nbsp;</td></tr>\n\n<tr><td align=\"right\"><span class=\"medCalcFontOneBold\">Hemodialysis twice or &ge;24 hours of CVVHD in the past week</span></td>\n<td colspan=\"3\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"HD_radio\" value=\"Yes\" onclick=\"Creatinine_param.value = '4'; Creatinine = 4; MELD_fx();\" /> Yes</span></td></tr>\n<tr><td align=\"left\"><br /></td>\n<td colspan=\"3\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"HD_radio\" checked=\"checked\" value=\"No\" onclick=\"Creatinine_param.value = ''; MELD_score_param.value = '';\" /> No</span></td></tr>\n<tr><td align=\"right\" valign=\"top\"><span class=\"medCalcFontOneBold\">Exception diagnoses age 12 to 17 years</span></td>\n<td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"EDX_radio\" value=\"Noncontributory|0\" onclick=\"MELD_fx();\" /> Noncontributory (0)</span></td></tr>\n<tr><td align=\"left\"><br /></td><td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"EDX_radio\" value=\"Urea cycle disorder|1\" onclick=\"MELD_fx();\" /> Urea cycle disorder (1)</span></td></tr>\n<tr><td align=\"left\"><br /></td><td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"EDX_radio\" value=\"Organic acidemia|1\" onclick=\"MELD_fx();\" /> Organic acidemia (1)</span></td></tr>\n<tr><td align=\"left\"><br /></td><td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"EDX_radio\" value=\"Hepatoblastoma|1\" onclick=\"MELD_fx();\" /> Hepatoblastoma (1)</span></td></tr>\n\n</table>\n</center>\n</td><td align=\"left\" bgcolor=\"#eeeeee\">\n<center><span class=\"medCalcFontIO\">Results:</span>\n\n<br />&nbsp;<br />\n<table bgcolor=\"#eeeeee\" summary=\"MedCalc 3000 Table\" cellspacing=\"4\">\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">MELD score</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"MELD_score_param\" size=\"6\" onfocus=\"blur();\" /></td>\n</tr>\n\n\n<tr><td colspan=\"3\">&nbsp;<br /></td></tr>\n\n</table>\n</center><br />&nbsp;<br />\n<div id=\"calc_buttons\">\n<center>\n<span class=\"medCalcFontOne\">\n\n\n\n\n\n<input type=\"reset\" name=\"reset\" value=\"Reset form\" />\n\n</span>\n</center>\n</div>\n</td></tr></table>\n</center>\n\n\n\n</div><div id=\"pretextrefs\">\n&nbsp;\n</div>\n\n<div id=\"calc_notes\">\n<span class=\"medCalcFontOneBold\">Notes</span>\n<ul class=\"medCalcFontOne\">\n<li>The model of end-stage liver disease (<b>MELD</b>) score is used to estimate relative disease severity and likely survival of patients awaiting liver transplantation.</li>\n<li>Children under the age of 12 should be assessed by the pediatric end-stage liver disease (<b>PELD</b>) score.</li>\n<li>If a patient has had two or more hemodialysis treatments or &ge;24 hours of CVVHD in the week prior to the time of the scoring, <b>Creatinine</b> will be set to 4 mg/dL, which is the maximum creatinine level allowed in the model.</li>\n<li>The default setting for the choice \"Hemodialysis twice or &ge;24 hours of CVVHD in the past week\" is \"No.\"</li>\n<li>If the patient is between 12 and 17 years old and has either a urea cycle disorder, organic acidemia, or hepatoblastoma, the <b>MELD</b> score is set at 30.</li>\n<li>For patients with hepatocellular carcinoma, the <b>PELD/MELD</b> score is increased according to an algorithm established by the United Network for Organ Sharing (UNOS).</li>\n<li>When used for liver transplantation listing, UNOS/Organ Procurement and Transplantation Network (OPTN) sets the upper limit for the MELD score at 40.</li>\n<li>Additional information about the <b>MELD</b> and <b>PELD</b> scores is at the UNOS website, https://optn.transplant.hrsa.gov/resources/by-organ/liver-intestine/.</li>\n<li><b>INR</b>: international normalized ratio.</li>\n<li><b>CVVHD</b>: continuous venovenous hemodialysis.</li>\n<li>Please see appropriate UpToDate topic reviews for further information.</li>\n\n</ul>\n</div>\n\n\n<div id=\"calc_tables\">\n\n</div>\n\n<br />&nbsp;<br />\n<span class=\"medCalcFontOne\">\nEquation parameters, such as <b>Exception diagnoses age 12 to 17 years</b>, have two or more discrete values that may be used in the calculation. The numbers in the parentheses, eg,  (0), represent the values that will be used.\n</span>\n<br />&nbsp;<br />\n\n</form>\n\n\n\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 15636 Version 10.0</div></div>","outline":null,"javascript":"\n/* <![CDATA[ */\n\nvar lastChar = '';\n\nfunction log(i){\nreturn Math.log(i) * Math.LOG10E;   \n}\n\nfunction ln(i){\nreturn Math.log(i);\n}\n\nfunction sq(i){\nreturn i * i;\n}\n\nfunction sqr(i){\nreturn Math.sqrt(i);\n}\n\n\nfunction power(x,y){\nreturn Math.pow(x,y);\n}\n\nfunction eTo(x){\nreturn Math.exp(x);\n}\n\n\nfunction fixDP(r, dps) {\nif (isNaN(r)) return \"NaN\";\nvar msign = '';\nif (r < 0) msign = '-';\nx = Math.abs(r);\nif (x > Math.pow(10, 21)) return msign + x.toString();\nvar m = Math.round(x * Math.pow(10, dps)).toString();\nif (dps == 0) return msign + m;\nwhile (m.length <= dps) m = \"0\" + m;\nreturn msign + m.substring(0, m.length - dps) + \".\" + m.substring(m.length - dps);\n}\n\nfunction alertNaN(){\nalert('This field is improperly formatted. You may only input the digits 0-9 and a decimal point.');  \ndoCalc = false; \nclrResults();\n}\n\nfunction validNumberField(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\nvar val = field.value;\nvar charCode = event.charCode;\nvar key = String.fromCharCode(charCode);\n\nif(charCode == 0 || charCode == 13) {\n  return true;\n}\n\nif(key == ' ') {\nalert('Numeric field cannot contain spaces.');\n  return false;\n}\t\n\t\t\nif(key == '.') { return validDecimalPoint(val, key); }\nif(key == '-') { return validMinus(val, key); }\n\nif(isNaN(parseInt(key))) {\nalertNaN();\nreturn false;\n}\n\t\nreturn validFloat(val, key);\n}\nreturn true;\n}\n\nfunction validDecimalPoint(val, key) {\nif(val.length == 0 && lastChar != '.') {\n  lastChar = '.';\n  return true;\n}\nif(val.indexOf('.') >= 0 || lastChar == '.') {\n alertNaN();\n return false;\n}\nif(validFloat(val, key)) {\n lastChar = key;\n return true;\n}\nlastChar = '';\nreturn false;\n}\n\nfunction validMinus(val, key) {\nif(val.length == 0) {\n  return true;\n}\nif(val.length > 1) {\n alertNaN();\n return false;\n}\nreturn validFloat(val, key);\n}\n\n\nfunction validFloat(val, key) {\nvar currentVal = parseFloat(val + key);\nif(isNaN(val + key) || isNaN(currentVal)) {\nalertNaN();\nreturn false;\n}\nreturn true;\n}\n\nfunction formKeyDown(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\n  var val = field.value;\n  var keyCode = event.keyCode;\n  if(keyCode == 8 || keyCode == 127) {\n    // backspace or delete\n    if(lastChar == '.') {\n      lastChar = '';\n    }\n    if(field.value.length == 3 && field.value[0] == '0' && field.value[1] == '.') {\n      // this handles a backspace on an input like \".5\", which is saved internally as \"0.5\"\n      //   otherwise, if you leave the field after the backspace, it retains \"0.5\" as the value, most likely an iOS bug\n      field.value = ''; \n    }\n  }\n}\nclrResults();\n}\n\nfunction clrValue(field) {\n field.value = '';\n lastChar = '';\n}\n\nvar currenttimeout;\n\n\nvar calctxt = ''; \nvar xmltxt = ''; \nvar xmlresult = '';\nvar htmtxt = ''; \nvar postNow = false;\n\nfunction MELD_fx() {\ncurrenttimeout = self.setTimeout('minMaxCheck();', 4500);\n\nwith(document.MELD_form){\n\n\ndoCalc = true;\nparam_value = parseFloat(Age_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Age_unit.options[Age_unit.selectedIndex].value.split('|');\nAge = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(Creatinine_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Creatinine_unit.options[Creatinine_unit.selectedIndex].value.split('|');\nCreatinine = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(Bilirubin_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Bilirubin_unit.options[Bilirubin_unit.selectedIndex].value.split('|');\nBilirubin = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(INR_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nINR = param_value;\nrbchk = false;\nif (EDX_radio[0].checked){ rbchk = true; EDX = 0;  }\nif (EDX_radio[1].checked){ rbchk = true; EDX = 1;  }\nif (EDX_radio[2].checked){ rbchk = true; EDX = 1;  }\nif (EDX_radio[3].checked){ rbchk = true; EDX = 1;  }\nif (!rbchk) doCalc = false;\ndp = 0;\nif (HD_radio[0].checked){\nCreatinine_param.value = '4'; Creatinine = 4;\nfor(i = 0; i < Creatinine_unit.options.length; i++){\nif (Creatinine_unit.options[i].value == '1|0|mg/dL') Creatinine_unit.selectedIndex = i;\n}}\nMELD_score =  Math.round((9.57 * ln(Creatinine)) + (3.78 * ln(Bilirubin)) + (11.2 * ln(INR)) + 6.43);\n\nif (doCalc) MELD_score_param.value = fixDP(MELD_score, dp);\n\n\n\nif (EDX && (Age >= 12) && (Age <= 17)){\nalert('Beacuse of this specific disease, the MELD score is set at 30');\nMELD_score_param.value = '30';\n}\n\n\n}\n\n}\n\nfunction minMaxCheck(){\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.MELD_form){\n\nif (Age_param.value && isNaN(Age_param.value)){ clrValue(Age_param); alertNaN('Age'); }\nif (Age_param.value && Age < 12) {\nAge = 0;\nclrValue(Age_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for Age is 12 yr.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Creatinine_param.value && isNaN(Creatinine_param.value)){ clrValue(Creatinine_param); alertNaN('Creatinine'); }\nif (Creatinine_param.value && Creatinine < 1) {\nCreatinine = 0;\nclrValue(Creatinine_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for Creatinine is 1 mg/dL.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Creatinine_param.value && Creatinine > 4) {\nclrValue(Creatinine_param);\nclrResults();\nCreatinine = 0;\ndoCalc = false;\n alert(\"The maximum value for Creatinine is 4 mg/dL.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Bilirubin_param.value && isNaN(Bilirubin_param.value)){ clrValue(Bilirubin_param); alertNaN('Bilirubin'); }\nif (Bilirubin_param.value && Bilirubin < 1) {\nBilirubin = 0;\nclrValue(Bilirubin_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for Bilirubin is 1 mg/dL.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Bilirubin_param.value && Bilirubin > 200) {\nclrValue(Bilirubin_param);\nclrResults();\nBilirubin = 0;\ndoCalc = false;\n alert(\"The maximum value for Bilirubin is 200 mg/dL.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (INR_param.value && isNaN(INR_param.value)){ clrValue(INR_param); alertNaN('INR'); }\nif (INR_param.value && INR < 1) {\nINR = 0;\nclrValue(INR_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for INR is 1 .\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (INR_param.value && INR > 100) {\nclrValue(INR_param);\nclrResults();\nINR = 0;\ndoCalc = false;\n alert(\"The maximum value for INR is 100 .\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\n\n\n}\n\n}\n\nfunction clrResults(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.MELD_form){\n\nMELD_score_param.value = '';\n\n\n}\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* ]]> */\n\n/* <![CDATA[ */\n\nwith(document.MELD_form){\n\nvar EDX = 0;\n\n}\n/* ]]> */\n"}