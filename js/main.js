$(document).ready(function () {
  $(".baricon").click(function () {
    $(".togle").toggle();
  });
});

$('.reviewcrdsmain').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$(document).ready(function () {
  $(".faqplusicon").click(function () {
    $(this).closest('div').find('.fcanswer').toggle();
  });
});

$(document).ready(function () {
  $(".uofnxtp").click(function () {
    $(this).closest('div').find('.ufpiemhide').toggle();
  });
});

$(document).ready(function () {
  $(".trdrpdnicon").click(function () {
    $(".lgoutopt").toggle();
  });
});


$(document).ready(function () {
  $(".tlbarbtn").click(function () {
    $(".templateleft").show();
  });
  $(".tlclosebtn").click(function () {
    $(".templateleft").hide();
  });
});


$(document).ready(function () {
  $(".dbticketcbtn").click(function () {
    // Hide all other action menus
    $(".dbticketcbtnaction").not($(this).next(".dbticketcbtnaction")).hide();
    
    // Toggle the clicked card's action menu
    $(this).next(".dbticketcbtnaction").toggle();
  });
});