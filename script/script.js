$(function(){
	
	var li = $('section.container section.leftside > nav > menu > li'),
		due = 800,
		delay = 200,
		step = 300;


	li.each(function() {
        var that = this;
		setTimeout(function(){
			$(that).animate({
				left:0	
			},due,'easeOutBack');
		},delay);
		delay += step;
    }).mouseover(function(){
		$(this).animate({
				left:20
			},200,'easeOutExpo');
	}).mouseout(function(){
		$(this).animate({
				left:0
			},500,'easeOutExpo');
	});


	
});