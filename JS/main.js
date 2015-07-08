function animateHamburger() {
  $('#hamburger-button').toggleClass('open');
/*animating burger to x*/
}

function slideMenu(){
  $('.navbar').toggleClass('open');
  if(!$('#hamburger-button').hasClass('white') ||
    ((!$('.navbar').hasClass('open')) && (sT < 200))){
    $('#hamburger-button').toggleClass('white');
  }
  /*animating menu slidedown*/
}
$('#hamburger-button').click(function(){
  console.log('trying');
  animateHamburger();
  slideMenu();/*attaching click handler to burger*/
});

var sT;

$(document).ready (function () {
    $(window).scroll (function () {
          sT = $(this).scrollTop();
            if(sT >= 200){
                $('#hamburger-button').addClass('white');
            }else{
                $('#hamburger-button').removeClass('white');
            }
    });
});