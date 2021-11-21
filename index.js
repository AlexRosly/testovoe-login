const inputEmail = document.querySelector('.form__input');
const inputPassword = document.querySelector('.password');
const firstInputPassword = document.getElementById('password-input');
const seconInputPassword = document.getElementById('password-check');
const checkPassword = document.querySelector('.check-password');
const showMessage = document.querySelector('.email__message');
const showPasswordMessage = document.querySelector('.password__message');
const showCheckPasswordMessage = document.querySelector(
  '.password-check__message',
);
const firstCheckBox = document.querySelector('.checkbox-risk__input');
const secondCheckBox = document.querySelector('.checkbox-policy__input');
const getBtn = document.querySelector('.form__btn');

const DEBOUNCE_DELAY = 500;
const REG =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const REG_PASSWORD = /^[a-z0-9_\.\-]{6,16}$/i;

let email = '';
let password = '';
let secondPassword = '';

inputEmail.addEventListener('input', _.debounce(validateEmail, DEBOUNCE_DELAY));
inputPassword.addEventListener(
  'input',
  _.debounce(checkInputPassword, DEBOUNCE_DELAY),
);
checkPassword.addEventListener(
  'input',
  _.debounce(checkInPassword, DEBOUNCE_DELAY),
);
firstCheckBox.addEventListener('change', checkFirstInput);
secondCheckBox.addEventListener('change', checkSecondInput);

function validateEmail(e) {
  e.preventDefault();
  const value = e.target.value;

  if (!REG.test(value)) {
    showMessage.classList.add('email__message-show');
    setTimeout(() => {
      showMessage.classList.remove('email__message-show');
    }, 2000);
  } else {
    email = value;
  }
}

function checkInputPassword(e) {
  e.preventDefault();
  const value = e.target.value;

  if (!REG_PASSWORD.test(value)) {
    showPasswordMessage.classList.add('password__message-show');
    setTimeout(() => {
      showPasswordMessage.classList.remove('password__message-show');
    }, 2000);
  } else {
    setTimeout(() => {
      changeInput();
    }, 1000);
    password = value;
  }
}

function changeInput() {
  firstInputPassword.removeAttribute('type', 'text');
  firstInputPassword.setAttribute('type', 'password');
}

function checkInPassword(e) {
  e.preventDefault();
  const value = e.target.value;
  if (value !== password) {
    showCheckPasswordMessage.classList.add('password-check__message-show');
    setTimeout(() => {
      showCheckPasswordMessage.classList.remove('password-check__message-show');
    }, 2000);
  } else {
    setTimeout(() => {
      checkSecondPassword();
    }, 1000);
    secondPassword = value;
  }
}

function checkSecondPassword() {
  seconInputPassword.removeAttribute('type', 'text');
  seconInputPassword.setAttribute('type', 'password');
}

function checkFirstInput() {
  const check = firstCheckBox.checked;

  if (check) {
    return true;
  } else {
    getBtn.classList.remove('form__btn-active');
    return false;
  }
}

function checkSecondInput() {
  const check = secondCheckBox.checked;

  if (check && email && password && secondPassword && checkFirstInput()) {
    getBtn.removeAttribute('disabled');
    getBtn.classList.add('form__btn-active');
  } else if (!check) {
    getBtn.classList.remove('form__btn-active');
    return;
  }
}
