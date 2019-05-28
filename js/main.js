// Toggle navigation
// $(document).ready(function() {
//
//   $("#toggle").click(function() {
//     $(this).toggleClass("on");
//     $("#resize").toggleClass("active");
//   });
// });


//  navigation
$(".navicon-button").click(function() {
  $(this).toggleClass("open");
  $("header nav").slideToggle(400, function() {
    $(this).toggleClass("nav-expanded").css('display', '');
  });
});

// Back to top arrow
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/
