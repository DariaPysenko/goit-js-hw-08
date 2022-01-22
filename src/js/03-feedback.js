

import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state'; 
const feedbackFormData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateOnFormInput();

function onFormInput(e) {
  feedbackFormData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
  
}

function onFormSubmit(e) {

 

  e.preventDefault();
  const emailValue = refs.input.value;
  const messageValue = refs.textarea.value;
  if (emailValue === '' || messageValue === '') {
    return alert('Заполните обязательные поля Email и Message:');
  }
  console.log(feedbackFormData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
 
  
  
}

function populateOnFormInput() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    refs.input.value = savedMessage.email || '';
    refs.textarea.value = savedMessage.message || '';
    feedbackFormData.email = refs.input.value;
    feedbackFormData.message = refs.textarea.value;
  }
}


 