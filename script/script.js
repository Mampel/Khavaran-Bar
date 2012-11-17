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
	}).click(function(){
		// $(this).addClass('active');
	});

	// setTimeout(function(){
	// 	content.css('display','block').animate({
	// 		opacity:1
	// 	},1400,'easeOutBack');
	// },(delay+400));





	var img = $('section.main-holder > figure.img-holder img'),
			content_page = $('section.main-holder > article.content-holder div'),
			link = $('section.container section.leftside > nav > menu > li'),
			easein = 'easeOutBounce',
			easeout = 'easeInOutQuad',
			// ease = !!window.Zepto ? 'ease-in-out' : 'easeOutBounce',
			currentimg = 0;


	var loadpage = function(url){
		url = url.length > 2 ? url.substr(1) : 'index.html';
		// $('.main-content').load(url+' .main-content');
		// alert(url);
	}

	// var animate = function(elm,current,nw,top){
	// 	elm.eq(current).animate({
	// 		'top': top + 'px',
	// 		'opacity':'0'
	// 	},500,easeout,function(){
	// 		$(this).css({'top' : '-' + top + 'px'});
	// 	});

	// 	elm.eq(nw).animate({
	// 		'top':'0',
	// 		'opacity':'1'
	// 	},1000,easein);				
	// }

	var slide = function(n){
		if(currentimg==n) return;
		img.eq(currentimg).animate({
			'top':'200px',
			'opacity':'0'
		},300,easeout,function(){
			$(this).css('top','-280px');
		});

		img.eq(n).animate({
			'top':'0',
			'opacity':'1'
		},600,easein);	

		// animate(img,currentimg,n,280);
		// animate(content,currentimg,n,-380);

		content_page.eq(currentimg).animate({
			'top':'-400px',
			'opacity':'0'
		},300,easeout,function(){
			$(this).css({
				'top':'400px',
				'display':'none'
			});
		});

		content_page.eq(n).css({
			'display':'block'
		}).animate({
			'top':'0',
			'opacity':'1'
		},600,easein);
		currentimg = n;
	}


	var pageUrl = window.location.href;
	sharPos = pageUrl.indexOf('#');
	if(sharPos){
		loadpage(pageUrl.substr(sharPos));
		pageUrl = pageUrl.substr(0,sharPos);
		// alert('pageUrl' + pageUrl);
	}

	// var pagenum;
	$('section.leftside a').click(function(){
		var url = $(this).attr('href');
		// x = $(this).parent().index();
		// slide(x);
		// alert('a click index:'+x);
		window.location.href = pageUrl + '#' + url;
		//$('.main-content').load(url+' .main-content');
		return false;
	});

	var pagenum;
	window.onhashchange = function(){
		loadpage(window.location.hash);
		// alert(window.location.hash);
		pagenum = window.location.hash;

		// alert(x);
		y = pagenum.indexOf('.');
		pagenum = pagenum.substr(y-1);
		pagenum = pagenum.substr(0,1);
		// alert('hash index:'+pagenum);
		// alert(x);
		slide(pagenum-1);
		// slide(pagenum);
	}




	
});