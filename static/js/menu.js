const navItemFirst = document.getElementById("navItemFirst");
const navItemSecond = document.getElementById("navItemSecond");
const navItemThird = document.getElementById("navItemThird");
const navItemFourth = document.getElementById("navItemFourth");
const navItemLeftBtn = document.getElementById("navItemLeftButton");
const navItemRightBtn = document.getElementById("navItemRightButton");
const nextBtnLeft = document.getElementById("nextButtonLeft");
const nextBtnRight = document.getElementById("nextButtonRight");
const nextBtnDisplay = document.getElementById("nextButtonDisplay");
const menuPage = document.querySelectorAll(".items div:nth-child(n)");
const banner = document.getElementById("banner");
const bannerImage = document.getElementById("bannerImage");
const item = document.getElementById("item");
const orderNameDiv = document.getElementById("orderNameDiv");
const orderPriceDiv = document.getElementById("orderPriceDiv");

let num = 1;
let index = 0;
let len = menuPage.length;
let displayNumber = parseInt((len - 1) / 12);

function minusNum() {
  if (num == 1) {
    return;
  }
  num -= 1;
  if (num == 1) {
    navItemFirst.innerHTML = '<a href="/coffeeHot">Coffee(HOT)</a>';
    navItemSecond.innerHTML = '<a href="/coffeeIce">Coffee(ICE)</a>';
    navItemThird.innerText = "BEVERAGE";
    navItemFourth.innerText = "TEA";
  }
}
function plusNum() {
  if (num == 2) {
    return;
  }
  num += 1;

  if (num == 2) {
    navItemFirst.innerText = "JUICE";
    navItemSecond.innerText = "ADE";
    navItemThird.innerText = "SMOOTHIE&FRAFFE";
    navItemFourth.innerText = "DESSERT";
  }
}

function showMenuPage(num) {
  for (var i = 0; i < len; i++) {
    menuPage[i].style.display = "none";
    if (parseInt(i / 12) == num) menuPage[i].style.display = "grid";
  }
}

function minusIndex() {
  if (index == 0) {
    return;
  }
  index -= 1;
  if (displayNumber == 1) {
    if (index == 0) {
      showMenuPage(0);
      nextBtnDisplay.innerText = "● ○";
    }
  }
  if (displayNumber == 2) {
    if (index == 0) {
      showMenuPage(0);
      nextBtnDisplay.innerText = "● ○ ○";
    }

    if (index == 1) {
      showMenuPage(1);
      nextBtnDisplay.innerText = "○ ● ○";
    }
  }
}

function plusIndex() {
  if (index == 2) {
    return;
  }
  index += 1;
  if (displayNumber == 1) {
    if (index == 1) {
      showMenuPage(1);
      nextBtnDisplay.innerText = "○ ●";
    }
  }
  if (displayNumber == 2) {
    if (index == 1) {
      showMenuPage(1);
      nextBtnDisplay.innerText = "○ ● ○";
    }
    if (index == 2) {
      showMenuPage(2);
      nextBtnDisplay.innerText = "○ ○ ●";
    }
  }
}

function setDisplay(num) {
  if (num == 0) {
    nextBtnDisplay.innerText = "●";
    nextBtnLeft.removeEventListener;
    nextBtnRight.removeEventListener;
  }
  if (num == 1) {
    nextBtnDisplay.innerText = "● ○";
  }
  if (num == 2) {
    nextBtnDisplay.innerText = "● ○ ○";
  }
}

function addMenu(src, name, price) {
  const spanForName = document.createElement("span");
  spanForName.id = "orderName";
  spanForName.innerText = name;
  orderNameDiv.appendChild(spanForName);
  const spanForPrice = document.createElement("span");
  spanForPrice.id = "orderPrice";
  spanForPrice.innerText = price;
  orderPriceDiv.appendChild(spanForPrice);
  const drinkImg = document.createElement("img");
  drinkImg.id = "orderDrink";
  drinkImg.src = src;
  spanForPrice.appendChild(drinkImg);
  banner.style.backgroundColor = "lightgray";
  bannerImage.style.opacity = 0;
}

function trackItem() {
  html = this.innerHTML;
  src = html.split('"')[3];
  name = html.split(" ")[5];
  price = html.split(" ")[8];
  // 이 정보를 이용해서 어떤 음료를 클릭한 것인지 알아내겠다.
  addMenu(src, name, price);
}

function main() {
  showMenuPage(0);
  setDisplay(displayNumber);
  navItemLeftBtn.addEventListener("click", minusNum);
  navItemRightBtn.addEventListener("click", plusNum);

  nextBtnLeft.addEventListener("click", minusIndex);
  nextBtnRight.addEventListener("click", plusIndex);

  for (var i = 0; i < len; i++) {
    menuPage[i].addEventListener("click", trackItem);
  }
}
main();
