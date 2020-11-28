const numberOptionContain = document.querySelector('.number-option-contain');
let currentBtn;

const btnClicked = (e) => {
  if (e.target === numberOptionContain) {
    return;
  }

  if (currentBtn) {
    currentBtn.classList.remove('clicked-number-option');
  }

  e.target.classList.add('clicked-number-option');
  currentBtn = e.target;
};

numberOptionContain.addEventListener('click', btnClicked);
