$(function () {
  "use strict";
  var a = $(window);

  $(".navbar-nav .dropdown-item a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  }),
    $(".bg-img, section").each(function (a) {
      $(this).attr("data-background") &&
        $(this).css(
          "background-image",
          "url(" + $(this).data("background") + ")"
        );
    });
  var e = function () {
    var a = 0;
    $(".animate-box").waypoint(
      function (e) {
        "down" !== e ||
          $(this.element).hasClass("animated") ||
          (a++,
          $(this.element).addClass("item-animate"),
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (a) {
              var e = $(this);
              setTimeout(
                function () {
                  var a = e.data("animate-effect");
                  "fadeIn" === a
                    ? e.addClass("fadeIn animated")
                    : "fadeInLeft" === a
                    ? e.addClass("fadeInLeft animated")
                    : "fadeInRight" === a
                    ? e.addClass("fadeInRight animated")
                    : e.addClass("fadeInUp animated"),
                    e.removeClass("item-animate");
                },
                200 * a,
                "easeInOutExpo"
              );
            });
          }, 100));
      },
      { offset: "85%" }
    );
  };
  $(function () {
    e();
  }),
    $(".news .owl-carousel").owlCarousel({
      loop: !0,
      margin: 30,
      mouseDrag: !0,
      autoplay: true,
      dots: false,
      nav: true,
      navText: [
        "<span class='lnr ti-angle-left'></span>",
        "<span class='lnr ti-angle-right'></span>",
      ],
      responsiveClass: !0,
      responsive: {
        0: {
          items: 1,
          dots: false,
          nav: true,
        },
        600: {
          items: 2,
          dots: false,
          nav: true,
        },
        1000: {
          items: 3,
          dots: false,
          nav: true,
        },
      },
    });
}),
  $(document).ready(function () {
    var a = $(".header .owl-carousel");
    
      $(".slider-fade .owl-carousel").owlCarousel({
        items: 1,
        loop: !0,
        dots: !0,
        margin: 0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        animateOut: "fadeOut",
        nav: !1,
        navText: [
          '<i class="ti-angle-left" aria-hidden="true"></i>',
          '<i class="ti-angle-right" aria-hidden="true"></i>',
        ],
        responsiveClass: !0,
        responsive: { 0: { dots: !1 }, 600: { dots: !1 }, 1e3: { dots: !0 } },
      }),
      a.on("changed.owl.carousel", function (a) {
        var e = a.item.index - 2;
        $("span").removeClass("animated fadeInUp"),
          $("h4").removeClass("animated fadeInUp"),
          $("h2").removeClass("animated fadeInUp"),
          $("p").removeClass("animated fadeInUp"),
          $(".butn-light").removeClass("animated fadeInUp"),
          $(".butn-dark").removeClass("animated fadeInUp"),
          $(".owl-item")
            .not(".cloned")
            .eq(e)
            .find("span")
            .addClass("animated fadeInUp"),
          $(".owl-item")
            .not(".cloned")
            .eq(e)
            .find("h4")
            .addClass("animated fadeInUp"),
          $(".owl-item")
            .not(".cloned")
            .eq(e)
            .find("h2")
            .addClass("animated fadeInUp"),
          $(".owl-item")
            .not(".cloned")
            .eq(e)
            .find("p")
            .addClass("animated fadeInUp"),
          $(".owl-item")
            .not(".cloned")
            .eq(e)
            .find(".butn-light")
            .addClass("animated fadeInUp"),
          $(".owl-item")
            .not(".cloned")
            .eq(e)
            .find(".butn-dark")
            .addClass("animated fadeInUp");
      });
  });

$(".slider-grid-bg .owl-carousel").owlCarousel({
  loop: !0,
  margin: 30,
  mouseDrag: !0,
  autoplay: !1,
  dots: !0,
  nav: !1,
  navText: [
    "<span class='lnr ti-angle-left'></span>",
    "<span class='lnr ti-angle-right'></span>",
  ],
  responsiveClass: !0,
  responsive: {
    0: { items: 1, dots: !0, nav: !1 },
    600: { items: 2, dots: !0, nav: !1 },
    1e3: { items: 3 },
  },
});

$(".treat-res .owl-carousel").owlCarousel({
  loop: -1,
  margin: 30,
  mouseDrag: 1,
  autoplay: -1,
  navigation: true,
  navText: [
    "<span class='lnr ti-angle-left'></span>",
    "<span class='lnr ti-angle-right'></span>",
  ],
  responsiveClass: !0,
  responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 2 } },
});

function toggleMenu() {
  var menu = document.querySelector(".mega-menu");
  menu.style.display =
    menu.style.display === "none" || menu.style.display === ""
      ? "block"
      : "none";
}

$(document).ready(function () {
  $(".mega-menu-link").click(function () {
    // Toggle mega indicator when clicking on a mega menu link
    $(this).siblings(".mega-indicator").toggleClass("mega-indicator-open");

    // Toggle mega menu
    $(this)
      .parent(".mega-menu-item-has-children")
      .children(".mega-sub-menu")
      .slideToggle();
  });

  $(".mega-toggle-animated-slider").click(function () {
    // Toggle mega indicator when clicking on the menu toggle button
    $(".mega-indicator").toggleClass("mega-indicator-open");
  });
});

// Get all elements with the class "acc-btn"
var accButtons = document.querySelectorAll('.acc-btn');

// Add a click event listener to each "acc-btn"
accButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Toggle the display of the associated "acc-content"
        var content = this.nextElementSibling;
        content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
    });
});