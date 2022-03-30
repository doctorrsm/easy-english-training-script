
const sentences = document.querySelector('.sentences');
console.log(sentences.innerHTML)
const arr = sentences.innerHTML.split('\n');
sentences.style.display = 'none';
const objectss = [];

const createObjects = () => {
  arr.forEach(() => {
    const obj = {
      eng: '',
      ru: ''
    };
    obj.ru = arr.shift();
    obj.eng = arr.shift();
    objectss.push(obj);
  });
};

createObjects();

console.log(objectss);

export {objectss };

