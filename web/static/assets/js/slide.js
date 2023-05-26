const slides1 = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.control');
let activeSlide = 0;
let prevActive = 0;

changeSlides();
let int = setInterval(changeSlides, 5000);

function changeSlides() {
  slides1[prevActive].classList.remove('active');
  controls[prevActive].classList.remove('active');

  slides1[activeSlide].classList.add('active');
  controls[activeSlide].classList.add('active');
  
  prevActive = activeSlide++;
  
  if(activeSlide >= slides1.length) {
    activeSlide = 0;
  }
  
  console.log(prevActive, activeSlide);
}

controls.forEach(control => {
  control.addEventListener('click', () => {
    let idx = [...controls].findIndex(c => c === control);
    activeSlide = idx;

    changeSlides();

    clearInterval(int);
    int = setInterval(changeSlides, 4000);
  });
});


// navbar scroll
// function scrollValue() {
//   var header = document.getElementById('header');
//   var scroll = window.scrollY;
//   if (scroll < 200) {
//       header.classList.remove('BgColour');
//   } else {
//       header.classList.add('BgColour');
//   }
// }

// window.addEventListener('scroll', scrollValue);