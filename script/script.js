$(function(){
	
	var li = $('section.container section.leftside > nav > menu > li'),
		content = $('section.container section.content-container section.main-holder'),
		logo = $('section.container div.logo'),
		due = 800,
		delay = 400,
		step = 300;

	setTimeout(function(){
		logo.animate({
			opacity:1
		},due,'easeOutBack');
	},delay); //400
	delay += 500;

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

	setTimeout(function(){
		content.css('display','block').animate({
			opacity:1
		},1400,'easeOutBack');
	},(delay+400));
	
});