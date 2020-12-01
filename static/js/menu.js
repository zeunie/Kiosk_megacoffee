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
const drinkNum = document.getElementById("drinkNum");
const totalPrice = document.getElementById("totalPrice");

const HOW_MANY_TO_SHOW=12

let num = 1;
let index = 0;
let len = menuPage.length;
let displayNumber = parseInt((len - 1) / HOW_MANY_TO_SHOW);

function minusNum() {
	//카테고리 8개 중 첫번째 4개를 보여준다
	if (num == 1) {
		return;
	}
	num -= 1;
	if (num == 1) {
		navItemFirst.innerHTML = `<a href="#" onclick="showCategory('COFFEE(HOT)')">Coffee(HOT)</a>`;
		navItemSecond.innerHTML = `<a href="#" onclick="showCategory('COFFEE(ICE)')"">Coffee(HOT)</a>`;
		navItemThird.innerHTML = `<a href="#" onclick="showCategory('BEVERAGE')"">BEVERAGE</a>`;
		navItemFourth.innerHTML = `<a href="#" onclick="showCategory('TEA')"">TEA</a>`;
	}
}

function plusNum() {
	//카테고리 8개 중 두번째 4개를 보여준다
	if (num == 2) {
		return;
	}
	num += 1;

	if (num == 2) {
		navItemFirst.innerHTML = `<a href="#" onclick="showCategory('JUICE')"">JUICE</a>`;
		navItemSecond.innerHTML = `<a href="#" onclick="showCategory('ADE')"">ADE</a>`;
		navItemThird.innerHTML = `<a href="#" onclick="showCategory('SMOOTHIE')"">SMOOTHIE&FRAFFE</a>`;
		navItemFourth.innerHTML = `<a href="#" onclick="showCategory('DESSERT')"">DESSERT</a>`;
	}
}
function showCategory(cat) {
	//선택시 menuPage에 있는 메뉴들이 해당 카테고리의 것으로 바뀐다. 그 다음 displayNumber가 처음(0)으로 돌아가도록 하고 
	//첫번째 페이의 음료 목록을 보여주고, 디스플레이(●○○)를 처음으로 한다 
	let count_of_item_in_category=0
	for (var i = 0; i < len; i++) {
		menuPage[i].style.display = "none";
		menuPage[i].setAttribute("data-selected","")
		if (String(menuPage[i].children[3].innerText).includes(cat)) {//이 부분 children[3]에서 3이란게 카테고리를 가리키는거예요. 원래 저렇게 쓰면 안좋은데 딱히 방법이 생각 안 나서
			menuPage[i].setAttribute("data-selected", "selected")
			count_of_item_in_category++
		}
	}
	displayNumber = parseInt((count_of_item_in_category - 1) / HOW_MANY_TO_SHOW)
	minusIndex()
	minusIndex()
	showMenuPage(index)
	setDisplay(displayNumber)
}
function showMenuPage(num) {
	//num번째의 페이지에 있는 메뉴 목록을 HOW_MANY_TO_SHOW개씩 보여준다
	let count = 0
	for (var i = 0; i < len; i++) {
		if (menuPage[i].getAttribute("data-selected")) {
			if (num * HOW_MANY_TO_SHOW <= count && count < (num + 1) * HOW_MANY_TO_SHOW) {
				menuPage[i].style.display = "grid";
			}
			else {
				menuPage[i].style.display = "none";
			}
			count++
		}
		//menuPage[i].style.display = "none";
		//if (parseInt(i / HOW_MANY_TO_SHOW) == num) menuPage[i].style.display = "grid";
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

function showCart() {
	const cartItems1 = document.querySelectorAll(
	  "#orderNameDiv span:nth-child(n)"
	);
	const cartItems2 = document.querySelectorAll(
	  "#orderPriceDiv span:nth-child(n)"
	);
  
	lastPage = parseInt(parseInt((cartItems1.length - 1) / 3) / 4);
	for (var i = 0; i < cartItems1.length; i++) {
	  if (parseInt(parseInt(i / 3) / 4) != lastPage) {
		cartItems1[i].style.display = "none";
	  } else {
		cartItems1[i].style.display = "";
	  }
	}
	for (var i = 0; i < cartItems2.length; i++) {
	  if (parseInt(parseInt(i / 2) / 4) != lastPage) {
		cartItems2[i].style.display = "none";
	  } else {
		cartItems2[i].style.display = "";
	  }
	}
  }
  
  function minusCart() {
	const cartItems1 = document.querySelectorAll(
	  "#orderNameDiv span:nth-child(n)"
	);
	const cartItems2 = document.querySelectorAll(
	  "#orderPriceDiv span:nth-child(n)"
	);
	let num;
	for (var i = 0; i < cartItems1.length; i++) {
	  if (cartItems1[i].style.display != "none") {
		num = parseInt(parseInt(i / 3) / 4);
		break;
	  }
	}
	if (num == 0) return;
	num -= 1;
	for (var i = 0; i < cartItems1.length; i++) {
	  if (parseInt(parseInt(i / 3) / 4) != num) {
		cartItems1[i].style.display = "none";
	  } else {
		cartItems1[i].style.display = "";
	  }
	}
	for (var i = 0; i < cartItems2.length; i++) {
	  if (parseInt(parseInt(i / 2) / 4) != num) {
		cartItems2[i].style.display = "none";
	  } else {
		cartItems2[i].style.display = "";
	  }
	}
  }
  
  function plusCart() {
	const cartItems1 = document.querySelectorAll(
	  "#orderNameDiv span:nth-child(n)"
	);
	const cartItems2 = document.querySelectorAll(
	  "#orderPriceDiv span:nth-child(n)"
	);
  
	lastPage = parseInt(parseInt((cartItems1.length - 1) / 3) / 4);
	let num;
	for (var i = 0; i < cartItems1.length; i++) {
	  if (cartItems1[i].style.display != "none") {
		num = parseInt(parseInt(i / 3) / 4);
		break;
	  }
	}
	if (num == lastPage) return;
	num += 1;
	for (var i = 0; i < cartItems1.length; i++) {
	  if (parseInt(parseInt(i / 3) / 4) != num) {
		cartItems1[i].style.display = "none";
	  } else {
		cartItems1[i].style.display = "";
	  }
	}
	for (var i = 0; i < cartItems2.length; i++) {
	  if (parseInt(parseInt(i / 2) / 4) != num) {
		cartItems2[i].style.display = "none";
	  } else {
		cartItems2[i].style.display = "";
	  }
	}
  }
  
  function changeDrinkNum() {
	const quantity = document.querySelectorAll("#quantity");
	sum = 0;
	for (var i = 0; i < quantity.length; i++) {
	  sum += parseInt(quantity[i].innerText);
	}
	drinkNum.innerHTML = sum;
  }
  
  function changeTotalPrice() {
	const quantity = document.querySelectorAll("#quantity");
	const cartItems2 = document.querySelectorAll("#orderPrice");
	sum = 0;
	for (var i = 0; i < cartItems2.length; i++) {
	  sum +=
		parseInt(cartItems2[i].innerText.split(",").join("")) *
		quantity[i].innerText;
	}
	totalPrice.innerText = sum.toLocaleString("en").split(".")[0];
  }
  
  function delBtnRemover(event) {
	const cartItems1 = document.querySelectorAll(
	  "#orderNameDiv span:nth-child(n)"
	);
	const cartItems2 = document.querySelectorAll(
	  "#orderPriceDiv span:nth-child(n)"
	);
	let nameIndex;
	let priceIndex;
  
	for (var i = 0; i < cartItems2.length; i++) {
	  if (cartItems2[i] == event.target) {
		nameIndex = ((i + 1) / 2) * 3 - 1;
		priceIndex = i;
		break;
	  }
	}
  
	orderNameDiv.removeChild(cartItems1[nameIndex - 2]);
	orderPriceDiv.removeChild(cartItems2[priceIndex]);
	orderPriceDiv.removeChild(cartItems2[priceIndex - 1]);
  
	if ((cartItems1.length - 3) % 12 == 0) {
	  if (cartItems1.length == 3) {
		chevronLeft.style.visibility = "hidden";
		chevronRight.style.visibility = "hidden";
		bannerImage.style.opacity = 1;
	  } else {
		showCart();
	  }
	}
	changeDrinkNum();
	changeTotalPrice();
  }
  
  function delBtnListener() {
	const delBtn = document.querySelectorAll("#deleteBtn");
	for (var Btn of delBtn) {
	  Btn.addEventListener("click", delBtnRemover);
	}
  }
  
  function handleMinusIcon(event) {
	const fas = document.getElementsByClassName("fa-minus-circle");
	let node;
	for (var Btn of fas) {
	  if (Btn == event.target) {
		node = Btn.previousSibling;
	  }
	}
	currentNum = parseInt(node.innerText);
	if (currentNum == 1) return;
	else {
	  currentNum -= 1;
	  node.innerText = `\n\n ${currentNum}`;
	  changeDrinkNum();
	  changeTotalPrice();
	}
  }
  
  function handlePlusIcon(event) {
	const fas = document.getElementsByClassName("fa-plus-circle");
	let node;
	for (var Btn of fas) {
	  if (Btn == event.target) {
		node = Btn.previousSibling.previousSibling;
	  }
	}
	currentNum = parseInt(node.innerText);
	currentNum += 1;
	node.innerText = `\n\n ${currentNum}`;
	changeDrinkNum();
	changeTotalPrice();
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
  
	// delete
	const deleteBtn = document.createElement("span");
	deleteBtn.id = "deleteBtn";
	deleteBtn.innerText = "X";
	orderPriceDiv.appendChild(deleteBtn);
	delBtnListener();
  
	// quantity
	const quantity = document.createElement("span");
	quantity.id = "quantity";
	quantity.innerText = "\n\n 1";
	spanForName.appendChild(quantity);
  
	bannerImage.style.opacity = 0;
  
	// + -
	const minusIcon = document.createElement("i");
	spanForName.appendChild(minusIcon);
	minusIcon.className = "fas fa-minus-circle";
	const plusIcon = document.createElement("i");
	spanForName.appendChild(plusIcon);
	plusIcon.className = "fas fa-plus-circle";
  
	minusIcon.addEventListener("click", handleMinusIcon);
	plusIcon.addEventListener("click", handlePlusIcon);
  
	// option
	const option = document.createElement("span");
	option.id = "option";
	// option.innerText =
	spanForName.appendChild(option);
  
	// banner
	banner.style.backgroundColor = "lightgray";
	chevronLeft.style.visibility = "visible";
	chevronRight.style.visibility = "visible";
  
	// cart 4개씩
	showCart();
  
	// change footer number
	changeDrinkNum();
	changeTotalPrice();
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
	showCategory("COFFEE(HOT)")
	showMenuPage(0);
	setDisplay(displayNumber);

	navItemLeftBtn.addEventListener("click", minusNum);
	navItemRightBtn.addEventListener("click", plusNum);
	showCategory("COFFEE(HOT)")
	showMenuPage(0);
	setDisplay(displayNumber);
	navItemLeftBtn.addEventListener("click", minusNum);
	navItemRightBtn.addEventListener("click", plusNum);
	nextBtnLeft.addEventListener("click", minusIndex);
	nextBtnRight.addEventListener("click", plusIndex);

	for (var i = 0; i < len; i++) {
		menuPage[i].addEventListener("click", trackItem);
	}

	chevronLeft.addEventListener("click", minusCart);
 	chevronRight.addEventListener("click", plusCart);

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
			input.value = JSON.stringify(orderInfo[key]);
			form.appendChild(input); // add key/value pair to form
		}
		document.body.appendChild(form); // forms cannot be submitted outside of body
		form.submit(); // send the payload and navigate
	})
	//JH******************************************
}
main();
