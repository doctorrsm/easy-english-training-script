
const sentences = document.querySelector('.sentences');
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

export {objects };

