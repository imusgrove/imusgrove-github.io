//<!--    portfolio  JS  =================    -->
class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	
}

new StickyNavigation();

// scroll fade

new WOW().init();

$( ".wow" ).addClass( "fadeInUp" );

// header animation
var animationType = function(myTarget, myClass) {
	var delay = 3;
	var colors = ['#003134', '#005872', '#4D9AA9', '#0E7286', '#002029'];
	var myTextToSplit = document.getElementsByClassName(myTarget);
	for (var i = 0; i < myTextToSplit.length; i++) {
	  /* Val for the win  */
	  var myTag = myTextToSplit[i].innerHTML.split(/(<[^>]+>)/g);
	  var html = '';
  
	  //console.log(myTag);
	  for (var j = 0; j < myTag.length; j++) {
  
		html += (!myTag[j].includes('<') && !myTag[j].includes('\n') ? myTag[j].split('').join('</span><span class=\'' + myClass + ' \' >') : myTag[j]);
  
	  }
	  myTextToSplit[i].innerHTML = "<span class=\'" + myClass + " \'>" + html + "</span>";
  
	}
	var elemDelay = document.getElementsByClassName(myClass);
	for (i = 0; i < elemDelay.length; i++) {
	  elemDelay[i].style.animationDelay = delay - (delay / (i + delay)) + "s";
	  elemDelay[i].style.color = colors[i % colors.length];
  
	}
	console.log(elemDelay.length);
  
  }
  animationType('textAnim', 'textAnim1');