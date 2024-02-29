$(function () {
  "use strict";
  var a = $(window);
  $.scrollIt({
    upKey: 38,
    downKey: 40,
    easing: "swing",
    scrollTime: 600,
    activeClass: "active",
    onPageChange: null,
    topOffset: -70,
  }),
    a.on("scroll", function () {
      var e = a.scrollTop(),
        s = $(".navbar"),
        n = $(".navbar .logo> img");
      e > 100
        ? (s.addClass("nav-scroll"), n.attr("src", "img/logo-dark.png"))
        : (s.removeClass("nav-scroll"), n.attr("src", "img/logo.png"));
    }),
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
    $("a.vid").YouTubePopUp(),
    $(".testimonials .owl-carousel").owlCarousel({
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
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 1 } },
    }),
    $(".rooms1 .owl-carousel").owlCarousel({
      loop: !0,
      margin: 30,
      mouseDrag: !0,
      autoplay: !1,
      dots: !0,
      autoplayHoverPause: !0,
      nav: !1,
      navText: [
        "<span class='lnr ti-angle-left'></span>",
        "<span class='lnr ti-angle-right'></span>",
      ],
      responsiveClass: !0,
      responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 3 } },
    }),
    $(".rooms2 .owl-carousel").owlCarousel({
      loop: !0,
      margin: 30,
      mouseDrag: !0,
      autoplay: !1,
      dots: !0,
      autoplayHoverPause: !0,
      nav: !1,
      navText: [
        "<span class='lnr ti-angle-left'></span>",
        "<span class='lnr ti-angle-right'></span>",
      ],
      responsiveClass: !0,
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 1 } },
    }),
    $(".rooms3 .owl-carousel").owlCarousel({
      loop: !0,
      margin: 30,
      mouseDrag: !0,
      autoplay: !1,
      dots: !0,
      autoplayHoverPause: !0,
      nav: !1,
      navText: [
        "<span class='lnr ti-angle-left'></span>",
        "<span class='lnr ti-angle-right'></span>",
      ],
      responsiveClass: !0,
      responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 3 } },
    }),
    $(".rooms-page .owl-carousel").owlCarousel({
      loop: !0,
      margin: 30,
      mouseDrag: !0,
      autoplay: !0,
      dots: !1,
      nav: !1,
      navText: [
        "<span class='lnr ti-angle-left'></span>",
        "<span class='lnr ti-angle-right'></span>",
      ],
      responsiveClass: !0,
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 1 } },
    }),
    $(".pricing .owl-carousel").owlCarousel({
      loop: !0,
      margin: 30,
      mouseDrag: !0,
      autoplay: !1,
      dots: !0,
      autoplayHoverPause: !0,
      nav: !1,
      navText: [
        "<span class='lnr ti-angle-left'></span>",
        "<span class='lnr ti-angle-right'></span>",
      ],
      responsiveClass: !0,
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 2 } },
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
    }),
    $(".team .owl-carousel").owlCarousel({
      loop: !0,
      margin: 30,
      dots: !0,
      mouseDrag: !0,
      autoplay: !1,
      nav: !1,
      navText: [
        "<span class='lnr ti-angle-left'></span>",
        "<span class='lnr ti-angle-right'></span>",
      ],
      responsiveClass: !0,
      responsive: {
        0: { items: 1, dots: !0 },
        600: { items: 2 },
        1e3: { items: 3 },
      },
    }),
    $(".clients .owl-carousel").owlCarousel({
      loop: !0,
      margin: 30,
      mouseDrag: !0,
      autoplay: !0,
      dots: !1,
      nav: !1,
      navText: [
        "<span class='lnr ti-angle-left'></span>",
        "<span class='lnr ti-angle-right'></span>",
      ],
      responsiveClass: !0,
      responsive: {
        0: { margin: 10, items: 3 },
        600: { items: 3 },
        1e3: { items: 3 },
      },
    }),
    $(".restaurant-menu .owl-carousel").owlCarousel({
      loop: !0,
      margin: 0,
      autoplay: !1,
      dots: !1,
      nav: !0,
      navText: [
        "<span class='lnr ti-angle-left'></span>",
        "<span class='lnr ti-angle-right'></span>",
      ],
      responsiveClass: !0,
      responsive: {
        0: { items: 2, nav: !1 },
        600: { items: 3, nav: !1 },
        1e3: { items: 4 },
      },
    }),
    $(".restaurant-menu .tabs-icon").on("click", ".item", function () {
      $(".item").removeClass("active");
      var a = $(this).attr("id");
      $(".restaurant-menu .cont").hide(), $("#" + a + "-content").fadeIn();
    }),
    $(".restaurant-menu .tabs-icon").on("click", ".owl-item", function () {
      $(this).addClass("actived").siblings().removeClass("actived");
    }),
    $(".accordion-box").length &&
      $(".accordion-box").on("click", ".acc-btn", function () {
        var a = $(this).parents(".accordion-box"),
          e = $(this).parents(".accordion");
        $(this).next(".acc-content").is(":visible")
          ? ($(this).removeClass("active"),
            $(this).next(".acc-content").slideUp(300),
            $(a).children(".accordion").removeClass("active-block"))
          : ($(a).find(".accordion .acc-btn").removeClass("active"),
            $(this).addClass("active"),
            $(a).children(".accordion").removeClass("active-block"),
            $(a).find(".accordion").children(".acc-content").slideUp(300),
            e.addClass("active-block"),
            $(this).next(".acc-content").slideDown(300));
      }),
    $(".gallery").magnificPopup({
      delegate: ".popimg",
      type: "image",
      gallery: { enabled: !0 },
    }),
    $(".img-zoom").magnificPopup({
      type: "image",
      closeOnContentClick: !0,
      mainClass: "mfp-fade",
      gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
    }),
    $(".magnific-youtube, .magnific-vimeo, .magnific-custom").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 300,
      preloader: !1,
      fixedContentPos: !1,
    }),
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (a) {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var e = $(this.hash);
          (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length &&
            (a.preventDefault(),
            $("html, body").animate(
              { scrollTop: e.offset().top },
              1e3,
              function () {
                var a = $(e);
                if ((a.focus(), a.is(":focus"))) return !1;
                a.attr("tabindex", "-1"), a.focus();
              }
            ));
        }
      });
  var s = document.querySelector(".progress-wrap path"),
    n = s.getTotalLength();
  (s.style.transition = s.style.WebkitTransition = "none"),
    (s.style.strokeDasharray = n + " " + n),
    (s.style.strokeDashoffset = n),
    s.getBoundingClientRect(),
    (s.style.transition = s.style.WebkitTransition =
      "stroke-dashoffset 10ms linear");
  var t = function () {
    var a = $(window).scrollTop(),
      e = $(document).height() - $(window).height();
    s.style.strokeDashoffset = n - (a * n) / e;
  };
  t(),
    $(window).scroll(t),
    jQuery(window).on("scroll", function () {
      jQuery(this).scrollTop() > 150
        ? jQuery(".progress-wrap").addClass("active-progress")
        : jQuery(".progress-wrap").removeClass("active-progress");
    }),
    jQuery(".progress-wrap").on("click", function (a) {
      return (
        a.preventDefault(),
        jQuery("html, body").animate({ scrollTop: 0 }, 550),
        !1
      );
    }),
    $(".select2").select2({ minimumResultsForSearch: 1 / 0 }),
    $(".datepicker").datepicker({ orientation: "top" });
}),
  $(document).ready(function () {
    var a = $(".header .owl-carousel");
    $(".slider .owl-carousel").owlCarousel({
      items: 1,
      loop: !0,
      dots: !0,
      margin: 0,
      autoplay: !0,
      autoplayTimeout: 5e3,
      nav: !1,
      navText: [
        '<i class="ti-angle-left" aria-hidden="true"></i>',
        '<i class="ti-angle-right" aria-hidden="true"></i>',
      ],
      responsiveClass: !0,
      responsive: { 0: { dots: !0 }, 600: { dots: !0 }, 1e3: { dots: !0 } },
    }),
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
          $("h1").removeClass("animated fadeInUp"),
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
            .find("h1")
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
  }),
  $("#preloader").fadeOut(700),
  $(".preloader-bg").delay(700).fadeOut(700);
