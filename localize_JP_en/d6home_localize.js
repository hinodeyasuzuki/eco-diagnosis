﻿/*  2017/12/16  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * scenariofix.js 
 * 
 * fix area function and data between home and office
 * fix scenario.js
 * fix logic definition
 * 
 * License: http://creativecommons.org/licenses/LGPL/2.1/
 * 
 * @author Yasufumi Suzuki, Hinodeya Institute for Ecolife co.ltd.
 * 								2016/04/12 ported to JavaScript
 * 
 * 
 */

// D6.scenario.areafix  fix area set by home/office
// called by diagnosis.js  just after create scenario
D6.scenario.areafix = function() {


	D6.scenario.defSelectValue['sel021'] = [ "please select", " Hokkaidō", " Aomori", " Iwate", " Miyagi", " Akita", " Yamagata", " Fukushima", " Ibaraki", " Tochigi", " Gunma", " Saitama", " Chiba", " Tōkyō", " Kanagawa", " Nīgata", " Toyama", " Ishikawa", " Fukui", " Yamanashi", " Nagano", " Gifu", " Shizuoka", " Aichi", " Mie", " Shiga", " Kyōto", " Ōsaka", " Hyōgo", " Nara", " Wakayama", " Tottori", " Shimane", " Okayama", " Hiroshima", " Yamaguchi", " Tokushima", " Kagawa", " Ehime", " Kōchi", " Fukuoka", " Saga", " Nagasaki", " Kumamoto", " Ōita", " Miyazaki", " Kagoshima", " Okinawa" ];;
	D6.scenario.defSelectData['sel021']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47' ]; 
	D6.scenario.defSelectValue['sel022'] = [ "please select", "north", "south"];
	D6.scenario.defSelectData['sel022'] = [ "-1", "1", "2"];

	//easy input
	D6.scenario.defEasyQues[0].title = "easy input";
	D6.scenario.defEasyQues[1].title = "action check";

	//cons definition
	D6.scenario.defInput["i010"] = {  cons:"consTotal",  title:"Point of view to focus as a countermeasure",  unit:"",  text:"What kind of priority do you want to display?", inputType:"sel010", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel010"]= [ "Please select", "CO2 reduction priority", "utility costs reduction priority", "efforts ease consideration", "efforts ease priority", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel010']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i001"] = {  cons:"consTotal",  title:"Family size",  unit:"person",  text:"Including you, please choose the number of people who live together.", inputType:"sel001", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"2",d12t:"2",d12p:"1",d13t:"1",d13p:"0",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel001"]= [ "Please select", "one", "two", "three", "four", "five", "six", "seven", "eight", "9 more than", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel001']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '', '', '', '', '', '' ];
	D6.scenario.defInput["i002"] = {  cons:"consTotal",  title:"House strucure",  unit:"",  text:"Standalone or collective housing", inputType:"sel002", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"2",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel002"]= [ "Please select", "House", "Apartment", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel002']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i003"] = {  cons:"consTotal",  title:"Breadth of the house",  unit:"m2",  text:"In total floor area of ​​the house, choose the value closest.", inputType:"sel003", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"150",d11p:"0",d12t:"100",d12p:"1",d13t:"0",d13p:"2",d1w:"3",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel003"]= [ "Please select", "15m2", "30m2", "50m2", "70m2", "100m2", "120m2", "150m2", "200m2 or more", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel003']= [ '-1', '15', '30', '50', '70', '100', '120', '150', '220', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i004"] = {  cons:"consTotal",  title:"Ownership of the house",  unit:"",  text:"Is home ownership, or is rental", inputType:"sel004", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel004"]= [ "Please select", "homeownership", "lease", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel004']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i005"] = {  cons:"consTotal",  title:"Stories of the house",  unit:"",  text:"What story do", inputType:"sel005", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel005"]= [ "Please select", "single-story", "2-story", "3 floor and above", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel005']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i006"] = {  cons:"consTotal",  title:"Top floor",  unit:"",  text:"Living in mainly the top floor and up to the ceiling is roof", inputType:"sel006", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel006"]= [ "Please select", "the top floor (above the roof)", "is not the top floor (there is a room above)", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel006']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i007"] = {  cons:"consTotal",  title:"Sunny on the roof",  unit:"",  text:"", inputType:"sel007", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"3",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel007"]= [ "Please select", "not good very good", "", " good sometimes dim", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel007']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i008"] = {  cons:"consTotal",  title:"Number of room",  unit:"room",  text:"Number of room", inputType:"sel008", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"8",d11p:"0",d12t:"5",d12p:"1",d13t:"1",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel008"]= [ "Please select", "1 Room", "2 Room", "3 Room", "4 Room", "5 Room", "6 Room", "7 Room", "8 or more rooms", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel008']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i009"] = {  cons:"consTotal",  title:"Buildiing age",  unit:"Year",  text:"Building age", inputType:"sel009", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel009"]= [ "Please select", "less than 5 years", "5 - less than 10 years", "10 - less than 20 years", "for more than 20 years", "do not know", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel009']= [ '-1', '3', '7', '13', '30', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i021"] = {  cons:"consTotal",  title:"Prefecture",  unit:"",  text:"Please choose your area of ​​the prefecture.", inputType:"sel021", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue[""]= [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['']= [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i022"] = {  cons:"consTotal",  title:"Detail region",  unit:"",  text:"Area when the climate in the prefecture is different", inputType:"sel022", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue[""]= [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['']= [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i023"] = {  cons:"consTotal",  title:"Whether urban or suburb",  unit:"",  text:"Public transportation is userful or not", inputType:"sel023", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel023"]= [ "Please select", "useful", "inconvenience", "inconvenience Speaking convenient", "either if anything", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel023']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i041"] = {  cons:"consTotal",  title:"The window of the thermal insulation performance",  unit:"",  text:"The window of the thermal insulation performance", inputType:"sel041", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"5",d21p:"0",d22t:"4",d22p:"1",d23t:"0",d23p:"2",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel041"]= [ "Please select", "do not know the resin frame triple glass", "resin frame low-E glass", "resin aluminum composite / resin frame double glass", "aluminum frame double glass", "aluminum frame single flat glass", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel041']= [ '-1', '1', '2', '3', '4', '5', '6', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i042"] = {  cons:"consTotal",  title:"The thickness of the insulation material of the wall",  unit:"",  text:"What is the thickness of the insulation material", inputType:"sel042", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"100",d11p:"2",d12t:"50",d12p:"1",d13t:"",d13p:"",d1w:"2",d1d:"1", d21t:"100",d21p:"2",d22t:"50",d22p:"1",d23t:"",d23p:"",d2w:"3",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel042"]= [ "Please select", "glass wool 200mm equivalent", "glass wool 150mm equivalent", "glass wool 100mm equivalent", "glass wool 50mm equivalent", "do not know", "glass wool 30mm equivalent", "does not contain", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel042']= [ '-1', '200', '150', '100', '50', '30', '10', '-1', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i043"] = {  cons:"consTotal",  title:"Insulation renovation of window",  unit:"",  text:"Or who made the insulation renovation of the window", inputType:"sel043", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"1",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel043"]= [ "Please select", "not", "was part", "was in full", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel043']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i044"] = {  cons:"consTotal",  title:"Wall ceiling insulation renovation",  unit:"",  text:"Did you insulation renovation, such as a wall, ceiling, floor", inputType:"sel044", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"1",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel044"]= [ "Please select", "not", "was part", "was in full", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel044']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i051"] = {  cons:"consEnergy",  title:"Installation of solar power generator",  unit:"",  text:"Do we have established a solar power generation equipment", inputType:"sel051", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"1",d11p:"2",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"4",d1d:"0", d21t:"1",d21p:"2",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"4",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel051"]= [ "Please choose are", "not", "installed", "", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel051']= [ '-1', '0', '1', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i052"] = {  cons:"consEnergy",  title:"The size of the solar power generator",  unit:"kW",  text:"Please choose the size of the solar power generation device is installed.", inputType:"sel052", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"5",d11p:"2",d12t:"2",d12p:"1",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"5",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel052"]= [ "Pick and please", "to not", "is (~ 3kW)", "to have (4kW)", "to have (5kW)", "to have (6 ~ 10kW)", "to have (more than 10kW)", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel052']= [ '-1', '0', '3', '4', '5', '8', '11', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i053"] = {  cons:"consEnergy",  title:"Year of installation of solar power generator",  unit:"",  text:"Year When is that installed the solar power generation", inputType:"sel053", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel053"]= [ "Please choose", "2010 previous", "2011 - 2012", "2013", "2014", "does not", "installed since 2015", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel053']= [ '-1', '2010', '2011', '2013', '2014', '2015', '2016', '2017', '9999', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i054"] = {  cons:"consEnergy",  title:"Using a kerosene",  unit:"",  text:"Are you using a kerosene", inputType:"sel054", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel054"]= [ "Please select", "Yes", "No", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel054']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i061"] = {  cons:"consEnergy",  title:"electric bill",  unit:"yen",  text:"Please choose approximate the electric bill for one month.", inputType:"sel061", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"15000",d11p:"0",d12t:"10000",d12p:"1",d13t:"0",d13p:"2",d1w:"3",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel061"]= [ "Please choose", "1000 yen", "2000 yen", "3,000 yen", "5000 yen", "7000 yen", "10,000 yen", "12,000 yen", "15,000 yen", "20,000 yen", "30,000 yen", "more", "", "", "", "" ];			D6.scenario.defSelectData['sel061']= [ '-1', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000', '', '', '', '' ];
	D6.scenario.defInput["i062"] = {  cons:"consEnergy",  title:"Electricity sales by generator",  unit:"yen",  text:"Can you sell the electricity how much per month in the solar power generation.", inputType:"sel062", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel062"]= [ "Please choose", "1000 yen", "2000 yen", "3,000 yen", "5000 yen", "7000 yen", "10,000 yen", "12,000 yen", "15,000 yen", "20,000 yen", "30,000 yen", "more", "", "", "", "" ];			D6.scenario.defSelectData['sel062']= [ '-1', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000', '', '', '', '' ];
	D6.scenario.defInput["i063"] = {  cons:"consEnergy",  title:"Gas Fee",  unit:"yen",  text:"Please choose the approximate gas prices of 1 month.", inputType:"sel063", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel063"]= [ "Please select", "all-electric (not used)", "1000 yen", "2000 yen", "3,000 yen", "5000 yen", "7000 yen", "10,000 yen", "12,000 yen", "15,000 yen", "20,000 yen", "30,000 yen", "more", "", " ", "" ];			D6.scenario.defSelectData['sel063']= [ '-1', '0', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000', '', '', '' ];
	D6.scenario.defInput["i064"] = {  cons:"consEnergy",  title:"Kerosene purchase amount",  unit:"yen",  text:"Please select the approximate kerosene usage.", inputType:"sel064", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel064"]= [ "1 cans in Please choose not to use", "", " 1 cans in two months (9L)", "month 1 cans (18L)", "month 2 cans (36L)", "month 3 cans (54L)", "week 1 cans (72L)", "5 days ( 108L)", "week 2 cans (144L)", "week 3 cans (216L)", "more", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel064']= [ '-1', '0', '900', '1800', '3600', '5400', '7200', '10800', '14400', '21600', '30000', '', '', '', '', '' ];
	D6.scenario.defInput["i065"] = {  cons:"consEnergy",  title:"Briquettes  purchase amount",  unit:"yen",  text:"Please select the approximate briquettes usage.", inputType:"sel065", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel065"]= [ "Please choose", "1000 yen", "2000 yen", "3,000 yen", "5000 yen", "7000 yen", "10,000 yen", "12,000 yen", "15,000 yen", "20,000 yen", "30,000 yen", "more", "", "", "", "" ];			D6.scenario.defSelectData['sel065']= [ '-1', '0', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000', '', '', '' ];
	D6.scenario.defInput["i066"] = {  cons:"consEnergy",  title:"Areal hot water supply",  unit:"",  text:"Do you use areal hot water supply?", inputType:"sel066", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel066"]= [ "Please select", "not use", "use", "", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel066']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i072"] = {  cons:"consEnergy",  title:"The capacity of the home tank of kerosene",  unit:"",  text:"The capacity of the home tank", inputType:"sel072", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel072"]= [ "Please select", "100L", "200L", "300L", "400L", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel072']= [ '-1', '100', '200', '300', '400', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i073"] = {  cons:"consEnergy",  title:"Number of times to put Kerosene to Home tank",  unit:"",  text:"Number of times to put the year in the home tank of kerosene", inputType:"sel073", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel073"]= [ "Please select", "three times a year or less", "year 4-6 times", "year 7-10 times", "year 11-15 times", "year 16-20 times", "year 21 times more than", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel073']= [ '-1', '3', '5', '8', '12', '18', '24', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i074"] = {  cons:"consEnergy",  title:"Water and sewerage charges",  unit:"yen",  text:"Please select the approximate water and sewerage bills per month.", inputType:"sel074", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel074"]= [ "Please select", "500 yen", "1000 yen", "1,500 yen", "2000 yen", "3,000 yen", "4,000 yen", "5000 yen", "7000 yen", "10,000 yen", "15,000 yen", "more", "", "", "", "" ];			D6.scenario.defSelectData['sel074']= [ '-1', '500', '1000', '1500', '2000', '3000', '4000', '5000', '7000', '10000', '15000', '20000', '', '', '', '' ];
	D6.scenario.defInput["i075"] = {  cons:"consEnergy",  title:"Car fuel cost",  unit:"yen",  text:"Please choose gasoline of approximate one month (light oil fee). Will the whole family worth.", inputType:"sel075", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10000",d11p:"0",d12t:"6000",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel075"]= [ "Please select", "do not use", "1000 yen", "2000 yen", "3,000 yen", "5000 yen", "7000 yen", "10,000 yen", "12,000 yen", "15,000 yen", "20,000 yen", "30,000 yen", "more", "", " ", "" ];			D6.scenario.defSelectData['sel075']= [ '-1', '0', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000', '', '', '' ];
	D6.scenario.defInput["i081"] = {  cons:"consEnergy",  title:"Power company",  unit:"",  text:"Please choose a power company", inputType:"sel081", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel081"]= [ "Please select", "Hokkaido Electric Power", "Tohoku Electric Power", "TEPCO", "Chubu Electric Power", "Hokuriku Electric Power Company", "Kansai Electric Power Co., Inc.", "Chubu Electric Power Co., Shikoku Electric Power", "", "", "Kyushu Electric Power Okinawa Electric Power", "Other", "", "", "", "" ];			D6.scenario.defSelectData['sel081']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '', '', '', '' ];
	D6.scenario.defInput["i082"] = {  cons:"consEnergy",  title:"Electrical contract",  unit:"",  text:"Please select a contract type of electricity", inputType:"sel082", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel082"]= [ "Please select", "normal household (metered)", "time zone contract", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel082']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i083"] = {  cons:"consEnergy",  title:"Gas type",  unit:"",  text:"Please select the type of gas", inputType:"sel083", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel083"]= [ "Please select", "do not use city gas", "LP gas", "Gas", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel083']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i091"] = {  cons:"consSeason",  title:"electric bill",  unit:"yen",  text:"Please choose approximate the electric bill for one month.", inputType:"sel091", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel091"]= [ "Please choose", "1000 yen", "2000 yen", "3,000 yen", "5000 yen", "7000 yen", "10,000 yen", "12,000 yen", "15,000 yen", "20,000 yen", "30,000 yen", "more", "", "", "", "" ];			D6.scenario.defSelectData['sel091']= [ '-1', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000', '', '', '', '' ];
	D6.scenario.defInput["i092"] = {  cons:"consSeason",  title:"Electricity sales by generator",  unit:"yen",  text:"Can you sell the electricity how much per month in the solar power generation.", inputType:"sel092", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel092"]= [ "Please choose", "1000 yen", "2000 yen", "3,000 yen", "5000 yen", "7000 yen", "10,000 yen", "12,000 yen", "15,000 yen", "20,000 yen", "30,000 yen", "more", "", "", "", "" ];			D6.scenario.defSelectData['sel092']= [ '-1', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000', '', '', '', '' ];
	D6.scenario.defInput["i093"] = {  cons:"consSeason",  title:"Gas Fee",  unit:"yen",  text:"Please choose the approximate gas prices of 1 month.", inputType:"sel093", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel093"]= [ "Please select", "all-electric (not used)", "1000 yen", "2000 yen", "3,000 yen", "5000 yen", "7000 yen", "10,000 yen", "12,000 yen", "15,000 yen", "20,000 yen", "30,000 yen", "more", "", " ", "" ];			D6.scenario.defSelectData['sel093']= [ '-1', '0', '1000', '2000', '3000', '5000', '7000', '10000', '12000', '15000', '20000', '30000', '40000', '', '', '' ];
	D6.scenario.defInput["i094"] = {  cons:"consSeason",  title:"Kerosene purchase amount",  unit:"yen",  text:"Please select the approximate kerosene usage.", inputType:"sel094", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel094"]= [ "1 cans in Please choose not to use", "", " 1 cans in two months (9L)", "month 1 cans (18L)", "month 2 cans (36L)", "month 3 cans (54L)", "week 1 cans (72L)", "5 days ( 108L)", "week 2 cans (144L)", "week 3 cans (216L)", "more", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel094']= [ '-1', '0', '900', '1800', '3600', '5400', '7200', '10800', '14400', '21600', '30000', '', '', '', '', '' ];
	D6.scenario.defInput["i101"] = {  cons:"consHWsum",  title:"The type of water heater",  unit:"",  text:"Water heater to boil water in the bath, what equipment do.", inputType:"sel101", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"6",d21p:"2",d22t:"3",d22p:"0",d23t:"2",d23p:"1",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel101"]= [ "Please select", "gas water heater", "gas latent heat recovery type", "kerosene water heater", "Eco-feel (kerosene latent heat recovery type)", "electric water heater", "Eco Cute (heat pump)", "gas engine cogeneration", "ENE-FARM (fuel cell)", "firewood", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel101']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '', '', '', '', '', '' ];
	D6.scenario.defInput["i102"] = {  cons:"consHWsum",  title:"Solar water heater",  unit:"",  text:"Do you use a solar water heater", inputType:"sel102", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"1",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"3",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"3",d31p:"0",d32t:"1",d32p:"2",d33t:"",d33p:"",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel102"]= [ "Please select", "are using", "not", "use are available from time to time", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel102']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i103"] = {  cons:"consHWtub",  title:"Bath boil days (except summer)",  unit:"Day / week",  text:"The boil the bath, do you how many days a week.", inputType:"sel103", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"5",d31p:"0",d32t:"2",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel103"]= [ "Please select", "about once a", "one day a week", "2 days per week", "2 days that do not accumulate water", "week 5-6 days", "every day", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel103']= [ '-1', '0', '1', '2', '3.5', '5.5', '7', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i104"] = {  cons:"consHWtub",  title:"Bath boil days (summer)",  unit:"Day / week",  text:"The boil a bath in summer, do you how many days a week.", inputType:"sel104", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"5",d31p:"0",d32t:"2",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel104"]= [ "Please select", "about once a", "one day a week", "2 days per week", "2 days that do not accumulate water", "week 5-6 days", "every day", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel104']= [ '-1', '0', '1', '2', '3.5', '5.5', '7', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i105"] = {  cons:"consHWshower",  title:"Shower time (except summer)",  unit:"Min / day",  text:"Time to use the shower in the whole family, do you how many minutes per day. The average is about one 5 minutes.", inputType:"sel105", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"40",d11p:"0",d12t:"20",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"40",d31p:"0",d32t:"20",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel105"]= [ "Please select", "do not use", "5 min", "10 min", "15 min", "20 min", "30 min", "40 min", "60 min", "90 min", "120 minutes", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel105']= [ '-1', '0', '5', '10', '15', '20', '30', '40', '60', '90', '120', '', '', '', '', '' ];
	D6.scenario.defInput["i106"] = {  cons:"consHWshower",  title:"Shower time (summer)",  unit:"Min / day",  text:"Time to use the shower in the whole family is in the summer, do you how many minutes per day.", inputType:"sel106", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"40",d11p:"0",d12t:"20",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"40",d31p:"0",d32t:"20",d32p:"1",d33t:"0",d33p:"2",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel106"]= [ "Please select", "do not use", "5 min", "10 min", "15 min", "20 min", "30 min", "40 min", "60 min", "90 min", "120 minutes", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel106']= [ '-1', '0', '5', '10', '15', '20', '30', '40', '60', '90', '120', '', '', '', '', '' ];
	D6.scenario.defInput["i107"] = {  cons:"consHWtub",  title:"The height of the hot water in the bathtub",  unit:"",  text:"The height of the hot water in the bathtub", inputType:"sel107", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"8",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel107"]= [ "Please select", "not stick the extent", "sitz bath", "hot water to soak up the shoulder", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel107']= [ '-1', '8', '4', '0', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i108"] = {  cons:"consHWtub",  title:"The time to keep hot water of Bathtub",  unit:"time",  text:"How many hours a day you warm of the bath", inputType:"sel108", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"4",d32p:"1",d33t:"0",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel108"]= [ "Please choose not", "", " 3 hours", "6 hours", "10 hours", "16 hours", "24 hours", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel108']= [ '-1', '0', '3', '6', '10', '16', '24', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i109"] = {  cons:"consHWtub",  title:"Hot water when washing the body",  unit:"",  text:"Do you use the hot water of the bathtub when you have collected in the tub", inputType:"sel109", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel109"]= [ "Please select much", "half-and-half to use the hot water of the", "tub", "do not know", "use the shower", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel109']= [ '-1', '10', '5', '2', '0', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i110"] = {  cons:"consHWtub",  title:"How reheating of bath",  unit:"Percentage",  text:"Do you have Reheating How does", inputType:"sel110", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel110"]= [ "Please select", "do not know always the hot water poured in accordance with", "necessary to the reheating according fired to need to have", "to follow in the automatic", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel110']= [ '-1', '10', '5', '5', '0', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i111"] = {  cons:"consHWtub",  title:"When the bath of hot water is low",  unit:"Percentage",  text:"What would you like to do when a tub of hot water is low", inputType:"sel111", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel111"]= [ "Please select", "always enters remains", "little to the hot water poured in accordance with", "required to be plus hot water in the automatic", "do not know the corresponding", "at that time to time", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel111']= [ '-1', '10', '5', '0', '5', '5', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i112"] = {  cons:"consHWshower",  title:"Until the hot water in the shower comes out",  unit:"Second",  text:"How long is the time until the first to come out hot water", inputType:"sel112", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"20",d21p:"0",d22t:"10",d22p:"1",d23t:"0",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel112"]= [ "Please select", "do not know immediately hot water comes out", "wait about five seconds", "wait about 10 seconds", "wait about 20 seconds", "wait one minute less than", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel112']= [ '-1', '3', '5', '10', '20', '50', '20', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i113"] = {  cons:"consHWdishwash",  title:"Use of hot water in the dishwasher",  unit:"",  text:"In dishwasher, do you to use the water without the use of hot water", inputType:"sel113", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel113"]= [ "Please select", "always have", "not", "is", "from time to time are roughly the", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel113']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i114"] = {  cons:"consHWdresser",  title:"Hot water use period in the basin",  unit:"months",  text:"Hot water use period in the basin", inputType:"sel114", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"5",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel114"]= [ "Please select", "do not use hot water", "2 months", "4 months", "6 months", "8 months", "10 months", "12 months", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel114']= [ '-1', '0', '2', '4', '6', '8', '10', '12', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i115"] = {  cons:"consHWdishwash",  title:"Hot water use period in dishwashing",  unit:"months",  text:"Hot water use period in dishwashing", inputType:"sel115", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel115"]= [ "Please select", "do not use hot water", "dishwasher use", "2 months", "4 months", "6 months", "8 months", "10 months", "12 months", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel115']= [ '-1', '0', '99', '2', '4', '6', '8', '10', '12', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i116"] = {  cons:"consHWshower",  title:"Water-saving shower head",  unit:"",  text:"Are you using a water-saving shower head", inputType:"sel116", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"2",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel116"]= [ "Please select", "do not use use and are", "do not know", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel116']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i117"] = {  cons:"consHWtub",  title:"Bathroom facilities",  unit:"",  text:"Unit bus Is", inputType:"sel117", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"0",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel117"]= [ "Please select", "is not a unit bus", "unit bus", "unit bath of thermal insulation bathtub", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel117']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i131"] = {  cons:"consHWtoilet",  title:"Heat insulation of the toilet seat",  unit:"",  text:"Are you the warmth of the toilet seat", inputType:"sel131", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"2",d32t:"2",d32p:"1",d33t:"1",d33p:"0",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel131"]= [ "Please select", "is", "than the summer has been all year", "not", "are winter only", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel131']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i132"] = {  cons:"consHWtoilet",  title:"Temperature setting of the toilet seat",  unit:"",  text:"How do you set the temperature of the toilet seat", inputType:"sel132", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"0",d32t:"3",d32p:"1",d33t:"2",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel132"]= [ "Please select", "increase", "ordinary", "do not know lower", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel132']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i133"] = {  cons:"consHWtoilet",  title:"Instantaneous type toilet seat",  unit:"",  text:"Moment What type of warm toilet seat", inputType:"sel133", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel133"]= [ "Please select", "Yes", "No", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel133']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i134"] = {  cons:"consHWtoilet",  title:"Lid of the toilet seat",  unit:"",  text:"Do you close the lid of the toilet seat after use", inputType:"sel134", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"2",d31p:"0",d32t:"1",d32p:"2",d33t:"",d33p:"1",d3w:"1",d3d:""}; 			D6.scenario.defSelectValue["sel134"]= [ "Please select", "Yes", "No", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel134']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i201"] = {  cons:"consHTsum",  title:"Range of heating",  unit:"",  text:"Well range of the heating, or will be how much of the entire house.", inputType:"sel201", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"1",d11p:"0",d12t:"0.5",d12p:"1",d13t:"0",d13p:"2",d1w:"1",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel201"]= [ "Please select about half of", "house the entire", "house part of the", "", " house only one room not the heating of", "Room", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel201']= [ '-1', '1', '0.5', '0.25', '0.1', '0.02', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i202"] = {  cons:"consHTsum",  title:"Heating appliances mainly use",  unit:"",  text:"What are the energy source of the most frequently used heating appliance to warm the room. Please choose in the heat source in the case of floor heating.", inputType:"sel202", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"6",d11p:"0",d12t:"5",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"6",d21p:"0",d22t:"5",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"5",d31p:"2",d32t:"2",d32p:"0",d33t:"1",d33p:"1",d3w:"2",d3d:"0"}; 			D6.scenario.defSelectValue["sel202"]= [ "Please select", "air conditioning", "only electro-thermal heating", "Gas", "kerosene", "wood pellet stove", "kotatsu and hot carpet", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel202']= [ '-1', '1', '2', '3', '4', '5', '6', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i203"] = {  cons:"consHTsum",  title:"Heating appliances that use the auxiliary",  unit:"",  text:"Heating appliances that use the auxiliary", inputType:"sel203", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel203"]= [ "Please select", "air conditioning", "only electro-thermal heating", "Gas", "kerosene", "wood pellet stove", "kotatsu and hot carpet", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel203']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26', '', '', '', '', '' ];
	D6.scenario.defInput["i204"] = {  cons:"consHTsum",  title:"Heating time",  unit:"time",  text:"The heating in winter Do you use How many hours a day.", inputType:"sel204", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"24",d11p:"0",d12t:"0",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel204"]= [ "Please select", "do not use", "1 hours", "2 hours", "3 hours", "4 hours", "6 hours", "8 hours", "12 hours", "16 hours", "24 hours", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel204']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24', '', '', '', '', '' ];
	D6.scenario.defInput["i205"] = {  cons:"consHTsum",  title:"Heating temperature",  unit:"℃",  text:"Do you want to set in what ℃ is when the heating. Or if you can not setting is approximately what ℃.", inputType:"sel205", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"23",d11p:"0",d12t:"21",d12p:"1",d13t:"0",d13p:"2",d1w:"3",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"23",d31p:"0",d32t:"21",d32p:"1",d33t:"0",d33p:"2",d3w:"3",d3d:"0"}; 			D6.scenario.defSelectValue["sel205"]= [ "Please select", "used not", "18 ℃", "19 ℃", "20 ℃", "21 ℃", "22 ℃", "23 ℃", "24 ℃", "25 ℃", "26 ℃ more than", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel205']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26', '', '', '', '', '' ];
	D6.scenario.defInput["i206"] = {  cons:"consHTsum",  title:"Period of heating",  unit:"months",  text:"Period of heating", inputType:"sel206", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel206"]= [ "Please select", "not the heating", "1 month", "2 months", "3 months", "4 months", "5 months", "6 months", "8 months", "10 months", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel206']= [ '-1', '0', '1', '2', '3', '4', '5', '6', '8', '10', '', '', '', '', '', '' ];
	D6.scenario.defInput["i211"] = {  cons:"consACheat",  title:"The name of the room",  unit:"",  text:"The name of the room", inputType:"", right:"", postfix:"", nodata:"", varType:"String", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue[""]= [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['']= [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i212"] = {  cons:"consACheat",  title:"Area of ​​a room",  unit:"m2",  text:"Please answer the size of the heating and cooling to room. If there is a blow-by, please doubled that amount.", inputType:"sel212", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel212"]= [ "Please select", "4 tatami mats and a half", "6 tatami", "8 tatami", "10 tatami", "12 tatami", "15 tatami", "20 tatami", "25 tatami", "30 tatami", "40 tatami", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel212']= [ '-1', '7.3', '10', '13', '16', '19.5', '24', '33', '41', '49', '65', '', '', '', '', '' ];
	D6.scenario.defInput["i213"] = {  cons:"consACheat",  title:"The size of the window glass",  unit:"m2",  text:"The size of the glass of the sash and the window, please answer as the sum of the room.", inputType:"sel213", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel213"]= [ "Please select", "small window (90 × 120)", "Koshimado (120 × 180)", "2 sheets sweep window (180 × 180)", "4 sheets sweep window (180 × 360)", "sweep six equivalent (180 × 540)", "sweeping eight equivalent (180 × 720)", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel213']= [ '-1', '1.1', '2.2', '3.3', '6.5', '9.7', '13', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i214"] = {  cons:"consACheat",  title:"Type of window glass",  unit:"w / m2K",  text:"Type of window glass", inputType:"sel214", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"4",d21p:"2",d22t:"3",d22p:"1",d23t:"",d23p:"",d2w:"1",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel214"]= [ "Please select", "1 glass", "aluminum double glazing", "aluminum other than the frame double-glazing", "double-glazed windows", "low-e double glazing", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel214']= [ '-1', '6', '3.5', '2.5', '2.5', '1.5', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i215"] = {  cons:"consACcool",  title:"Years of use of air conditionioner",  unit:"Year",  text:"Years of use of air conditioner", inputType:"sel215", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel215"]= [ "Please select", "have have not", "1 year less than", "3 years less than", "5 years less than", "7 years less than", "less than 10 years", "less than 15 years", "less than 20 years", "for more than 20 years", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel215']= [ '-1', '0', '1', '2', '4', '6', '9', '13', '18', '25', '', '', '', '', '', '' ];
	D6.scenario.defInput["i216"] = {  cons:"consACcool",  title:"Air conditioner performance",  unit:"",  text:"When you purchased the air conditioner, did you choose the energy-saving", inputType:"sel216", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"0",d12t:"1",d12p:"2",d13t:"",d13p:"",d1w:"2",d1d:"0", d21t:"2",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"2",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel216"]= [ "Please select", "Yes", "No", "do not know", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel216']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i217"] = {  cons:"consACcool",  title:"Air conditioner filter cleaning",  unit:"",  text:"Do you have air conditioner in filter cleaning", inputType:"sel217", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"2",d31p:"0",d32t:"1",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel217"]= [ "Do not know", "not", "are Please choose", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel217']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i231"] = {  cons:"consACheat",  title:"Heating appliances mainly use",  unit:"",  text:"What are the energy source of the most frequently used heating appliance to warm the room. Please choose in the heat source in the case of floor heating.", inputType:"sel231", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel231"]= [ "Please select", "air conditioning", "only electro-thermal heating", "Gas", "kerosene", "wood pellet stove", "kotatsu and hot carpet", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel231']= [ '-1', '1', '2', '3', '4', '5', '6', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i232"] = {  cons:"consACheat",  title:"Heating appliances that use the auxiliary",  unit:"",  text:"Heating appliances that use the auxiliary", inputType:"sel232", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel232"]= [ "Please select", "air conditioning", "only electro-thermal heating", "Gas", "kerosene", "wood pellet stove", "kotatsu and hot carpet", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel232']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26', '', '', '', '', '' ];
	D6.scenario.defInput["i233"] = {  cons:"consACheat",  title:"Heating time",  unit:"time",  text:"The heating in winter Do you use How many hours a day.", inputType:"sel233", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel233"]= [ "Please select", "do not use", "1 hours", "2 hours", "3 hours", "4 hours", "6 hours", "8 hours", "12 hours", "16 hours", "24 hours", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel233']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24', '', '', '', '', '' ];
	D6.scenario.defInput["i234"] = {  cons:"consACheat",  title:"Heating temperature",  unit:"℃",  text:"Do you want to set in what ℃ is when the heating. Or if you can not setting is approximately what ℃.", inputType:"sel234", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel234"]= [ "Please select", "used not", "18 ℃", "19 ℃", "20 ℃", "21 ℃", "22 ℃", "23 ℃", "24 ℃", "25 ℃", "26 ℃ more than", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel234']= [ '-1', '0', '18', '19', '20', '21', '22', '23', '24', '25', '26', '', '', '', '', '' ];
	D6.scenario.defInput["i235"] = {  cons:"consACheat",  title:"Period of heating",  unit:"months",  text:"Period of heating", inputType:"sel235", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel235"]= [ "Please select", "not the heating", "1 month", "2 months", "3 months", "4 months", "5 months", "6 months", "8 months", "10 months", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel235']= [ '-1', '0', '1', '2', '3', '4', '5', '6', '8', '10', '', '', '', '', '', '' ];
	D6.scenario.defInput["i236"] = {  cons:"consACheat",  title:"Period of use of the humidifier",  unit:"months",  text:"Period of use of the humidifier", inputType:"sel236", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel236"]= [ "Please select", "not the humidification", "1 month", "2 months", "3 months", "4 months", "5 months", "6 months", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel236']= [ '-1', '0', '1', '2', '3', '4', '5', '6', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i237"] = {  cons:"consACheat",  title:"Installation of insulation sheet",  unit:"",  text:"Installation of thick curtain insulation sheet in winter", inputType:"sel237", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel237"]= [ "Please select", "are Please choose", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel237']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i238"] = {  cons:"consACheat",  title:"Can you close the room with the door",  unit:"",  text:"Can you close the room with the door", inputType:"sel238", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel238"]= [ "Please select", "Can close", "cannot", "", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel238']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i239"] = {  cons:"consACheat",  title:"Stairwell",  unit:"",  text:"Atrium or, do you go up to the upper floor by stairs from the room", inputType:"sel239", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel239"]= [ "Please select", "There is", "isnot", "", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel239']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i240"] = {  cons:"consACheat",  title:"Reduction of the heating area by the partition of the room",  unit:"",  text:"Reduction of the heating area by the partition of the room", inputType:"sel240", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel240"]= [ "Please choose can not be", "", " 20%, down", "30 to 40%, down", "half", "60 to 70%, down", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel240']= [ '-1', '0', '2', '3', '5', '7', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i241"] = {  cons:"consACheat",  title:"Time of use of the electric stove",  unit:"",  text:"Time of use of the electric stove oil heater", inputType:"sel241", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel241"]= [ "Please select", "do not use", "1 hours", "2 hours", "3 hours", "4 hours", "6 hours", "8 hours", "12 hours", "16 hours", "24 hours", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel241']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24', '', '', '', '', '' ];
	D6.scenario.defInput["i242"] = {  cons:"consACheat",  title:"is it cold in winter",  unit:"",  text:"Whether the room takes effect the heating", inputType:"sel242", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel242"]= [ "Please select", "cold when heating is not feeling", "does not is a little cold", "not to warm quite", "cold", "heating be heating", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel242']= [ '-1', '1', '2', '3', '4', '5', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i243"] = {  cons:"consHTsum",  title:"condensation on the window",  unit:"",  text:"Is there condensation on the window", inputType:"sel243", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel243"]= [ "Please select", "condensation well", "I do not know", "not", "condensation not", "almost condensation to a little dew", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel243']= [ '-1', '1', '2', '3', '4', '5', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i244"] = {  cons:"consHTsum",  title:"Condensation of the wall, such as a closet",  unit:"",  text:"Is there condensation on the wall, such as a closet", inputType:"sel244", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel244"]= [ "Please select", "condensation well", "I do not know", "not", "condensation not", "almost condensation to a little dew", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel244']= [ '-1', '1', '2', '3', '4', '5', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i245"] = {  cons:"consHTsum",  title:"Feel the morning cold",  unit:"months",  text:"Choose a cold that most can feel", inputType:"sel245", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel245"]= [ "Please choose the morning get up for a painful", "limbs at", "cold is get frost in cold", "window", "room in the breath fogged white", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel245']= [ '-1', '1', '2', '3', '4', '5', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i246"] = {  cons:"consHTsum",  title:"Time to start to feel cold in the morning",  unit:"",  text:"Is When start to feel cold in the morning", inputType:"sel246", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel246"]= [ "Please select", "10 in early October", "late October", "early November", "late November", "early December", "late December", "early January", "late January", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel246']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i247"] = {  cons:"consHTsum",  title:"Time to end to feel cold in the morning",  unit:"",  text:"How long are you feel cold in the morning", inputType:"sel247", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel247"]= [ "Please select", "early February", "late February", "early March", "late March", "early April", "late April", "5 early May", "5 late May", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel247']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i248"] = {  cons:"consHTsum",  title:"Ingenuity of overdressed",  unit:"",  text:"Do you try to first to overdress before bidding heating", inputType:"sel248", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel248"]= [ "Please select", "always have", "not", "is", "from time to time are roughly the", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel248']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i249"] = {  cons:"consHTsum",  title:"Heating of absence room",  unit:"",  text:"Do you have a room that no one is not to heating", inputType:"sel249", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"4",d11p:"2",d12t:"3",d12p:"1",d13t:"",d13p:"",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"2",d32t:"3",d32p:"1",d33t:"",d33p:"",d3w:"2",d3d:"1"}; 			D6.scenario.defSelectValue["sel249"]= [ "Please select", "always have", "not", "is", "from time to time are roughly the", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel249']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i261"] = {  cons:"consCOsum",  title:"Cooling time",  unit:"time",  text:"The cooling in the summer Do you use How many hours a day.", inputType:"sel261", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"24",d31p:"0",d32t:"8",d32p:"1",d33t:"",d33p:"",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel261"]= [ "Please select", "do not use", "1 hours", "2 hours", "3 hours", "4 hours", "6 hours", "8 hours", "12 hours", "16 hours", "24 hours", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel261']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24', '', '', '', '', '' ];
	D6.scenario.defInput["i262"] = {  cons:"consCOsum",  title:"Cooling time zone",  unit:"",  text:"Mainly Do you use the air conditioning on when the time zone", inputType:"sel262", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel262"]= [ "Please select", "morning", "noon", "evening", "night", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel262']= [ '-1', '0', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i263"] = {  cons:"consCOsum",  title:"Set cooling temperature",  unit:"℃",  text:"Do you want to set in what ℃ is when the cooling.", inputType:"sel263", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"28",d11p:"2",d12t:"25",d12p:"1",d13t:"",d13p:"",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"28",d31p:"2",d32t:"25",d32p:"1",d33t:"",d33p:"",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel263"]= [ "Please select", "24 ℃ below", "25 ℃", "26 ℃", "27 ℃", "28 ℃", "29 ℃", "30 ℃", "do not use", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel263']= [ '-1', '24', '25', '26', '27', '28', '29', '30', '0', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i264"] = {  cons:"consCOsum",  title:"Period for cooling (including dehumidification)",  unit:"months",  text:"Period for cooling (including dehumidification)", inputType:"sel264", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel264"]= [ "Please select", "not the cooling", "1 month", "2 months", "3 months", "4 months", "5 months", "6 months", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel264']= [ '-1', '0', '1', '2', '3', '4', '5', '6', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i265"] = {  cons:"consCOsum",  title:"Is it hot in summer",  unit:"",  text:"If the room is hot", inputType:"sel265", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel265"]= [ "Please select", "do not feel the heat when heating", "does not is somewhat hot", "hot even when if Note", "cooling quite cool", "cooling", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel265']= [ '-1', '1', '2', '3', '4', '5', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i266"] = {  cons:"consCOsum",  title:"The presence or absence of solar radiation influx",  unit:"",  text:"Do you want to enter the sunlight is the room in the morning and evening of the summer", inputType:"sel266", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel266"]= [ "Please select", "do not know well enter", "do not fall a little enter", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel266']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i267"] = {  cons:"consCOsum",  title:"Solar radiation cut",  unit:"",  text:"When the afternoon sun or the morning sun enters the room will be hot. Do you have devised to solar radiation from entering", inputType:"sel267", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"4",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel267"]= [ "Please select", "always have", "not", "is", "from time to time are roughly the", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel267']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i268"] = {  cons:"consCOsum",  title:"Fan use",  unit:"",  text:"For example, by utilizing the fan do you have to avoid as much as possible to use the air conditioning", inputType:"sel268", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel268"]= [ "Please select", "always have", "not", "is", "from time to time are roughly the", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel268']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i271"] = {  cons:"consACcool",  title:"Cooling time",  unit:"time",  text:"The cooling in the summer Do you use How many hours a day.", inputType:"sel271", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"4",d32p:"1",d33t:"0",d33p:"2",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel271"]= [ "Please select", "do not use", "1 hours", "2 hours", "3 hours", "4 hours", "6 hours", "8 hours", "12 hours", "16 hours", "24 hours", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel271']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24', '', '', '', '', '' ];
	D6.scenario.defInput["i272"] = {  cons:"consACcool",  title:"Cooling time zone",  unit:"",  text:"Mainly Do you use the air conditioning on when the time zone", inputType:"sel272", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel272"]= [ "Please select", "morning", "noon", "evening", "night", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel272']= [ '-1', '0', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i273"] = {  cons:"consACcool",  title:"Set cooling temperature",  unit:"℃",  text:"Do you want to set in what ℃ is when the cooling.", inputType:"sel273", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel273"]= [ "Please select", "24 ℃ below", "25 ℃", "26 ℃", "27 ℃", "28 ℃", "29 ℃", "30 ℃", "do not use", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel273']= [ '-1', '24', '25', '26', '27', '28', '29', '30', '0', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i274"] = {  cons:"consACcool",  title:"Period for cooling (including dehumidification)",  unit:"months",  text:"Period for cooling (including dehumidification)", inputType:"sel274", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel274"]= [ "Please select", "not the cooling", "1 month", "2 months", "3 months", "4 months", "5 months", "6 months", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel274']= [ '-1', '0', '1', '2', '3', '4', '5', '6', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i275"] = {  cons:"consACcool",  title:"Is it hot in summer",  unit:"",  text:"Do you fell hot in the room in summer", inputType:"sel275", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel275"]= [ "Please select", "do not feel the heat when heating", "does not is somewhat hot", "hot even when if Note", "cooling quite cool", "cooling", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel275']= [ '-1', '1', '2', '3', '4', '5', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i276"] = {  cons:"consACcool",  title:"The presence or absence of solar radiation influx",  unit:"",  text:"Do you want to enter the sunlight is the room in the morning and evening of the summer", inputType:"sel276", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel276"]= [ "Please select", "do not know well enter", "do not fall a little enter", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel276']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i277"] = {  cons:"consACcool",  title:"Solar radiation cut",  unit:"",  text:"When the afternoon sun or the morning sun enters the room will be hot. Do you have devised to solar radiation from entering", inputType:"sel277", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel277"]= [ "Please select", "always have", "not", "is", "from time to time are roughly the", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel277']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i278"] = {  cons:"consACcool",  title:"Fan use",  unit:"",  text:"For example, by utilizing the fan do you have to avoid as much as possible to use the air conditioning", inputType:"sel278", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel278"]= [ "Please select", "always have", "not", "is", "from time to time are roughly the", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel278']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i281"] = {  cons:"consHTcold",  title:"Central heating",  unit:"",  text:"Is central heating", inputType:"sel281", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel281"]= [ "Please select", "Yes", "No", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel281']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i282"] = {  cons:"consHTcold",  title:"Central heat source",  unit:"",  text:"Central heating of the heat source", inputType:"sel282", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel282"]= [ "Please select", "kerosene", "Electrical", "electric (heat pump)", "", " gas hybrid (heat pump + gas)", "district heat supply", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel282']= [ '-1', '1', '2', '3', '4', '5', '6', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i283"] = {  cons:"consHTcold",  title:"Central-only heat source",  unit:"",  text:"Heat source machine and the bath of the heat source of the Central Is another", inputType:"sel283", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel283"]= [ "Please select", "Central-only", "bath and a shared", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel283']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i284"] = {  cons:"consHTcold",  title:"Central heating period",  unit:"",  text:"Period to use the central heating", inputType:"sel284", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel284"]= [ "Please select", "used not", "1 month", "2 months", "3 months", "4 months", "5 months", "6 months", "8 months", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel284']= [ '-1', '0', '1', '2', '3', '4', '5', '6', '8', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i285"] = {  cons:"consHTsum",  title:"Heat exchange ventilation",  unit:"",  text:"It is heat exchange type of ventilation", inputType:"sel285", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"0",d12t:"1",d12p:"2",d13t:"",d13p:"",d1w:"1",d1d:"0", d21t:"2",d21p:"0",d22t:"1",d22p:"2",d23t:"",d23p:"",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel285"]= [ "Please select", "Yes", "No", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel285']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i286"] = {  cons:"consHTcold",  title:"Road Heating",  unit:"",  text:"Are you using the road heating", inputType:"sel286", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel286"]= [ "Please select", "Yes", "No", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel286']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i287"] = {  cons:"consHTcold",  title:"Road heating heat source",  unit:"",  text:"Load heating of the heat source", inputType:"sel287", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel287"]= [ "Please select", "kerosene", "Electrical", "electric (heat pump)", "", " gas hybrid (heat pump + gas)", "district heat supply", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel287']= [ '-1', '1', '2', '3', '4', '5', '6', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i288"] = {  cons:"consHTcold",  title:"Road Heating area",  unit:"",  text:"Road Heating area", inputType:"sel288", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel288"]= [ "Please select", "1 tsubo (3m2)", "2 square meters (7m2)", "3 square meters (10m2)", "5 square meters (15m2)", "10 square meters (30m2)", "15 square meters (50m2)", "20 square meters (65m2)", "30 square meters (100m2 )", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel288']= [ '-1', '3', '7', '10', '15', '30', '50', '65', '100', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i289"] = {  cons:"consHTcold",  title:"Road heating frequency of use",  unit:"",  text:"Road heating frequency of use", inputType:"sel289", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel289"]= [ "Please select", "year 2-3 days", "2 to 3 days to", "month about one day a month", "week to two or three days", "sensor constantly ON", "at all times without the sensor ON", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel289']= [ '-1', '2', '6', '12', '30', '50', '100', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i290"] = {  cons:"consHTcold",  title:"Use of the roof heating",  unit:"",  text:"Are you using a roof heating", inputType:"sel290", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel290"]= [ "Please select", "Yes", "No", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel290']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i291"] = {  cons:"consHTcold",  title:"The target area of ​​the roof heating",  unit:"",  text:"The target area of ​​the roof heating", inputType:"sel291", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel291"]= [ "Please select ", ": whole only", "roof surface around the gutter", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel291']= [ '-1', '10', '30', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i292"] = {  cons:"consHTcold",  title:"Roof heating of the heat source",  unit:"",  text:"Roof heating of the heat source", inputType:"sel292", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel292"]= [ "Please select", "kerosene", "Electrical", "heat pump", "", " gas cogeneration (gas)", "cogeneration (kerosene)", "district heat supply", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel292']= [ '-1', '1', '2', '3', '4', '5', '6', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i293"] = {  cons:"consHTcold",  title:"Frequency of use of the roof heating",  unit:"",  text:"Frequency of use of the roof heating is", inputType:"sel293", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel293"]= [ "Please select", "year 2-3 days", "2 to 3 days to", "month about one day a month", "week to two or three days", "sensor constantly ON", "at all times without the sensor ON", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel293']= [ '-1', '2', '6', '15', '30', '50', '100', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i294"] = {  cons:"consHTcold",  title:"Use of snow-melting tank",  unit:"",  text:"Use of snow-melting tank", inputType:"sel294", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel294"]= [ "Please select", "Yes", "No", "do not know", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel294']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i295"] = {  cons:"consHTcold",  title:"Heat source of the snow melting tank",  unit:"",  text:"Heat source of the snow melting tank", inputType:"sel295", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel295"]= [ "Please select", "kerosene", "Electrical", "electric (heat pump)", "", " gas cogeneration (gas)", "cogeneration (kerosene)", "district heat supply", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel295']= [ '-1', '1', '2', '3', '4', '5', '6', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i401"] = {  cons:"consDRsum",  title:"Frequency of use of the clothes dryer",  unit:"",  text:"Do you use the dryer and the drying function of washing. Please choose whether to use what extent, if you are using.", inputType:"sel401", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"5",d11p:"0",d12t:"3",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel401"]= [ "Please choose not to use", "", " month 1 to 3 times", "once or twice a week", "once in two days", "every day", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel401']= [ '-1', '5', '4', '3', '2', '1', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i402"] = {  cons:"consDRsum",  title:"Type of dryer",  unit:"",  text:"Type of dryer", inputType:"sel402", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel402"]= [ "Please select", "electric (heat pump)", "do not have electricity", "do not know gas", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel402']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i403"] = {  cons:"consDRsum",  title:"The frequency of washing",  unit:"",  text:"What about how to use the washing machine", inputType:"sel403", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel403"]= [ "Please choose", "also I do not know turn the washing machine", "turn the daily twice about washing machine", "turn the once washing machine every day", "dirty things are turning the washing machine When the accumulated", "many times every day", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel403']= [ '-1', '4', '2', '1', '0.5', '1', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i411"] = {  cons:"consDRsum",  title:"The intensity of the vacuum cleaner",  unit:"",  text:"How do you set the intensity of the vacuum cleaner", inputType:"sel411", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel411"]= [ "Please select", "", " basic that is selectively used by the", "where you are using in most strong, I do not know there is no", "", " setting you are using a weak", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel411']= [ '-1', '1', '2', '3', '4', '5', '6', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i412"] = {  cons:"consDRsum",  title:"Cleaner use",  unit:"Min / day",  text:"Do you use what extent the vacuum cleaner in one day", inputType:"sel412", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel412"]= [ "Please select", "do not know use", "a rarely used not", "5 min", "10 min", "15 min", "30 min", "1 hours", "robot cleaner", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel412']= [ '-1', '0', '5', '10', '15', '30', '60', '11', '12', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i501"] = {  cons:"consLIsum",  title:"Living Lighting",  unit:"W",  text:"The lighting fixture of living, mainly do you use what.", inputType:"sel501", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"3",d21p:"2",d22t:"2",d22p:"1",d23t:"",d23p:"",d2w:"1",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel501"]= [ "Please select", "incandescent light bulb", "fluorescent lamp", "LED", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel501']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i502"] = {  cons:"consLIsum",  title:"Lighting of absence room",  unit:"",  text:"Do you turn off the lighting of the room where there are no people", inputType:"sel502", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"2",d12t:"2",d12p:"1",d13t:"",d13p:"",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"2",d32t:"2",d32p:"1",d33t:"",d33p:"",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel502"]= [ "Please select", "are off location of all put", "left on even a", "are almost off", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel502']= [ '-1', '10', '6', '2', '0', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i511"] = {  cons:"consLI",  title:"Lighting of the place",  unit:"",  text:"", inputType:"sel511", right:"1", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel511"]= [ "Please select", "entrance", "Monto", "hallway", "toilet", "dressing room", "bath", "living room", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel511']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '', '', '', '', '' ];
	D6.scenario.defInput["i512"] = {  cons:"consLI",  title:"Lighting of the kind",  unit:"",  text:"", inputType:"sel512", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel512"]= [ "Please select", "incandescent light bulb", "bulb-shaped fluorescent light", "fluorescent lamp", "narrow tube fluorescent lamp", "LED", "sensor Write", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel512']= [ '-1', '1', '2', '3', '4', '5', '6', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i513"] = {  cons:"consLI",  title:"Power consumption of 1 ball (this)",  unit:"W",  text:"", inputType:"sel513", right:"1", postfix:"Number", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel513"]= [ "Please select", "5W", "10W", "15W", "20W", "30W", "40W", "60W", "80W", "100W", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel513']= [ '-1', '5', '10', '15', '20', '30', '40', '60', '80', '100', '', '', '', '', '', '' ];
	D6.scenario.defInput["i514"] = {  cons:"consLI",  title:"Ball number - number",  unit:"Sphere - this",  text:"Do you have If you have more than one, this what ball-what during the", inputType:"sel514", right:"1", postfix:"Number", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel514"]= [ "Please select", "1 ball - This", "2 balls - This", "3 balls - This", "4 balls - This", "6 balls - This", "8-ball, this", "10 balls, this", "15 balls, this", "20 balls - This", "30 sphere, this", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel514']= [ '-1', '1', '2', '3', '4', '6', '8', '10', '15', '20', '30', '', '', '', '', '' ];
	D6.scenario.defInput["i515"] = {  cons:"consLI",  title:"Use time of illumination",  unit:"Time / day",  text:"Do you use many hours per day", inputType:"sel515", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel515"]= [ "Please select", "do not use", "1 hours", "2 hours", "3 hours", "4 hours", "6 hours", "8 hours", "12 hours", "16 hours", "24 hours", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel515']= [ '-1', '0', '1', '2', '3', '4', '6', '8', '12', '16', '24', '', '', '', '', '' ];
	D6.scenario.defInput["i601"] = {  cons:"consTVsum",  title:"TV time",  unit:"time",  text:"The sum of all of the television in the house, do you put many hours in a day. Please, including the time of the TV game.", inputType:"sel601", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel601"]= [ "Please select", "do not use", "2 hours", "4 hours", "6 hours", "8 hours", "12 hours", "16 hours", "24 hours", "32 hours", "40 hours", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel601']= [ '-1', '0', '2', '4', '6', '8', '12', '16', '24', '32', '40', '', '', '', '', '' ];
	D6.scenario.defInput["i631"] = {  cons:"consTV",  title:"TV the size of the",  unit:"inch",  text:"TV the size of the", inputType:"sel631", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel631"]= [ "Please select", "with non", "less than 20-inch number from 20 to 30 inches", "30-40 inches", "40-50 inches", "50-65 inches", "65 inches or more", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel631']= [ '-1', '0', '18', '25', '35', '45', '60', '70', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i632"] = {  cons:"consTV",  title:"Age of the TV",  unit:"Year",  text:"Age of the TV", inputType:"sel632", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel632"]= [ "Please select", "have have not", "1 year less than", "3 years less than", "5 years less than", "7 years less than", "less than 10 years", "less than 15 years", "less than 20 years", "for more than 20 years", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel632']= [ '-1', '0', '1', '2', '4', '6', '9', '13', '18', '25', '', '', '', '', '', '' ];
	D6.scenario.defInput["i633"] = {  cons:"consTV",  title:"TV time",  unit:"Year",  text:"Age of the TV", inputType:"sel633", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel633"]= [ "Please choose not to use", "", " 2 hours", "4 hours", "6 hours", "8 hours", "12 hours", "16 hours", "24 hours", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel633']= [ '-1', '0', '2', '4', '6', '8', '12', '16', '24', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i701"] = {  cons:"consRFsum",  title:"Refrigerator number",  unit:"Table",  text:"Are you using any number of the refrigerator. Stocker (freezer) should also be counted as one.", inputType:"sel701", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"2",d11p:"0",d12t:"0",d12p:"2",d13t:"",d13p:"",d1w:"1",d1d:"2", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"2",d31p:"0",d32t:"0",d32p:"2",d33t:"",d33p:"",d3w:"1",d3d:"2"}; 			D6.scenario.defSelectValue["sel701"]= [ "Please select", "do not have", "one", "two", "three", "four", "five", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel701']= [ '-1', '0', '1', '2', '3', '4', '5', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i711"] = {  cons:"consRF",  title:"Age of the refrigerator",  unit:"Year",  text:"Age of the refrigerator", inputType:"sel711", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel711"]= [ "Please select", "have have not", "1 year less than", "3 years less than", "5 years less than", "7 years less than", "less than 10 years", "less than 15 years", "less than 20 years", "for more than 20 years", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel711']= [ '-1', '0', '0', '2', '4', '6', '8', '12', '17', '25', '', '', '', '', '', '' ];
	D6.scenario.defInput["i712"] = {  cons:"consRF",  title:"Refrigerator type",  unit:"",  text:"Refrigerator type", inputType:"sel712", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel712"]= [ "Please select", "refrigerator", "freezer (stocker)", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel712']= [ '-1', '1', '2', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i713"] = {  cons:"consRF",  title:"Rated Contents",  unit:"",  text:"Rated Contents", inputType:"sel713", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel713"]= [ "Please select less than", "100L", "101-200 liter", "201-300 liters", "301-400 liters", "401-500 liter", "501 liters or more", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel713']= [ '-1', '80', '150', '250', '350', '450', '550', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i714"] = {  cons:"consRF",  title:"Refrigerator temperature setting",  unit:"",  text:"How do you set temperature settings", inputType:"sel714", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"4",d31p:"1",d32t:"3",d32p:"2",d33t:"0",d33p:"1",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel714"]= [ "Please select", "little", "in do not know", "little less than", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel714']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i715"] = {  cons:"consRF",  title:"Too much contents in refregerator",  unit:"",  text:"Do you try to not be too packed", inputType:"sel715", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel715"]= [ "Please select", "and are", "", " do not know not been able to", "not be too careful", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel715']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i716"] = {  cons:"consRF",  title:"Installation that opened the gap from the wall",  unit:"",  text:"Do you have a gap of about 5cm on the side, the back side", inputType:"sel716", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel716"]= [ "Do not know", "not been able to", "is made Please choose", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel716']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i801"] = {  cons:"consCKcook",  title:"Stove of the heat source",  unit:"",  text:"Stove heat sources", inputType:"sel801", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel801"]= [ "Please select", "", " gas electricity (IH, etc.) do not know", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel801']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i802"] = {  cons:"consCKcook",  title:"Frequency of cooking",  unit:"Percentage",  text:"Frequency of cooking", inputType:"sel802", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel802"]= [ "Please select", "and not", "2-3 meals a week one meal or less", "week", "1 day one meal", "1 day 2 meals", "3 meals a day", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel802']= [ '-1', '0', '1', '2', '4', '7', '10', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i811"] = {  cons:"consCKrice",  title:"Heat insulation of the jar",  unit:"",  text:"Are you the warmth of the rice cooker", inputType:"sel811", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel811"]= [ "Please choose to about", "12 hours you are about", "6 hours you do not have", "is", "is almost 24 hours", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel811']= [ '-1', '0', '6', '12', '24', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i821"] = {  cons:"consCKpot",  title:"Heat insulation of pot",  unit:"",  text:"Are you the warmth of the pot", inputType:"sel821", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"10",d11p:"0",d12t:"4",d12p:"1",d13t:"0",d13p:"2",d1w:"1",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"10",d31p:"0",d32t:"4",d32p:"1",d33t:"0",d33p:"2",d3w:"1",d3d:"1"}; 			D6.scenario.defSelectValue["sel821"]= [ "Please choose to about", "12 hours you are about", "6 hours you do not have", "is", "is almost 24 hours", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel821']= [ '-1', '0', '6', '12', '24', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i822"] = {  cons:"consCKpot",  title:"Energy efficiency of electric kettle",  unit:"",  text:"Is the electric pot energy-saving", inputType:"sel822", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel822"]= [ "Please select", "Yes", "No", "do not know", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel822']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i901"] = {  cons:"consCRsum",  title:"Car ownership",  unit:"",  text:"Car ownership", inputType:"sel901", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"4",d11p:"0",d12t:"2",d12p:"1",d13t:"0",d13p:"2",d1w:"2",d1d:"1", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel901"]= [ "Please select", "do not have", "one", "two", "three", "four", "five or more", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel901']= [ '-1', '1', '2', '3', '4', '5', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i902"] = {  cons:"consCRsum",  title:"The number held by scooter-bike",  unit:"",  text:"The number held by scooter-bike", inputType:"sel902", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel902"]= [ "Please select", "do not have", "one", "two", "three", "four", "five or more", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel902']= [ '-1', '1', '2', '3', '4', '5', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i911"] = {  cons:"consCR",  title:"Car type",  unit:"",  text:"Car type", inputType:"sel911", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel911"]= [ "Please select", "light car", "compact", "Bang", "3 number", "electric car", "bike scooter", "large bike", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel911']= [ '-1', '1', '2', '3', '4', '5', '6', '7', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i912"] = {  cons:"consCR",  title:"Fuel consumption of the car",  unit:"",  text:"Fuel consumption of the car", inputType:"sel912", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"30",d11p:"2",d12t:"15",d12p:"1",d13t:"",d13p:"",d1w:"2",d1d:"1", d21t:"30",d21p:"2",d22t:"15",d22p:"1",d23t:"",d23p:"",d2w:"2",d2d:"1", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel912"]= [ "Please select", "6km / L or less", "7-9km / L", "10-12km / L", "13-15km / L", "16-20km / L", "21-26km / L", "27-35km / L", "36km / L or more", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['sel912']= [ '-1', '6', '8', '11', '14', '18', '23', '30', '40', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i913"] = {  cons:"consCR",  title:"The main user of the car",  unit:"",  text:"Is anyone in the car. Or please fill in if there is a call you.", inputType:"", right:"", postfix:"", nodata:"", varType:"String", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue[""]= [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['']= [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i914"] = {  cons:"consCR",  title:"Use of eco-tires",  unit:"",  text:"Are you using the eco-tires", inputType:"sel914", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel914"]= [ "Please select", "Yes", "No", "do not know", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel914']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i921"] = {  cons:"consCRtrip",  title:"destination",  unit:"",  text:"Well go out destination", inputType:"", right:"", postfix:"", nodata:"", varType:"String", min:"", max:"", defaultValue:"", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue[""]= [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ", "" ];			D6.scenario.defSelectData['']= [ '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i922"] = {  cons:"consCRtrip",  title:"frequency",  unit:"",  text:"Go you or at what car", inputType:"sel922", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel922"]= [ "Please select", "daily", "5 times a week", "2-3 times a week", "once a week", "twice a month", "monthly", "once in two months", "year 2-3 times", "Annual", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel922']= [ '-1', '365', '250', '120', '50', '25', '12', '6', '2', '1', '', '', '', '', '', '' ];
	D6.scenario.defInput["i923"] = {  cons:"consCRtrip",  title:"One-way distance",  unit:"km",  text:"One-way distance", inputType:"sel923", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel923"]= [ "Please select", "1km", "2km", "3km", "5km", "10km", "20km", "30km", "50km", "100km", "200km", "400km", "600km more than", "", " ", "" ];			D6.scenario.defSelectData['sel923']= [ '-1', '1', '2', '3', '5', '10', '20', '30', '50', '100', '200', '400', '700', '', '', '' ];
	D6.scenario.defInput["i924"] = {  cons:"consCRtrip",  title:"Car to be used",  unit:"",  text:"What car do you use mainly", inputType:"sel924", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel924"]= [ "Please select", "car #1", "car #2", "car #3", "car #4", "car #5", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel924']= [ '-1', '1', '2', '3', '4', '5', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i931"] = {  cons:"consCRsum",  title:"Idling stop",  unit:"",  text:"Do you stop the idling for a long time stop", inputType:"sel931", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel931"]= [ "Please select", "not", "is", "from time to time are always", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel931']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i932"] = {  cons:"consCRsum",  title:"Sudden acceleration ",  unit:"",  text:"Do you avoid sudden acceleration", inputType:"sel932", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel932"]= [ "Please select", "not", "is", "from time to time are always", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel932']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i933"] = {  cons:"consCRsum",  title:"Small operation with acceleration and deceleration",  unit:"",  text:"Small operation with acceleration and deceleration", inputType:"sel933", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel933"]= [ "Please select", "not", "is", "from time to time are always", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel933']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i934"] = {  cons:"consCRsum",  title:"Early accelerator off",  unit:"",  text:"Early accelerator off", inputType:"sel934", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel934"]= [ "Please select", "not", "is", "from time to time are always", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel934']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i935"] = {  cons:"consCRsum",  title:"Use of road traffic information",  unit:"",  text:"Use of road traffic information", inputType:"sel935", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel935"]= [ "Please select", "not", "is", "from time to time are always", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel935']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i936"] = {  cons:"consCRsum",  title:"Unnecessary luggage",  unit:"",  text:" Traveling without piled Unnecessary luggage", inputType:"sel936", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel936"]= [ "Please select", "not", "is", "from time to time are always", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel936']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i937"] = {  cons:"consCRsum",  title:"Temperature control of the car air conditioner",  unit:"",  text:"Do you have to adjust frequently the temperature and air flow rate of car air conditioners", inputType:"sel937", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel937"]= [ "Please select", "not", "is", "from time to time are always", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel937']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i938"] = {  cons:"consCRsum",  title:"Warm-up operation",  unit:"",  text:"Do you have a warm-up operation on a cold day", inputType:"sel938", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"3",d31p:"0",d32t:"2",d32p:"1",d33t:"1",d33p:"2",d3w:"1",d3d:"0"}; 			D6.scenario.defSelectValue["sel938"]= [ "Please choose", "not", "is", "from time to time are always", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel938']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i939"] = {  cons:"consCRsum",  title:"Tire pressure",  unit:"",  text:"Do you try to keep the air pressure of the tires properly", inputType:"sel939", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"",d11p:"",d12t:"",d12p:"",d13t:"",d13p:"",d1w:"",d1d:"", d21t:"",d21p:"",d22t:"",d22p:"",d23t:"",d23p:"",d2w:"",d2d:"", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel939"]= [ "Please select", "not", "is", "from time to time are always", "", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel939']= [ '-1', '1', '2', '3', '', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i221"] = {  cons:"consCOsum",  title:"Performance of air conditioner",  unit:"",  text:"Is the energy-saving performance of the air conditioner good (first level?)", inputType:"sel221", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel221"]= [ "Please Choose", "Very Good", "Normal", " not good", "I do not know", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel221']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i121"] = {  cons:"consHWsum",  title:"Performance of water heater",  unit:"",  text:"Is energy saving performance of water heater good? (First grade)", inputType:"sel121", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel121"]= [ "Please Choose", "Very Good", "Normal", " not good", "I do not know", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel121']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i621"] = {  cons:"consTVsum",  title:"TV performance",  unit:"",  text:"Is energy saving performance of TV good? (First grade)", inputType:"sel621", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel621"]= [ "Please Choose", "Very Good", "Normal", " not good", "I do not know", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel621']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i421"] = {  cons:"consDRsum",  title:"Washing machine performance",  unit:"",  text:"Is energy-saving performance of the washing machine good? (First grade)", inputType:"sel421", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel421"]= [ "Please Choose", "Very Good", "Normal", " not good", "I do not know", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel421']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];
	D6.scenario.defInput["i721"] = {  cons:"consRFsum",  title:"Refrigerator performance",  unit:"",  text:"Is energy-saving performance of the refrigerator good? (First grade)", inputType:"sel721", right:"", postfix:"", nodata:"", varType:"Number", min:"", max:"", defaultValue:"-1", d11t:"3",d11p:"0",d12t:"2",d12p:"1",d13t:"1",d13p:"2",d1w:"1",d1d:"0", d21t:"3",d21p:"0",d22t:"2",d22p:"1",d23t:"1",d23p:"2",d2w:"1",d2d:"0", d31t:"",d31p:"",d32t:"",d32p:"",d33t:"",d33p:"",d3w:"",d3d:""}; 			D6.scenario.defSelectValue["sel721"]= [ "Please Choose", "Very Good", "Normal", " not good", "I do not know", "", "", "", "", "", "", "", "", "", "", "" ];			D6.scenario.defSelectData['sel721']= [ '-1', '1', '2', '3', '4', '', '', '', '', '', '', '', '', '', '', '' ];




	D6.scenario.defMeasures['mTOsolar'] = { mid:"1",  name:"mTOsolar",  title:"To install a solar power generation",  easyness:"0.5",  refCons:"consTotal",  titleShort:"Solar power", level:"",  figNum:"25",  lifeTime:"20",  price:"400000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Surplus in power generation electricity, you can have bought high in the electric power company. 2016 FY 31 yen per 1kWh (Tokyo Electric Power Company, Chubu Electric Power, the case of the Kansai Electric Power Co., Inc.), or 33 yen (it is high in the other of the power company, the installation of a device to stop the purchase when the sunlight has become surplus is required). Panel is only in power generation to install, long life because there is no part that runs such as motors, also it requires relatively little maintenance. The conversion to an AC device called a conditioner will need to be replaced every 10 years. <br> Also, the introduction of solar power generation equipment, device state to sell electricity is displayed will be installed. Or was able to how much power the electricity, what was consumed much in the home is displayed, there is also that depending on the model are displayed in each time zone. Amount of money that can be sold is also displayed, it has also out the effect of reducing the usage of natural and electricity in order to sell more.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mTOhems'] = { mid:"2",  name:"mTOhems",  title:"Installing the HEMS equipment",  easyness:"1",  refCons:"consTotal",  titleShort:"HEMS equipment", level:"",  figNum:"3",  lifeTime:"20",  price:"200000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"The HEMS, or finely grasp every electrical time you are using at home, it is a system that the consumer electronics products, such as air conditioning, or to automatic control for energy saving. If you check the features, such as use of electricity, or lead to energy saving if any thing, the point is you will see. Based on the graph to be displayed, when what is often consumption of electricity, what is the cause of the, please consider.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mTOsolarSmall'] = { mid:"3",  name:"mTOsolarSmall",  title:"Put the solar panels on the balcony",  easyness:"2",  refCons:"consTotal",  titleShort:"Veranda sunlight", level:"",  figNum:"25",  lifeTime:"10",  price:"50000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Rather than to say that sunlight is installed on the roof, but to put a panel of small size that you can carry, such as on the balcony, you can use a bit of applications, such as lighting. There is also that it is sold as a ready-made goods, but, can also make your own, the material can be procured in the Internet shopping and home improvement. To <br> a sunny day in the sense of like hang out futon, is devoted to the sun to charge the battery, you can take advantage of in minutes which has been charged. Is such a cloudy day, you might not be able to use electricity.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWecocute'] = { mid:"101",  name:"mHWecocute",  title:"Replace electiric water heater to heat pump",  easyness:"2",  refCons:"consHWsum",  titleShort:"heat pump water heater", level:"",  figNum:"8",  lifeTime:"10",  price:"400000",  roanShow:"1",  standardType:"電気温水器",  subsidy :"",  advice:"Eco Cute (natural refrigerant heat pump water heater) is, is equipped with a device such as the air conditioning of the outdoor unit, in order to boil water using the outside air of the heat, efficiency will be better three times more than the electric water heater. Such as use up the hot water that was stored in the hot water storage tank, family size is large, it is recommended to home take a bath every single day. <br> In addition, when the conservative boil set in consideration of the use of the usual hot water, leads to further energy saving.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWecojoze'] = { mid:"102",  name:"mHWecojoze",  title:"Replace water heater to latent heat recovery type gas heater",  easyness:"2",  refCons:"consHWsum",  titleShort:"latent heat recovery gas heater", level:"",  figNum:"10",  lifeTime:"10",  price:"200000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"Eco-Jaws (latent heat recovery type) is, because of the mechanism to escape though heat is also recovered as steam, has improved efficiency is more than 10% compared to the existing gas water heater. It is almost the same shape as the existing gas water heater, but has become a little large for the heat recovery, also it has also attached drain flowing water which is generated when the recovery of heat. By eco Jaws rates by the gas company, there is also a case where the gas bill is discounted.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWecofeel'] = { mid:"103",  name:"mHWecofeel",  title:"Replace water heater to latent heat recovery type kerosene heater",  easyness:"1",  refCons:"consHWsum",  titleShort:"latent heat recovery kerosene heater", level:"",  figNum:"10",  lifeTime:"10",  price:"250000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"Eco-feel (latent heat recovery type) is, because of the mechanism to escape though heat is also recovered as steam, efficiency has been improved by 10% or more. It is almost the same shape as the existing kerosene boiler, but has become a little large for the heat recovery, also has also attached drain flowing water which is generated when the recovery of heat. Type of gas instead of kerosene is called Ekojosu.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWenefarm'] = { mid:"105",  name:"mHWenefarm",  title:"Replace water heater to fuel cell",  easyness:"0.5",  refCons:"consHWsum",  titleShort:"Fuel cell water heater", level:"5",  figNum:"10",  lifeTime:"10",  price:"1200000",  roanShow:"1",  standardType:"エコジョーズ",  subsidy :"",  advice:"ENE-FARM is efficient device boil some water while the power generation by the fuel cell. By the amount of electricity consumed in the home performs a power generation, it can be utilized in reservoir the generated waste heat as hot water. At home that use a lot of electricity and hot water, you come out a large energy-saving effect.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWsolarHeater'] = { mid:"106",  name:"mHWsolarHeater",  title:"Installing solar water heater (the natural circulation type)",  easyness:"1",  refCons:"consHWsum",  titleShort:"Solar water heater", level:"",  figNum:"9",  lifeTime:"10",  price:"400000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"If the warm weather of a sunny day, you can enter only in the bath hot water boiled in the heat of the sun. Can also be utilized by warming in the winter, it greatly Herase the energy consumption of hot water. It is possible to boil some water in a relatively simple mechanism, as an effective global warming, has expanded the use all over the world.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWsolarSystem'] = { mid:"107",  name:"mHWsolarSystem",  title:"Installing a solar system (forced circulation)",  easyness:"1",  refCons:"consHWsum",  titleShort:"Solar system", level:"",  figNum:"9",  lifeTime:"10",  price:"600000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"It is a solar water heater to use at a hot water storage tank on the ground. Since there is no tank on the roof, it does not take the load. If the warm weather of a sunny day, you can enter only in the bath hot water boiled in the heat of the sun. Can also be utilized by warming in the winter, it greatly Herase the energy consumption of hot water. It is possible to boil some water in a relatively simple mechanism, as an effective global warming, has expanded the use all over the world.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWshowerHead'] = { mid:"108",  name:"mHWshowerHead",  title:"Attaching a water-saving shower head",  easyness:"5",  refCons:"consHWshower",  titleShort:"Water-saving shower head", level:"",  figNum:"11",  lifeTime:"10",  price:"2000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Possession of shower has become possible to replace part of the (head). Yes to reduce the hole that hot water comes out, in addition to come out vigorously hot water, some of them at hand can stop the water, you can reduce the use of about 30 percent water. You can buy at the hardware store or electronics stores.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWshowerTime'] = { mid:"109",  name:"mHWshowerTime",  title:"The use of the shower one minute shorter per person per day",  easyness:"4",  refCons:"consHWshower",  titleShort:"Shower shortening", level:"",  figNum:"11",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Shower energy consumption of large, energy that is turned 300 cars television while you are out of the hot water will be consumed. Makes a big cut just stop a little. Such as a stop when you are washing the body, let's be careful to reduce the use of time.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWshowerTime30'] = { mid:"110",  name:"mHWshowerTime30",  title:"The use of the shower 30% shorter",  easyness:"3",  refCons:"consHWshower",  titleShort:"shower 30% shotening", level:"",  figNum:"11",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Shower energy consumption of large, energy that is turned 300 cars television while you are out of the hot water will be consumed. Makes a big cut just stop a little. Such as a stop when you are washing the body, let's be careful to reduce the use of time.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWkeep'] = { mid:"111",  name:"mHWkeep",  title:"Not to keep hot by reheating bath tub water",  easyness:"3",  refCons:"consHWtub",  titleShort:"not keep hot bath for long time", level:"",  figNum:"12",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"The reheating, issued a hot water bath to the outside once, you need to send to the water heater. Will cool in the meantime, it takes extra energy. Without the reheating function, followed by the will to a large reduction is that there is. Also by making the lid to the tub, it can also be difficult to cool.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWsaveMode'] = { mid:"112",  name:"mHWsaveMode",  title:"Setting theHeat pump water heater  to saving mode",  easyness:"3",  refCons:"consHWsum",  titleShort:"Heat pump saving mode", level:"",  figNum:"8",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Cute looks like it is setting of the hot water to boil at night. When the boil in the margin so that there is no hot water shortage, loss will be larger at the time of heat insulation. In the day of the normal use, especially when there is no such as a hot water out, by setting in saving mode, it will be energy saving.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWstopAutoKeep'] = { mid:"113",  name:"mHWstopAutoKeep",  title:"Rather than continue the automatic keep warm, re-boil just before the next person enters",  easyness:"3",  refCons:"consHWtub",  titleShort:"Not automaticaly keep warm", level:"",  figNum:"12",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"In automatic heat retention, often to warm send out the hot water bath until the outdoor water heater, heat waste will increase. You need without having to keep warm by continuing enters, but without the automatic warm if would cool vacant time, you will save energy by re-warmed immediately before entering later.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWinsulation'] = { mid:"114",  name:"mHWinsulation",  title:"To reform the insulation type of bathtub",  easyness:"1",  refCons:"consHWtub",  titleShort:"Insulation bathtub", level:"",  figNum:"12",  lifeTime:"10",  price:"600000",  roanShow:"",  standardType:"普及型",  subsidy :"",  advice:"Tub is covered with a heat insulating material such as polystyrene foam, it has increased the type that is hot water is less likely to cool. Remodeling of the tub will be necessary, but difficult minute to cool, you do not have to the reheating. In addition, if the bathroom is also in the unit bus, it will also be difficult to escape the heat from the entire bathroom.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWonlyShower'] = { mid:"115",  name:"mHWonlyShower",  title:"Use only shower and not to fill bathtub in the summer",  easyness:"3",  refCons:"consHWtub",  titleShort:"Not fill hot water in bathtub in the summer", level:"",  figNum:"11",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"The amount of hot water in the tub is equivalent in terms of the time you are using the shower 10 to 20 minutes. Without the automatic water filling, but it may rather increase at home to wash using only hot water in the bathtub, will be the minute a reduction in the tub if you have a combination of shower.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWdishTank'] = { mid:"116",  name:"mHWdishTank",  title:"Not to leave flow of hot water in the dishwasher",  easyness:"2",  refCons:"consHWdishwash",  titleShort:"stop leave flow of hot water", level:"",  figNum:"13",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Such as stopping the hot water when you are washed with detergent, please devised shorten the time to issue as much as possible hot water. When the oil stains should wipe off earlier in the old cloth, etc., you need faster rinsing.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWdishWater'] = { mid:"117",  name:"mHWdishWater",  title:"Not wash the dishes with hot water when the water is not cold",  easyness:"2",  refCons:"consHWdishwash",  titleShort:"Dish washing by cold water", level:"",  figNum:"13",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"During the warmer months, you can rinse without using hot water enough. For example, if you use 10 minutes the hot water in the dishwasher, the energy of the only boil the hot water pot 3 cups are consumed. Such as oil dirt should wipe with old cloth, etc., dishwasher also requires early in devising.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCKdishWasher'] = { mid:"118",  name:"mCKdishWasher",  title:"Use the dishwasher",  easyness:"2",  refCons:"consHWdishwash",  titleShort:"Dishwasher", level:"",  figNum:"15",  lifeTime:"10",  price:"80000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Compared to wash sink the dishes in hot water, because it is washed reservoir hot water, more of dish washing and drying machine will be energy saving. If you wash with water rather than Naooyu is the energy-saving than the dishwasher. It is also an effective way of devising in hand washing.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWtap'] = { mid:"119",  name:"mHWtap",  title:"Installing a water conservation plug in the kitchen, washroom",  easyness:"2",  refCons:"consHWsum",  titleShort:"water conservation  plug", level:"",  figNum:"13",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Or as soon stopped at hand, such as a mechanism that no more hot water if not for the single lever to the left, usability is also the same, there is equipment to reduce the consumption of hot water more than 20%.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWreplaceToilet5'] = { mid:"120",  name:"mHWreplaceToilet5",  title:"To install a water-saving toilet",  easyness:"1",  refCons:"consHWtoilet",  titleShort:"Water-saving toilet", level:"",  figNum:"19",  lifeTime:"10",  price:"30000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"It must be replaced by the construction of the toilet body, but the amount of water than before you can be reduced to less than half. Previously what was necessary about 13 liters is, are able to use in about 4-6 liters, you can significantly reduce the water bill.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWreplaceToilet'] = { mid:"121",  name:"mHWreplaceToilet",  title:"Install instantaneous type of warm water washing toilet seat",  easyness:"1",  refCons:"consHWtoilet",  titleShort:"Instantaneous type toilet seat", level:"",  figNum:"19",  lifeTime:"10",  price:"30000",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"The new product has energy-saving features, such as the type that warm the moment you open the lid, it requires less power consumption. Please choose the energy-saving annual power consumption, which is displayed in the catalog as a reference.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHWtemplatureToilet'] = { mid:"122",  name:"mHWtemplatureToilet",  title:"Lower the temperature of warm toilet seat",  easyness:"3",  refCons:"consHWtoilet",  titleShort:"Toilet seat temperature adjustment", level:"",  figNum:"19",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Time not cold or turn off the heat insulation, you can save energy by setting the temperature set to be lower. Applying the cover on the toilet seat, it will be less likely to feel the cold.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHWcoverTilet'] = { mid:"123",  name:"mHWcoverTilet",  title:"Cover the warm toilet seat",  easyness:"3",  refCons:"consHWtoilet",  titleShort:"Cover the warm toilet seat", level:"",  figNum:"19",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"If you leave the state raised the lid of the toilet seat, the heat tends to escape the heat insulation, power consumption will increase. When you have finished use, it will save energy by closing the lid. If there is no cold, also it leads to energy saving that you do not warmth.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mACreplace'] = { mid:"201",  name:"mACreplace",  title:"Replace to energy efficient air conditioniner",  easyness:"1",  refCons:"consAC",  titleShort:"Energy-efficinet air conditioner", level:"",  figNum:"1",  lifeTime:"10",  price:"160000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Even if the same only cooling and heating, and air conditioning with high energy-saving performance that live in the power consumption of about half compared to 15 years. The time to choose, what number of ★ mark of a unified energy-saving labels often and, please select the energy-saving referring to the display of the annual electric bill. The performance of the heating are also up, it is possible to reduce CO2 emissions as compared to the heating of the gas and kerosene.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mACreplaceHeat'] = { mid:"202",  name:"mACreplaceHeat",  title:"Replace to energy -efficient  air conditioniner, and heat by it",  easyness:"2",  refCons:"consAC",  titleShort:"Energy-efficinet air conditioning + heating", level:"",  figNum:"1",  lifeTime:"10",  price:"160000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"And the heating and cooling same only, there is air conditioning with high energy-saving performance that live in the power consumption of about half compared to 15 years. Air conditioning in order to take advantage of the outdoor heat, even when compared with heating, such as gas and kerosene, CO2 emissions will be less. The time to choose, what number of ★ mark of a unified energy-saving labels often and, please select the energy-saving referring to the display of the annual electric bill.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mACchangeHeat'] = { mid:"203",  name:"mACchangeHeat",  title:"Heating by air conditioniner",  easyness:"2",  refCons:"consACheat",  titleShort:"Air conditioning Heating", level:"",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"When the heating in the air conditioning, to take advantage of the outside air of heat, can significantly reduce CO2 emissions compared to the heating of the gas and kerosene, it will lead to a reduction in utility costs. It should be noted that, because you do not warm up with the firm warm air to the floor does not reach, or heating in a strong wind set, please take advantage of, such as fan. In addition, recent air conditioning because it has been enhanced, the ability to warm up to the floor, please try by all means.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTchangeHeat'] = { mid:"204",  name:"mHTchangeHeat",  title:"The home of heating by air-conditioner",  easyness:"1",  refCons:"consHTsum",  titleShort:"Air conditioning Heating", level:"",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"When the heating in the air conditioning, to take advantage of the outside air of heat, can significantly reduce CO2 emissions compared to the heating of the gas and kerosene, it will lead to a reduction in utility costs. It should be noted that, because you do not warm up with the firm warm air to the floor does not reach, or heating in a strong wind set, please take advantage of, such as fan. In addition, recent air conditioning because it has been enhanced, the ability to warm up to the floor, please try by all means.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCOsunCut'] = { mid:"205",  name:"mCOsunCut",  title:"In cooling, to cut the solar radiation use the blind, etc.",  easyness:"4",  refCons:"consCOsum",  titleShort:"Solar radiation cut", level:"",  figNum:"1",  lifeTime:"5",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"The solar radiation enters at the time of cooling is like placing the stove in the window. Better to intercept becomes energy saving, you can spend more cool. It should be noted that in the curtain because it warms the inside of the curtain of the window, you will cool is better to the blind-Yoshizu out the window. In addition, from around May, and grow planting, such as bitter gourd, morning glory, loofah, in the summer finished the green curtain admirable, you can spend cool.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCOtemplature'] = { mid:"206",  name:"mCOtemplature",  title:"The temperature setting of the air conditioning sparingly (28 ℃)",  easyness:"3",  refCons:"consACcool",  titleShort:"Set cooling temperature to 28℃", level:"",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Estimated heating setting temperature considering the energy saving is 20 ℃ or less. Please think to the extent that the warm to rather than to ensure not cold. Since the cold of how to feel there are individual differences do not need to be unreasonable, but, or the overdress, by, for example, warm meal, please try to devise. 1 ℃ by the conservative, you can reduce the CO2 emissions and utility costs approximately 10%. In addition to the end of the season is early to be effective to put away the heating and cooling equipment.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTtemplature'] = { mid:"207",  name:"mHTtemplature",  title:"To conservative (20 ℃) ​​the temperature setting of the heating ",  easyness:"3",  refCons:"consACheat",  titleShort:"Set heating temperature to 20℃", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Measure of the cooling setting temperature considering the energy saving is 28 ℃ or more. Instead of the cool, please think to the extent that the so as not hot. Since the heat of how to feel there are individual differences do not need to be unreasonable, but, you can take advantage of the fan, please try to devise, for example, by the light clothes. I feel cool when the wind enters open the window, even such as wind chimes sound, makes you feel cool. 1 ℃ by the conservative, you can reduce the CO2 emissions and utility costs approximately 10%. In addition to the end of the season is early to be effective to put away the heating and cooling equipment.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTwindowSheet'] = { mid:"208",  name:"mHTwindowSheet",  title:"During the heating, put a thermal insulation sheet for windows",  easyness:"3",  refCons:"consACheat",  titleShort:"Window insulation sheet", level:"",  figNum:"4",  lifeTime:"3",  price:"3000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Insulation sheet (so-called bubble wrap sheet of such a thing) is, are sold at home centers and the like. Only can be pasted to the window of water, not only there is a thermal insulation effect, it can suppress the condensation.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTdouble'] = { mid:"209",  name:"mHTdouble",  title:"Install the window with the multi-layer glass",  easyness:"1",  refCons:"consACheat",  titleShort:"Double-glazing", level:"5",  figNum:"4",  lifeTime:"30",  price:"100000",  roanShow:"",  standardType:"",  subsidy :"When insulation work of the whole window of the house is done, there is a system of deduction of property tax and income tax deduction according to loan balance depending on the cost of construction.",  advice:"Heating time can be reduced to about a lot is the ratio of heat escaping from the windows and sash, how to escape the heat by replacing the usual single glass to double glazing half. Not only energy saving, there is also an advantage that condensation is less likely to month. Since there is a method in accordance with the house, please consult such as builders.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTlowe'] = { mid:"210",  name:"mHTlowe",  title:"Install the window with  the resin frame low-E glass",  easyness:"1",  refCons:"consACheat",  titleShort:"Resin frame low-E glass", level:"",  figNum:"4",  lifeTime:"30",  price:"150000",  roanShow:"",  standardType:"",  subsidy :"When insulation work of the whole window of the house is done, there is a system of deduction of property tax and income tax deduction according to loan balance depending on the cost of construction.",  advice:"Heating time can be reduced to about a lot is the ratio of heat escaping from the windows and sash, how to escape the heat by replacing half. Compared to the normal double glass, has excellent thermal insulation, let also reduce heat loss from the frame. Not only energy saving, there is also an advantage that condensation is less likely to month. Since there is a method in accordance with the house, please consult such as builders.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTuchimado'] = { mid:"211",  name:"mHTuchimado",  title:"Attaching an inner window",  easyness:"2",  refCons:"consACheat",  titleShort:"The inner window", level:"5",  figNum:"4",  lifeTime:"30",  price:"60000",  roanShow:"",  standardType:"",  subsidy :"When insulation work of the whole window of the house is done, there is a system of deduction of property tax and income tax deduction according to loan balance depending on the cost of construction.",  advice:"During the heating is often the proportion of heat escaping from the windows and sash, it will be more difficult to heat escapes by attaching the internal windows in addition to the inside of the current window and sash. The inner window is relatively construction costs cheaper, construction work in about one hour to complete, is also effective in the condensation prevention and crime prevention. Please consult, such as in construction company for more information.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTdoubleGlassAll'] = { mid:"212",  name:"mHTdoubleGlassAll",  title:"Replace the window glass of all of the room to double-glazing",  easyness:"1",  refCons:"consHTsum",  titleShort:"The entire room in multi-layer glass", level:"",  figNum:"4",  lifeTime:"30",  price:"100000",  roanShow:"",  standardType:"",  subsidy :"When insulation work of the whole window of the house is done, there is a system of deduction of property tax and income tax deduction according to loan balance depending on the cost of construction.",  advice:"Heating time can be reduced to about a lot is the ratio of heat escaping from the windows and sash, how to escape the heat by replacing the usual single glass to double glazing half. Not only energy saving, there is also an advantage that condensation is less likely to month. Since there is a method in accordance with the house, please consult such as builders.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTuchimadoAll'] = { mid:"213",  name:"mHTuchimadoAll",  title:"Attaching a  inner window to all of the room",  easyness:"1",  refCons:"consHTsum",  titleShort:"The inner window the whole room", level:"",  figNum:"4",  lifeTime:"30",  price:"100000",  roanShow:"",  standardType:"",  subsidy :"When insulation work of the whole window of the house is done, there is a system of deduction of property tax and income tax deduction according to loan balance depending on the cost of construction.",  advice:"During the heating is often the proportion of heat escaping from the windows and sash, it will be more difficult to heat escapes by attaching the internal windows in addition to the inside of the current window and sash. The inner window is relatively construction costs cheaper, construction work in about one hour to complete, is also effective in the condensation prevention and crime prevention. Please consult, such as in construction company for more information.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTloweAll'] = { mid:"214",  name:"mHTloweAll",  title:"Replace the window glass of all of the resin frame low-E glass",  easyness:"1",  refCons:"consHTsum",  titleShort:"The entire room in the resin frame low-E glass", level:"",  figNum:"4",  lifeTime:"30",  price:"150000",  roanShow:"",  standardType:"",  subsidy :"When insulation work of the whole window of the house is done, there is a system of deduction of property tax and income tax deduction according to loan balance depending on the cost of construction.",  advice:"Heating time can be reduced to about a lot is the ratio of heat escaping from the windows and sash, how to escape the heat by replacing half. Compared to the normal double glass, has excellent thermal insulation, let also reduce heat loss from the frame. Not only energy saving, there is also an advantage that condensation is less likely to month. Since there is a method in accordance with the house, please consult such as builders.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mACfilter'] = { mid:"215",  name:"mACfilter",  title:"To clean the air conditioner filter",  easyness:"2",  refCons:"consACheat",  titleShort:"Filter cleaning", level:"5",  figNum:"1",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Air conditioning is is desirable to filter cleaning every time you use one month. When the eye of the filter is clogged, the blower is weakened, it will especially fall large efficiency in heating. In particular, in the room, including the kitchen, please be cleaned frequently so easy to luck is oily smoke. In a recent air conditioning, there are automatically some models to clean the filter.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTtime'] = { mid:"216",  name:"mHTtime",  title:"Shortenin one hour of use of the heating",  easyness:"3",  refCons:"consACheat",  titleShort:"Heating 1 hour shortening", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Heating is prone to with long time left on. Try to Stop getting warmer. Such as at bedtime or before going out is one way also to stop in 30 minutes before. In addition, because it is a waste to heat the room that no one, Try to cut as much as possible.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTpartialHeating'] = { mid:"217",  name:"mHTpartialHeating",  title:"By using the kotatsu and hot carpet, stop the room heating",  easyness:"2",  refCons:"consACheat",  titleShort:"Kotatsu/ Hot carpet", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Partial heating such as kotatsu and hot carpet, so warm the only close to the body, energy consumption is low. Also by lowering the setting temperature of the room heating large, you can maintain the same comfort. In particular, or was the open-air structure, in the case of a structure where the stairs from the heating room is continuing on the upper floor, the air was warm pains can cause missing in the ceiling, efficiency to warm the room will be bad. In such a case, please try heating also consider to warm the feet. Or wearing socks, it is also effective to the overdress. If you want to use the <br> kotatsu and hot carpet, or lined with insulation sheet between the floor, and also in the thick quilt of kotatsu, it will reduce the more power consumption.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTceiling'] = { mid:"218",  name:"mHTceiling",  title:"Circulate the warm air around ceiling during the heating",  easyness:"2",  refCons:"consACheat",  titleShort:"Circulator", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"And have a room heating, there are many that the temperature nearly 5 ~ 10 ℃ prefer the ceiling than the floor it is higher. Or stirred at such fan, that stirred by the circulator and fan upwards, it is possible to deliver the warm air to the floor, comfortably spend. Or wearing socks, it is also effective to the overdress.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTareaLimit'] = { mid:"219",  name:"mHTareaLimit",  title:"Close the room doors and bran during the heating, to reduce the heating range",  easyness:"2",  refCons:"consACheat",  titleShort:"Reduce Heating range", level:"5",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Wide room to heating a requires a lot of energy. When the separate room, such as in the bran and doors, you warm up it may be a small heating appliances. If the ceiling, such as open-air structure high, on the other hand, will require a lot of heating.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTdanran'] = { mid:"220",  name:"mHTdanran",  title:"To spend in one room in the family hearthstone",  easyness:"3",  refCons:"consHTsum",  titleShort:"Family hearthstone", level:"",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"When the family members spend in a separate room, you need to put the heating and lighting in each. By spend together in the room, you can reduce both lighting heating. While certainly looking forward to the time of the reunion, please try to energy conservation.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTbiomass'] = { mid:"221",  name:"mHTbiomass",  title:"To introduce a wood-burning/pelleet stove",  easyness:"1",  refCons:"consACheat",  titleShort:"Firewood pellet stove", level:"",  figNum:"3",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"With a wood stove or pellet stove, you can reduce the carbon dioxide emissions because it does not use fossil fuels such as oil and gas. It is the heating fuel from the old days, but rather in a fashionable make, such as fireplaces, are increasingly the case to be introduced also in urban areas. Pellet stove, in order to automatically supply the fuel, is also merit not take the trouble. For installation, such as installation of the chimney, you will need construction work.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mHTcentralNotUse'] = { mid:"222",  name:"mHTcentralNotUse",  title:"Lowering the set temperature of the room that is not used in central heating",  easyness:"2",  refCons:"consHTsum",  titleShort:"Heating temperature of unused room", level:"5",  figNum:"3",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"If you have a central heating, it is allowed to warm to room you do not use. If you would stop the heating of the room you do not use and there is a problem, such as condensation and freezing, please sparingly the heating set to such a degree that does not happen. Measure of the heating setting in the room there are people is 20 ℃.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mHTkanki'] = { mid:"223",  name:"mHTkanki",  title:"Installing a total heat exchange ventilation system",  easyness:"1",  refCons:"consHTsum",  titleShort:"Total heat exchange ventilation", level:"",  figNum:"3",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"The new house has been mandated the introduction of ventilation equipment, but when you have a heating, will also be throwing away the warm air. Heat is recovered, when the ventilation system that can reduce the amount of run away, you can reduce the loss of the big heat.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mPTstopPot'] = { mid:"301",  name:"mPTstopPot",  title:"Not to keep warm in the electric pot",  easyness:"2",  refCons:"consCKpot",  titleShort:"Not pot kept warm", level:"",  figNum:"17",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"In an electric kettle, a lot of electricity has been consumed for heat insulation. Or to boil water if necessary, please try to take advantage of the thermos.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mPTstopPotNight'] = { mid:"302",  name:"mPTstopPotNight",  title:"Stop the warmth of an electric kettle to go out or at night",  easyness:"3",  refCons:"consCKpot",  titleShort:"Nighttime warmth stop", level:"",  figNum:"17",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Such as going out at the time or at night, in the case for a long time do not use hot water, you can reduce the heat-retention power in that you stop. And rice cooker, such as thermal insulation of the toilet seat also, better will be the energy saving to be stopped as well.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mPTstopRiceCooker'] = { mid:"303",  name:"mPTstopRiceCooker",  title:"Stop the warmth of the rice cooker",  easyness:"3",  refCons:"consCKrice",  titleShort:"Not keep rice cooker warm", level:"",  figNum:"18",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"To stop the heat insulation of the rice cooker, should be re-warmed in a microwave oven on when you eat will be energy saving. When a long time warm, sometimes rice is discolored, delicious is better at room temperature warm.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mPTreplacePot'] = { mid:"304",  name:"mPTreplacePot",  title:"Replace the electric kettle to energy-saving",  easyness:"2",  refCons:"consCKpot",  titleShort:"Energy-saving electric kettle", level:"",  figNum:"17",  lifeTime:"",  price:"",  roanShow:"",  standardType:"既存型",  subsidy :"",  advice:"There is an electric kettle that is the insulation, such as a thermos, it needs less electricity consumption of heat insulation. In the over-the-counter may be kept warm power consumption is being displayed, please do this as a reference.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mCKflame'] = { mid:"305",  name:"mCKflame",  title:"Adjust flame not protrude from the pot",  easyness:"2",  refCons:"consCKcook",  titleShort:"Cooking flame adjustment", level:"",  figNum:"14",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Flame that protrude from the bottom of the pan, only gas is wasted, not a reduction of the cooking time. Let's use to adjust to such a degree that does not protrude from the bottom of the pan. In addition to this, by devising to the setup good cooking, you can reduce the consumption of gas.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mDRsolar'] = { mid:"401",  name:"mDRsolar",  title:"To sun-dried on a clear day without a clothes dryer or drying function",  easyness:"2",  refCons:"consDRsum",  titleShort:"sun dry", level:"",  figNum:"16",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Drying is a handy feature, but it takes more than 10 times the energy of the laundry. As much as possible to the sun, not to use the drying function is effective.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mDRheatPump'] = { mid:"402",  name:"mDRheatPump",  title:"Replace to the heat pump washing machine",  easyness:"1",  refCons:"consDRsum",  titleShort:"Heat pump drying", level:"",  figNum:"16",  lifeTime:"10",  price:"140000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Among the clothes dryer and the drying function with washing machine, one of the heat pump, the energy consumption compared to conventional drying machine you need about half. Well if you want to use the drying function also has worked large savings of utility costs. However, since the drying function itself uses a lot of energy, it is desirable not to use as much as possible drying function.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mLIceilingLED'] = { mid:"501",  name:"mLIceilingLED",  title:"Replace the fluorescent lighting fixtures to LED ceiling light",  easyness:"4",  refCons:"consLI",  titleShort:"LED Light", level:"",  figNum:"6",  lifeTime:"20",  price:"",  roanShow:"",  standardType:"蛍光灯",  subsidy :"",  advice:"LED energy-saving performance is high, and long-lasting. Because some of the cover insect does not turn on, you can save even effort of cleaning. Replace from lighting equipment, but since there is a socket, usually can be replaced without asked to electrical shop.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mLILED'] = { mid:"502",  name:"mLILED",  title:"Replace to the LED",  easyness:"2",  refCons:"consLI",  titleShort:"LED bulb", level:"",  figNum:"5",  lifeTime:"40000h",  price:"2000",  roanShow:"",  standardType:"電球",  subsidy :"",  advice:"And using the same socket as the light bulb, you can replace as it is when the light bulb is broken. The consumption of electricity can be reduced 80%, life will be more than 40 times.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mLIsensor'] = { mid:"503",  name:"mLIsensor",  title:"Replace light to the human presence sensor type",  easyness:"2",  refCons:"consLI",  titleShort:"Sensor lighting", level:"",  figNum:"5",  lifeTime:"10",  price:"",  roanShow:"",  standardType:"電球",  subsidy :"",  advice:"Far from wearing the lights, because to get a person approaches, security performance has also been high. Tsui and time is short minute, you can be a significant energy saving.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mLItime'] = { mid:"504",  name:"mLItime",  title:"A time to use the lighting short 1 hour",  easyness:"3",  refCons:"consLI",  titleShort:"Lighting shortening", level:"",  figNum:"6",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Many of electricity will flow when turning, but since it is a fraction of a second, better result, frequently turn off will be energy saving. Habit to turn off when leaving the room is important. In addition, when exposed to bright light at night, will crazy sleep cycle, it will be not good for the body.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mLIoff'] = { mid:"505",  name:"mLIoff",  title:"Turn off the lighting when you leave the room",  easyness:"4",  refCons:"consLI",  titleShort:"Lighting off", level:"",  figNum:"6",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"When you leave the room, Try to turn off the frequently lighting. Also plans to come back soon, but many of the electrical flow when turning, because it is a fraction of a second, better result, frequently turn off will be energy saving.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mTVreplace'] = { mid:"601",  name:"mTVreplace",  title:"Replace to energy-saving TV",  easyness:"2",  refCons:"consTV",  titleShort:"Saving-energy TV", level:"",  figNum:"7",  lifeTime:"10",  price:"40000",  roanShow:"",  standardType:"普及型",  subsidy :"",  advice:"Because it has raised the energy-saving performance, TV to be less than half the power consumption if the same size have been sold. In the over-the-counter, so please choose the one as much as possible is cheap annual electricity bill.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mTVradio'] = { mid:"602",  name:"mTVradio",  title:"Use radio instead of TV",  easyness:"1",  refCons:"consTVsum",  titleShort:"use radio", level:"",  figNum:"7",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Radio is the corner in one of the power consumption of 10 to 100 minutes of television. If you have turned on the TV for lonely, please try in place, such as the radio or CD.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mTVtime'] = { mid:"603",  name:"mTVtime",  title:"Shorten the turning time of TV for one hour a day",  easyness:"3",  refCons:"consTV",  titleShort:"TV shortening", level:"",  figNum:"7",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Determine the program to look in advance to make sure you turn off Once you have seen. As you to leave turned on, it may become seen with until the next program. Also in the case of video games, because it is a long period of time tend, Try to shorten the time to use.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mTVbright'] = { mid:"604",  name:"mTVbright",  title:"Adjuste brightness of TV screen",  easyness:"2",  refCons:"consTV",  titleShort:"TV brightness adjustment", level:"",  figNum:"7",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"You have to be able to adjust the brightness of the TV screen. Sales at the time have been bright and set to, in this state is the glare too much at home, power consumption will also be many. By conservatively set the brightness, power consumption about 2 to 4 percent is reduced. In the new TV, there is also a type of self-regulation in the sensor.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mRFreplace'] = { mid:"701",  name:"mRFreplace",  title:"Replace the refrigerator energy-saving",  easyness:"2",  refCons:"consRF",  titleShort:"Energy saving refrigerator", level:"",  figNum:"2",  lifeTime:"10",  price:"150000",  roanShow:"",  standardType:"普及型",  subsidy :"",  advice:"There are energy-saving refrigerator that live in the electricity of about half compared to the previous model. The time to choose, what number of ★ mark of a unified energy-saving labels often and, please select the energy-saving referring to the display of the annual electric bill. At the time of Gai換 is, Try to get taken up in the old refrigerator in the home appliance recycling system.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mRFstop'] = { mid:"702",  name:"mRFstop",  title:"Stop one refrigerator",  easyness:"2",  refCons:"consRF",  titleShort:"Refrigerator stop", level:"",  figNum:"2",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"If you are using two or more, please stop one. If you do not use will consume as much electricity and large even with a small refrigerator, but you might feel too good, because the large environmental impact just to put the electricity will occur, should not use it is desirable is.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mRFwall'] = { mid:"703",  name:"mRFwall",  title:"Set refrigerator space from the wall",  easyness:"4",  refCons:"consRF",  titleShort:"Refrigerator position", level:"",  figNum:"2",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Refrigerator is a standard that is released about 5cm from the wall. Refrigerator has to escape the heat from the sides and the ceiling surface, but when in contact with the wall becomes difficult to escape the heat, power consumption will be increased about 10%.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mRFtemplature'] = { mid:"704",  name:"mRFtemplature",  title:"Conservative refrigerator temperature setting",  easyness:"4",  refCons:"consRF",  titleShort:"Refrigeration temperature", level:"",  figNum:"2",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Refrigerator can temperature control. Tsuyokara into, respectively Then to weak it is about 10% energy saving from within. Since the pain of food will be a little faster, please try while confirming that there is no hindrance.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCRreplace'] = { mid:"801",  name:"mCRreplace",  title:"Replace to energy-efficient car",  easyness:"2",  refCons:"consCR",  titleShort:"Car replacement", level:"",  figNum:"21",  lifeTime:"8",  price:"1800000",  roanShow:"",  standardType:"普及型",  subsidy :"The introduction of eco-cars has the benefit of  tax reduction",  advice:"In addition to hybrid and electric vehicles, by technological improvements, it will fuel-efficient vehicles, which requires only about the existing fuel consumption is half have been sold have been developed. Please choose taking into account the fuel consumption at the time of purchase.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mCRreplaceElec'] = { mid:"802",  name:"mCRreplaceElec",  title:"Replace to electric car",  easyness:"1",  refCons:"consCR",  titleShort:"Electric car", level:"",  figNum:"21",  lifeTime:"7",  price:"3000000",  roanShow:"",  standardType:"",  subsidy :"",  advice:"For electricity to the rechargeable battery instead of gasoline, it runs by turning the motor instead of the engine. Higher efficiency than that of the engine, has been sold as a sufficient practical car. However, the charging station is still small, and it takes time to charge, it is convenient to charge at night.",   lifestyle:"",   season:"wss"};
	D6.scenario.defMeasures['mCRecoDrive'] = { mid:"803",  name:"mCRecoDrive",  title:"Bear in minds eco-driving as idling stop",  easyness:"3",  refCons:"consCRsum",  titleShort:"eco Drive", level:"",  figNum:"21",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"In addition to the idling stop, by soft start in at the start, you can improve about 10% of the fuel consumption.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCRtrain'] = { mid:"804",  name:"mCRtrain",  title:"Use public transportation such as the train or bus",  easyness:"2",  refCons:"consCRtrip",  titleShort:"Public transportation", level:"",  figNum:"22",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"In the case of about 2km of the neighborhood, when the weather is nice, or use a bicycle without a car, let's walking. It will also be for the sake of health.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCR20percent'] = { mid:"805",  name:"mCR20percent",  title:"Down the car use of 20%",  easyness:"1",  refCons:"consCRtrip",  titleShort:"Car use 20% down", level:"",  figNum:"22",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"Car usage will consume a lot of energy. Ingenuity, such as not used to need no applications is important.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mCRwalk'] = { mid:"806",  name:"mCRwalk",  title:"In the case of close, go by bicycle or on foot , not a car",  easyness:"2",  refCons:"consCRtrip",  titleShort:"Bicycle or on foot", level:"",  figNum:"22",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"In the case of about 2km of the neighborhood, when the weather is nice, or use a bicycle without a car, let's walking. It will also be for the sake of health.",   lifestyle:"1",   season:"wss"};
	D6.scenario.defMeasures['mPTstopPlug'] = { mid:"901",  name:"mPTstopPlug",  title:"Disconnect the plug from the electrical outlet, reduce the standby power",  easyness:"3",  refCons:"consTotal",  titleShort:"Standby power", level:"",  figNum:"20",  lifeTime:"",  price:"",  roanShow:"",  standardType:"",  subsidy :"",  advice:"TV and video, such as air conditioning, it may have been consumed even electricity when not in use. When not in use for a long time, you can help reduce by removing the plug from the wall outlet. Recent models have been reduced standby power, it is effective in front of the model more than five years. Also air conditioning rather than pull out the direct outlet, first firmly stopped by remote control, please disconnect from and stopped the movement of the wings.",   lifestyle:"1",   season:"wss"};

};

﻿/*  2017/12/16  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * acadd.js for override
 * 
 * AreaParameters acadd: additional heat load cannot supply with  air conditioner
 * 
 * License: http://creativecommons.org/licenses/LGPL/2.1/
 * 
 * @author Yasufumi Suzuki, Hinodeya Institute for Ecolife co.ltd.
 *								2011/01/21 original PHP version
 *								2011/05/06 ported to ActionScript3
 * 								2016/04/12 ported to JavaScript
 * 								2017/12/16 ver.1.0 set functions
 * 								2018/03/14 			global setting fix
 */


// getArray(param)  return paramArray
//		param: prefecture(original)
//
//  return acadd[time_slot_index][heat_month_index]
//
//		time_slot_index:
//				0:morning
//				1:noon
//				2:evening
//				3:night
//		heat_month_index
//				0:use heat for a half month
//				1:use heat for one month
//				2:use heat for 2 months
//				3:use heat for 3 months
//				4:use heat for 4 months
//				5:use heat for 6 months
//				6:use heat for 8 months
//
// this data is transformed by AMEDAS ( meteorological data ) in Japan
//
// factorPrefTimeMonth[Prefecture Code][Time Code][Month Code]
//
// used in Unit.setArea() function and set Unit.plusHeatFactor_mon
//
D6.acadd.factorPrefTimeMonth = [
	[ [ 0, 0, 0, 0, 0, 0, 0],   //神戸
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 

	[ [ 0.17, 0.16, 0.14, 0.12, 0.09, 0.06, 0.05],   //札幌
	  [ 0.06, 0.05, 0.04, 0.04, 0.03, 0.02, 0.01], 
	  [ 0.09, 0.09, 0.07, 0.06, 0.04, 0.03, 0.02], 
	  [ 0.16, 0.15, 0.13, 0.11, 0.09, 0.06, 0.04] ], 
	[ [ 0.05, 0.04, 0.03, 0.03, 0.02, 0.01, 0.01],   //青森
	  [ 0.02, 0.02, 0.01, 0.01, 0.01, 0, 0], 
	  [ 0.03, 0.02, 0.02, 0.01, 0.01, 0.01, 0.01], 
	  [ 0.05, 0.04, 0.03, 0.02, 0.02, 0.01, 0.01] ], 
	[ [ 0.12, 0.11, 0.09, 0.07, 0.06, 0.04, 0.03],   //盛岡
	  [ 0.01, 0.01, 0.01, 0.01, 0, 0, 0], 
	  [ 0.03, 0.03, 0.02, 0.01, 0.01, 0.01, 0.01], 
	  [ 0.1, 0.09, 0.07, 0.06, 0.04, 0.03, 0.02] ], 
	[ [ 0.01, 0.01, 0, 0, 0, 0, 0],   //仙台
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0.02, 0.02, 0.01, 0.01, 0.01, 0, 0],   //秋田
	  [ 0.01, 0, 0, 0, 0, 0, 0], 
	  [ 0.01, 0.01, 0, 0, 0, 0, 0], 
	  [ 0.01, 0.01, 0.01, 0.01, 0, 0, 0] ], 
	[ [ 0.03, 0.03, 0.02, 0.02, 0.01, 0.01, 0.01],   //山形
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0.01, 0.01, 0, 0, 0, 0, 0], 
	  [ 0.02, 0.02, 0.02, 0.01, 0.01, 0.01, 0] ], 
	[ [ 0.01, 0.01, 0.01, 0.01, 0, 0, 0],   //福島
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0.01, 0.01, 0, 0, 0, 0, 0] ], 
	[ [ 0.01, 0.01, 0.01, 0.01, 0.01, 0, 0],   //水戸
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0.01, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0.02, 0.01, 0.01, 0.01, 0.01, 0, 0],   //宇都宮
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0.01, 0.01, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //前橋
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0.01, 0, 0, 0, 0, 0],   //さいたま
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //千葉
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //東京
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //横浜
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //新潟
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //富山
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //金沢
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //福井
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0.02, 0.02, 0.01, 0.01, 0.01, 0, 0],   //甲府
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0.01, 0.01, 0, 0, 0, 0, 0] ], 
	[ [ 0.07, 0.06, 0.05, 0.04, 0.03, 0.02, 0.02],   //長野
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0.01, 0.01, 0.01, 0, 0, 0, 0], 
	  [ 0.05, 0.04, 0.03, 0.02, 0.02, 0.01, 0.01] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //岐阜
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //静岡
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //名古屋
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //津
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //彦根
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //京都
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //大阪
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //神戸
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //奈良
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //和歌山
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //鳥取
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //松江
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //岡山
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //広島
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //山口
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //徳島
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //高松
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //松山
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //高知
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //福岡
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //佐賀
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //長崎
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //熊本
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //大分
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //宮崎
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //鹿児島
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ], 
	[ [ 0, 0, 0, 0, 0, 0, 0],   //那覇
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0], 
	  [ 0, 0, 0, 0, 0, 0, 0] ] ];

﻿/*  2017/12/16  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * accons.js  for override
 * 
 * AreaParameters  accons: electricity consumption rate of air conditioner used as heater
 * 
 * License: http://creativecommons.org/licenses/LGPL/2.1/
 * 
 * @author Yasufumi Suzuki, Hinodeya Institute for Ecolife co.ltd.
 *								2011/01/21 original PHP version
 *								2011/05/06 ported to ActionScript3
 * 								2016/04/12 ported to JavaScript
 * 								2017/12/16 ver.1.0 set functions
 * 								2018/03/14 			global setting fix
 */
 

// getArray(param)  return paramArray
//		param: prefecture(original)
//
//  return accons[time_slot_index][heat_month_index]
//
//		time_slot_index:
//				0:morning
//				1:noon
//				2:evening
//				3:night
//		heat_month_index
//				0:use heat for a half month
//				1:use heat for one month
//				2:use heat for 2 months
//				3:use heat for 3 months
//				4:use heat for 4 months
//				5:use heat for 6 months
//				6:use heat for 8 months
//
//アメダス10分間データを元に算出:エアコン消費電力量
//
//	配列は　  [朝、昼、夕、夜]の係数で、
//	それぞれ　[暖房半月、暖房1ヶ月、暖房2ヶ月、暖房3ヶ月、暖房4ヶ月、暖房6ヶ月、暖房8ヶ月、
//				冷房半月、冷房1ヶ月、冷房2ヶ月、冷房3ヶ月、冷房4ヶ月]
//	の規定温度における消費量に対する割合を示す。
//
// Unit.setArea()で　該当する地域について　airconFactor_mon　にコピーをして利用
//

D6.accons.factorPrefTimeMonth = [
[ [ 0.69, 0.65, 0.6, 0.56, 0.5, 0.42, 0.38, 0.34, 0.33, 0.28, 0.23, 0.18],   //神戸
  [ 0.45, 0.42, 0.39, 0.36, 0.32, 0.28, 0.27, 0.65, 0.63, 0.55, 0.48, 0.39], 
  [ 0.53, 0.5, 0.46, 0.43, 0.38, 0.32, 0.31, 0.46, 0.44, 0.4, 0.34, 0.28], 
  [ 0.68, 0.63, 0.59, 0.55, 0.5, 0.41, 0.37, 0.29, 0.28, 0.24, 0.2, 0.16] ], 

[ [ 1.24, 1.22, 1.21, 1.18, 1.13, 0.94, 0.77, 0.06, 0.05, 0.03, 0.02, 0.02],   //札幌
  [ 1.14, 1.13, 1.1, 1.05, 0.98, 0.8, 0.67, 0.2, 0.17, 0.13, 0.1, 0.08], 
  [ 1.2, 1.19, 1.16, 1.13, 1.06, 0.88, 0.72, 0.1, 0.08, 0.05, 0.04, 0.03], 
  [ 1.24, 1.22, 1.21, 1.18, 1.13, 0.95, 0.79, 0.03, 0.02, 0.01, 0.01, 0.01] ], 
[ [ 1.14, 1.13, 1.09, 1.05, 0.98, 0.81, 0.67, 0.11, 0.09, 0.06, 0.04, 0.03],   //青森
  [ 0.99, 0.96, 0.93, 0.87, 0.8, 0.65, 0.55, 0.26, 0.23, 0.18, 0.14, 0.11], 
  [ 1.08, 1.05, 1.02, 0.97, 0.9, 0.73, 0.61, 0.16, 0.14, 0.09, 0.07, 0.05], 
  [ 1.15, 1.12, 1.09, 1.06, 1, 0.84, 0.69, 0.06, 0.05, 0.03, 0.02, 0.01] ], 
[ [ 1.2, 1.18, 1.16, 1.12, 1.05, 0.89, 0.73, 0.09, 0.07, 0.05, 0.03, 0.03],   //盛岡
  [ 0.98, 0.95, 0.91, 0.85, 0.78, 0.63, 0.55, 0.35, 0.31, 0.24, 0.19, 0.15], 
  [ 1.11, 1.08, 1.04, 0.98, 0.91, 0.75, 0.63, 0.2, 0.18, 0.13, 0.1, 0.08], 
  [ 1.2, 1.17, 1.15, 1.11, 1.05, 0.9, 0.74, 0.04, 0.03, 0.02, 0.01, 0.01] ], 
[ [ 0.98, 0.95, 0.92, 0.87, 0.8, 0.66, 0.55, 0.15, 0.12, 0.09, 0.07, 0.05],   //仙台
  [ 0.69, 0.66, 0.63, 0.58, 0.53, 0.44, 0.39, 0.34, 0.3, 0.24, 0.2, 0.16], 
  [ 0.84, 0.79, 0.76, 0.71, 0.65, 0.53, 0.45, 0.19, 0.17, 0.13, 0.1, 0.08], 
  [ 0.97, 0.94, 0.91, 0.86, 0.8, 0.66, 0.54, 0.08, 0.07, 0.05, 0.04, 0.03] ], 
[ [ 1.06, 1.03, 1, 0.95, 0.89, 0.73, 0.61, 0.17, 0.14, 0.1, 0.07, 0.05],   //秋田
  [ 0.92, 0.89, 0.85, 0.79, 0.71, 0.58, 0.51, 0.41, 0.37, 0.29, 0.22, 0.18], 
  [ 0.98, 0.94, 0.91, 0.85, 0.78, 0.64, 0.54, 0.28, 0.25, 0.18, 0.14, 0.1], 
  [ 1.05, 1.01, 0.98, 0.94, 0.88, 0.73, 0.61, 0.11, 0.09, 0.06, 0.04, 0.03] ], 
[ [ 1.13, 1.11, 1.08, 1.02, 0.95, 0.79, 0.66, 0.15, 0.12, 0.09, 0.07, 0.05],   //山形
  [ 0.9, 0.87, 0.82, 0.75, 0.68, 0.56, 0.5, 0.54, 0.49, 0.39, 0.31, 0.26], 
  [ 1.01, 0.98, 0.94, 0.87, 0.79, 0.65, 0.55, 0.33, 0.29, 0.22, 0.18, 0.14], 
  [ 1.11, 1.09, 1.06, 1.01, 0.94, 0.79, 0.66, 0.09, 0.07, 0.05, 0.04, 0.03] ], 
[ [ 1.01, 0.98, 0.94, 0.89, 0.82, 0.68, 0.57, 0.17, 0.15, 0.11, 0.09, 0.07],   //福島
  [ 0.69, 0.67, 0.63, 0.58, 0.52, 0.44, 0.4, 0.56, 0.52, 0.42, 0.35, 0.29], 
  [ 0.81, 0.78, 0.74, 0.69, 0.63, 0.51, 0.45, 0.35, 0.31, 0.25, 0.2, 0.16], 
  [ 0.97, 0.95, 0.91, 0.86, 0.8, 0.66, 0.55, 0.12, 0.1, 0.07, 0.06, 0.04] ], 
[ [ 0.98, 0.96, 0.95, 0.89, 0.81, 0.66, 0.55, 0.18, 0.16, 0.13, 0.11, 0.08],   //水戸
  [ 0.44, 0.42, 0.41, 0.38, 0.35, 0.3, 0.28, 0.47, 0.43, 0.37, 0.32, 0.26], 
  [ 0.61, 0.59, 0.58, 0.54, 0.49, 0.41, 0.36, 0.26, 0.24, 0.19, 0.16, 0.13], 
  [ 0.95, 0.92, 0.91, 0.86, 0.79, 0.65, 0.54, 0.1, 0.09, 0.07, 0.06, 0.04] ], 
[ [ 1.02, 1, 0.97, 0.91, 0.83, 0.67, 0.56, 0.18, 0.16, 0.13, 0.1, 0.08],   //宇都宮
  [ 0.48, 0.46, 0.44, 0.41, 0.37, 0.32, 0.3, 0.54, 0.5, 0.44, 0.38, 0.31], 
  [ 0.64, 0.62, 0.6, 0.55, 0.5, 0.42, 0.37, 0.32, 0.31, 0.27, 0.22, 0.18], 
  [ 0.97, 0.95, 0.93, 0.88, 0.81, 0.65, 0.54, 0.11, 0.1, 0.08, 0.06, 0.05] ], 
[ [ 0.9, 0.88, 0.84, 0.78, 0.71, 0.58, 0.49, 0.22, 0.2, 0.17, 0.13, 0.1],   //前橋
  [ 0.45, 0.44, 0.41, 0.38, 0.34, 0.3, 0.29, 0.63, 0.59, 0.52, 0.44, 0.37], 
  [ 0.63, 0.62, 0.59, 0.55, 0.5, 0.41, 0.37, 0.44, 0.42, 0.38, 0.31, 0.26], 
  [ 0.89, 0.86, 0.83, 0.78, 0.71, 0.58, 0.49, 0.15, 0.14, 0.12, 0.09, 0.07] ], 
[ [ 0.91, 0.91, 0.88, 0.82, 0.74, 0.6, 0.51, 0.23, 0.21, 0.18, 0.14, 0.11],   //さいたま
  [ 0.44, 0.43, 0.4, 0.37, 0.34, 0.3, 0.28, 0.63, 0.59, 0.53, 0.45, 0.38], 
  [ 0.55, 0.56, 0.53, 0.49, 0.44, 0.37, 0.34, 0.42, 0.4, 0.36, 0.3, 0.24], 
  [ 0.86, 0.85, 0.82, 0.77, 0.7, 0.57, 0.48, 0.16, 0.15, 0.13, 0.1, 0.08] ], 
[ [ 0.68, 0.66, 0.64, 0.59, 0.54, 0.44, 0.39, 0.27, 0.24, 0.21, 0.18, 0.14],   //千葉
  [ 0.39, 0.37, 0.35, 0.33, 0.3, 0.26, 0.25, 0.53, 0.49, 0.44, 0.38, 0.31], 
  [ 0.45, 0.43, 0.42, 0.39, 0.35, 0.3, 0.28, 0.36, 0.33, 0.29, 0.25, 0.2], 
  [ 0.63, 0.61, 0.59, 0.55, 0.5, 0.41, 0.36, 0.21, 0.19, 0.16, 0.13, 0.1] ], 
[ [ 0.64, 0.63, 0.6, 0.55, 0.5, 0.41, 0.37, 0.31, 0.28, 0.25, 0.21, 0.16],   //東京
  [ 0.39, 0.37, 0.35, 0.32, 0.29, 0.26, 0.25, 0.62, 0.57, 0.52, 0.45, 0.37], 
  [ 0.42, 0.4, 0.39, 0.36, 0.33, 0.28, 0.26, 0.43, 0.4, 0.37, 0.32, 0.26], 
  [ 0.58, 0.56, 0.54, 0.5, 0.46, 0.38, 0.34, 0.25, 0.23, 0.21, 0.17, 0.13] ], 
[ [ 0.67, 0.65, 0.62, 0.58, 0.53, 0.43, 0.38, 0.26, 0.24, 0.2, 0.17, 0.13],   //横浜
  [ 0.39, 0.37, 0.36, 0.33, 0.3, 0.27, 0.25, 0.53, 0.5, 0.44, 0.38, 0.31], 
  [ 0.45, 0.43, 0.41, 0.38, 0.35, 0.3, 0.27, 0.33, 0.31, 0.28, 0.23, 0.19], 
  [ 0.61, 0.59, 0.57, 0.53, 0.48, 0.4, 0.35, 0.2, 0.18, 0.16, 0.13, 0.1] ], 
[ [ 0.84, 0.83, 0.79, 0.74, 0.68, 0.56, 0.48, 0.29, 0.25, 0.19, 0.14, 0.11],   //新潟
  [ 0.72, 0.67, 0.63, 0.58, 0.52, 0.43, 0.4, 0.6, 0.53, 0.43, 0.34, 0.27], 
  [ 0.77, 0.72, 0.68, 0.63, 0.58, 0.47, 0.42, 0.4, 0.35, 0.27, 0.21, 0.16], 
  [ 0.83, 0.81, 0.77, 0.73, 0.67, 0.56, 0.47, 0.22, 0.19, 0.14, 0.1, 0.08] ], 
[ [ 0.9, 0.86, 0.82, 0.76, 0.69, 0.57, 0.49, 0.34, 0.29, 0.22, 0.17, 0.14],   //富山
  [ 0.68, 0.64, 0.59, 0.54, 0.48, 0.41, 0.38, 0.66, 0.59, 0.48, 0.39, 0.31], 
  [ 0.78, 0.74, 0.69, 0.63, 0.57, 0.47, 0.42, 0.41, 0.36, 0.28, 0.23, 0.18], 
  [ 0.9, 0.85, 0.81, 0.76, 0.7, 0.58, 0.49, 0.22, 0.18, 0.13, 0.1, 0.08] ], 
[ [ 0.79, 0.76, 0.72, 0.67, 0.61, 0.5, 0.44, 0.33, 0.3, 0.23, 0.18, 0.14],   //金沢
  [ 0.64, 0.59, 0.54, 0.5, 0.44, 0.38, 0.35, 0.63, 0.58, 0.47, 0.39, 0.31], 
  [ 0.68, 0.64, 0.6, 0.56, 0.51, 0.42, 0.38, 0.45, 0.41, 0.33, 0.26, 0.21], 
  [ 0.78, 0.74, 0.7, 0.66, 0.61, 0.51, 0.43, 0.25, 0.22, 0.17, 0.13, 0.1] ], 
[ [ 0.88, 0.86, 0.81, 0.77, 0.7, 0.58, 0.5, 0.3, 0.27, 0.21, 0.16, 0.12],   //福井
  [ 0.66, 0.61, 0.57, 0.51, 0.46, 0.39, 0.37, 0.71, 0.66, 0.55, 0.46, 0.37], 
  [ 0.73, 0.68, 0.63, 0.58, 0.52, 0.43, 0.39, 0.48, 0.45, 0.37, 0.3, 0.24], 
  [ 0.85, 0.82, 0.78, 0.73, 0.67, 0.56, 0.48, 0.23, 0.21, 0.16, 0.12, 0.09] ], 
[ [ 1.07, 1.04, 0.99, 0.92, 0.83, 0.66, 0.56, 0.18, 0.16, 0.14, 0.11, 0.09],   //甲府
  [ 0.54, 0.51, 0.46, 0.42, 0.37, 0.33, 0.31, 0.67, 0.61, 0.57, 0.48, 0.41], 
  [ 0.63, 0.6, 0.55, 0.5, 0.45, 0.37, 0.34, 0.37, 0.35, 0.33, 0.28, 0.23], 
  [ 0.96, 0.92, 0.88, 0.81, 0.74, 0.6, 0.5, 0.15, 0.13, 0.11, 0.09, 0.07] ], 
[ [ 1.2, 1.18, 1.15, 1.1, 1.02, 0.84, 0.7, 0.14, 0.12, 0.09, 0.07, 0.05],   //長野
  [ 0.88, 0.84, 0.81, 0.74, 0.66, 0.54, 0.49, 0.57, 0.51, 0.43, 0.35, 0.29], 
  [ 0.99, 0.96, 0.93, 0.86, 0.79, 0.64, 0.55, 0.31, 0.26, 0.21, 0.16, 0.13], 
  [ 1.16, 1.14, 1.11, 1.06, 0.99, 0.82, 0.68, 0.09, 0.07, 0.05, 0.04, 0.03] ], 
[ [ 0.83, 0.8, 0.76, 0.71, 0.64, 0.52, 0.45, 0.31, 0.28, 0.24, 0.19, 0.15],   //岐阜
  [ 0.48, 0.45, 0.41, 0.38, 0.33, 0.29, 0.28, 0.73, 0.7, 0.63, 0.55, 0.46], 
  [ 0.59, 0.56, 0.52, 0.48, 0.43, 0.35, 0.33, 0.54, 0.5, 0.45, 0.38, 0.31], 
  [ 0.78, 0.75, 0.71, 0.66, 0.6, 0.49, 0.43, 0.27, 0.25, 0.21, 0.17, 0.13] ], 
[ [ 0.67, 0.63, 0.6, 0.56, 0.5, 0.41, 0.37, 0.27, 0.25, 0.23, 0.19, 0.15],   //静岡
  [ 0.33, 0.3, 0.28, 0.26, 0.23, 0.21, 0.2, 0.52, 0.5, 0.47, 0.42, 0.35], 
  [ 0.42, 0.4, 0.37, 0.35, 0.31, 0.27, 0.25, 0.37, 0.35, 0.33, 0.29, 0.23], 
  [ 0.64, 0.6, 0.57, 0.53, 0.48, 0.4, 0.35, 0.2, 0.19, 0.17, 0.14, 0.11] ], 
[ [ 0.83, 0.79, 0.75, 0.7, 0.63, 0.51, 0.45, 0.3, 0.28, 0.24, 0.2, 0.15],   //名古屋
  [ 0.46, 0.44, 0.41, 0.37, 0.33, 0.29, 0.28, 0.7, 0.67, 0.61, 0.53, 0.44], 
  [ 0.58, 0.55, 0.51, 0.47, 0.42, 0.35, 0.33, 0.48, 0.46, 0.41, 0.35, 0.28], 
  [ 0.77, 0.74, 0.7, 0.65, 0.6, 0.48, 0.42, 0.24, 0.23, 0.19, 0.15, 0.12] ], 
[ [ 0.69, 0.66, 0.63, 0.59, 0.54, 0.44, 0.39, 0.32, 0.29, 0.25, 0.2, 0.16],   //津
  [ 0.43, 0.41, 0.39, 0.36, 0.32, 0.27, 0.26, 0.61, 0.57, 0.51, 0.44, 0.36], 
  [ 0.53, 0.5, 0.47, 0.44, 0.39, 0.33, 0.31, 0.5, 0.46, 0.42, 0.36, 0.29], 
  [ 0.68, 0.66, 0.62, 0.58, 0.53, 0.43, 0.38, 0.27, 0.25, 0.22, 0.18, 0.14] ], 
[ [ 0.84, 0.8, 0.77, 0.72, 0.66, 0.54, 0.46, 0.28, 0.25, 0.2, 0.16, 0.12],   //彦根
  [ 0.58, 0.56, 0.53, 0.49, 0.44, 0.36, 0.34, 0.62, 0.58, 0.5, 0.42, 0.33], 
  [ 0.64, 0.62, 0.58, 0.54, 0.49, 0.4, 0.36, 0.46, 0.43, 0.36, 0.3, 0.24], 
  [ 0.79, 0.77, 0.73, 0.68, 0.63, 0.52, 0.44, 0.23, 0.21, 0.16, 0.13, 0.1] ], 
[ [ 0.8, 0.77, 0.73, 0.68, 0.62, 0.51, 0.45, 0.31, 0.29, 0.24, 0.2, 0.15],   //京都
  [ 0.47, 0.45, 0.41, 0.38, 0.34, 0.3, 0.29, 0.76, 0.73, 0.65, 0.57, 0.48], 
  [ 0.56, 0.53, 0.5, 0.46, 0.41, 0.35, 0.33, 0.58, 0.55, 0.49, 0.42, 0.35], 
  [ 0.75, 0.72, 0.68, 0.64, 0.58, 0.48, 0.42, 0.27, 0.26, 0.21, 0.17, 0.13] ], 
[ [ 0.66, 0.62, 0.59, 0.55, 0.5, 0.41, 0.37, 0.39, 0.36, 0.31, 0.26, 0.2],   //大阪
  [ 0.43, 0.39, 0.37, 0.34, 0.3, 0.27, 0.26, 0.79, 0.75, 0.67, 0.59, 0.49], 
  [ 0.47, 0.45, 0.42, 0.39, 0.35, 0.3, 0.29, 0.57, 0.55, 0.49, 0.43, 0.35], 
  [ 0.62, 0.58, 0.55, 0.51, 0.47, 0.39, 0.35, 0.34, 0.32, 0.27, 0.23, 0.18] ], 
[ [ 0.69, 0.65, 0.6, 0.56, 0.5, 0.42, 0.38, 0.34, 0.33, 0.28, 0.23, 0.18],   //神戸
  [ 0.45, 0.42, 0.39, 0.36, 0.32, 0.28, 0.27, 0.65, 0.63, 0.55, 0.48, 0.39], 
  [ 0.53, 0.5, 0.46, 0.43, 0.38, 0.32, 0.31, 0.46, 0.44, 0.4, 0.34, 0.28], 
  [ 0.68, 0.63, 0.59, 0.55, 0.5, 0.41, 0.37, 0.29, 0.28, 0.24, 0.2, 0.16] ], 
[ [ 0.86, 0.83, 0.79, 0.75, 0.69, 0.57, 0.49, 0.24, 0.23, 0.19, 0.15, 0.12],   //奈良
  [ 0.49, 0.46, 0.43, 0.39, 0.35, 0.31, 0.29, 0.7, 0.67, 0.59, 0.5, 0.42], 
  [ 0.63, 0.6, 0.55, 0.52, 0.47, 0.39, 0.36, 0.45, 0.43, 0.38, 0.31, 0.26], 
  [ 0.84, 0.81, 0.78, 0.73, 0.68, 0.56, 0.48, 0.16, 0.14, 0.12, 0.09, 0.07] ], 
[ [ 0.7, 0.66, 0.63, 0.58, 0.53, 0.44, 0.39, 0.32, 0.31, 0.26, 0.22, 0.17],   //和歌山
  [ 0.43, 0.4, 0.36, 0.33, 0.29, 0.26, 0.26, 0.68, 0.65, 0.59, 0.52, 0.43], 
  [ 0.48, 0.45, 0.41, 0.38, 0.34, 0.29, 0.28, 0.47, 0.45, 0.41, 0.36, 0.3], 
  [ 0.65, 0.62, 0.58, 0.54, 0.49, 0.41, 0.36, 0.29, 0.27, 0.24, 0.2, 0.16] ], 
[ [ 0.82, 0.78, 0.74, 0.68, 0.63, 0.52, 0.46, 0.31, 0.27, 0.22, 0.17, 0.13],   //鳥取
  [ 0.57, 0.53, 0.49, 0.44, 0.39, 0.34, 0.33, 0.7, 0.66, 0.55, 0.46, 0.38], 
  [ 0.66, 0.62, 0.58, 0.53, 0.48, 0.4, 0.36, 0.45, 0.42, 0.34, 0.28, 0.22], 
  [ 0.81, 0.78, 0.72, 0.68, 0.63, 0.53, 0.45, 0.21, 0.19, 0.14, 0.11, 0.09] ], 
[ [ 0.79, 0.75, 0.7, 0.65, 0.6, 0.5, 0.43, 0.3, 0.27, 0.21, 0.16, 0.13],   //松江
  [ 0.56, 0.51, 0.47, 0.43, 0.38, 0.33, 0.31, 0.63, 0.58, 0.48, 0.4, 0.32], 
  [ 0.64, 0.6, 0.55, 0.51, 0.46, 0.38, 0.34, 0.38, 0.35, 0.29, 0.23, 0.18], 
  [ 0.76, 0.73, 0.68, 0.63, 0.59, 0.49, 0.42, 0.21, 0.19, 0.15, 0.11, 0.09] ], 
[ [ 0.83, 0.78, 0.74, 0.69, 0.63, 0.52, 0.45, 0.32, 0.3, 0.25, 0.2, 0.15],   //岡山
  [ 0.44, 0.42, 0.39, 0.35, 0.32, 0.28, 0.27, 0.76, 0.71, 0.63, 0.54, 0.45], 
  [ 0.51, 0.49, 0.45, 0.41, 0.37, 0.31, 0.3, 0.62, 0.58, 0.52, 0.44, 0.36], 
  [ 0.75, 0.71, 0.66, 0.62, 0.56, 0.46, 0.41, 0.31, 0.29, 0.24, 0.2, 0.15] ], 
[ [ 0.79, 0.74, 0.71, 0.66, 0.6, 0.5, 0.43, 0.3, 0.28, 0.23, 0.19, 0.14],   //広島
  [ 0.44, 0.41, 0.38, 0.35, 0.31, 0.27, 0.26, 0.71, 0.67, 0.59, 0.51, 0.43], 
  [ 0.5, 0.47, 0.43, 0.39, 0.35, 0.3, 0.29, 0.57, 0.54, 0.48, 0.41, 0.34], 
  [ 0.72, 0.68, 0.64, 0.59, 0.54, 0.45, 0.39, 0.3, 0.29, 0.24, 0.2, 0.15] ], 
[ [ 0.86, 0.81, 0.78, 0.74, 0.67, 0.56, 0.48, 0.25, 0.23, 0.19, 0.15, 0.12],   //山口
  [ 0.47, 0.44, 0.4, 0.36, 0.32, 0.28, 0.27, 0.68, 0.64, 0.56, 0.48, 0.41], 
  [ 0.58, 0.54, 0.49, 0.45, 0.4, 0.34, 0.32, 0.48, 0.45, 0.39, 0.33, 0.27], 
  [ 0.81, 0.77, 0.73, 0.68, 0.62, 0.52, 0.45, 0.2, 0.2, 0.16, 0.12, 0.1] ], 
[ [ 0.68, 0.63, 0.59, 0.55, 0.5, 0.41, 0.37, 0.31, 0.29, 0.25, 0.21, 0.16],   //徳島
  [ 0.41, 0.38, 0.35, 0.32, 0.29, 0.26, 0.25, 0.65, 0.62, 0.55, 0.47, 0.39], 
  [ 0.49, 0.45, 0.42, 0.39, 0.35, 0.3, 0.28, 0.48, 0.46, 0.41, 0.35, 0.28], 
  [ 0.64, 0.61, 0.57, 0.53, 0.48, 0.4, 0.35, 0.26, 0.25, 0.22, 0.18, 0.14] ], 
[ [ 0.71, 0.67, 0.64, 0.6, 0.55, 0.45, 0.4, 0.34, 0.31, 0.27, 0.22, 0.17],   //高松
  [ 0.42, 0.39, 0.36, 0.33, 0.29, 0.26, 0.25, 0.72, 0.68, 0.61, 0.53, 0.44], 
  [ 0.5, 0.47, 0.43, 0.4, 0.36, 0.31, 0.29, 0.6, 0.57, 0.5, 0.43, 0.35], 
  [ 0.68, 0.65, 0.61, 0.57, 0.52, 0.43, 0.38, 0.29, 0.28, 0.23, 0.19, 0.15] ], 
[ [ 0.69, 0.65, 0.61, 0.56, 0.51, 0.43, 0.38, 0.31, 0.29, 0.25, 0.21, 0.16],   //松山
  [ 0.42, 0.38, 0.35, 0.32, 0.28, 0.25, 0.24, 0.69, 0.64, 0.58, 0.51, 0.42], 
  [ 0.48, 0.45, 0.41, 0.38, 0.34, 0.29, 0.28, 0.53, 0.5, 0.45, 0.38, 0.31], 
  [ 0.66, 0.62, 0.58, 0.54, 0.5, 0.41, 0.36, 0.26, 0.24, 0.21, 0.17, 0.13] ], 
[ [ 0.75, 0.71, 0.66, 0.6, 0.54, 0.45, 0.4, 0.28, 0.27, 0.24, 0.2, 0.16],   //高知
  [ 0.33, 0.3, 0.27, 0.24, 0.21, 0.21, 0.2, 0.62, 0.61, 0.56, 0.5, 0.43], 
  [ 0.43, 0.41, 0.37, 0.34, 0.3, 0.26, 0.26, 0.42, 0.41, 0.38, 0.34, 0.28], 
  [ 0.69, 0.65, 0.6, 0.55, 0.5, 0.42, 0.37, 0.23, 0.22, 0.19, 0.16, 0.12] ], 
[ [ 0.61, 0.56, 0.52, 0.49, 0.44, 0.37, 0.33, 0.34, 0.32, 0.27, 0.23, 0.18],   //福岡
  [ 0.43, 0.39, 0.35, 0.31, 0.28, 0.25, 0.24, 0.68, 0.64, 0.56, 0.48, 0.41], 
  [ 0.46, 0.42, 0.38, 0.35, 0.32, 0.27, 0.26, 0.51, 0.47, 0.41, 0.35, 0.28], 
  [ 0.57, 0.53, 0.49, 0.46, 0.42, 0.35, 0.31, 0.32, 0.3, 0.25, 0.21, 0.16] ], 
[ [ 0.76, 0.72, 0.68, 0.63, 0.57, 0.47, 0.42, 0.28, 0.27, 0.22, 0.18, 0.14],   //佐賀
  [ 0.44, 0.4, 0.36, 0.32, 0.28, 0.26, 0.25, 0.72, 0.69, 0.59, 0.52, 0.45], 
  [ 0.49, 0.45, 0.41, 0.37, 0.33, 0.29, 0.28, 0.57, 0.53, 0.46, 0.39, 0.33], 
  [ 0.7, 0.66, 0.62, 0.57, 0.52, 0.43, 0.38, 0.26, 0.25, 0.21, 0.17, 0.13] ], 
[ [ 0.58, 0.54, 0.5, 0.47, 0.42, 0.36, 0.32, 0.31, 0.3, 0.26, 0.21, 0.17],   //長崎
  [ 0.4, 0.37, 0.32, 0.29, 0.26, 0.24, 0.23, 0.6, 0.59, 0.51, 0.45, 0.38], 
  [ 0.45, 0.41, 0.37, 0.34, 0.3, 0.26, 0.25, 0.47, 0.45, 0.4, 0.34, 0.28], 
  [ 0.56, 0.52, 0.48, 0.44, 0.4, 0.34, 0.31, 0.29, 0.28, 0.24, 0.2, 0.16] ], 
[ [ 0.79, 0.75, 0.7, 0.65, 0.58, 0.48, 0.43, 0.3, 0.29, 0.24, 0.2, 0.16],   //熊本
  [ 0.41, 0.38, 0.33, 0.3, 0.26, 0.25, 0.24, 0.76, 0.73, 0.64, 0.57, 0.49], 
  [ 0.48, 0.44, 0.39, 0.35, 0.31, 0.28, 0.27, 0.54, 0.53, 0.47, 0.42, 0.35], 
  [ 0.71, 0.66, 0.62, 0.57, 0.52, 0.43, 0.39, 0.26, 0.26, 0.23, 0.19, 0.15] ], 
[ [ 0.68, 0.65, 0.61, 0.57, 0.52, 0.43, 0.38, 0.25, 0.24, 0.21, 0.17, 0.14],   //大分
  [ 0.38, 0.35, 0.32, 0.29, 0.26, 0.24, 0.23, 0.64, 0.6, 0.54, 0.47, 0.39], 
  [ 0.45, 0.42, 0.38, 0.35, 0.32, 0.27, 0.26, 0.46, 0.44, 0.39, 0.33, 0.27], 
  [ 0.64, 0.61, 0.56, 0.53, 0.48, 0.4, 0.35, 0.22, 0.22, 0.19, 0.15, 0.12] ], 
[ [ 0.64, 0.61, 0.57, 0.52, 0.47, 0.4, 0.37, 0.29, 0.28, 0.26, 0.22, 0.18],   //宮崎
  [ 0.29, 0.26, 0.23, 0.2, 0.18, 0.18, 0.18, 0.62, 0.61, 0.58, 0.52, 0.44], 
  [ 0.36, 0.33, 0.3, 0.27, 0.24, 0.23, 0.22, 0.46, 0.45, 0.43, 0.38, 0.32], 
  [ 0.58, 0.54, 0.51, 0.47, 0.42, 0.36, 0.33, 0.24, 0.24, 0.22, 0.19, 0.15] ], 
[ [ 0.54, 0.51, 0.46, 0.42, 0.37, 0.33, 0.31, 0.36, 0.34, 0.31, 0.28, 0.22],   //鹿児島
  [ 0.31, 0.28, 0.23, 0.2, 0.18, 0.19, 0.19, 0.69, 0.66, 0.61, 0.56, 0.48], 
  [ 0.36, 0.33, 0.29, 0.26, 0.22, 0.21, 0.21, 0.53, 0.51, 0.48, 0.44, 0.37], 
  [ 0.52, 0.48, 0.43, 0.39, 0.35, 0.31, 0.29, 0.33, 0.32, 0.29, 0.26, 0.21] ], 
[ [ 0.11, 0.07, 0.06, 0.05, 0.04, 0.08, 0.08, 0.39, 0.38, 0.38, 0.36, 0.33],   //那覇
  [ 0.08, 0.03, 0.02, 0.02, 0.02, 0.06, 0.06, 0.61, 0.59, 0.58, 0.56, 0.51], 
  [ 0.09, 0.05, 0.03, 0.03, 0.02, 0.06, 0.06, 0.46, 0.45, 0.44, 0.43, 0.39], 
  [ 0.11, 0.07, 0.06, 0.05, 0.04, 0.08, 0.08, 0.35, 0.35, 0.34, 0.33, 0.3] ] ];
  

 ﻿/*  2017/12/16  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * accons.js  for override
 * 
 * AreaParameters  acload: heat load of house 
 * 
 * License: http://creativecommons.org/licenses/LGPL/2.1/
 * 
 * @author Yasufumi Suzuki, Hinodeya Institute for Ecolife co.ltd.
 *								2011/01/21 original PHP version
 *								2011/05/06 ported to ActionScript3
 * 								2016/04/12 ported to JavaScript
 * 								2017/12/16 ver.1.0 set functions
 * 								2018/03/14 			global setting fix
 */
 
D6.acload = Object.assign( D6.acload, {

// getArray(param)  return paramArray
//		param: prefecture(original)
//
//  return acloat[time_slot_index][heat_month_index]
//
//		time_slot_index:
//				0:morning
//				1:noon
//				2:evening
//				3:night
//		heat_month_index
//				0:use heat for a half month
//				1:use heat for one month
//				2:use heat for 2 months
//				3:use heat for 3 months
//				4:use heat for 4 months
//				5:use heat for 6 months
//				6:use heat for 8 months
//
//アメダス10分間データを元に算出:暖房負荷
//
//	配列は　  [朝、昼、夕、夜]の係数で、
//	それぞれ　[暖房半月、暖房1ヶ月、暖房2ヶ月、暖房3ヶ月、暖房4ヶ月、暖房6ヶ月、暖房8ヶ月、
//				冷房半月、冷房1ヶ月、冷房2ヶ月、冷房3ヶ月、冷房4ヶ月]
//	の規定温度における消費量に対する割合を示す。
//
// Unit.setArea()で　該当する地域について　heatFactor_mon　にコピーをして利用
//

factorPrefTimeMonth: [
[ [ 0.66, 0.63, 0.6, 0.57, 0.52, 0.52, 0.44, 0.48, 0.48, 0.39, 0.33, 0.26],   //神戸
  [ 0.5, 0.47, 0.44, 0.41, 0.36, 0.31, 0.31, 0.78, 0.76, 0.69, 0.61, 0.51], 
  [ 0.56, 0.53, 0.5, 0.47, 0.42, 0.36, 0.34, 0.62, 0.6, 0.54, 0.47, 0.38], 
  [ 0.65, 0.62, 0.59, 0.56, 0.52, 0.43, 0.39, 0.41, 0.4, 0.34, 0.29, 0.22] ], 

[ [ 1.06, 1.05, 1.03, 1, 0.95, 0.95, 0.82, 0.09, 0.09, 0.05, 0.03, 0.02],   //札幌
  [ 0.93, 0.92, 0.9, 0.87, 0.83, 0.7, 0.59, 0.27, 0.23, 0.18, 0.14, 0.11], 
  [ 0.99, 0.98, 0.96, 0.93, 0.88, 0.76, 0.64, 0.14, 0.11, 0.07, 0.05, 0.04], 
  [ 1.05, 1.04, 1.02, 0.99, 0.95, 0.83, 0.7, 0.04, 0.03, 0.02, 0.01, 0.01] ], 
[ [ 0.93, 0.92, 0.89, 0.86, 0.83, 0.83, 0.71, 0.15, 0.15, 0.09, 0.06, 0.05],   //青森
  [ 0.83, 0.81, 0.79, 0.76, 0.71, 0.6, 0.52, 0.34, 0.31, 0.24, 0.18, 0.14], 
  [ 0.88, 0.86, 0.85, 0.82, 0.77, 0.66, 0.56, 0.22, 0.19, 0.13, 0.09, 0.07], 
  [ 0.93, 0.91, 0.89, 0.87, 0.83, 0.73, 0.62, 0.08, 0.06, 0.04, 0.03, 0.02] ], 
[ [ 1.01, 0.99, 0.97, 0.93, 0.89, 0.89, 0.77, 0.13, 0.13, 0.07, 0.05, 0.03],   //盛岡
  [ 0.82, 0.8, 0.78, 0.75, 0.7, 0.59, 0.52, 0.45, 0.41, 0.32, 0.26, 0.21], 
  [ 0.9, 0.88, 0.86, 0.82, 0.78, 0.67, 0.57, 0.28, 0.24, 0.18, 0.14, 0.11], 
  [ 0.99, 0.97, 0.95, 0.92, 0.88, 0.78, 0.66, 0.06, 0.05, 0.03, 0.02, 0.02] ], 
[ [ 0.82, 0.8, 0.78, 0.75, 0.71, 0.71, 0.61, 0.21, 0.21, 0.13, 0.1, 0.08],   //仙台
  [ 0.66, 0.63, 0.61, 0.58, 0.54, 0.45, 0.41, 0.44, 0.4, 0.32, 0.26, 0.21], 
  [ 0.74, 0.71, 0.69, 0.66, 0.62, 0.52, 0.45, 0.27, 0.23, 0.18, 0.14, 0.11], 
  [ 0.81, 0.79, 0.78, 0.75, 0.71, 0.61, 0.52, 0.12, 0.09, 0.07, 0.05, 0.04] ], 
[ [ 0.87, 0.85, 0.83, 0.8, 0.77, 0.77, 0.66, 0.24, 0.24, 0.14, 0.1, 0.08],   //秋田
  [ 0.79, 0.77, 0.74, 0.71, 0.66, 0.55, 0.49, 0.52, 0.48, 0.38, 0.3, 0.24], 
  [ 0.82, 0.8, 0.78, 0.74, 0.7, 0.6, 0.51, 0.38, 0.34, 0.25, 0.19, 0.14], 
  [ 0.86, 0.84, 0.82, 0.8, 0.76, 0.66, 0.56, 0.16, 0.13, 0.09, 0.06, 0.05] ], 
[ [ 0.91, 0.9, 0.88, 0.84, 0.81, 0.81, 0.7, 0.21, 0.21, 0.12, 0.09, 0.07],   //山形
  [ 0.77, 0.76, 0.73, 0.68, 0.63, 0.53, 0.49, 0.65, 0.59, 0.49, 0.4, 0.33], 
  [ 0.84, 0.82, 0.79, 0.76, 0.71, 0.6, 0.52, 0.44, 0.39, 0.3, 0.24, 0.19], 
  [ 0.9, 0.88, 0.87, 0.84, 0.8, 0.7, 0.59, 0.12, 0.1, 0.07, 0.05, 0.04] ], 
[ [ 0.83, 0.82, 0.8, 0.77, 0.73, 0.73, 0.63, 0.24, 0.24, 0.16, 0.12, 0.1],   //福島
  [ 0.66, 0.64, 0.61, 0.57, 0.53, 0.45, 0.42, 0.65, 0.62, 0.51, 0.43, 0.37], 
  [ 0.73, 0.71, 0.68, 0.65, 0.61, 0.51, 0.45, 0.45, 0.41, 0.33, 0.27, 0.22], 
  [ 0.81, 0.8, 0.78, 0.75, 0.71, 0.62, 0.52, 0.17, 0.14, 0.1, 0.08, 0.06] ], 
[ [ 0.82, 0.81, 0.8, 0.77, 0.72, 0.72, 0.6, 0.25, 0.25, 0.19, 0.15, 0.12],   //水戸
  [ 0.49, 0.47, 0.46, 0.42, 0.39, 0.34, 0.31, 0.59, 0.54, 0.47, 0.4, 0.33], 
  [ 0.62, 0.59, 0.58, 0.55, 0.52, 0.43, 0.38, 0.35, 0.32, 0.27, 0.22, 0.18], 
  [ 0.8, 0.79, 0.78, 0.75, 0.71, 0.6, 0.51, 0.14, 0.13, 0.1, 0.08, 0.06] ], 
[ [ 0.84, 0.83, 0.81, 0.78, 0.73, 0.73, 0.61, 0.25, 0.25, 0.18, 0.14, 0.11],   //宇都宮
  [ 0.52, 0.5, 0.48, 0.45, 0.41, 0.35, 0.33, 0.65, 0.62, 0.55, 0.48, 0.4], 
  [ 0.63, 0.62, 0.6, 0.56, 0.52, 0.44, 0.39, 0.43, 0.41, 0.36, 0.3, 0.24], 
  [ 0.81, 0.8, 0.79, 0.76, 0.71, 0.61, 0.51, 0.15, 0.14, 0.11, 0.09, 0.07] ], 
[ [ 0.78, 0.76, 0.74, 0.7, 0.66, 0.66, 0.55, 0.3, 0.3, 0.23, 0.18, 0.14],   //前橋
  [ 0.49, 0.48, 0.46, 0.42, 0.39, 0.34, 0.32, 0.72, 0.69, 0.62, 0.54, 0.46], 
  [ 0.63, 0.61, 0.59, 0.56, 0.52, 0.44, 0.4, 0.55, 0.54, 0.48, 0.4, 0.33], 
  [ 0.77, 0.75, 0.73, 0.7, 0.66, 0.56, 0.47, 0.21, 0.2, 0.17, 0.13, 0.1] ], 
[ [ 0.78, 0.78, 0.76, 0.73, 0.68, 0.68, 0.57, 0.33, 0.33, 0.25, 0.2, 0.15],   //さいたま
  [ 0.48, 0.47, 0.45, 0.42, 0.38, 0.34, 0.32, 0.74, 0.69, 0.63, 0.55, 0.46], 
  [ 0.58, 0.57, 0.55, 0.52, 0.48, 0.4, 0.37, 0.55, 0.52, 0.47, 0.4, 0.32], 
  [ 0.75, 0.75, 0.73, 0.7, 0.65, 0.55, 0.47, 0.23, 0.21, 0.18, 0.14, 0.11] ], 
[ [ 0.66, 0.64, 0.62, 0.59, 0.55, 0.55, 0.46, 0.39, 0.39, 0.3, 0.25, 0.2],   //千葉
  [ 0.44, 0.42, 0.4, 0.37, 0.34, 0.3, 0.28, 0.68, 0.64, 0.57, 0.5, 0.42], 
  [ 0.5, 0.48, 0.46, 0.43, 0.4, 0.34, 0.31, 0.5, 0.47, 0.41, 0.35, 0.28], 
  [ 0.62, 0.61, 0.59, 0.56, 0.52, 0.44, 0.38, 0.29, 0.27, 0.23, 0.19, 0.15] ], 
[ [ 0.63, 0.62, 0.6, 0.57, 0.53, 0.53, 0.44, 0.43, 0.43, 0.35, 0.28, 0.23],   //東京
  [ 0.44, 0.42, 0.4, 0.37, 0.34, 0.3, 0.29, 0.75, 0.7, 0.63, 0.56, 0.47], 
  [ 0.48, 0.45, 0.44, 0.41, 0.37, 0.32, 0.3, 0.58, 0.54, 0.5, 0.43, 0.35], 
  [ 0.6, 0.58, 0.56, 0.53, 0.5, 0.41, 0.37, 0.36, 0.33, 0.3, 0.24, 0.19] ], 
[ [ 0.65, 0.64, 0.62, 0.59, 0.54, 0.54, 0.45, 0.37, 0.37, 0.29, 0.24, 0.19],   //横浜
  [ 0.45, 0.42, 0.41, 0.38, 0.34, 0.3, 0.29, 0.67, 0.63, 0.57, 0.5, 0.41], 
  [ 0.5, 0.48, 0.46, 0.43, 0.4, 0.33, 0.31, 0.46, 0.43, 0.39, 0.33, 0.26], 
  [ 0.62, 0.6, 0.58, 0.55, 0.51, 0.43, 0.37, 0.28, 0.26, 0.22, 0.18, 0.14] ], 
[ [ 0.75, 0.74, 0.72, 0.69, 0.65, 0.65, 0.55, 0.4, 0.4, 0.26, 0.2, 0.15],   //新潟
  [ 0.68, 0.64, 0.61, 0.58, 0.53, 0.45, 0.41, 0.72, 0.65, 0.54, 0.43, 0.35], 
  [ 0.71, 0.68, 0.65, 0.62, 0.58, 0.48, 0.43, 0.53, 0.47, 0.37, 0.28, 0.22], 
  [ 0.74, 0.73, 0.71, 0.68, 0.64, 0.55, 0.47, 0.31, 0.27, 0.19, 0.14, 0.11] ], 
[ [ 0.78, 0.75, 0.73, 0.69, 0.65, 0.65, 0.55, 0.45, 0.45, 0.3, 0.24, 0.18],   //富山
  [ 0.65, 0.62, 0.59, 0.54, 0.49, 0.42, 0.39, 0.76, 0.7, 0.58, 0.48, 0.39], 
  [ 0.71, 0.68, 0.65, 0.62, 0.57, 0.48, 0.42, 0.55, 0.49, 0.38, 0.31, 0.24], 
  [ 0.77, 0.75, 0.72, 0.69, 0.65, 0.56, 0.48, 0.3, 0.25, 0.18, 0.14, 0.11] ], 
[ [ 0.72, 0.7, 0.67, 0.64, 0.6, 0.6, 0.51, 0.45, 0.45, 0.32, 0.25, 0.19],   //金沢
  [ 0.62, 0.58, 0.55, 0.51, 0.47, 0.4, 0.38, 0.76, 0.71, 0.59, 0.5, 0.4], 
  [ 0.65, 0.62, 0.6, 0.57, 0.52, 0.44, 0.4, 0.6, 0.55, 0.44, 0.35, 0.28], 
  [ 0.71, 0.69, 0.66, 0.64, 0.6, 0.51, 0.44, 0.36, 0.31, 0.24, 0.18, 0.14] ], 
[ [ 0.77, 0.75, 0.73, 0.7, 0.65, 0.65, 0.56, 0.41, 0.41, 0.28, 0.22, 0.17],   //福井
  [ 0.64, 0.6, 0.57, 0.53, 0.47, 0.41, 0.39, 0.82, 0.77, 0.66, 0.56, 0.46], 
  [ 0.68, 0.65, 0.62, 0.58, 0.53, 0.45, 0.41, 0.63, 0.59, 0.48, 0.39, 0.31], 
  [ 0.75, 0.73, 0.71, 0.68, 0.64, 0.55, 0.47, 0.33, 0.29, 0.22, 0.16, 0.13] ], 
[ [ 0.88, 0.85, 0.83, 0.78, 0.73, 0.73, 0.61, 0.26, 0.26, 0.2, 0.16, 0.12],   //甲府
  [ 0.56, 0.54, 0.49, 0.45, 0.4, 0.36, 0.34, 0.79, 0.73, 0.68, 0.59, 0.51], 
  [ 0.62, 0.6, 0.56, 0.52, 0.48, 0.4, 0.37, 0.5, 0.48, 0.45, 0.38, 0.31], 
  [ 0.81, 0.79, 0.76, 0.72, 0.67, 0.56, 0.48, 0.2, 0.18, 0.16, 0.12, 0.09] ], 
[ [ 0.98, 0.96, 0.93, 0.9, 0.85, 0.85, 0.73, 0.2, 0.2, 0.13, 0.1, 0.07],   //長野
  [ 0.76, 0.74, 0.72, 0.67, 0.62, 0.52, 0.48, 0.7, 0.63, 0.54, 0.45, 0.37], 
  [ 0.83, 0.81, 0.79, 0.75, 0.7, 0.59, 0.51, 0.42, 0.36, 0.29, 0.22, 0.18], 
  [ 0.94, 0.92, 0.9, 0.87, 0.82, 0.72, 0.6, 0.13, 0.1, 0.07, 0.05, 0.04] ], 
[ [ 0.74, 0.72, 0.7, 0.66, 0.62, 0.62, 0.51, 0.43, 0.43, 0.33, 0.27, 0.21],   //岐阜
  [ 0.52, 0.48, 0.45, 0.42, 0.37, 0.33, 0.32, 0.82, 0.79, 0.73, 0.65, 0.56], 
  [ 0.6, 0.57, 0.54, 0.51, 0.46, 0.38, 0.36, 0.68, 0.63, 0.57, 0.5, 0.41], 
  [ 0.71, 0.69, 0.67, 0.64, 0.59, 0.5, 0.43, 0.38, 0.35, 0.29, 0.23, 0.18] ], 
[ [ 0.65, 0.61, 0.6, 0.56, 0.52, 0.52, 0.43, 0.38, 0.38, 0.32, 0.27, 0.21],   //静岡
  [ 0.38, 0.35, 0.32, 0.29, 0.26, 0.24, 0.23, 0.68, 0.64, 0.61, 0.54, 0.45], 
  [ 0.47, 0.45, 0.43, 0.4, 0.36, 0.3, 0.29, 0.52, 0.49, 0.45, 0.4, 0.32], 
  [ 0.63, 0.6, 0.58, 0.55, 0.51, 0.42, 0.37, 0.28, 0.27, 0.24, 0.19, 0.15] ], 
[ [ 0.74, 0.71, 0.69, 0.66, 0.61, 0.61, 0.51, 0.42, 0.42, 0.34, 0.27, 0.21],   //名古屋
  [ 0.51, 0.48, 0.45, 0.41, 0.37, 0.32, 0.31, 0.8, 0.78, 0.72, 0.64, 0.54], 
  [ 0.59, 0.57, 0.54, 0.5, 0.46, 0.38, 0.36, 0.62, 0.59, 0.54, 0.46, 0.38], 
  [ 0.71, 0.69, 0.66, 0.63, 0.59, 0.49, 0.43, 0.34, 0.32, 0.27, 0.21, 0.16] ], 
[ [ 0.66, 0.64, 0.62, 0.59, 0.55, 0.55, 0.46, 0.44, 0.44, 0.35, 0.29, 0.22],   //津
  [ 0.48, 0.46, 0.44, 0.4, 0.37, 0.31, 0.3, 0.74, 0.7, 0.64, 0.56, 0.46], 
  [ 0.56, 0.53, 0.51, 0.48, 0.44, 0.36, 0.34, 0.64, 0.6, 0.55, 0.47, 0.38], 
  [ 0.66, 0.64, 0.61, 0.59, 0.55, 0.46, 0.4, 0.38, 0.36, 0.31, 0.25, 0.19] ], 
[ [ 0.74, 0.72, 0.7, 0.67, 0.63, 0.63, 0.53, 0.39, 0.39, 0.29, 0.23, 0.17],   //彦根
  [ 0.6, 0.58, 0.55, 0.52, 0.47, 0.39, 0.37, 0.75, 0.71, 0.62, 0.53, 0.43], 
  [ 0.63, 0.62, 0.59, 0.56, 0.51, 0.43, 0.39, 0.61, 0.57, 0.49, 0.41, 0.32], 
  [ 0.72, 0.7, 0.68, 0.65, 0.61, 0.52, 0.45, 0.32, 0.29, 0.23, 0.18, 0.14] ], 
[ [ 0.72, 0.7, 0.68, 0.65, 0.61, 0.61, 0.51, 0.43, 0.43, 0.34, 0.28, 0.22],   //京都
  [ 0.51, 0.49, 0.46, 0.42, 0.38, 0.33, 0.32, 0.85, 0.83, 0.76, 0.68, 0.58], 
  [ 0.58, 0.56, 0.53, 0.5, 0.45, 0.38, 0.36, 0.71, 0.68, 0.62, 0.54, 0.45], 
  [ 0.69, 0.68, 0.65, 0.62, 0.58, 0.49, 0.43, 0.39, 0.36, 0.3, 0.24, 0.19] ], 
[ [ 0.64, 0.61, 0.6, 0.57, 0.53, 0.53, 0.44, 0.54, 0.54, 0.43, 0.36, 0.28],   //大阪
  [ 0.48, 0.45, 0.42, 0.39, 0.34, 0.3, 0.3, 0.88, 0.85, 0.78, 0.7, 0.59], 
  [ 0.52, 0.49, 0.47, 0.43, 0.39, 0.33, 0.32, 0.72, 0.7, 0.64, 0.56, 0.46], 
  [ 0.62, 0.59, 0.57, 0.54, 0.5, 0.42, 0.38, 0.48, 0.45, 0.39, 0.32, 0.25] ], 
[ [ 0.66, 0.63, 0.6, 0.57, 0.52, 0.52, 0.44, 0.48, 0.48, 0.39, 0.33, 0.26],   //神戸
  [ 0.5, 0.47, 0.44, 0.41, 0.36, 0.31, 0.31, 0.78, 0.76, 0.69, 0.61, 0.51], 
  [ 0.56, 0.53, 0.5, 0.47, 0.42, 0.36, 0.34, 0.62, 0.6, 0.54, 0.47, 0.38], 
  [ 0.65, 0.62, 0.59, 0.56, 0.52, 0.43, 0.39, 0.41, 0.4, 0.34, 0.29, 0.22] ], 
[ [ 0.75, 0.73, 0.71, 0.68, 0.64, 0.64, 0.55, 0.34, 0.34, 0.26, 0.21, 0.16],   //奈良
  [ 0.53, 0.5, 0.47, 0.43, 0.39, 0.34, 0.33, 0.81, 0.77, 0.7, 0.61, 0.52], 
  [ 0.62, 0.6, 0.57, 0.54, 0.49, 0.42, 0.38, 0.58, 0.56, 0.5, 0.42, 0.34], 
  [ 0.74, 0.73, 0.7, 0.68, 0.64, 0.55, 0.47, 0.22, 0.2, 0.16, 0.12, 0.1] ], 
[ [ 0.67, 0.64, 0.62, 0.58, 0.54, 0.54, 0.46, 0.45, 0.45, 0.36, 0.31, 0.24],   //和歌山
  [ 0.48, 0.45, 0.41, 0.37, 0.33, 0.3, 0.29, 0.81, 0.78, 0.73, 0.65, 0.55], 
  [ 0.53, 0.5, 0.46, 0.43, 0.39, 0.33, 0.32, 0.63, 0.61, 0.56, 0.5, 0.41], 
  [ 0.64, 0.62, 0.58, 0.55, 0.51, 0.43, 0.39, 0.41, 0.39, 0.34, 0.28, 0.22] ], 
[ [ 0.73, 0.71, 0.68, 0.65, 0.61, 0.61, 0.52, 0.42, 0.42, 0.3, 0.24, 0.19],   //鳥取
  [ 0.58, 0.54, 0.51, 0.47, 0.42, 0.37, 0.35, 0.81, 0.77, 0.66, 0.56, 0.47], 
  [ 0.64, 0.61, 0.58, 0.54, 0.5, 0.42, 0.38, 0.6, 0.56, 0.46, 0.37, 0.3], 
  [ 0.73, 0.71, 0.67, 0.65, 0.61, 0.52, 0.45, 0.29, 0.26, 0.2, 0.15, 0.12] ], 
[ [ 0.71, 0.69, 0.66, 0.63, 0.59, 0.59, 0.5, 0.41, 0.41, 0.29, 0.23, 0.18],   //松江
  [ 0.57, 0.53, 0.5, 0.46, 0.42, 0.36, 0.34, 0.75, 0.7, 0.6, 0.5, 0.42], 
  [ 0.63, 0.6, 0.56, 0.53, 0.49, 0.41, 0.37, 0.52, 0.48, 0.39, 0.31, 0.24], 
  [ 0.7, 0.68, 0.65, 0.62, 0.59, 0.5, 0.43, 0.3, 0.26, 0.2, 0.16, 0.12] ], 
[ [ 0.73, 0.71, 0.69, 0.66, 0.61, 0.61, 0.52, 0.45, 0.45, 0.34, 0.28, 0.22],   //岡山
  [ 0.49, 0.47, 0.44, 0.4, 0.36, 0.31, 0.3, 0.86, 0.82, 0.75, 0.66, 0.56], 
  [ 0.55, 0.52, 0.49, 0.45, 0.41, 0.35, 0.33, 0.75, 0.72, 0.65, 0.57, 0.47], 
  [ 0.69, 0.67, 0.64, 0.61, 0.57, 0.48, 0.42, 0.43, 0.4, 0.34, 0.28, 0.22] ], 
[ [ 0.72, 0.69, 0.67, 0.64, 0.59, 0.59, 0.5, 0.42, 0.42, 0.33, 0.26, 0.2],   //広島
  [ 0.49, 0.46, 0.42, 0.39, 0.35, 0.3, 0.3, 0.82, 0.79, 0.72, 0.63, 0.54], 
  [ 0.53, 0.5, 0.47, 0.43, 0.39, 0.33, 0.32, 0.71, 0.69, 0.62, 0.54, 0.45], 
  [ 0.68, 0.65, 0.62, 0.59, 0.55, 0.46, 0.41, 0.43, 0.41, 0.34, 0.28, 0.21] ], 
[ [ 0.75, 0.72, 0.71, 0.68, 0.63, 0.63, 0.54, 0.35, 0.35, 0.26, 0.21, 0.16],   //山口
  [ 0.51, 0.48, 0.43, 0.4, 0.35, 0.31, 0.3, 0.8, 0.76, 0.69, 0.6, 0.52], 
  [ 0.59, 0.55, 0.51, 0.48, 0.44, 0.37, 0.35, 0.62, 0.59, 0.52, 0.44, 0.36], 
  [ 0.73, 0.7, 0.67, 0.64, 0.6, 0.52, 0.45, 0.29, 0.28, 0.22, 0.17, 0.13] ], 
[ [ 0.65, 0.62, 0.6, 0.56, 0.52, 0.52, 0.44, 0.44, 0.44, 0.35, 0.29, 0.22],   //徳島
  [ 0.47, 0.43, 0.4, 0.37, 0.33, 0.29, 0.28, 0.78, 0.75, 0.68, 0.6, 0.5], 
  [ 0.53, 0.5, 0.47, 0.43, 0.39, 0.33, 0.32, 0.63, 0.61, 0.55, 0.47, 0.39], 
  [ 0.63, 0.61, 0.58, 0.55, 0.51, 0.43, 0.38, 0.38, 0.36, 0.31, 0.25, 0.19] ], 
[ [ 0.67, 0.64, 0.62, 0.59, 0.55, 0.55, 0.47, 0.47, 0.47, 0.37, 0.3, 0.24],   //高松
  [ 0.47, 0.44, 0.41, 0.38, 0.34, 0.29, 0.29, 0.83, 0.8, 0.73, 0.65, 0.55], 
  [ 0.54, 0.51, 0.48, 0.45, 0.4, 0.34, 0.33, 0.73, 0.7, 0.64, 0.55, 0.46], 
  [ 0.65, 0.63, 0.6, 0.58, 0.54, 0.45, 0.4, 0.41, 0.39, 0.33, 0.27, 0.21] ], 
[ [ 0.66, 0.63, 0.6, 0.57, 0.53, 0.53, 0.45, 0.43, 0.43, 0.35, 0.29, 0.23],   //松山
  [ 0.47, 0.43, 0.39, 0.36, 0.32, 0.28, 0.27, 0.81, 0.77, 0.71, 0.64, 0.54], 
  [ 0.52, 0.5, 0.46, 0.43, 0.39, 0.33, 0.31, 0.67, 0.64, 0.59, 0.51, 0.42], 
  [ 0.64, 0.61, 0.59, 0.56, 0.52, 0.44, 0.38, 0.36, 0.34, 0.3, 0.24, 0.19] ], 
[ [ 0.69, 0.66, 0.63, 0.59, 0.54, 0.54, 0.45, 0.39, 0.39, 0.33, 0.28, 0.22],   //高知
  [ 0.38, 0.34, 0.31, 0.28, 0.24, 0.23, 0.23, 0.76, 0.74, 0.7, 0.64, 0.55], 
  [ 0.47, 0.45, 0.42, 0.38, 0.34, 0.3, 0.29, 0.58, 0.57, 0.53, 0.47, 0.39], 
  [ 0.65, 0.63, 0.59, 0.56, 0.51, 0.43, 0.39, 0.32, 0.31, 0.27, 0.22, 0.17] ], 
[ [ 0.6, 0.58, 0.55, 0.52, 0.48, 0.48, 0.4, 0.48, 0.48, 0.38, 0.32, 0.25],   //福岡
  [ 0.47, 0.43, 0.39, 0.35, 0.31, 0.28, 0.27, 0.8, 0.77, 0.69, 0.6, 0.51], 
  [ 0.51, 0.47, 0.43, 0.4, 0.36, 0.31, 0.29, 0.66, 0.62, 0.55, 0.47, 0.38], 
  [ 0.58, 0.55, 0.52, 0.49, 0.46, 0.39, 0.35, 0.45, 0.42, 0.36, 0.3, 0.23] ], 
[ [ 0.69, 0.67, 0.64, 0.61, 0.56, 0.56, 0.48, 0.39, 0.39, 0.31, 0.26, 0.2],   //佐賀
  [ 0.48, 0.44, 0.4, 0.36, 0.32, 0.29, 0.29, 0.82, 0.8, 0.71, 0.63, 0.56], 
  [ 0.52, 0.49, 0.45, 0.41, 0.37, 0.32, 0.31, 0.7, 0.67, 0.59, 0.51, 0.44], 
  [ 0.66, 0.64, 0.61, 0.57, 0.53, 0.45, 0.4, 0.36, 0.35, 0.29, 0.24, 0.19] ], 
[ [ 0.59, 0.56, 0.53, 0.5, 0.46, 0.46, 0.39, 0.44, 0.44, 0.36, 0.3, 0.24],   //長崎
  [ 0.45, 0.41, 0.37, 0.33, 0.29, 0.27, 0.26, 0.74, 0.73, 0.66, 0.59, 0.5], 
  [ 0.49, 0.46, 0.42, 0.38, 0.34, 0.29, 0.28, 0.63, 0.61, 0.54, 0.47, 0.39], 
  [ 0.58, 0.54, 0.51, 0.48, 0.44, 0.37, 0.34, 0.42, 0.4, 0.34, 0.28, 0.22] ], 
[ [ 0.71, 0.68, 0.65, 0.62, 0.57, 0.57, 0.48, 0.42, 0.42, 0.34, 0.29, 0.23],   //熊本
  [ 0.46, 0.42, 0.37, 0.33, 0.29, 0.28, 0.27, 0.85, 0.83, 0.76, 0.69, 0.6], 
  [ 0.51, 0.47, 0.43, 0.39, 0.35, 0.31, 0.3, 0.68, 0.67, 0.61, 0.54, 0.46], 
  [ 0.66, 0.63, 0.6, 0.57, 0.52, 0.45, 0.4, 0.38, 0.37, 0.32, 0.27, 0.21] ], 
[ [ 0.65, 0.63, 0.6, 0.57, 0.53, 0.53, 0.45, 0.36, 0.36, 0.3, 0.24, 0.19],   //大分
  [ 0.44, 0.4, 0.36, 0.33, 0.3, 0.27, 0.26, 0.77, 0.73, 0.67, 0.59, 0.49], 
  [ 0.5, 0.47, 0.43, 0.4, 0.36, 0.31, 0.3, 0.61, 0.59, 0.53, 0.45, 0.37], 
  [ 0.63, 0.6, 0.57, 0.54, 0.5, 0.43, 0.38, 0.32, 0.31, 0.27, 0.21, 0.17] ], 
[ [ 0.62, 0.6, 0.57, 0.53, 0.49, 0.49, 0.42, 0.4, 0.4, 0.37, 0.31, 0.25],   //宮崎
  [ 0.33, 0.3, 0.26, 0.23, 0.2, 0.21, 0.21, 0.75, 0.74, 0.71, 0.65, 0.56], 
  [ 0.41, 0.38, 0.35, 0.31, 0.28, 0.26, 0.25, 0.61, 0.6, 0.57, 0.51, 0.43], 
  [ 0.58, 0.55, 0.53, 0.49, 0.45, 0.39, 0.35, 0.34, 0.33, 0.31, 0.27, 0.21] ], 
[ [ 0.55, 0.53, 0.49, 0.45, 0.41, 0.41, 0.36, 0.51, 0.51, 0.43, 0.39, 0.32],   //鹿児島
  [ 0.35, 0.32, 0.27, 0.23, 0.2, 0.21, 0.21, 0.82, 0.79, 0.75, 0.7, 0.61], 
  [ 0.41, 0.38, 0.33, 0.29, 0.25, 0.24, 0.24, 0.69, 0.67, 0.64, 0.59, 0.5], 
  [ 0.53, 0.51, 0.46, 0.43, 0.38, 0.34, 0.32, 0.48, 0.46, 0.42, 0.37, 0.3] ], 
[ [ 0.12, 0.08, 0.07, 0.06, 0.05, 0.05, 0.09, 0.55, 0.55, 0.53, 0.52, 0.47],   //那覇
  [ 0.09, 0.04, 0.03, 0.02, 0.02, 0.06, 0.06, 0.76, 0.75, 0.74, 0.72, 0.67], 
  [ 0.1, 0.05, 0.04, 0.03, 0.03, 0.07, 0.07, 0.64, 0.62, 0.62, 0.6, 0.54], 
  [ 0.12, 0.08, 0.06, 0.06, 0.04, 0.08, 0.08, 0.51, 0.5, 0.49, 0.48, 0.43] ] ],


	getArray : function( prefParam ) {
		var ret;
		var pref = prefParam;
		if ( pref>47 || pref <0 ) {
			pref = 0;
		}
		ret = this.factorPrefTimeMonth[pref];

		return ret;
	}

} );
﻿/* 2017/12/16  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * area.js  for override
 * 
 * AreaParameters area: parameters by prefecture for home
 * 
 * License: http://creativecommons.org/licenses/LGPL/2.1/
 * 
 * @author Yasufumi Suzuki, Hinodeya Institute for Ecolife co.ltd.
 *								2011/01/21 original PHP version
 *								2011/05/06 ported to ActionScript3
 * 								2016/04/12 ported to JavaScript
 * 								2017/12/16 ver.1.0 set functions
 * 								2018/03/14 			global setting fix
 */

D6.area = Object.assign( D6.area, {

	//name of prefecture
	//	prefName[prefecture]
	//
	prefName : [ 
		'兵庫',
		"北海道",	//1
		"青森",
		"岩手",
		"宮城",
		"秋田",	//5
		"山形",
		"福島",
		"茨城",
		"栃木",
		"群馬",	//10
		"埼玉",
		"千葉",
		"東京",
		"神奈川",
		"新潟",	//15
		"富山",
		"石川",
		"福井",
		"山梨",
		"長野",	//20
		"岐阜",
		"静岡",
		"愛知",
		"三重",
		"滋賀",	//25
		"京都",
		"大阪",
		"兵庫",
		"奈良",
		"和歌山",	//30
		"鳥取",
		"島根",
		"岡山",
		"広島",
		"山口",	//35
		"徳島",
		"香川",
		"愛媛",
		"高知",
		"福岡",	//40
		"佐賀",
		"長崎",
		"熊本",
		"大分",
		"宮崎",	//45
		"鹿児島",
		"沖縄"
	],

	prefDefault : 13,	//not selected


	// heat category with prefecture
	//	prefHeatingLeverl[prefecture]
	//
	//	return code
	//		1:cold area in Japan(Hokkaido)
	//			.
	//			.
	//		6:hot area in Japan(Okinawa)
	//
	prefHeatingLeverl : [ 4,
				1, 2, 2, 3, 2, 2, 3,
				3, 3, 3, 4, 4, 4, 4,
				3, 3, 3, 4, 4, 3, 4, 4, 4,
				4, 4, 4, 4, 4, 4, 4,
				4, 4, 4, 4, 4, 4, 4, 4, 5,
				4, 4, 4, 4, 4, 5, 5, 6 ],

								
	// CO2 emittion factor
	//	co2ElectCompanyUnit[elec_company]
	//
	//	elec_company
	//		1:hokkaido electric power company.
	//			.
	//			.
	//		9:okinawa electric power company.
	//
	co2ElectCompanyUnit : [ 0.55, 0.55, 0.55, 0.55, 0.55, 0.55
										, 0.55, 0.55, 0.55, 0.55, 0.55 ],

	//	electricity company code by prefecture
	//
	//	prefToEleArea[prefecture]
	//
	// 0:hokkaido、1:tohoku 2:tokyo 3:chubu 4:hokuritu 5:kansai
	// 6:tyugoku 7:shikoku 8:kyusyu 9:okinawa
	prefToEleArea : [ 5,
				0, 1, 1, 1, 1, 1, 1,
				2, 2, 2, 2, 2, 2, 2,
				1, 4, 4, 4, 2, 3, 3, 3, 3,
				3, 5, 5, 5, 5, 5, 5,
				6, 6, 6, 6, 6, 7, 7, 7, 7,
				8, 8, 8, 8, 8, 8, 8, 9 ],

	//electricity supply company price ratio
	electCompanyPrice : [
		1.2,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1.2
	],

	//	electricity charge unit table
	//
	//	elecPrice[electicity_type][calc_type]
	//
	//	electicity_type
	//		1:depend on consumption type A
	//		2:depend on consumption type B
	//		3:demand pricing 
	//		4:low voltage 
	//		5:integrated low voltage 
	//		6:high voltage 
	//	calc_type
	//		1:peak time unit
	//		2:average unit
	//		3:price down unit
	//		4:cut off
	//		5:base charge to contract kW
	//
	//	
	elecPrice : {
		1: [ 33.32, 33.32, 33.32, -1500, 0 ],
		2: [ 33.32, 33.32, 33.32, -1500, 280 ],
		3: [ 38.89, 27.32, 13.10, 2160, 0 ],
		4: [ 17.98, 16.53, 16.53, 0, 1054 ],
		5: [ 20.22, 18.56, 18.56, 64800, 0 ],
		6: [ 22.58, 17.36, 13.08, 0, 1733 ]
	},


	// meteorological annal average templature C
	//
	//		prefTemplature( prefecture )
	//
	//
	// in Unit.setArea() copy this to averageTemplature
	//
	prefTemplature : [

	17.4	,	//兵庫
	 9.4	,	//北海道
	11.1	,	//青森
	10.7	,	//岩手
	13.1	,	//宮城
	12.4	,	//秋田
	12.2	,	//山形
	13.6	,	//福島
	14.4	,	//茨城
	14.6	,	//栃木
	15.3	,	//群馬
	15.8	,	//埼玉
	16.6	,	//千葉
	17.0	,	//東京
	16.5	,	//神奈川
	14.4	,	//新潟
	14.9	,	//富山
	15.1	,	//石川
	15.0	,	//福井
	15.3	,	//山梨
	12.5	,	//長野
	16.4	,	//岐阜
	17.1	,	//静岡
	16.6	,	//愛知
	16.6	,	//三重
	15.2	,	//滋賀
	16.3	,	//京都
	17.6	,	//大阪
	17.4	,	//兵庫
	15.3	,	//奈良
	17.3	,	//和歌山
	15.5	,	//鳥取
	15.7	,	//島根
	17.0	,	//岡山
	17.0	,	//広島
	16.2	,	//山口
	17.4	,	//徳島
	17.3	,	//香川
	17.3	,	//愛媛
	17.9	,	//高知
	18.0	,	//福岡
	17.4	,	//佐賀
	18.0	,	//長崎
	18.0	,	//熊本
	17.4	,	//大分
	18.1	,	//宮崎
	19.3	,	//鹿児島
	23.5		//沖縄
	],

	// solar factor
	//
	//		prefPVElectricity( prefecture )
	//
	prefPVElectricity : [

	4.04	,	//兵庫
	3.95	,	//北海道
	3.66	,	//青森
	3.88	,	//岩手
	3.84	,	//宮城
	3.54	,	//秋田
	3.72	,	//山形
	3.87	,	//福島
	3.95	,	//茨城
	3.97	,	//栃木
	4.08	,	//群馬
	3.81	,	//埼玉
	4.00	,	//千葉
	3.74	,	//東京
	3.92	,	//神奈川
	3.54	,	//新潟
	3.56	,	//富山
	3.68	,	//石川
	3.57	,	//福井
	4.31	,	//山梨
	3.95	,	//長野
	4.25	,	//岐阜
	4.15	,	//静岡
	4.11	,	//愛知
	4.15	,	//三重
	3.46	,	//滋賀
	3.72	,	//京都
	3.92	,	//大阪
	4.04	,	//兵庫
	3.99	,	//奈良
	4.12	,	//和歌山
	3.66	,	//鳥取
	3.74	,	//島根
	4.06	,	//岡山
	4.26	,	//広島
	3.99	,	//山口
	4.13	,	//徳島
	4.18	,	//香川
	4.15	,	//愛媛
	4.32	,	//高知
	3.79	,	//福岡
	3.94	,	//佐賀
	3.97	,	//長崎
	4.05	,	//熊本
	3.95	,	//大分
	4.26	,	//宮崎
	4.01	,	//鹿児島
	4.15		//沖縄
	],

	// heat load factore table
	//
	//エアコン・冷暖房負荷算出用　
	//	配列は　  [朝、昼、夕、夜]の係数で、
	//	それぞれ　[暖房半月、暖房1ヶ月、暖房2ヶ月、暖房3ヶ月、暖房4ヶ月、暖房6ヶ月、暖房8ヶ月、
	//				冷房半月、冷房1ヶ月、冷房2ヶ月、冷房3ヶ月、冷房4ヶ月]
	//	の規定温度における消費量に対する割合を示す。
	//	この計算方法等については、京都府地球温暖化防止活動推進センター,2006より

	// accons factor copy from D6.accons
	//月数別のエアコン負荷（初期設定は神戸市）
	airconFactor_mon :
			  [ [ 0.66, 0.62, 0.59, 0.55, 0.50, 0.41, 0.37, 0.39, 0.36, 0.31, 0.26, 0.20 ],
   				[ 0.43, 0.39, 0.37, 0.34, 0.30, 0.27, 0.26, 0.79, 0.75, 0.67, 0.59, 0.49 ],
     			[ 0.47, 0.45, 0.42, 0.39, 0.35, 0.30, 0.29, 0.57, 0.55, 0.49, 0.43, 0.35 ],
     			[ 0.62, 0.58, 0.55, 0.51, 0.47, 0.39, 0.35, 0.34, 0.32, 0.27, 0.23, 0.18 ] ],
	// heat factor copy from D6.heatcons
	//月数別の熱需要負荷（初期設定は神戸市）
	heatFactor_mon:
			  [ [ 0.64, 0.61, 0.60, 0.57, 0.53, 0.53, 0.44, 0.54, 0.54, 0.43, 0.36, 0.28 ],
     			[ 0.48, 0.45, 0.42, 0.39, 0.34, 0.30, 0.30, 0.88, 0.85, 0.78, 0.70, 0.59 ],
     			[ 0.52, 0.49, 0.47, 0.43, 0.39, 0.33, 0.32, 0.72, 0.70, 0.64, 0.56, 0.46 ],
     			[ 0.62, 0.59, 0.57, 0.54, 0.50, 0.42, 0.38, 0.48, 0.45, 0.39, 0.32, 0.25 ] ],
	// addac factor copy from D6.addac
	plusHeatFactor_mon:  
			  [ [ 0, 0, 0, 0, 0, 0, 0 ],
     			[ 0, 0, 0, 0, 0, 0, 0 ],
     			[ 0, 0, 0, 0, 0, 0, 0 ],
     			[ 0, 0, 0, 0, 0, 0, 0 ] ],


	// home original function/data set ==================================

	// average energy fee per month
	//		prefKakeiEnergy[prefecture][energy_type]
	//
	//		prefecture(0-47 in Japan)
	//		energy_type
	//			0:electicity
	//			1:gas
	//			2:kerosene
	//			3:gasoline
	//
	prefKakeiEnergy : [ 
		[ 7959, 5661, 313, 2647],	//0:神戸
		[ 7568, 5400, 3772, 3984],  //札幌市
		[ 8892, 4251, 4886, 3806],  //青森市
		[ 8455, 5536, 3471, 4168],  //盛岡市
		[ 7822, 6913, 1492, 4149],  //仙台市
		[ 8134, 4816, 4284, 5573],  //秋田市
		[ 9019, 6170, 3119, 5078],  //山形市
		[ 8979, 6080, 2086, 5063],  //福島市
		[ 8644, 6398, 1160, 6005],  //水戸市
		[ 8438, 5842, 1100, 5612],  //宇都宮市
		[ 7785, 5318, 968, 5777],  //前橋市
		[ 9217, 6501, 374, 2922],  //さいたま市
		[ 8296, 5735, 442, 3230],  //千葉市
		[ 8982, 6123, 232, 1462],  //東京都区部
		[ 8719, 6441, 428, 2793],  //横浜市
		[ 8685, 6683, 1370, 5120],  //新潟市
		[ 10824, 5846, 2679, 6369],  //富山市
		[ 10443, 6423, 1918, 5602],  //金沢市
		[ 11659, 6434, 1674, 5284],  //福井市
		[ 8615, 5110, 1393, 4719],  //甲府市
		[ 8552, 5710, 1992, 6084],  //長野市
		[ 10186, 6953, 915, 5483],  //岐阜市
		[ 8980, 7392, 586, 3997],  //静岡市
		[ 8783, 6160, 455, 3352],  //名古屋市
		[ 9409, 6204, 885, 5788],  //津市
		[ 9113, 5571, 712, 4367],  //大津市
		[ 8994, 6135, 413, 2463],  //京都市
		[ 9246, 6026, 196, 1345],  //大阪市
		[ 7959, 5661, 313, 2647],  //神戸市
		[ 9096, 6517, 593, 3637],  //奈良市
		[ 10169, 4862, 842, 4110],  //和歌山市
		[ 8691, 5382, 1327, 4652],  //鳥取市
		[ 9122, 6504, 979, 5699],  //松江市
		[ 9466, 6275, 934, 4759],  //岡山市
		[ 9201, 6303, 765, 4310],  //広島市
		[ 8724, 5867, 1074, 7451],  //山口市
		[ 11443, 5315, 956, 4817],  //徳島市
		[ 9765, 5072, 778, 4649],  //高松市
		[ 9356, 5474, 759, 3979],  //松山市
		[ 8898, 5947, 549, 4191],  //高知市
		[ 8572, 6426, 542, 3958],  //福岡市
		[ 8875, 5993, 958, 5042],  //佐賀市
		[ 7805, 6368, 627, 2823],  //長崎市
		[ 8745, 5735, 688, 4111],  //熊本市
		[ 8260, 5606, 735, 5775],  //大分市
		[ 8188, 5252, 604, 5034],  //宮崎市
		[ 7790, 6001, 469, 5401],  //鹿児島市
		[ 8960, 4911, 366, 3177]   //那覇市
	],

	// seasonal energy fee factor to average
	//
	//	prefSeasonFactorArray[prefecture][season][energy_type]
	//
	//	prefecture:
	//	season:
	//		0:wihter
	//		1:spring
	//		2:summer
	//	energy_type
	//		0:electicity
	//		1:gas
	//		2:kerosene
	//		3:gasoline
	//
	//季節別負荷係数
	prefSeasonFactorArray : [

	[ [ 1.1084, 1.3537, 2.5436, 0.9465 ], [ 0.8664, 0.9165, 0.3546, 0.9764 ], [ 1.0782, 0.6675, 0.0175, 1.1107 ] ],   //神戸市
	[ [ 1.149, 1.1094, 1.8254, 0.9243 ], [ 0.9482, 0.9876, 0.8169, 1.0159 ], [ 0.8876, 0.8749, 0.2047, 1.0743 ] ],   //札幌市
	[ [ 1.185, 1.0197, 1.8202, 1.0114 ], [ 0.9286, 1.0217, 0.7966, 0.9894 ], [ 0.8722, 0.9376, 0.2455, 1.0025 ] ],   //青森市
	[ [ 1.2519, 1.176, 1.9527, 0.9121 ], [ 0.9035, 0.9891, 0.7324, 1.0333 ], [ 0.8249, 0.7835, 0.1757, 1.0616 ] ],   //盛岡市
	[ [ 1.1606, 1.2125, 2.2116, 0.9972 ], [ 0.9272, 0.9747, 0.5783, 0.9563 ], [ 0.9071, 0.7588, 0.0873, 1.0766 ] ],   //仙台市
	[ [ 1.1375, 1.1571, 1.962, 1.0131 ], [ 0.9253, 0.9971, 0.7264, 0.9946 ], [ 0.9411, 0.7954, 0.1733, 0.9915 ] ],   //秋田市
	[ [ 1.1941, 1.1766, 1.9629, 0.9636 ], [ 0.8986, 0.9952, 0.6925, 0.9746 ], [ 0.9103, 0.7726, 0.2285, 1.091 ] ],   //山形市
	[ [ 1.1462, 1.1823, 1.9593, 0.9525 ], [ 0.9195, 0.9801, 0.6816, 0.987 ], [ 0.9393, 0.7901, 0.2515, 1.085 ] ],   //福島市
	[ [ 1.1464, 1.252, 2.0957, 1.021 ], [ 0.9062, 0.9648, 0.5947, 0.9815 ], [ 0.9611, 0.7228, 0.2145, 1.0028 ] ],   //水戸市
	[ [ 1.1498, 1.2742, 1.934, 1.0276 ], [ 0.9069, 0.9497, 0.6857, 0.9587 ], [ 0.9555, 0.7183, 0.2786, 1.032 ] ],   //宇都宮市
	[ [ 1.1471, 1.2582, 1.9129, 0.9325 ], [ 0.8853, 0.948, 0.6602, 0.9919 ], [ 0.9949, 0.7424, 0.3491, 1.1035 ] ],   //前橋市
	[ [ 1.1087, 1.3465, 2.5018, 0.8666 ], [ 0.8778, 0.9416, 0.3854, 0.9338 ], [ 1.0587, 0.6352, 0.0219, 1.2882 ] ],   //さいたま市
	[ [ 1.1219, 1.3604, 2.4476, 1.0147 ], [ 0.881, 0.9263, 0.4213, 0.9324 ], [ 1.0359, 0.6424, 0.0343, 1.0931 ] ],   //千葉市
	[ [ 1.1218, 1.3846, 2.4812, 1.0011 ], [ 0.8666, 0.9201, 0.393, 0.8726 ], [ 1.0599, 0.6203, 0.0368, 1.2109 ] ],   //東京都区部
	[ [ 1.1243, 1.3369, 2.3761, 0.929 ], [ 0.8828, 0.9295, 0.4813, 0.9553 ], [ 1.0296, 0.6683, 0.0296, 1.1692 ] ],   //横浜市
	[ [ 1.1343, 1.3681, 2.2726, 0.9586 ], [ 0.893, 0.9273, 0.5639, 0.9968 ], [ 0.9993, 0.6303, 0.0302, 1.0607 ] ],   //新潟市
	[ [ 1.1048, 1.1422, 1.9012, 1.053 ], [ 0.8787, 0.9851, 0.7561, 0.9779 ], [ 1.0624, 0.8352, 0.205, 0.966 ] ],   //富山市
	[ [ 1.1945, 1.1597, 2.0031, 1.0081 ], [ 0.8731, 1.0076, 0.6543, 0.9632 ], [ 0.9521, 0.7745, 0.2386, 1.0505 ] ],   //金沢市
	[ [ 1.1454, 1.1327, 2.1399, 1.0077 ], [ 0.8642, 1.0102, 0.5938, 1.0036 ], [ 1.0325, 0.8059, 0.1572, 0.9838 ] ],   //福井市
	[ [ 1.1554, 1.1964, 1.8836, 0.9521 ], [ 0.8678, 0.9947, 0.689, 0.9717 ], [ 1.013, 0.747, 0.3402, 1.1109 ] ],   //甲府市
	[ [ 1.2328, 1.2225, 1.9588, 0.957 ], [ 0.8761, 0.9709, 0.7043, 0.9998 ], [ 0.896, 0.7519, 0.2145, 1.0576 ] ],   //長野市
	[ [ 1.0541, 1.199, 2.3036, 0.9536 ], [ 0.89, 0.9711, 0.4871, 0.9731 ], [ 1.1112, 0.7827, 0.1166, 1.1066 ] ],   //岐阜市
	[ [ 1.0731, 1.175, 2.3433, 0.9896 ], [ 0.8948, 0.9886, 0.453, 0.9589 ], [ 1.0778, 0.7857, 0.1207, 1.0824 ] ],   //静岡市
	[ [ 1.0842, 1.3188, 2.4434, 0.9445 ], [ 0.8755, 0.9435, 0.4371, 0.9695 ], [ 1.0953, 0.6692, 0.0136, 1.1248 ] ],   //名古屋市
	[ [ 1.079, 1.2873, 2.276, 1.0473 ], [ 0.8916, 0.964, 0.4966, 0.9682 ], [ 1.0753, 0.677, 0.1377, 0.9898 ] ],   //津市
	[ [ 1.1796, 1.3788, 2.4042, 0.9903 ], [ 0.8665, 0.9313, 0.4425, 0.9513 ], [ 0.983, 0.6095, 0.0569, 1.094 ] ],   //大津市
	[ [ 1.1548, 1.4195, 2.4335, 1.0361 ], [ 0.8259, 0.9153, 0.4398, 0.9566 ], [ 1.0838, 0.5819, 0.0223, 1.0242 ] ],   //京都市
	[ [ 1.051, 1.3736, 2.6546, 0.8413 ], [ 0.8319, 0.9203, 0.2663, 0.9845 ], [ 1.2122, 0.6347, 0.0167, 1.2374 ] ],   //大阪市
	[ [ 1.1084, 1.3537, 2.5436, 0.9465 ], [ 0.8664, 0.9165, 0.3546, 0.9764 ], [ 1.0782, 0.6675, 0.0175, 1.1107 ] ],   //神戸市
	[ [ 1.1301, 1.3407, 2.324, 0.9201 ], [ 0.8464, 0.9429, 0.4949, 0.9414 ], [ 1.0826, 0.6409, 0.0765, 1.2042 ] ],   //奈良市
	[ [ 1.0738, 1.2468, 2.1346, 0.9533 ], [ 0.875, 0.9801, 0.5627, 0.967 ], [ 1.1098, 0.7042, 0.216, 1.1172 ] ],   //和歌山市
	[ [ 1.1396, 1.2053, 2.116, 0.9945 ], [ 0.8942, 0.9914, 0.5994, 0.9753 ], [ 0.9902, 0.7406, 0.1796, 1.0486 ] ],   //鳥取市
	[ [ 1.1848, 1.2606, 2.2206, 0.9281 ], [ 0.8625, 0.9772, 0.5387, 0.9858 ], [ 0.9828, 0.6904, 0.1414, 1.1197 ] ],   //松江市
	[ [ 1.1117, 1.2538, 2.2167, 0.9359 ], [ 0.8468, 0.9675, 0.5474, 0.9602 ], [ 1.1063, 0.7157, 0.1321, 1.1519 ] ],   //岡山市
	[ [ 1.1835, 1.3205, 2.2709, 0.9131 ], [ 0.8344, 0.9538, 0.5145, 0.986 ], [ 1.0313, 0.6496, 0.1146, 1.1393 ] ],   //広島市
	[ [ 1.1315, 1.2583, 2.1551, 0.9978 ], [ 0.8563, 0.9579, 0.5741, 0.9821 ], [ 1.0642, 0.7259, 0.1697, 1.0328 ] ],   //山口市
	[ [ 1.1012, 1.1775, 1.9936, 0.974 ], [ 0.8708, 0.9956, 0.6212, 0.9728 ], [ 1.0805, 0.7707, 0.3065, 1.0799 ] ],   //徳島市
	[ [ 1.083, 1.219, 2.1848, 0.9868 ], [ 0.8645, 0.9739, 0.548, 0.9244 ], [ 1.1151, 0.7514, 0.1737, 1.1437 ] ],   //高松市
	[ [ 1.1214, 1.2011, 2.1502, 0.9629 ], [ 0.8572, 0.9762, 0.5598, 0.9506 ], [ 1.076, 0.7716, 0.2, 1.1317 ] ],   //松山市
	[ [ 1.0502, 1.203, 2.307, 0.9864 ], [ 0.8667, 0.9859, 0.4585, 0.9409 ], [ 1.1553, 0.7529, 0.1598, 1.1166 ] ],   //高知市
	[ [ 1.0572, 1.2804, 2.4313, 0.9451 ], [ 0.8802, 0.9628, 0.4214, 0.9737 ], [ 1.1234, 0.688, 0.056, 1.1171 ] ],   //福岡市
	[ [ 1.072, 1.2351, 2.2281, 0.9328 ], [ 0.8631, 0.9775, 0.5252, 0.9638 ], [ 1.1322, 0.724, 0.1539, 1.1499 ] ],   //佐賀市
	[ [ 1.0812, 1.2687, 2.4828, 0.9539 ], [ 0.876, 0.9636, 0.3415, 1.0029 ], [ 1.0984, 0.7025, 0.1204, 1.0566 ] ],   //長崎市
	[ [ 1.0242, 1.1665, 2.303, 1.0177 ], [ 0.8686, 0.9761, 0.479, 0.9543 ], [ 1.1867, 0.8178, 0.131, 1.0525 ] ],   //熊本市
	[ [ 1.084, 1.2347, 2.1746, 0.965 ], [ 0.8782, 0.972, 0.562, 0.9673 ], [ 1.0909, 0.7337, 0.1639, 1.1011 ] ],   //大分市
	[ [ 1.0268, 1.2281, 2.2258, 0.9817 ], [ 0.887, 0.9818, 0.5177, 0.939 ], [ 1.1527, 0.7262, 0.1694, 1.126 ] ],   //宮崎市
	[ [ 1.0288, 1.2375, 2.4612, 0.9435 ], [ 0.8727, 0.966, 0.3749, 0.9441 ], [ 1.1738, 0.7401, 0.0937, 1.1685 ] ],   //鹿児島市
	[ [ 0.8457, 1.1222, 1.5081, 0.9201 ], [ 0.9351, 0.9941, 0.8528, 0.9802 ], [ 1.3139, 0.847, 0.5678, 1.1395 ] ]   //那覇市

	]

});



﻿/*  2017/12/16  version 1.0
 * coding: utf-8, Tab as 4 spaces
 * 
 * Home Energy Diagnosis System Ver.6
 * unit.js 
 * 
 * any kind of unit related to energy type is defined here, change here
 * 
 * License: http://creativecommons.org/licenses/LGPL/2.1/
 * 
 * @author Yasufumi Suzuki, Hinodeya Institute for Ecolife co.ltd.
 *								2011/01/21 original PHP version
 *								2011/05/06 ported to ActionScript3
 * 								2016/04/12 ported to JavaScript
 */


	// names ( dataset is now witten in Japanse )
D6.Unit.name = {
		electricity:"electricity",
		nightelectricity:"nightelectricity",
		sellelectricity:"sellelectricity",
		nagas:"nagas",
		lpgas:"lpgas",
		kerosene:"kerosene",
		gasoline:"gasoline",
		lightoil:"lightoil",
		heavyoil:"heavyoil",
		coal:0,
		biomass:0,
		hotwater:0,
		waste:0,
		water:0,
		gas:"都市gas",
		car:"car"
	};
	
