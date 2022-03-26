
const sentences = document.querySelector('.sentences');
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

console.log(JSON.stringify(objectss));

export {objectss };

