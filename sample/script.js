//BARS

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('fa-times');
      navbar.classList.toggle('active2')
});

// GoToTop

let topbutton = document.getElementById ('goToTop');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topbutton.style.display = 'block';
            }
      else {
            topbutton.style.display = 'none';
      }
}

function topFunction() {
      document.body.scrollTop = 0; //SAfari
      document.documentElement.scrollTop = 0; // Chrome
}