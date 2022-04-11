import {card} from './card.js';

class App {
  constructor() {
    this.lessons = Array.from(document.querySelectorAll('.lessons-list  li'));
    this.intro = document.querySelector('.intro');
  }

  setLessonsEventsHandler() {
    this.lessons.forEach((lesson) => {
      lesson.addEventListener('click', async (evt) => {
        evt.preventDefault();
        this.getLessonUrl(evt);
        this.getDataFromServer()
          .then((data) => this.showCard(data));
      });
    });
  }

  getLessonUrl(evt) {
    this.urlRequest = evt.target.dataset.url;
  }

  // getDataFromServer(){
  //   fetch(this.urlRequest)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.hideIntro();
  //       this.data = data;
  //       this.showCard();
  //     });
  // }

  getDataFromServer() {
    return fetch(this.urlRequest)
      .then((response) => response.json());
  }

  hideIntro() {
    this.intro.classList.add('hide');
  }

  showCard(data) {
    this.hideIntro();
    this.data = data;
    card.visible();
    card.fillCardByData(this.data);
  }
}

export const app = new App();
