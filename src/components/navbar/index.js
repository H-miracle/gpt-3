window.addEventListener('scroll', ()=> {
   document.querySelector('.gpt3__nav').classList.toggle('sticky', window.scrollY > 0)
})