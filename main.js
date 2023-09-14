$(document).ready(function(){
  var $slider = $('.slick-carousel'); // Make sure to define the $slider variable

  $slider.slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow : '<button class="slick-arrow previous carousel-button"> <i class="fas fa-chevron-left"></i></button>',
    nextArrow : '<button class="slick-arrow next carousel-button"> <i class="fas fa-chevron-right"></i></button>',
    

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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

  function setCardHeight() {
    var maxCardHeight = 0;
    $slider.find('.slick-slide .card').each(function() {
      var cardHeight = $(this).outerHeight();
      if (cardHeight > maxCardHeight) {
        maxCardHeight = cardHeight;
      }
    });
    $slider.find('.slick-slide .card').css('height', maxCardHeight + 'px');
  }

  setCardHeight();
  $slider.on('afterChange', setCardHeight);
});


// JavaScript function to start and stop video playback
function startVideo(videoId) {
  // Get the video element by its ID
  var video = document.getElementById(videoId);

  // Check if the video element exists
  if (video) {
    // Toggle the display of the video element
    if (video.style.display === 'none' || video.style.display === '') {
      video.style.display = 'block'; // Display the video
      video.play(); // Start playing the video
    } else {
      video.style.display = 'none'; // Hide the video
      video.pause(); // Pause the video
    }
  }
}

function startVideo(videoId, playButton) {
  var video = document.getElementById(videoId);
  if (video.paused) {
      video.play();
      playButton.style.display = "none"; // Hide the play button
  }
} function startVideo(videoId) {
  var video = document.getElementById(videoId);
  var thumbnail = video.parentElement.querySelector(".video-thumbnail");
  
  if (video.style.display === "none") {
      video.style.display = "block";
      thumbnail.style.display = "none";
      
      // Start the YouTube video by sending a play command
      video.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  }
}