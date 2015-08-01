function animateHamburger() {
  $('#hamburger-button').toggleClass('open');
/*animating burger to x*/
}

function slideMenu(){
  $('.navbar').toggleClass('open');
  $('.technologies').toggleClass('hideme');
  // $('.poop').toggleClass('hideme2');
  $('.csslider').toggleClass('hideme2');
  $('.contact a').toggleClass('hideme2');
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

$('.navbar ul li a').click(function(){
  console.log('mew');
  animateHamburger();
  slideMenu();
});

var sT;

$(document).ready (function () {
    $(window).scroll (function () {
          sT = $(this).scrollTop();
            if(sT >= 200){
                $('#hamburger-button').addClass('white');
                $('.home').addClass('top');
            }else{
                $('#hamburger-button').removeClass('white');
                $('.home').removeClass('top');
            }
    });
});

/*<><><><><><><><><><>SPAN FLIP<><><><><><><><><><><><><>*/

var spans = $('#title span');

function addClasses(){
 $('#title').addClass('cute');
}
function removeClasses(){
 $('#title').removeClass('cute');
}

$('#title').on('mouseover', addClasses);

$('#title').on('mouseout', removeClasses);




/*<><><><><><><><><>HOVER SCROLL<><><><><><><><><><><><>*/
$(document).ready(function() {
  addClasses();
    var count;
    var interval;

    $(".technologies").on('mouseover', function() {
        var div = $('.technologies');

        interval = setInterval(function(){
            count = count || 1;
            var pos = div.scrollTop();
            div.scrollTop(pos + count);
        }, 10);
    }).click(function() {
        clearInterval(interval);
    }).on('mouseout', function() {
        // Uncomment this line if you want to reset the speed on out
        // count = 0;
        clearInterval(interval);
    });
})
;
/*<><><><><><><><SCROLLMATION<><><><><>*/
$(".anchorLink").click( function (event) {
        $("html, body").animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
    }
);


/*<><><><><><>AUTO SLIDER<><><><><>*/
$(document).ready(function () {

  var change_img_time = 8000,
      transition_speed = 400;

  var listItems = $(".csslider > ul").children('li'),
      dotItems = $('#dots').children('li'),
      listLen = listItems.length,
      current,
      changeTimeout;

  function moveTo(newIndex) {

    var i = newIndex;

    if (newIndex == 'prev') {
        i = (current > 0) ? (current - 1) : (listLen - 1);
    }

    if (newIndex == 'next') {
        i = (current < listLen - 1) ? (current + 1) : 0;
    }

    dotItems.removeClass('active')
            .eq(i).addClass('active');

    listItems.fadeOut(transition_speed)
             .eq(i).fadeIn(transition_speed);

    current = i;

    //resets time interval if user clicks on slider dot; then begin automated slider
    clearTimeout(changeTimeout);
    changeTimeout = setTimeout(function() { moveTo('next'); }, change_img_time);
  };

  // Event handlers
  $("#dots li").click(function () {
    var i = $('#dots li').index(this);
    moveTo(i);
  });

  
  //initialize slider on load
  moveTo('next');
});


