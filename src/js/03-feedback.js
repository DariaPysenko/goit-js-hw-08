

import throttle from 'lodash.throttle'; // библиотека
const STORAGE_KEY = 'feedback-form-state'; //объект данных для полей ввода
const feedbackFormData = {};
// элементы формы
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
//вешаем слушателя
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateOnFormInput();
//ф-ция ввода
function onFormInput(e) {
  feedbackFormData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
}
//ф-ция формы
function onFormSubmit(e) {
    // без дефолтной перезагрузки
    e.preventDefault();
    // очистить перезагрузить форму

  localStorage.removeItem(STORAGE_KEY);
  const emailValue = refs.input.value;
  const messageValue = refs.textarea.value;

  if (emailValue === '' || messageValue === '') {
    return alert('Заполните обязательные поля Email и Message:');
  }
  console.log(feedbackFormData);
  e.currentTarget.reset();

  
}
//ф-ция при релоуде и вернуть сохраненные данные
function populateOnFormInput() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    refs.input.value = savedMessage.email || '';
    refs.textarea.value = savedMessage.message || '';
    feedbackFormData.email = refs.input.value;
    feedbackFormData.message = refs.textarea.value;
  }
}

//все
 