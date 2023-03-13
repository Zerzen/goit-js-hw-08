import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[type="email"]');
const textareaInput = document.querySelector('textarea[name="message"]');

const STORAGE_KEY_EMAIL = 'feedback-form-email';
const STORAGE_KEY_TEXTAREA = 'feedback-form-textarea';

function onInputEmail(event) {
  const email = event.target.value;
  localStorage.setItem(STORAGE_KEY_EMAIL, email);
}

function onTextareaInput(event) {
  const textarea = event.target.value;
  localStorage.setItem(STORAGE_KEY_TEXTAREA, textarea);
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(inputEmail.value);
  console.log(textareaInput.value);

  event.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY_EMAIL);
  localStorage.removeItem(STORAGE_KEY_TEXTAREA);
}
emailAndTextareaData();
function emailAndTextareaData() {
  const savedEmail = localStorage.getItem(STORAGE_KEY_EMAIL);
  const savedTextarea = localStorage.getItem(STORAGE_KEY_TEXTAREA);

  if (savedEmail) {
    inputEmail.value = savedEmail;
  }
  if (savedTextarea) {
    textareaInput.value = savedTextarea;
  }
}

form.addEventListener('submit', onFormSubmit);
inputEmail.addEventListener('input', throttle(onInputEmail, 500));
textareaInput.addEventListener('input', throttle(onTextareaInput, 500));
