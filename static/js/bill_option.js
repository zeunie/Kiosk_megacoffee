const saveBtn = document.querySelector('.save-btn');
const numberOptionContain = document.querySelector('.number-option-contain');
let currentBtn;

//not yet used
const store = new Store();

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

function saveOptionNumber() {
  const store_adapter = new Store_adapter();
  const number = currentBtn.textContent;
  store_adapter.setOrderNum(number);
}

numberOptionContain.addEventListener('click', btnClicked);
saveBtn.addEventListener('click', saveOptionNumber);