var form_data,
  wind = $(window),
  form = $(".contact__form"),
  message = $(".contact__msg");
function done_func(a) {
  message.fadeIn().removeClass("alert-danger").addClass("alert-success"),
    message.text(a),
    setTimeout(function () {
      message.fadeOut();
    }, 2e3),
    form.find('input:not([type="submit"]), textarea').val("");
}
function fail_func(a) {
  message.fadeIn().removeClass("alert-success").addClass("alert-success"),
    message.text(a.responseText),
    setTimeout(function () {
      message.fadeOut();
    }, 2e3);
}
form.submit(function (a) {
  a.preventDefault(),
    (form_data = $(this).serialize()),
    $.ajax({ type: "POST", url: form.attr("action"), data: form_data })
      .done(done_func)
      .fail(fail_func);
}),
  (function () {
    var a = document.querySelectorAll(".grid-img"),
      e = document.querySelectorAll(".grid-con");
    e.length &&
      e.forEach(function (s, n) {
        s.addEventListener("mouseenter", function () {
          a.forEach(function (a) {
            a.classList.remove("grid-img-active");
          }),
            e.forEach(function (a) {
              a.classList.remove("grid-con-active");
            }),
            s.classList.add("grid-con-active"),
            a[n].classList.add("grid-img-active");
        });
      });
  })(),
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

$(document).ready(function () {
  $(".ytb-vdn .owl-carousel").owlCarousel({
    loop: -1,
    margin: 30,
    mouseDrag: !0,
    autoplay: -1,
    navigation: true,
    navText: [
      "<span class='lnr ti-angle-left'></span>",
      "<span class='lnr ti-angle-right'></span>",
    ],
    responsiveClass: !0,
    responsive: {
      0: { items: 1, dots: !0, nav: !1 },
      600: { items: 2, dots: !0, nav: !1 },
      1e3: { items: 2 },
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
});

function toggleMenu() {
  var menu = document.querySelector(".mega-menu");
  menu.style.display =
    menu.style.display === "none" || menu.style.display === ""
      ? "block"
      : "none";
}

$(document).ready(function() {
  $('.mega-menu-link').click(function() {
      // Toggle mega indicator when clicking on a mega menu link
      $(this).siblings('.mega-indicator').toggleClass('mega-indicator-open');
      
      // Toggle mega menu
      $(this).parent('.mega-menu-item-has-children').children('.mega-sub-menu').slideToggle();
  });
  
  $('.mega-toggle-animated-slider').click(function() {
      // Toggle mega indicator when clicking on the menu toggle button
      $('.mega-indicator').toggleClass('mega-indicator-open');
  });
});
