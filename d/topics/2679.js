var data={"title":"Calculator: Predicted postoperative FEV1 following lung resection surgery (perfusion method)","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n<form name=\"PostOpFEV1PerfMeth_form\" id=\"PostOpFEV1PerfMeth_form\" action=\"\" onsubmit=\"return false;\" onkeydown=\"formKeyDown(event);\" onkeypress=\"return validNumberField(event);\" onkeyup=\"PostOpFEV1PerfMeth_fx();\">\n\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\n \nCalculator: Predicted postoperative FEV<sub>1</sub> following lung resection surgery (perfusion method)\n</span></td></tr></table><br />&nbsp;<br />\n\n<center>\n<div id=\"calc_equation\">\n<table cellspacing=\"0\" cellpadding=\"10\" summary=\"MedCalc 3000 Table\"><tr><td align=\"left\" bgcolor=\"#6c9a9c\"><span class=\"medCalcFontFormuli\">PPO FEV<sub>1</sub> = Preop FEV<sub>1</sub> * (1 - Fraction of total perfusion in the resected lung)</span></td></tr></table><br />&nbsp;<br />\n</div>\n</center>\n\n<div id=\"calc_main\">\n<center><table cellpadding=\"6\" cellspacing=\"0\" width=\"95%\" summary=\"MedCalc 3000 Table\"><tr><td align=\"right\" width=\"50%\">\n<center>\n<span class=\"medCalcFontIO\">\nInput:\n</span>\n<br />&nbsp;<br />\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Preop FEV<sub>1</sub></span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Preop_FEV1_param\" size=\"6\" value=\"\" onblur=\"PostOpFEV1PerfMeth_fx(); minMaxCheck();\" onchange=\"PostOpFEV1PerfMeth_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"Preop_FEV1_unit\" onchange=\"PostOpFEV1PerfMeth_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|L\" selected=\"selected\">L</option>\n<option value=\"1e-15|0|fL\">fL</option>\n<option value=\"0.001|0|mL\">mL</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Fraction of total perfusion in the resected lung</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"FractTotPerf_param\" size=\"6\" value=\"\" onblur=\"PostOpFEV1PerfMeth_fx(); minMaxCheck();\" onchange=\"PostOpFEV1PerfMeth_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"FractTotPerf_unit\" onchange=\"PostOpFEV1PerfMeth_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"0.01|0|%\">%</option>\n<option value=\"1|0|fraction\" selected=\"selected\">fraction</option>\n<option value=\"1|0|ratio\">ratio</option>\n</select> </td></tr>\n\n\n</table>\n</center>\n</td><td align=\"left\" bgcolor=\"#eeeeee\">\n<center><span class=\"medCalcFontIO\">Result:</span>\n\n<br />&nbsp;<br />\n<table bgcolor=\"#eeeeee\" summary=\"MedCalc 3000 Table\" cellspacing=\"4\">\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">PPO FEV<sub>1</sub></span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"PPO_FEV1_param\" size=\"6\" onfocus=\"blur();\" /></td>\n<td valign=\"top\"><span class=\"medCalcFontOne\">\n<select name=\"PPO_FEV1_unit\" onchange=\"PostOpFEV1PerfMeth_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|L\" selected=\"selected\">L</option>\n<option value=\"1e-15|0|fL\">fL</option>\n<option value=\"0.001|0|mL\">mL</option>\n</select>\n</span></td>\n</tr>\n\n\n<tr><td colspan=\"3\">&nbsp;<br /></td></tr>\n<tr><td colspan=\"3\" align=\"center\"><span class=\"medCalcFontOneBold\">Decimal Precision:</span>\n<select name=\"decpts\" onchange=\"PostOpFEV1PerfMeth_fx();\" class=\"medCalcFontSelect\">\n<option>0</option>\n<option>1</option>\n<option selected=\"selected\">2</option>\n<option>3</option>\n\n</select></td></tr>\n\n</table>\n</center><br />&nbsp;<br />\n<center>\n<span class=\"medCalcFontOne\">\n\n\n\n\n\n<input type=\"reset\" name=\"reset\" value=\"Reset form\" />\n</span>\n</center>\n</td></tr></table>\n</center>\n\n\n\n</div>\n<div id=\"calc_notes\">\n<span class=\"medCalcFontOneBold\">Notes</span>\n<ul class=\"medCalcFontOne\">\n<li><b>PPO FEV<sub>1</sub></b> is the predicted postoperative forced expiratory volume at one second.</li>\n<li>The <b>Fraction of total perfusion in the resected lung</b> is measured with a quantitative radionuclide perfusion scan.</li>\n\n</ul>\n</div>\n\n<br />&nbsp;<br />\n\n<div id=\"calc_refs\">\n<span class=\"medCalcFontRef\"><b>References</b></span>\n<ol>\n<li><span class=\"medCalcFontRef\">Brunelli A, Kim AW, Berger KI, Addrizzo-Harris DJ. Physiologic evaluation of  the patient with lung cancer being considered for resectional surgery: Diagnosis  and management of lung cancer, 3rd ed: American College of Chest Physicians  evidence-based clinical practice guidelines. <i>Chest</i>. 2013 May;143(5 Suppl):e166S-90S. doi: 10.1378/chest.12-2395.</span></li>\n\n</ol>\n</div>\n\n</form>\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 93498 Version 1.0</div></div>","outline":null,"javascript":"\n/* <![CDATA[ */\n\nvar lastChar = '';\n\nfunction log(i){\nreturn Math.log(i) * Math.LOG10E;   \n}\n\nfunction ln(i){\nreturn Math.log(i);\n}\n\nfunction sq(i){\nreturn i * i;\n}\n\nfunction sqr(i){\nreturn Math.sqrt(i);\n}\n\n\nfunction power(x,y){\nreturn Math.pow(x,y);\n}\n\nfunction eTo(x){\nreturn Math.exp(x);\n}\n\n\nfunction fixDP(r, dps) {\nif (isNaN(r)) return \"NaN\";\nvar msign = '';\nif (r < 0) msign = '-';\nx = Math.abs(r);\nif (x > Math.pow(10, 21)) return msign + x.toString();\nvar m = Math.round(x * Math.pow(10, dps)).toString();\nif (dps == 0) return msign + m;\nwhile (m.length <= dps) m = \"0\" + m;\nreturn msign + m.substring(0, m.length - dps) + \".\" + m.substring(m.length - dps);\n}\n\nfunction alertNaN(){\nalert('This field is improperly formatted. You may only input the digits 0-9 and a decimal point.');  \ndoCalc = false; \nclrResults();\n}\n\nfunction validNumberField(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\nvar val = field.value;\nvar charCode = event.charCode;\nvar key = String.fromCharCode(charCode);\n\nif(charCode == 0 || charCode == 13) {\n  return true;\n}\n\nif(key == ' ') {\nalert('Numeric field cannot contain spaces.');\n  return false;\n}\t\n\t\t\nif(key == '.') { return validDecimalPoint(val, key); }\nif(key == '-') { return validMinus(val, key); }\n\nif(isNaN(parseInt(key))) {\nalertNaN();\nreturn false;\n}\n\t\nreturn validFloat(val, key);\n}\nreturn true;\n}\n\nfunction validDecimalPoint(val, key) {\nif(val.length == 0 && lastChar != '.') {\n  lastChar = '.';\n  return true;\n}\nif(val.indexOf('.') >= 0 || lastChar == '.') {\n alertNaN();\n return false;\n}\nif(validFloat(val, key)) {\n lastChar = key;\n return true;\n}\nlastChar = '';\nreturn false;\n}\n\nfunction validMinus(val, key) {\nif(val.length == 0) {\n  return true;\n}\nif(val.length > 1) {\n alertNaN();\n return false;\n}\nreturn validFloat(val, key);\n}\n\n\nfunction validFloat(val, key) {\nvar currentVal = parseFloat(val + key);\nif(isNaN(val + key) || isNaN(currentVal)) {\nalertNaN();\nreturn false;\n}\nreturn true;\n}\n\nfunction formKeyDown(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\n  var val = field.value;\n  var keyCode = event.keyCode;\n  if(keyCode == 8 || keyCode == 127) {\n    // backspace or delete\n    if(lastChar == '.') {\n      lastChar = '';\n    }\n    if(field.value.length == 3 && field.value[0] == '0' && field.value[1] == '.') {\n      // this handles a backspace on an input like \".5\", which is saved internally as \"0.5\"\n      //   otherwise, if you leave the field after the backspace, it retains \"0.5\" as the value, most likely an iOS bug\n      field.value = ''; \n    }\n  }\n}\nclrResults();\n}\n\nfunction clrValue(field) {\n field.value = '';\n lastChar = '';\n}\n\nvar currenttimeout;\n\n\nvar calctxt = ''; \nvar xmltxt = ''; \nvar htmtxt = ''; \n\n\n\nfunction PostOpFEV1PerfMeth_fx() {\n\ncurrenttimeout = self.setTimeout('minMaxCheck();', 2000);\n\nwith(document.PostOpFEV1PerfMeth_form){\n\n\ndoCalc = true;\nparam_value = parseFloat(Preop_FEV1_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Preop_FEV1_unit.options[Preop_FEV1_unit.selectedIndex].value.split('|');\nPreop_FEV1 = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(FractTotPerf_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = FractTotPerf_unit.options[FractTotPerf_unit.selectedIndex].value.split('|');\nFractTotPerf = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\ndp = decpts.options[decpts.selectedIndex].text;\nPPO_FEV1 =  Preop_FEV1 * (1 - FractTotPerf);\n\nunit_parts = PPO_FEV1_unit.options[PPO_FEV1_unit.selectedIndex].value.split('|');\nif (doCalc) PPO_FEV1_param.value = fixDP((PPO_FEV1 - parseFloat(unit_parts[1])) / parseFloat(unit_parts[0]), dp);\n\n\n\n\n\n}\n\n}\n\nfunction minMaxCheck(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.PostOpFEV1PerfMeth_form){\n\nif (Preop_FEV1_param.value && isNaN(Preop_FEV1_param.value)){ clrValue(Preop_FEV1_param); alertNaN('Preop FEV<sub>1</sub>'); }\nif (FractTotPerf_param.value && isNaN(FractTotPerf_param.value)){ clrValue(FractTotPerf_param); alertNaN('Fraction of total perfusion in the resected lung'); }\nif (FractTotPerf_param.value && FractTotPerf < 0) {\nFractTotPerf = 0;\nclrValue(FractTotPerf_param);\nclrResults();\ndoCalc = false;\nalert(\"The minimum value for FractTotPerf is 0 fraction.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (FractTotPerf_param.value && FractTotPerf > 1) {\nclrValue(FractTotPerf_param);\nclrResults();\nFractTotPerf = 0;\ndoCalc = false;\nalert(\"The maximum value for FractTotPerf is 1 fraction.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\n\n\n}\n\n}\n\n\nfunction clrResults(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.PostOpFEV1PerfMeth_form){\n\nPPO_FEV1_param.value = '';\n\n\n}\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* ]]> */\n"}