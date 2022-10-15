window.onscroll = scrollNav;

const nav = document.querySelector('.gpt3__navbar');
var sticky = nav.offsetTop;

function scrollNav() {
   if (window.pageYOffset >= sticky) {
      nav.classList.add('sticky')
   } else {
      nav.classList.remove('sticky')
   }
}