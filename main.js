(function ($) {
  "use strict";
  // Initiate the wowjs
  new WOW().init();
  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 500,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
  });
  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });
  // Project carousel
  $(".project-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 3,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });

  // kitchen carousel
  $(document).ready(function () {
    $(".custom-carousel").owlCarousel({
      items: 1,
      autoplay: true,
      smartSpeed: 500,
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
    });
  });

  //home decor
  $(document).ready(function () {
    $(".home-decor-carousel").owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      smartSpeed: 500,
      nav: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  });

  // Testimonials carousel
  $(document).ready(function () {
    var testimonialSlider = $("#testimonial-slider");

    testimonialSlider.owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 500,
      nav: true,
      dots: true,
      navText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        650: {
          items: 1,
        },
        768: {
          items: 3,
        },
        990: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      },
    });

    // Pause autoplay on mouseenter
    testimonialSlider.on("mouseenter", function () {
      testimonialSlider.trigger("stop.owl.autoplay");
    });

    // Resume autoplay on mouseleave
    testimonialSlider.on("mouseleave", function () {
      testimonialSlider.trigger("play.owl.autoplay");
    });
  });

  // $(document).ready(function () {
  //     $("#testimonial-slider").owlCarousel({
  //         items: 1,
  //         itemsDesktop: [1000, 1],
  //         itemsDesktopSmall: [990, 1],
  //         itemsTablet: [768, 1],
  //         itemsMobile: [650, 1],
  //         pagination: true,
  //         navigation: true,
  //         autoplay: true,
  //         autoplayTimeout: 3000,
  //         loop: true,
  //         dots: true,
  //         smartSpeed: 500,
  //         navText: [
  //             '<i class="fa fa-chevron-left"></i>',
  //             '<i class="fa fa-chevron-right"></i>'
  //         ],
  //     });
  // });

  // Disable right-click
  // document.addEventListener('contextmenu', function (e) {
  ///      e.preventDefault();
  // });

  // Disable F12 key
  // document.addEventListener('keydown', function (e) {
  //  if (e.key === 'F12' || e.keyCode === 123) {
  //        e.preventDefault();
  //   }
  // });

  // Disable Ctrl+U
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "u") {
      e.preventDefault();
    }
  });

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
})(jQuery);
