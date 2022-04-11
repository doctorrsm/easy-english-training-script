class Speaker {
  constructor() {
    this.synth = window.speechSynthesis;
    this.Utterance = new SpeechSynthesisUtterance();
    this.Utterance.lang = 'en-US';
  }

  getMessage() {
    this.message = '';
  }

  say() {

  }
}


export const speaker = new Speaker();
console.log(speaker);
