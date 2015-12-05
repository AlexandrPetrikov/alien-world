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
setInterval(clock,100);
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

var nb = new Box();
	nb.mouseEnterShadow($(".box"),2);
	nb.mouseLeaveShadow($(".box"));
	nb.press($(".box"));
	nb.insideNum($("#game-block"));
	$("#game-block").mousemove(function(e){
		$("#coordPage").text("( " +e.clientX+ ", " +e.clientY+ ")");
	});
/*ANIMATION NEW YEAR TOYS*/
var blinkNum = 0;
var animToy = function(){
	if(blinkNum % 2 == 0){
		$(".toy:nth-child(even)").css("background","#CB2828");
		$(".toy:nth-child(odd)").css("background","#060688");
		blinkNum++;
	}else{
		$(".toy:nth-child(even)").css("background","green");
		$(".toy:nth-child(odd)").css("background","#CB2828");
		blinkNum++;
	}	
};
/*PRESS START GAME*/
var matrix;
$("#start-game").on('click',function(){
	var myZenSize = $("#zen").text();
	if(+myZenSize <= 0){
		alert("No zen:(");
	}else{
		matrix = setInterval(function(){
			var num = Math.floor((Math.random()*9)+1);
			$("#one-res-realise").text(num);
			$("#two-res-realise").text(num);
			$("#three-res-realise").text(num);
		},0);
		+myZenSize--;
		$("#zen").text(myZenSize);
	}
});
/* PRESS STOP*/
var currentZen;
$("#stop-auto").on('click',function(){
currentZen = parseInt($("#zen").text());
	clearInterval(matrix);
	$("#one-res-realise").each(function(){
		var pos = Math.floor((Math.random()*9)+1);	
		$(this).text(pos);
	});
	$("#two-res-realise").each(function(){
		var pos = Math.floor((Math.random()*9)+1);
		$(this).text(pos);
	});
	$("#three-res-realise").each(function(){
		var pos = Math.floor((Math.random()*9)+1);
		$(this).text(pos);
	});
	var firstRes = parseInt($("#one-res-realise").text());
	var secondRes = parseInt($("#two-res-realise").text());
	var thirdRes = parseInt($("#three-res-realise").text());
	if(firstRes == secondRes || firstRes == thirdRes){		
		return $("#zen").text(firstRes + currentZen);

	}else if(secondRes == thirdRes){
		return $("#zen").text(secondRes + currentZen);
	}
});
});
