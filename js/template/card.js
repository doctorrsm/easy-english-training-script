import {
  addTrainingCard
} from './card-template.js';

addTrainingCard();

const CreateCard = () => {
  const card = document.querySelector('.card');
  const cardList = card.querySelector('.card__list');
  const cardRu = card.querySelector('.card__ru-item');
  const cardEng = card.querySelector('.card__eng-item');
  const cardNext = card.querySelector('.card__next-button');
  const cardShow = card.querySelector('.card__show-button');

  return {
    eng: cardEng.textContent,
    ru: cardEng.textContent,
    next: cardNext,
    show: cardShow,
  }
}

const newCard = CreateCard();

export { newCard };
