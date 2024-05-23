let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item-thumbnail')
let imgthumbnail = document.querySelector('.image-slider')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.all-content-slider')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item-thumbnail')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }   

    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true})
}

// Navbar blir solid når du skroller forbi starten av siden
$(document).ready(function () {
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop >= 1) {
        $(".navbar").addClass("solid-nav");
        console.log("solid-nav");
      } else {
        $(".navbar").removeClass("solid-nav");
        console.log("no-solid-nav");
      }
    });
  });

  