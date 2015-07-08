function animateHamburger() {
  $('#hamburger-button').toggleClass('open');
/*animating burger to x*/
}

function slideMenu(){
  $('.navbar').toggleClass('open');
  /*animating menu slidedown*/
}
$('#hamburger-button').click(function(){
  console.log('trying');
  animateHamburger();
  slideMenu();/*attaching click handler to burger*/
});