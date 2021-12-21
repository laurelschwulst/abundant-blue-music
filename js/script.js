
/*
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

$(function(){

  // smooth scroll to anchor
  $('a').click(function(){

    function scrollTop(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
    }

  });

  // fade out homepage circle
  $('#circle').click(function(){
    $('#circle-container').fadeOut();

    setTimeout(function(){
      $('.home-petal').removeClass('current');
      $('.petal-zero').show();
      $('.petal-zero').addClass('current');
      const audio = document.querySelector(".audio-5");
      audio.currentTime = 0;
      audio.play();
    }, 1000);

    setTimeout(function(){
      $('.home-petal').removeClass('current');
      $('.petal-two').show();
      $('.petal-two').addClass('current');
      const audio = document.querySelector(".audio-2");
      audio.currentTime = 0;
      audio.play();
    }, 2000);

    setTimeout(function(){
      $('.home-petal').removeClass('current');
      $('.petal-four').show();
      $('.petal-four').addClass('current');
      const audio = document.querySelector(".audio-4");
      audio.currentTime = 0;
      audio.play();
    }, 3000);

    setTimeout(function(){
      $('.home-petal').removeClass('current');
      $('.petal-three').show();
      $('.petal-three').addClass('current');
      const audio = document.querySelector(".audio-3");
      audio.currentTime = 0;
      audio.play();
    }, 4000);

    setTimeout(function(){
      $('.home-petal').removeClass('current');
      $('.petal-one').show();
      $('.petal-one').addClass('current');
      const audio = document.querySelector(".audio-1");
      audio.currentTime = 0;
      audio.play();
    }, 5000);

    setTimeout(function(){
      $('.home-petal').removeClass('current');
    }, 6000);

    setTimeout(function(){
      $('.home-petal').removeClass('current');
      $('.petal-zero').addClass('current');
    }, 6100);

    setTimeout(function(){
      $('.home-petal').removeClass('current');
      $('.petal-two').addClass('current');
    }, 6200);

    setTimeout(function(){
      $('.home-petal').removeClass('current');
      $('.petal-four').addClass('current');
    }, 6300);

    setTimeout(function(){
      $('.home-petal').removeClass('current');
      $('.petal-three').addClass('current');
    }, 6400);

    setTimeout(function(){
      $('.home-petal').removeClass('current');
      $('.petal-one').addClass('current');
    }, 6500);

    setTimeout(function(){
      $('.home-petal').addClass('current');
    }, 6600);

    setTimeout(function(){
      $('.home-petal').removeClass('current');
    }, 7600);

    setTimeout(function(){
      $('.home-petal').removeClass('current');
      $('#welcome-message').addClass('show');
    }, 8000);

    document.querySelectorAll(".home-petal").forEach(element => {
      element.addEventListener("mouseenter", () => {
        $('#welcome-message').hide();
        const audioClass = element.dataset["audio"];
        const audioElement = document.querySelector("." + audioClass);
        audioElement.currentTime = 0;
        audioElement.play();
      });
      element.addEventListener("click", () => {
        const audioClass = element.dataset["audio"];
        const audioElement = document.querySelector("." + audioClass);
        audioElement.currentTime = 0;
        audioElement.play();
      });
    });

  });

});
