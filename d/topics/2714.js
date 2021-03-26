var data={"title":"Calculator: Sleep problems questionnaire in adults","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n<form name=\"SleepProblems_form\" id=\"SleepProblems_form\" action=\"\" onsubmit=\"return false;\" onkeydown=\"formKeyDown(event);\" onkeypress=\"return validNumberField(event);\" onkeyup=\"SleepProblems_fx();\" onreset=\"rrclr();\">\n\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\n \nCalculator: Sleep problems questionnaire in adults\n</span></td></tr></table><br />&nbsp;<br />\n\n<div id=\"calc_main\">\n<center><table cellpadding=\"6\" cellspacing=\"0\" width=\"95%\" summary=\"EBMcalc Table\"><tr><td align=\"right\" width=\"50%\">\n<center>\n<span class=\"medCalcFontIO\">\nInput:\n</span>\n<br />&nbsp;<br />\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"EBMcalc Table\">\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontCCTabBold\">How often in the past month did you:</span></td></tr>\n\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontOneBold\">Have trouble falling asleep?</span><br />\n<select name=\"FallingAsleep_pulldown\" onchange=\"SleepProblems_fx();\" class=\"medCalcFontSelect\">\n<option value=\"0\"> Not at all (0 points)</option>\n<option value=\"1\">1 to 3 days (1 point)</option>\n<option value=\"2\">4 to 7 days (2 points)</option>\n<option value=\"3\">8 to 14 days (3 points)</option>\n<option value=\"4\">15 to 21 days (4 points)</option>\n<option value=\"5\">22 to 31 days (5 points)</option>\n</select></td></tr>\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontOneBold\">Wake up several times per night?</span><br />\n<select name=\"WakeUp_pulldown\" onchange=\"SleepProblems_fx();\" class=\"medCalcFontSelect\">\n<option value=\"0\"> Not at all (0 points)</option>\n<option value=\"1\">1 to 3 days (1 point)</option>\n<option value=\"2\">4 to 7 days (2 points)</option>\n<option value=\"3\">8 to 14 days (3 points)</option>\n<option value=\"4\">15 to 21 days (4 points)</option>\n<option value=\"5\">22 to 31 days (5 points)</option>\n</select></td></tr>\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontOneBold\">Have trouble staying asleep (including waking far too early)?</span><br />\n<select name=\"StayingAsleep_pulldown\" onchange=\"SleepProblems_fx();\" class=\"medCalcFontSelect\">\n<option value=\"0\"> Not at all (0 points)</option>\n<option value=\"1\">1 to 3 days (1 point)</option>\n<option value=\"2\">4 to 7 days (2 points)</option>\n<option value=\"3\">8 to 14 days (3 points)</option>\n<option value=\"4\">15 to 21 days (4 points)</option>\n<option value=\"5\">22 to 31 days (5 points)</option>\n</select></td></tr>\n<tr><td colspan=\"3\" align=\"left\"><span class=\"medCalcFontOneBold\">Wake up after your usual amount of sleep feeling tired and worn out?</span><br />\n<select name=\"FeelingTired_pulldown\" onchange=\"SleepProblems_fx();\" class=\"medCalcFontSelect\">\n<option value=\"0\"> Not at all (0 points)</option>\n<option value=\"1\">1 to 3 days (1 point)</option>\n<option value=\"2\">4 to 7 days (2 points)</option>\n<option value=\"3\">8 to 14 days (3 points)</option>\n<option value=\"4\">15 to 21 days (4 points)</option>\n<option value=\"5\">22 to 31 days (5 points)</option>\n</select></td></tr>\n\n</table>\n</center>\n</td><td align=\"left\" bgcolor=\"#eeeeee\">\n<center><span class=\"medCalcFontIO\">Results:</span>\n\n<br />&nbsp;<br />\n<table bgcolor=\"#eeeeee\" summary=\"EBMcalc Table\" cellspacing=\"4\">\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">Total score</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"Total_score_param\" size=\"6\" onfocus=\"blur();\" /></td>\n<td valign=\"top\" align=\"left\"><span class=\"medCalcFontOne\">\n<select name=\"Total_score_unit\" onchange=\"SleepProblems_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|#\">#</option>\n<option value=\"1|0|index\">index</option>\n<option value=\"1|0|none\">none</option>\n<option value=\"1|0|number\">number</option>\n<option value=\"1|0|points\" selected=\"selected\">points</option>\n<option value=\"1|0|score\">score</option>\n</select>\n</span></td>\n</tr>\n\n\n<tr><td colspan=\"3\">&nbsp;<br /></td></tr>\n\n</table>\n</center><br />&nbsp;<br />\n<div id=\"calc_buttons\">\n<center>\n<span class=\"medCalcFontOne\">\n\n\n\n\n\n<input type=\"reset\" name=\"reset\" value=\"Reset form\" />\n\n</span>\n</center>\n</div>\n</td></tr></table>\n</center>\n\n\n\n</div><div id=\"pretextrefs\">\n&nbsp;\n</div>\n<br />&nbsp;<br />\n<div id=\"calc_hints\">\n<span class=\"medCalcFontOne\">\n\n\n\n\n\n\nHigher total scores indicate greater sleep disturbance. A four or five on any one item suggests clinically significant insomnia.\n\n</span>\n \n</div>\n\n\n<div id=\"calc_tables\">\n<br />&nbsp;<br />\n<span class=\"medCalcFontOneBold\">Interpretation</span>\n<br />&nbsp;<br />\n<center>\n<table border=\"1\" cellpadding=\"5\" cellspacing=\"0\" width=\"70%\" class=\"medCalcFontOne\" summary=\"EBMcalc Table\">\n<tr bgcolor=\"#cccccc\" id=\"T1HR\">\n<td align=\"center\" id=\"T1HR_C1\"><b>Criterion</b></td><td align=\"center\" id=\"T1HR_C2\"><b>Score</b></td></tr>\n<tr><td align=\"left\" id=\"T1CellR1C1\"><div id=\"T1R1C1\">Have trouble falling asleep?</div></td><td align=\"center\" id=\"T1CellR1C2\"><div id=\"T1R1C2\">&nbsp;</div></td></tr>\n<tr><td align=\"left\" id=\"T1CellR2C1\"><div id=\"T1R2C1\"> Wake up several times per night?</div></td><td align=\"center\" id=\"T1CellR2C2\"><div id=\"T1R2C2\">&nbsp;</div></td></tr>\n<tr><td align=\"left\" id=\"T1CellR3C1\"><div id=\"T1R3C1\">Have trouble staying asleep (including waking far too early)?</div></td><td align=\"center\" id=\"T1CellR3C2\"><div id=\"T1R3C2\">&nbsp;</div></td></tr>\n<tr><td align=\"left\" id=\"T1CellR4C1\"><div id=\"T1R4C1\"> Wake up after your usual amount of sleep feeling tired and worn out?</div></td><td align=\"center\" id=\"T1CellR4C2\"><div id=\"T1R4C2\">&nbsp;</div></td></tr>\n</table></center>\n\n</div>\n\n<br />&nbsp;<br />\n\n<div id=\"calc_refs\">\n<span class=\"medCalcFontRef\"><b>References</b></span>\n<ol>\n<li><span class=\"medCalcFontRef\">Jenkins CD, Stanton BA, Niemcryk SJ, Rose RM. A scale for the estimation of  sleep problems in clinical research. <i>J Clin Epidemiol</i>. 1988;41(4):313-21.</span></li>\n\n</ol>\n</div>\n\n</form>\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 106379 Version 2.0</div></div>","outline":null,"javascript":"\n/* <![CDATA[ */\n\nvar lastChar = '';\n\nfunction log(i){\nreturn Math.log(i) * Math.LOG10E;   \n}\n\nfunction ln(i){\nreturn Math.log(i);\n}\n\nfunction sq(i){\nreturn i * i;\n}\n\nfunction sqr(i){\nreturn Math.sqrt(i);\n}\n\n\nfunction power(x,y){\nreturn Math.pow(x,y);\n}\n\nfunction eTo(x){\nreturn Math.exp(x);\n}\n\n\nfunction fixDP(r, dps) {\nif (isNaN(r)) return \"NaN\";\nvar msign = '';\nif (r < 0) msign = '-';\nx = Math.abs(r);\nif (x > Math.pow(10, 21)) return msign + x.toString();\nvar m = Math.round(x * Math.pow(10, dps)).toString();\nif (dps == 0) return msign + m;\nwhile (m.length <= dps) m = \"0\" + m;\nreturn msign + m.substring(0, m.length - dps) + \".\" + m.substring(m.length - dps);\n}\n\nfunction alertNaN(){\nalert('This field is improperly formatted. You may only input the digits 0-9 and a decimal point.');  \ndoCalc = false; \nclrResults();\n}\n\nfunction validNumberField(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\nvar val = field.value;\nvar charCode = event.charCode;\nvar key = String.fromCharCode(charCode);\n\nif(charCode == 0 || charCode == 13) {\n  return true;\n}\n\nif(key == ' ') {\nalert('Numeric field cannot contain spaces.');\n  return false;\n}\t\n\t\t\nif(key == '.') { return validDecimalPoint(val, key); }\nif(key == '-') { return validMinus(val, key); }\n\nif(isNaN(parseInt(key))) {\nalertNaN();\nreturn false;\n}\n\t\nreturn validFloat(val, key);\n}\nreturn true;\n}\n\nfunction validDecimalPoint(val, key) {\nif(val.length == 0 && lastChar != '.') {\n  lastChar = '.';\n  return true;\n}\nif(val.indexOf('.') >= 0 || lastChar == '.') {\n alertNaN();\n return false;\n}\nif(validFloat(val, key)) {\n lastChar = key;\n return true;\n}\nlastChar = '';\nreturn false;\n}\n\nfunction validMinus(val, key) {\nif(val.length == 0) {\n  return true;\n}\nif(val.length > 1) {\n alertNaN();\n return false;\n}\nreturn validFloat(val, key);\n}\n\n\nfunction validFloat(val, key) {\nvar currentVal = parseFloat(val + key);\nif(isNaN(val + key) || isNaN(currentVal)) {\nalertNaN();\nreturn false;\n}\nreturn true;\n}\n\nfunction formKeyDown(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\n  var val = field.value;\n  var keyCode = event.keyCode;\n  if(keyCode == 8 || keyCode == 127) {\n    // backspace or delete\n    if(lastChar == '.') {\n      lastChar = '';\n    }\n    if(field.value.length == 3 && field.value[0] == '0' && field.value[1] == '.') {\n      // this handles a backspace on an input like \".5\", which is saved internally as \"0.5\"\n      //   otherwise, if you leave the field after the backspace, it retains \"0.5\" as the value, most likely an iOS bug\n      field.value = ''; \n    }\n  }\n}\nclrResults();\n}\n\nfunction clrValue(field) {\n field.value = '';\n lastChar = '';\n}\n\nvar currenttimeout;\n\n\nvar calctxt = ''; \nvar xmltxt = ''; \nvar xmlresult = '';\nvar htmtxt = ''; \nvar postNow = false;\n\nfunction SleepProblems_fx() {\ncurrenttimeout = self.setTimeout('minMaxCheck();', 4500);\n\nwith(document.SleepProblems_form){\n\n\ndoCalc = true;\nFallingAsleep = parseFloat(FallingAsleep_pulldown.options[FallingAsleep_pulldown.selectedIndex].value);\nWakeUp = parseFloat(WakeUp_pulldown.options[WakeUp_pulldown.selectedIndex].value);\nStayingAsleep = parseFloat(StayingAsleep_pulldown.options[StayingAsleep_pulldown.selectedIndex].value);\nFeelingTired = parseFloat(FeelingTired_pulldown.options[FeelingTired_pulldown.selectedIndex].value);\ndp = 0;\nTotal_score =  FallingAsleep + WakeUp + StayingAsleep + FeelingTired;\n\nunit_parts = Total_score_unit.options[Total_score_unit.selectedIndex].value.split('|');\nif (doCalc) Total_score_param.value = fixDP((Total_score - parseFloat(unit_parts[1])) / parseFloat(unit_parts[0]), dp);\n\n\n\ndocument.getElementById('T1R1C2').innerHTML = FallingAsleep;\ndocument.getElementById('T1R2C2').innerHTML = WakeUp;\ndocument.getElementById('T1R3C2').innerHTML = StayingAsleep;\ndocument.getElementById('T1R4C2').innerHTML = FeelingTired;\n\n\n}\n\n}\n\nfunction minMaxCheck(){\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.SleepProblems_form){\n\n\n\n}\n\n}\n\nfunction clrResults(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.SleepProblems_form){\n\nTotal_score_param.value = '';\n\nrrclr();\n\n}\n\n}\n\nvar FallingAsleep = null,\nWakeUp = null,\nStayingAsleep = null,\nFeelingTired = null,\nTotal_score = null,\nparam_value = null;\n\n\n\n\n\n\n\n\n\n\nfunction rrclr(){\ndocument.getElementById('T1R1C2').innerHTML = '&nbsp;'; document.getElementById('T1R2C2').innerHTML = '&nbsp;'; document.getElementById('T1R3C2').innerHTML = '&nbsp;'; document.getElementById('T1R4C2').innerHTML = '&nbsp;';}\n\n\n\n\n/* ]]> */\n"}