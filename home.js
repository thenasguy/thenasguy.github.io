const carouselSlide = document.querySelector('.carousel-wheel');
const carouselImg = document.querySelectorAll('.carousel-wheel img');

const prevB = document.querySelector('#prev');
const nextB = document.querySelector('#next');

let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextB.addEventListener('click', () => {
  if (counter >= carouselImg.length - 1) {
    return;
  }
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevB.addEventListener('click', () => {
  if (counter <= 0) {
    return;
  }
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
carouselSlide.addEventListener('transitionend', ()=>{
  if (carouselImg[counter].id === 'lastClone') {
    carouselSlide.style.transition = "none";
    counter = carouselImg.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImg[counter].id === 'firstClone') {
    carouselSlide.style.transition = "none";
    counter = carouselImg.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})
