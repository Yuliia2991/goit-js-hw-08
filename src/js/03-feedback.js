import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('form');
const formData = {};

populateInputs();

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  if (formEl.elements.email.value === '' || formEl.elements.message.value === '') {
    return alert('All inputs should be filled!');
  }
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  const name = e.target.name;
  const value = e.target.value;
  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInputs() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    return;
  }
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    if (savedData.email) {
      formEl.elements.email.value = savedData.email;
    }
    if (savedData.message) {
      formEl.elements.message.value = savedData.message;
    }
  }
}
