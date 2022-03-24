
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

  //Перемешиваем массив
  objects.sort(() => Math.random() - 0.5);


};

createObjects();
console.log(objects)
let x = JSON.stringify(objects);
console.log(x);
x = JSON.parse(x)
console.log(x);

const synth = window.speechSynthesis;
let word = null;
let text = null;
text = new SpeechSynthesisUtterance();
  text.lang = 'en-US';

const trainWords = () => {

  synth.cancel()

  cardShow.textContent = 'Показать ответ';
  cardEng.classList.add('hide');
  cardShow.classList.remove('hide');
  cardNext.classList.add('hide');
  word = objects.shift();
  const {
    ru,
    eng
  } = word;
  cardRu.textContent = ru;
  cardEng.textContent = eng;
  text.text = eng;



};
trainWords();

cardShow.addEventListener('click', (evt) => {

  cardEng.classList.remove('hide');
  cardShow.classList.add('hide');
  cardNext.classList.remove('hide');

  synth.speak(text);


});

cardNext.addEventListener('click', (evt) => {

  trainWords();
});

const click = new Event('click');
document.addEventListener('keydown', (evt) => {
  if (evt.code == 'Space' || evt.code == 'Enter' || evt.code == 'NumpadEnter' || evt.code == 'ArrowRight') {
    evt.preventDefault();
    synth.cancel();
    if (cardShow.classList.contains('hide')) {
      cardNext.dispatchEvent(click);
    } else {
      cardShow.dispatchEvent(click);
    }
  }
});

document.addEventListener('touchstart', () => {
  synth.cancel();
  if (cardShow.classList.contains('hide')) {
    cardNext.dispatchEvent(click);
  } else {
    cardShow.dispatchEvent(click);
  }
});
