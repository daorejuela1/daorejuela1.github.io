  //Slideshow

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

  
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-red";
}
$(document).ready(function() {
$("body").addClass("animated fadeIn")
$(".headers").addClass("text-center")
$("#resume").addClass("text-left")
//Nav buttons
  
  $("#buttontop").on("click", function() {
  $('html,body').animate({
      scrollTop: 0 }, 1000);
     $('.navbar-collapse').collapse('hide');
});
$("#babout-me").on("click", function() {
  $('html,body').animate({scrollTop: $('#my-presentation').offset().top-20}, 1000);
   $('.navbar-collapse').collapse('hide');
  });
  $("#bprojects").on("click", function() {
  $('html,body').animate({scrollTop: $('#project').offset().top-20}, 1000);
     $('.navbar-collapse').collapse('hide');
  });
   $("#bform").on("click", function() {
  $('html,body').animate({scrollTop: $('#contact-form').offset().top-20}, 1000);
      $('.navbar-collapse').collapse('hide');
  });
 //Navbar transition
  $(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('.nav').addClass('shrink');
    }
    else {
    $('.nav').removeClass('shrink');
    }
  });

});