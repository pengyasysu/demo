/*

var startTime = new Date();
	startTime.setFullYear(2016, 5, 27);
	startTime.setHours(23);
	startTime.setMinutes(59);
	startTime.setSeconds(59);
	startTime.setMilliseconds(999);
	var EndTime=startTime.getTime();
	function GetRTime(){
		var NowTime = new Date();
		var nMS = EndTime - NowTime.getTime();
		var nD = Math.floor(nMS/(1000 * 60 * 60 * 24));
		var nH = Math.floor(nMS/(1000*60*60)) % 24;
		var nM = Math.floor(nMS/(1000*60)) % 60;
		var nS = Math.floor(nMS/1000) % 60;
		if (nMS < 0){
			$("#dao").hide();
			$("#daoend").show();
		}else{
		   $("#dao").show();
		   $("#daoend").hide();
		   $("#RemainD").text(nD);
		   $("#RemainH").text(nH);
		   $("#RemainM").text(nM);
		   $("#RemainS").text(nS); 
		}
	}
	
	$(document).ready(function () {
		var timer_rt = window.setInterval("GetRTime()", 1000);
	});
*/

$(function(){
	$(".test_1").countdown({
		"endTime":[2015,1,1,11,1,1],
		"serverUrl": "http:xx1"
	});
	$(".test_2").countdown({
		"endTime":[2015,1,3,1,4,6],
		"serverUrl":"http:xx2"
	});
})



