(function ($) {

    "use strict";
  
      // COLOR MODE
      $('.color-mode').click(function(){
          $('.color-mode-icon').toggleClass('active')
          $('body').toggleClass('dark-mode');
  
          const image = document.getElementById("modeImage");
          if (image) {
              if ($('body').hasClass('dark-mode')) {
                  image.src = "images/undraw/dark.svg";
              } else {
                  image.src = "images/undraw/light.svg";
              }
          }
          /*const image3 = document.getElementById("luxuraproject");
          if (image3) {
              if ($('body').hasClass('dark-mode')) {
                  image3.src = "images/project/luxura_dark.svg";
              } else {
                  image3.src = "images/project/luxura_light.svg";
              }
          }
          const image4 = document.getElementById("thelookproject");
          if (image4) {
              if ($('body').hasClass('dark-mode')) {
                  image4.src = "images/project/thelook_dark.svg";
              } else {
                  image4.src = "images/project/thelook_light.svg";
              }
          }
          const image5 = document.getElementById("revobankproject");
          if (image5) {
              if ($('body').hasClass('dark-mode')) {
                  image5.src = "images/project/revobank_dark.svg";
              } else {
                  image5.src = "images/project/revobank_light.svg";
              }
          }
          const image6 = document.getElementById("sambaproject");
          if (image6) {
              if ($('body').hasClass('dark-mode')) {
                  image6.src = "images/project/samba_dark.svg";
              } else {
                  image6.src = "images/project/samba_light.svg";
              }
          }
          const image7 = document.getElementById("mavenproject");
          if (image7) {
              if ($('body').hasClass('dark-mode')) {
                  image7.src = "images/project/maven_dark.svg";
              } else {
                  image7.src = "images/project/maven_light.svg";
              }
          }
          const section = document.getElementById("fun-facts");
          if (section) {
              if ($('body').hasClass('dark-mode')) {
                  section.style.backgroundImage = "url('images/undraw/cover_dark.svg')";
              } else {
                  section.style.backgroundImage = "url('images/undraw/cover_light.svg')";
              }
          }*/
      });
  
      // HEADER
      $(".navbar").headroom();
  
      // PROJECT CAROUSEL
      $(document).ready(function() {
          $('.owl-carousel').owlCarousel({
              items: 1,
              loop: false,
              margin: 10,
              nav: true
          });
      });
  
        //  Count
        $('#fun-facts').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
          if (visible) {
              $(this).find('.timer').each(function () {
                  var $this = $(this);
                  $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                      duration: 2000,
                      easing: 'swing',
                      step: function () {
                          $this.text(Math.ceil(this.Counter));
                      }
                  });
              });
              $(this).unbind('inview');
          }
      });
  
      // SMOOTHSCROLL
      $(function() {
        $('.nav-link, .custom-btn-link').on('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
          event.preventDefault();
        });
      });  
  
      // TOOLTIP
      $('.social-links a').tooltip();
  
  })(jQuery);
  