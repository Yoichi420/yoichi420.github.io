'use strict'

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('#slide');
  const slides = ul.children;
  let currentIndex = 0;

  function updateButtons() {
   prev.classList.remove('hidden');
   next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }

    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  updateButtons();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  });

  function onscrollCallback(entries) {
  entries.forEach(entry => {
   if (!entry.isIntersecting){
    up.classList.add('scrolled');
   } else {
    up.classList.remove('scrolled');
   }
 });
  }

  const up =document.querySelector("#top");

  const observer = new IntersectionObserver(onscrollCallback);

  observer.observe(document.getElementById('target'));

  up.addEventListener('click', e => {
   e.preventDefault();

   window.scrollTo({
     top: 0,
     behavior: 'smooth',
   });
  });
}