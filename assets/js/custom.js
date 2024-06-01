// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

//modal
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

// === recapcha ===


// Toggle Faq Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



// blog search


var lstEl = null;
var cntr = -1;

$(document).ready(function() {
    $('#btnSearch').click(function() {
        lstEl = null;
        cntr = -1;
        var vl = document.getElementById('searchTerm').value;
        $("#bodyContainer").removeHighlight();
        $("#bodyContainer").highlight(vl);
    });

    $('#btnNext').click(function() {
        alert(cntr);
        if (lstEl === null) {
            lstEl = $('#bodyContainer').find('span.highlight');
            if (!lstEl || lstEl.length === 0) {
                lstEl = null;
                return;
            }
        }
        if (cntr < lstEl.length - 1) {
            cntr++;
            if (cntr > 0) {
                $(lstEl[0]).removeClass('current');
            }
            var elm = lstEl[cntr];
            $(elm).addClass('current');
        } else
            alert("End of search reached!");
    });

    $('#btnPrev').click(function() {
        alert(cntr);
        if (lstEl === null) {
            lstEl = $('#bodyContainer').find('span.highlight');
            if (!lstEl || lstEl.length === 0) {
                lstEl = null;
                return;
            }
        }
        if (cntr > 0) {
            cntr--;
            if (cntr < lstEl.length) {
                $(lstEl[cntr + 1]).removeClass('current');
            }
            var elm = lstEl[cntr];
            $(elm).addClass('current');
        } else
            alert("Begining of search!");
    });
});



//breed focus


/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

 
 
 
 // Switch for URLs - dms1-50 is Agric quote, 51- 64 is beef fact, 65 - 121 is did you know, 122 - 150 is livestock fact
const colors = ['https://livestock247.com/images/dms/101.png',
'https://livestock247.com/images/dms/2.png',
'https://livestock247.com/images/dms/4.png', 
'https://livestock247.com/images/dms/5.png', 
'https://livestock247.com/images/dms/6.png', 
'https://livestock247.com/images/dms/7.png',
'https://livestock247.com/images/dms/8.png',
'https://livestock247.com/images/dms/9.png',
'https://livestock247.com/images/dms/10.png',
'https://livestock247.com/images/dms/12.png',
'https://livestock247.com/images/dms/13.png',
'https://livestock247.com/images/dms/14.png',
'https://livestock247.com/images/dms/15.png',
'https://livestock247.com/images/dms/18.png',
'https://livestock247.com/images/dms/19.png',
'https://livestock247.com/images/dms/20.png',
'https://livestock247.com/images/dms/80.png',
'https://livestock247.com/images/dms/81.png',
'https://livestock247.com/images/dms/82.png',
'https://livestock247.com/images/dms/83.png',
'https://livestock247.com/images/dms/85.png',
'https://livestock247.com/images/dms/86.png',
'https://livestock247.com/images/dms/87.png',
'https://livestock247.com/images/dms/88.png',
'https://livestock247.com/images/dms/89.png',
'https://livestock247.com/images/dms/90.png'


];

$(document).ready(function() {
    const randomColor = [Math.floor(Math.random()*colors.length)];
  document.colorsImg.src = `${colors[randomColor]}?text=+`;
});
    
    


//lazy loading
// This is "probably" IE9 compatible but will need some fallbacks for IE8
// - (event listeners, forEach loop)

// wait for the entire page to finish loading
window.addEventListener('load', function() {
    
    // setTimeout to simulate the delay from a real page load
    setTimeout(lazyLoad, 1000);
    
});

function lazyLoad() {
    var card_images = document.querySelectorAll('.card-image');
    
    // loop over each card image
    card_images.forEach(function(card_image) {
        var image_url = card_image.getAttribute('data-image-full');
        var content_image = card_image.querySelector('img');
        
        // change the src of the content image to load the new high res photo
        content_image.src = image_url;
        
        // listen for load event when the new photo is finished loading
        content_image.addEventListener('load', function() {
            // swap out the visible background image with the new fully downloaded photo
            card_image.style.backgroundImage = 'url(' + image_url + ')';
            // add a class to remove the blur filter to smoothly transition the image change
            card_image.className = card_image.className + ' is-loaded';
        });
        
    });
    
}