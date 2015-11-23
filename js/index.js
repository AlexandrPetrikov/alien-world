$(document).ready(function(){

$("input[type='submit']").click(function(){
	$("#identification").hide();
	return false;
});
/*--------------------scroll top --------------------*/
$("#new-game").click(function(){
	$("#identification").css("display","block");
});
/*---------------- current hours-------------------------*/
function clock(){

var date = new Date(),
    dateDate = date.getDate(),
	dateMonth = date.getMonth(),
	dateFullYear = date.getFullYear(),
	dateHours = date.getHours(),
	dateMinutes = date.getMinutes(),
	dateSeconds = date.getSeconds(),
	fullDate = dateDate + "." + dateMonth + "." + 
			   dateFullYear + "  " + dateHours + ":" +
			   dateMinutes + ":" + dateSeconds;
$("#dateHours").text(dateHours < 10 ? "0"+dateHours : dateHours);
$("#dateMinutes").text(dateMinutes < 10 ? "0"+dateMinutes : dateMinutes);
$("#dateSeconds").text(dateSeconds < 10 ? "0"+dateSeconds : dateSeconds);
};

setInterval(clock,100);
});