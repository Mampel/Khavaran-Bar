$(function(){
	
	var li = $('section.container section.leftside > nav > menu > li'),
		due = 800,
		delay = 200,
		step = 300;


	li.each(function() {
        var that = this;
		setTimeout(function(){
			$(that).animate({
				left:'30px'	
			},due,'easeOutBack');
		},delay);
		delay += step;
    }).mouseover(function(){
		$(this).animate({
				left:50
			},200,'easeOutExpo');
	}).mouseout(function(){
		$(this).animate({
				left:30
			},500,'easeOutExpo');
	});


	
});