$(function(){
	
	var content = $('section.container section.content-container section.main-holder'),
		content_page = $('section.main-holder > article.content-holder div'),
		li = $('section.container section.leftside > nav > menu > li'),
		img = $('section.main-holder > figure.img-holder img'),
		logo = $('section.container div.logo'),
		easein = 'easeOutBounce',
		easeout = 'easeInOutQuad',
		currentimg = 0;
		due = 800,
		delay = 400,
		step = 300;

	// for Load Effect
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
	}).click(function(){
		// $(this).addClass('active');
	});

	// setTimeout(function(){
	// 	content.css('display','block').animate({
	// 		opacity:1
	// 	},1400,'easeOutBack');
	// },(delay+400));


	// for Change Page with Effect and Change Hash Page
	var loadpage = function(url){
		url = url.length > 2 ? url.substr(1) : 'index.html';
	}

	var slide = function(n){
		if(currentimg==n) return;
		img.eq(currentimg).animate({
			'top':'50px',//200
			'opacity':'0'
		},300,easeout,function(){
			$(this).css('top','-50px'); //-280
		});

		img.eq(n).animate({
			'top':'0',
			'opacity':'1'
		},900,easein);	

		content_page.eq(currentimg).animate({
			'top':'-100px',//-400
			'opacity':'0'
		},300,easeout,function(){
			$(this).css({
				'top':'100px', //400
				'display':'none'
			});
		});

		content_page.eq(n).css({
			'display':'block'
		}).animate({
			'top':'0',
			'opacity':'1'
		},900,easein);
		currentimg = n;
	}

	var pageUrl = window.location.href;
	sharPos = pageUrl.indexOf('#');
	if(sharPos){
		loadpage(pageUrl.substr(sharPos));
		pageUrl = pageUrl.substr(0,sharPos);
		// alert('pageUrl' + pageUrl);
	}

	$('section.leftside a').click(function(){
		var url = $(this).attr('href');
		window.location.href = pageUrl + '#' + url;
		return false;
	});

	var pagenum;
	window.onhashchange = function(){
		loadpage(window.location.hash);
		pagenum = window.location.hash;

		y = pagenum.indexOf('.');
		pagenum = pagenum.substr(y-1);
		pagenum = pagenum.substr(0,1);
		// alert('hash index:'+pagenum);
		// alert(x);
		slide(pagenum-1);
	}
	
});