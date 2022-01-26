$(function(){
    'use strict';
    $(window).load(function(){
        $("body").css("overflow","auto");
$(".loading-overlay .sk-folding-cube").fadeOut(2000,function(){
    $(this).parent().fadeOut(2000,function(){
        $(this).remove();
    })
});
    });
    //Start Window 
    $(window).scroll(function(){//Start Window
       
        //Scroall To Top Function
        var scrolToTop =  $('.sroal');
        if($(window).scrollTop() >= 800){
            scrolToTop.fadeIn(500);
        }
        else{
            scrolToTop.fadeOut(500);
        }
           //ServicesData Appear
        if($(window).scrollTop() >= 1000){
            $('.Services .ServicesData').slideDown(2000);
        };
    });//End Window 
//++++++++++++++++++++++++++++++++++++//
// Nice Scroal

//Navbar Actions
$('.navbar li a').click(function(){
    $('html ,body').animate({ 
        scrollTop: $("#" +$(this).data('scroll')).offset().top - 50
    },1000)
    window.console.log("#" +$(this).data('scroll'));
    window.console.log( $(this).offset().top);
});
// End Navbar Actions
//Go To Step Of Services Link
$('.Header button a').click(function(){
    $('html ,body').animate({ 
        scrollTop: $("#" +$(this).data('scroll')).offset().top - 50
    },1000)
});
//Show Core Value Section
$('.About-Page button').click(function(){
        $('#core-value-hidden').fadeIn(1000);
        $('.About-Page button').fadeOut(500);
});
//link in the footer
$('.Footer .Footer_Menu a').click(function(){
    $('html ,body').animate({ 
        scrollTop: $("#" +$(this).data('scroll')).offset().top - 50
    },1000)
});

//Scroall To Top Function Start
    $('.sroal').click(function(){
        $("html,body").animate({scrollTop:0},600);
     });
 
//Start Copy Whriter 
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 5) || 500;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

$(document).ready(function(){

	$('.slickSlider').slick({
        autoplay:true,
        autoplaySpeed:1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});


    // This will fire when document is ready:
    
        // This will fire each time the window is resized:
        
        
     // This will simulate a resize to trigger the initial run.




});//End Man function