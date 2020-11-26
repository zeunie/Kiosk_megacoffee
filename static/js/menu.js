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
const chevronLeft = document.getElementById("chevronLeft");
const chevronRight = document.getElementById("chevronRight");
const payByCard = document.getElementById("card");

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
		navItemFirst.innerHTML = '<a href="/menu?category=COFFEE(HOT)">Coffee(HOT)</a>';
		navItemSecond.innerHTML = '<a href="/menu?category=COFFEE(HOT)">Coffee(HOT)</a>';
		navItemThird.innerHTML = '<a href="/menu?category=BEVERAGE">BEVERAGE</a>';
		navItemFourth.innerHTML = '<a href="/menu?category=TEA">TEA</a>';
	}
}

function plusNum() {
	if (num == 2) {
		return;
	}
	num += 1;

	if (num == 2) {
		navItemFirst.innerHTML = '<a href="/menu?category=JUICE">JUICE</a>';
		navItemSecond.innerHTML = '<a href="/menu?category=ADE">ADE</a>';
		navItemThird.innerHTML = '<a href="/menu?category=SMOOTHIE&FRAFFE">SMOOTHIE&FRAFFE</a>';
		navItemFourth.innerHTML = '<a href="/menu?category=DESSERT">DESSERT</a>';
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
      nextBtnDisplay.innerText = "• ∘";
    }
  }
  if (displayNumber == 2) {
    if (index == 0) {
      showMenuPage(0);
      nextBtnDisplay.innerText = "• ∘ ∘";
    }

    if (index == 1) {
      showMenuPage(1);
      nextBtnDisplay.innerText = "∘ • ∘";
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
      nextBtnDisplay.innerText = "∘ •";
    }
  }
  if (displayNumber == 2) {
    if (index == 1) {
      showMenuPage(1);
      nextBtnDisplay.innerText = "∘ • ∘";
    }
    if (index == 2) {
      showMenuPage(2);
      nextBtnDisplay.innerText = "∘ ∘ •";
    }
  }
}

function setDisplay(num) {
  if (num == 0) {
    nextBtnDisplay.innerText = "•";
    nextBtnLeft.removeEventListener;
    nextBtnRight.removeEventListener;
  }
  if (num == 1) {
    nextBtnDisplay.innerText = "• ∘";
  }
  if (num == 2) {
    nextBtnDisplay.innerText = "• ∘ ∘";
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
  const deleteBtn = document.createElement("span");
  deleteBtn.id = "deleteBtn";
  deleteBtn.innerText = "X";
  orderPriceDiv.appendChild(deleteBtn);
  const quantity = document.createElement("span");
  quantity.id = "quantity";
  quantity.innerText = "\n\n1";
  spanForName.appendChild(quantity);
  banner.style.backgroundColor = "lightgray";
  chevronLeft.style.visibility = "visible";
  chevronRight.style.visibility = "visible";
  bannerImage.style.opacity = 0;
  const minusIcon = document.createElement("i");
  quantity.appendChild(minusIcon);
  minusIcon.className="fas fa-minus-circle";
  const plusIcon = document.createElement("i");
  quantity.appendChild(plusIcon);
  plusIcon.className="fas fa-plus-circle";
  const option = document.createElement("span");
  option.id = "option";
  option.innerText = "+연하게";
  spanForName.appendChild(option);
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
	showMenuPage(0);
	setDisplay(displayNumber);
	navItemLeftBtn.addEventListener("click", minusNum);
	navItemRightBtn.addEventListener("click", plusNum);
	nextBtnLeft.addEventListener("click", minusIndex);
	nextBtnRight.addEventListener("click", plusIndex);

	for (var i = 0; i < len; i++) {
		menuPage[i].addEventListener("click", trackItem);
	}

	//JH	결제 요청 시 서버에 주문 내역이 JSON으로 전달되도록 하기 위한 실험 
	payByCard.addEventListener("click", () => {
		let orderInfo = {
			"order_list": [
				{ "item_name": "아메리카노", "item_price": 3000 }, { "item_name": "카페라테", "item_price": 4000 }, { "item_name": "유자차", "item_price": 4500 },
			]
			, "order_togo": true
		}

		var form = document.createElement('form');
		form.style.visibility = 'hidden'; // no user interaction is necessary
		form.method = 'POST'; // forms by default use GET query strings
		form.action = '/check';
		for (key of Object.keys(orderInfo)) {
			var input = document.createElement('input');
			input.name = key;
			input.value = orderInfo[key];
			form.appendChild(input); // add key/value pair to form
		}
		document.body.appendChild(form); // forms cannot be submitted outside of body
		form.submit(); // send the payload and navigate

	})
	//JH******************************************
}
main();
