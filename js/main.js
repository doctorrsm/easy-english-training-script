const synth = window.speechSynthesis;
const text = new SpeechSynthesisUtterance();
text.lang = 'en-US'; //pl-PL en-US

const app = Vue.createApp({
  data() {
    return {
      message: 'Простой тренажёр английского языка',
      button1: 'Показать ответ',
      button2: 'Следующее предложение',
      russian: 'Выберите урок, чтобы начать заниматься.',
      english: 'Английское предложение',
      buttonVisible: false,
      sectionVisible: false,
      allSentensesVisible: false,
      input: '',
      data: '',
      count: 0,
      leftWords: 0
    };
  },
  methods: {

    say() {
      synth.cancel();
      if (this.input == '') {
        document.querySelector('.input').focus();
        return;
      }
      this.buttonVisible = true;
      this.russian = this.data[this.count]['ru'];
      this.english = this.data[this.count]['eng'];
      text.text = this.data[this.count]['eng'];
      synth.speak(text);

      this.leftWords = this.data.length - this.count;
    },
    next() {
      synth.cancel();

      if (this.input == '') {
        document.querySelector('.input').focus();
        return;
      }

      this.buttonVisible = false;
      this.count++;

      this.russian = this.data[this.count]['ru'];
      this.english = this.data[this.count]['eng'];
      document.querySelector('.input').focus();
      this.input = '';
    },
    getData(urlRequest) {
      this.sectionVisible = true;
      fetch(urlRequest)
        .then((response) => response.json())
        .then((data) => {
          this.data = data;
          this.russian = this.data[this.count]['ru'];
          this.english = this.data[this.count]['eng'];

          document.querySelector('.say').focus();
          this.leftWords = this.data.length;
          this.input = '';
        });

    },
    onEnter() {
      !this.buttonVisible ? this.say() : this.next();
      //this.say()
      //this.say();
      //document.querySelector('.next').focus();
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

        // поменять элементы местами
        // мы используем для этого синтаксис "деструктурирующее присваивание"
        // подробнее о нём - в следующих главах
        // то же самое можно записать как:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
      }
    },
    showAllSententses() {
      this.allSentensesVisible = !this.allSentensesVisible;
    }

  },
  created() {
    // Что делать при запуске приложения
  },
});

app.component('sentence-eng', {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    say() {
      this.visible = !this.visible;
      synth.cancel();

      if (this.visible) {
        text.text = this.textEng;
        synth.speak(text);
      }
    }
  },
  props: ['textRu', 'textEng'],
  template:
    `<li :class="{viewedSentence: visible}" @click="say" >
    {{ textRu }}
    </li>
    <li class="englishSentence" v-show="visible">
      {{ textEng }}
    </li>`
});

app.mount('#app');
