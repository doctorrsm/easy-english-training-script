const synth = window.speechSynthesis;
let text = new SpeechSynthesisUtterance();
text.lang = 'en-US'; //pl-PL en-US

Vue.createApp({
  data() {
    return {
      message: 'Простой тренажёр английского языка',
      button1: 'Показать ответ',
      button2: 'Следующее предложение',
      russian: 'Выберите урок, чтобы начать заниматься.',
      english: 'Английское предложение',
      buttonVisible: false,
      sectionVisible: false,
      input: '',
      data: '',
      count: 0,
      leftWords: 0
    }
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
      synth.speak(text)

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
      !this.buttonVisible ? this.say() : this.next()
      //this.say()
      //this.say();
      //document.querySelector('.next').focus();
    }

  },
  created() {
    // Что делать при запуске приложения
  },
}).mount('#app')

