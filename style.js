

function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');

    // Update the background image dynamically based on the 'bg' parameter
    banner.style.background = `url('assests/images/${bg}')`;
    banner.style.backgroundSize = '90rem 40rem ';
    banner.style.backgroundPosition = 'center';

    // Toggle active class based on the title
    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}


// Select the navbar element
const navbar = document.querySelector('nav');

// Add an event listener for scrolling
window.addEventListener('scroll', () => {
    // Check if the page is scrolled more than 50 pixels
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

// Optional: Auto slide
setInterval(() => {
  showSlide(currentIndex + 1);
}, 3000);



document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.carousel-prev-btn');
    const nextBtn = document.querySelector('.carousel-next-btn');
    const carousel = document.querySelector('.recommended-movies-carousel');

    let scrollAmount = 0;

    prevBtn.addEventListener('click', () => {
        scrollAmount -= 200; // Adjust scroll amount based on your item width
        carousel.scrollLeft = scrollAmount;
    });

    nextBtn.addEventListener('click', () => {
        scrollAmount += 200; // Adjust scroll amount based on your item width
        carousel.scrollLeft = scrollAmount;
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const navbarLinks = document.querySelectorAll('nav ul li a');

  navbarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent default link behavior
          const targetId = link.getAttribute('data-target');
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
});
