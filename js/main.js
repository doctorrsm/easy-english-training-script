const body = document.querySelector('body');
const trainingCard = document.querySelector('#training-card').content.cloneNode(true);
const cardTemplate = trainingCard.querySelector('.card').cloneNode(true);
body.appendChild(cardTemplate);

const card = body.querySelector('.card');
const cardList = card.querySelector('.card__list');
const cardRu = card.querySelector('.card__ru-item');
const cardEng = card.querySelector('.card__eng-item');
const cardNext = card.querySelector('.card__next-button');
const cardShow = card.querySelector('.card__show-button');

const sentences = body.querySelector('.sentences');
const arr = sentences.innerHTML.split('\n');
sentences.style.display = 'none';

const objects = [];
const createObjects = () => {
  arr.forEach(() => {
    const obj = {
      eng: '',
      ru: ''
    };
    obj.ru = arr.shift();
    obj.eng = arr.shift();
    objects.push(obj);
  });
};

createObjects();

const trainWords = () => {

  cardShow.textContent = 'Показать ответ';
  cardEng.classList.add('hide');
  cardShow.classList.remove('hide');
  cardNext.classList.add('hide');
  let word = objects.shift();
  cardRu.textContent = word.ru;
  cardEng.textContent = word.eng;
  cardShow.addEventListener('click', (evt) => {

    cardEng.classList.remove('hide');
    cardShow.classList.add('hide');
    cardNext.classList.remove('hide');
  });
};
trainWords();

cardNext.addEventListener('click', (evt) => {

  trainWords();
});




console.log(objects);