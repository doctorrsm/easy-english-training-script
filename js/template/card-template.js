const addTrainingCard = () => {
  const body = document.querySelector('body');
  const trainingCard = document.querySelector('#training-card').content.cloneNode(true);
  const cardTemplate = trainingCard.querySelector('.card').cloneNode(true);
  body.appendChild(cardTemplate);
};

export { addTrainingCard };
