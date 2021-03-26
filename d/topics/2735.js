var data={"title":"Calculator: Urine anion gap","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n\n<form name=\"UrineAnionGap_form\" id=\"UrineAnionGap_form\" action=\"\" onsubmit=\"return false;\" onkeydown=\"clrResults();\" onkeyup=\"UrineAnionGap_fx();\">\n\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\nCalculator: Urine anion gap</span></td></tr></table>\n<br />&nbsp;<br />\n<center><table cellspacing=\"0\" cellpadding=\"10\" summary=\"MedCalc 3000 Table\"><tr><td align=\"left\" bgcolor=\"#6c9a9c\"><span class=\"medCalcFontFormuli\">UrineAG = (Na + K) - Cl</span></td></tr></table><br />&nbsp;<br />\n<table cellpadding=\"6\" cellspacing=\"0\" width=\"95%\" summary=\"MedCalc 3000 Table\"><tr><td align=\"right\" width=\"50%\"><center>\n<span class=\"medCalcFontIO\">\nInput:\n</span>\n<br />&nbsp;<br />\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Na</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Na_param\" size=\"6\" value=\"\" onblur=\"UrineAnionGap_fx(); minMaxCheck();\" onchange=\"UrineAnionGap_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <span style=\"white-space: nowrap;\"><span class=\"medCalcFontOneBold\">meq/L</span>\n</span> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">K</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"K_param\" size=\"6\" value=\"\" onblur=\"UrineAnionGap_fx(); minMaxCheck();\" onchange=\"UrineAnionGap_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <span style=\"white-space: nowrap;\"><span class=\"medCalcFontOneBold\">meq/L</span>\n</span> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Cl</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Cl_param\" size=\"6\" value=\"\" onblur=\"UrineAnionGap_fx(); minMaxCheck();\" onchange=\"UrineAnionGap_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <span style=\"white-space: nowrap;\"><span class=\"medCalcFontOneBold\">meq/L</span>\n</span> </td></tr>\n\n\n</table>\n</center>\n\n</td><td align=\"left\" bgcolor=\"#eeeeee\">\n<center><span class=\"medCalcFontIO\">Result:</span>\n\n<br />&nbsp;<br />\n<table bgcolor=\"#eeeeee\" summary=\"MedCalc 3000 Table\" cellspacing=\"4\">\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">Urine AG</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"Urine_AG_param\" size=\"6\" onfocus=\"blur();\" /></td>\n<td valign=\"top\"><span class=\"medCalcFontOne\">\n<span style=\"white-space: nowrap;\"><span class=\"medCalcFontOneBold\">meq/L</span>\n</span>\n</span></td>\n</tr>\n\n\n<tr><td colspan=\"3\">&nbsp;<br /></td></tr>\n<tr><td colspan=\"3\" align=\"center\"><span class=\"medCalcFontOneBold\">Decimal Precision:</span>\n<select name=\"decpts\" onchange=\"UrineAnionGap_fx();\" class=\"medCalcFontSelect\">\n<option>0</option>\n<option selected=\"selected\">1</option>\n<option>2</option>\n<option>3</option>\n\n</select></td></tr>\n\n</table>\n</center></td></tr></table>\n</center>\n\n\n\n\n<div class=\"notes\">\n<span class=\"medCalcFontOneBold\">Notes</span>\n<ul class=\"medCalcFontOne\">\n<li>The urine anion gap is calculated from the difference between the major measured urinary cations (Na and K) and urinary anions (Cl).</li>\n<li>Clinical use of the anion gap calculation is discussed in appropriate UpToDate topics.</li>\n\n</ul>\n</div>\n\n\n</form>\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 15661 Version 4.0</div></div>","outline":null,"javascript":"\n/* <![CDATA[ */\n\n\nfunction log(i){\nreturn Math.log(i) * Math.LOG10E;   \n}\n\nfunction ln(i){\nreturn Math.log(i);\n}\n\nfunction sq(i){\nreturn i * i;\n}\n\nfunction sqr(i){\nreturn Math.sqrt(i);\n}\n\n\nfunction power(x,y){\nreturn Math.pow(x,y);\n}\n\nfunction eTo(x){\nreturn Math.exp(x);\n}\n\n\nfunction fixDP(r, dps) {\nif (isNaN(r)) return \"NaN\";\nvar msign = '';\nif (r < 0) msign = '-';\nx = Math.abs(r);\nif (x > Math.pow(10, 21)) return msign + x.toString();\nvar m = Math.round(x * Math.pow(10, dps)).toString();\nif (dps == 0) return msign + m;\nwhile (m.length <= dps) m = \"0\" + m;\nreturn msign + m.substring(0, m.length - dps) + \".\" + m.substring(m.length - dps);\n}\n\nvar currenttimeout;\n\n\nvar calctxt = ''; \nvar xmltxt = ''; \nvar htmtxt = ''; \n\n\n\nfunction UrineAnionGap_fx() {\n\ncurrenttimeout = self.setTimeout('minMaxCheck();', 3000);\n\nwith(document.UrineAnionGap_form){\n\n\ndoCalc = true;\nif (Na_param.value.indexOf(',') >= 0){ Na_param.value = ''; doCalc = false; alert('Comma character not allowed'); }\nparam_value = parseFloat(Na_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nNa = param_value;\nif (K_param.value.indexOf(',') >= 0){ K_param.value = ''; doCalc = false; alert('Comma character not allowed'); }\nparam_value = parseFloat(K_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nK = param_value;\nif (Cl_param.value.indexOf(',') >= 0){ Cl_param.value = ''; doCalc = false; alert('Comma character not allowed'); }\nparam_value = parseFloat(Cl_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nCl = param_value;\ndp = decpts.options[decpts.selectedIndex].text;\nUrine_AG =  (Na + K) - Cl;\n\nif (doCalc) Urine_AG_param.value = fixDP(Urine_AG, dp);\n\n\n\n\n\n}\n\n}\n\nfunction minMaxCheck(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.UrineAnionGap_form){\n\nif (Na_param.value && Na < 0) {\nNa = 0;\nNa_param.value = \"\";\nclrResults();\ndoCalc = false;\nalert(\"The minimum value for Na is 0 meq/L.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Na_param.value && Na > 200) {\nNa_param.value = \"\";\nclrResults();\nNa = 0;\ndoCalc = false;\nalert(\"The maximum value for Na is 200 meq/L.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Cl_param.value && Cl < 0) {\nCl = 0;\nCl_param.value = \"\";\nclrResults();\ndoCalc = false;\nalert(\"The minimum value for Cl is 0 meq/L.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Cl_param.value && Cl > 200) {\nCl_param.value = \"\";\nclrResults();\nCl = 0;\ndoCalc = false;\nalert(\"The maximum value for Cl is 200 meq/L.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\n\n\n}\n\n}\n\n\nfunction clrResults(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.UrineAnionGap_form){\n\nUrine_AG_param.value = '';\n\n\n}\n\n}\n\n\n\n\n\n\n\n\n\n\n\n/* ]]> */\n"}