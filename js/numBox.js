function Box(){
	this.mouseEnterShadow = function(elem, value){
		elem.mouseenter(function() {
			$(this).css("opacity", "0."+value);
		});
	};
	this.mouseLeaveShadow = function(elem){
		elem.mouseleave(function() {
			$(this).css("opacity", 1);
		});
	};
	this.press = function(elem){
		var retr = -1;
		elem.click(function(){
			if(retr > -1){
				var retrNew = $(this).index();
				var textFirst = elem.parent()
									.children("div")
									.eq(retr)
									.text();
				var textSecond = elem.parent()
									 .children("div")
									 .eq(retrNew)
									 .text();
					elem.parent()
						.children("div")
						.eq(retr)
						.text(textSecond);
					elem.parent()
						.children("div")
						.eq(retrNew)
						.text(textFirst);
				return retr = -1;
			}else{
				retr = $(this).index();			
			}
		});
	};
	this.insideNum = function(elem){
		var count = elem.children().size();
		for(var n = 1; n <= count; n++){
			var num = Math.floor((Math.random()*20)+1);
			$(".box"+n).text(num);
		}
	}
}
function Toy(){
	this.animation = function(elem,color,time){
		for(var n = 0; n < 11; n++){
			elem.eq(n).animate({"background":"#111"},2000,
								function(){
									$(this).animate({
										"background":"#999"},2000);
								})
		}
	}
}