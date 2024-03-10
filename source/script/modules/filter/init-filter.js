import cardsData from '../../../../public/projects.json';



const templateEl = document.querySelector('[data-template="project-card"]');
const parentEl = document.querySelector('[data-project="parent"]');

if (templateEl) {
  parentEl.classList.add('is-active')



  cardsData.forEach((cardData) => {
    let cardEl;
    cardEl = templateEl.content.cloneNode(true);
  
    const prCardEl = cardEl.querySelector('.product-card');
    prCardEl.classList.add(cardData.classes)
  
    const imgEl = cardEl.querySelector('.product-card__img');
    imgEl.src = cardData.src;
    imgEl.height = cardData.height;
    imgEl.width = cardData.width;
    imgEl.alt = cardData.alt;
  
    const titleEl = cardEl.querySelector('.product-card__title');
    titleEl.textContent = cardData.title;
  
    const linkEl = cardEl.querySelector('.product-card__shadow-link');
    linkEl.href = cardData.href;
  
    const labelEl = cardEl.querySelector('.product-card__label');
    labelEl.textContent = cardData.label;
  
    const hitEl = cardEl.querySelector('.product-card__hit');
    if (!cardData.hit) {
      hitEl.style.display = 'none';
    }
  
    const dateEl = cardEl.querySelector('.product-card__date');
    dateEl.textContent = cardData.date;
  
    parentEl.append(cardEl);
  })
}



