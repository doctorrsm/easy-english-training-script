class Card {
  constructor() {
    this.createElementFormTemplate();
    this.setCardItems();
    this.hide();
  }

  createElementFormTemplate() {
    const body = document.querySelector('body');
    const trainingCard = document.querySelector('#training-card').content.cloneNode(true);
    const cardTemplate = trainingCard.querySelector('.card').cloneNode(true);
    body.appendChild(cardTemplate);
  }

  setCardItems() {
    this.card = document.querySelector('.card');
    this.cardList = this.card.querySelector('.card__list');
    this.cardRu = this.card.querySelector('.card__ru-item');
    this.cardEng = this.card.querySelector('.card__eng-item');
    this.cardNext = this.card.querySelector('.card__next-button');
    this.cardShow = this.card.querySelector('.card__show-button');
  }

  hide() {
    this.card.classList.add('hide');
  }

  visible() {
    this.card.classList.remove('hide');
    this.cardShow.textContent = 'Показать ответ';
    this.cardEng.classList.add('hide');
    this.cardShow.classList.remove('hide');
    this.cardNext.classList.add('hide');

  }

  fillCardByData(data) {
    const {ru, eng} = data.shift();
    this.cardRu.textContent = ru;
    this.cardEng.textContent = eng;
  }
}
export const card = new Card();
