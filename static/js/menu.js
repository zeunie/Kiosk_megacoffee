const body = document.body;
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
const drinkNum = document.getElementById("drinkNum");
const totalPrice = document.getElementById("totalPrice");
const cancelAll = document.getElementById("cancelAll");
const cancelBtn = document.getElementById("cancelBtn");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const minusBtn = document.getElementById("minusBtn");
const pulsBtn = document.getElementById("plusBtn");
const menuQuantity = document.getElementById("menuQuantity");

const price = document.getElementById("price");
const headerSum = document.getElementById("header_sum");
const footerSum = document.getElementById("footer_sum");
const eachPrice = document.getElementById("eachPrice");

const menuDiv = document.getElementById("menuDiv");
const orderDiv = document.getElementById("orderDiv");
const tableDiv = document.getElementById("tableDiv");

const selected = document.getElementsByClassName("selected");
const decideOrder = document.getElementById("decideOrder");
const decideCancel = document.getElementById("decideCancel");

const payByCard = document.getElementById("card");

const HOW_MANY_TO_SHOW = 12;

let number = 1;
let index = 0;
let len = menuPage.length;
let displayNumber = parseInt((len - 1) / 12);
let shotPrice = 0;
let num;

function minusNum() {
	if (number == 1) {
		return;
	}
	number -= 1;
	if (number == 1) {
		document.getElementById("navItemFirstA").outerHTML = `<a id = "navItemFirstA" href = "#" onclick="showCategory('COFFEE(HOT)')">
			<div class = "nav_item" id = "navItemFirst"> Coffee(HOT)</div></a>`;
		document.getElementById("navItemSecondA").outerHTML = `<a id = "navItemSecondA" href = "#" onclick="showCategory('COFFEE(ICE)')">
			<div class = "nav_item" id = "navItemSecond"> Coffee(ICE)</div></a>`;
		document.getElementById("navItemThirdA").outerHTML = `<a id = "navItemThirdA" href = "#" onclick="showCategory('BEVERAGE')">
			<div class = "nav_item" id = "navItemThird"> BEVERAGE</div></a>`;
		document.getElementById("navItemFourthA").outerHTML = `<a id = "navItemFourthA" href = "#" onclick="showCategory('TEA')">
			<div class = "nav_item" id = "navItemFourth"> TEA</div></a>`;
	}
	showCategory("COFFEE(HOT)");
	showMenuPage(0);
	setDisplay(displayNumber);
}

function plusNum() {
	if (number == 2) {
		return;
	}
	number += 1;

	if (number == 2) {
		document.getElementById("navItemFirstA").outerHTML = `<a id = "navItemFirstA" href = "#" onclick="showCategory('JUICE')">
			<div class = "nav_item" id = "navItemFirst"> JUICE</div></a>`;
		document.getElementById("navItemSecondA").outerHTML = `<a id = "navItemSecondA" href = "#" onclick="showCategory('ADE')">
			<div class = "nav_item" id = "navItemSecond"> ADE</div></a>`;
		document.getElementById("navItemThirdA").outerHTML = `<a id = "navItemThirdA" href = "#" onclick="showCategory('SMOOTHIE')">
			<div class = "nav_item" id = "navItemThird"> SMOOTHIE&FRAFFE</div></a>`;
		document.getElementById("navItemFourthA").outerHTML = `<a id = "navItemFourthA" href = "#" onclick="showCategory('DESSERT')">
			<div class = "nav_item" id = "navItemFourth"> DESSERT</div></a>`;
	}
	showCategory("JUICE");
}

function showCategory(cat) {
	//????????? menuPage??? ?????? ???????????? ?????? ??????????????? ????????? ?????????. ??? ?????? displayNumber??? ??????(0)?????? ??????????????? ??????
	//????????? ????????? ?????? ????????? ????????????, ???????????????(?????????)??? ???????????? ??????
	let count_of_item_in_category = 0;
	for (var i = 0; i < len; i++) {
		menuPage[i].style.display = "none";
		menuPage[i].setAttribute("data-selected", "");
		if (String(menuPage[i].children[3].innerText).includes(cat)) {
			//??? ?????? children[3]?????? 3????????? ??????????????? ?????????????????????. ?????? ????????? ?????? ???????????? ?????? ????????? ?????? ??? ??????
			menuPage[i].setAttribute("data-selected", "selected");
			count_of_item_in_category++;
		}
		// YH : ????????? soldout ???????????? ??????
		if (String(menuPage[i].children[5].innerText).includes('true')) {
			menuPage[i].children[0].src = '/static/picture/soldout.jpg'
		}
	}

	displayNumber = parseInt((count_of_item_in_category - 1) / HOW_MANY_TO_SHOW);
	minusIndex();
	minusIndex();
	showMenuPage(index);
	setDisplay(displayNumber);

	//???????????? ????????? ?????? ?????????
	for (let i = 1; i < 5; i++) {
		const target=document.getElementsByClassName("nav_items")[0].children[i].children[0]
		target.style = "background-color:rgb(157, 162, 167); color:white"
		if (target.innerText.toUpperCase().includes(cat)) {
			target.style = "background-color:white; color:black"
		}
	}
}

function showMenuPage(num) {
	//num????????? ???????????? ?????? ?????? ????????? HOW_MANY_TO_SHOW?????? ????????????
	let count = 0;
	for (var i = 0; i < len; i++) {
		if (menuPage[i].getAttribute("data-selected")) {
			if (
				num * HOW_MANY_TO_SHOW <= count &&
				count < (num + 1) * HOW_MANY_TO_SHOW
			) {
				menuPage[i].style.display = "grid";
			} else {
				menuPage[i].style.display = "none";
			}
			count++;
		}
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
			nextBtnDisplay.innerText = "??? ???";
		}
	}
	if (displayNumber == 2) {
		if (index == 0) {
			showMenuPage(0);
			nextBtnDisplay.innerText = "??? ??? ???";
		}

		if (index == 1) {
			showMenuPage(1);
			nextBtnDisplay.innerText = "??? ??? ???";
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
			nextBtnDisplay.innerText = "??? ???";
		}
	}
	if (displayNumber == 2) {
		if (index == 1) {
			showMenuPage(1);
			nextBtnDisplay.innerText = "??? ??? ???";
		}
		if (index == 2) {
			showMenuPage(2);
			nextBtnDisplay.innerText = "??? ??? ???";
		}
	}
}

function setDisplay(number) {
	if (number == 0) {
		nextBtnDisplay.innerText = "???";
		nextBtnLeft.removeEventListener;
		nextBtnRight.removeEventListener;
	}
	if (number == 1) {
		nextBtnDisplay.innerText = "??? ???";
	}
	if (number == 2) {
		nextBtnDisplay.innerText = "??? ??? ???";
	}
}

function showCart() {
	payByCard.style.pointerEvents = "auto";

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
	let number;
	for (var i = 0; i < cartItems1.length; i++) {
		if (cartItems1[i].style.display != "none") {
			number = parseInt(parseInt(i / 3) / 4);
			break;
		}
	}
	if (number == 0) return;
	number -= 1;
	for (var i = 0; i < cartItems1.length; i++) {
		if (parseInt(parseInt(i / 3) / 4) != number) {
			cartItems1[i].style.display = "none";
		} else {
			cartItems1[i].style.display = "";
		}
	}
	for (var i = 0; i < cartItems2.length; i++) {
		if (parseInt(parseInt(i / 2) / 4) != number) {
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
	let number;
	for (var i = 0; i < cartItems1.length; i++) {
		if (cartItems1[i].style.display != "none") {
			number = parseInt(parseInt(i / 3) / 4);
			break;
		}
	}
	if (number == lastPage) return;
	number += 1;
	for (var i = 0; i < cartItems1.length; i++) {
		if (parseInt(parseInt(i / 3) / 4) != number) {
			cartItems1[i].style.display = "none";
		} else {
			cartItems1[i].style.display = "";
		}
	}
	for (var i = 0; i < cartItems2.length; i++) {
		if (parseInt(parseInt(i / 2) / 4) != number) {
			cartItems2[i].style.display = "none";
		} else {
			cartItems2[i].style.display = "";
		}
	}
}

function changeDrinkNum() {
	const quantity = document.querySelectorAll("#cartQuantity");
	sum = 0;
	for (var i = 0; i < quantity.length; i++) {
		sum += parseInt(quantity[i].innerText);
	}
	drinkNum.innerHTML = sum;
}
function changeTotalPrice() {
	const quantity = document.querySelectorAll("#cartQuantity");
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
			payByCard.style.pointerEvents = "none";
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

function addMenu(src, name, price, itemNumber, itemOption1, itemOption2) {
	const spanForName = document.createElement("span");
	spanForName.id = "orderName";
	spanForName.innerText = name;
	orderNameDiv.appendChild(spanForName);
	const spanForPrice = document.createElement("span");
	spanForPrice.id = "orderPrice";
	spanForPrice.innerText = price.toLocaleString("en").split(".")[0];
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
	const cartQuantity = document.createElement("span");
	cartQuantity.id = "cartQuantity";

	if (itemNumber) {
		cartQuantity.innerText = `\n\n ${itemNumber}`;
	} else {
		cartQuantity.innerText = "\n\n 1";
	}
	spanForName.appendChild(cartQuantity);

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
	spanForName.appendChild(option);
	if (itemOption1 == 0) {
		option.innerText = "+????????? 1???";
	} else if (itemOption1 == 1) {
		option.innerText = "+????????? 2???";
	} else if (itemOption1 == 2) {
		option.innerText = "+?????????";
	} else if (itemOption1 == 3) {
		option.innerText = "??????O";
	} else if (itemOption1 == 4) {
		option.innerText = "??????X";
	} else if (itemOption1 == 5 && itemOption2 == 0) {
		option.innerText = "+????????? 1??? ??????O";
	} else if (itemOption1 == 5 && itemOption2 == 1) {
		option.innerText = "+????????? 1??? ??????X";
	} else if (itemOption1 == 6 && itemOption2 == 0) {
		option.innerText = "+????????? 2??? ??????O";
	} else if (itemOption1 == 6 && itemOption2 == 1) {
		option.innerText = "+????????? 2??? ??????X";
	} else if (itemOption1 == 7 && itemOption2 == 0) {
		option.innerText = "??????O";
	} else if (itemOption1 == 7 && itemOption2 == 1) {
		option.innerText = "+??????X";
	} else if (itemOption1 == 8 && itemOption2 == 2) {
		option.innerText = "+????????? 1??? ?????????O";
	} else if (itemOption1 == 8 && itemOption2 == 3) {
		option.innerText = "+????????? 1??? ?????????X";
	} else if (itemOption1 == 9 && itemOption2 == 2) {
		option.innerText = "+????????? 2??? ?????????O";
	} else if (itemOption1 == 9 && itemOption2 == 3) {
		option.innerText = "+????????? 2??? ?????????X";
	} else if (itemOption1 == 10 && itemOption2 == 2) {
		option.innerText = "?????????O";
	} else if (itemOption1 == 10 && itemOption2 == 3) {
		option.innerText = "?????????X";
	}

	// banner
	banner.style.backgroundColor = "lightgray";
	chevronLeft.style.visibility = "visible";
	chevronRight.style.visibility = "visible";

	// cart 4??????
	showCart();

	// change footer number
	changeDrinkNum();
	changeTotalPrice();
}

function handleDecideCancel() {
	menuDiv.style.visibility = "visible";
	orderDiv.style.visibility = "hidden";
}
// ?????? ??????, ?????? ??????
function handleDecideOrder() {
	const drinkImg = document.getElementsByClassName("drinkImg");
	const menuName = document.getElementById("menuName");
	src = drinkImg[0].src;
	name = menuName.innerText;
	itemPrice = parseInt(footerSum.innerText.split(",").join(""));
	itemQuantity = parseInt(menuQuantity.innerText);
	itemPrice = itemPrice / itemQuantity;
	let itemOption1;
	let itemOption2;
	const onlyShot = document.getElementsByClassName("onlyShot");
	const onlyCream = document.getElementsByClassName("onlyCream");
	const shotCream1 = document.getElementsByClassName("shotCream_shot");
	const shotCream2 = document.getElementsByClassName("shotCream_cream");
	const shotCinnamon1 = document.getElementsByClassName("shotCinnamon_shot");
	const shotCinnamon2 = document.getElementsByClassName(
		"shotCinnamon_cinnamon"
	);

	if (onlyShot) {
		for (var i = 0; i < 3; i++) {
			if (onlyShot[i] == selected[0]) {
				itemOption1 = i;
				break;
			}
		}
	}

	if (onlyCream) {
		for (var i = 0; i < 2; i++) {
			if (onlyCream[i] == selected[0]) {
				itemOption1 = i + 3;
				break;
			}
		}
	}

	if (shotCream1) {
		for (var i = 0; i < 3; i++) {
			if (shotCream1[i] == selected[0]) {
				itemOption1 = i + 5;
				// break;
			}
		}
		for (var i = 0; i < 2; i++) {
			if (shotCream2[i] == selected[1]) {
				itemOption2 = i;
				break;
			}
		}
	}

	if (shotCinnamon1) {
		for (var i = 0; i < 3; i++) {
			if (shotCinnamon1[i] == selected[0]) {
				itemOption1 = i + 8;
				break;
			}
		}
		for (var i = 0; i < 2; i++) {
			if (shotCinnamon2[i] == selected[1]) {
				itemOption2 = i + 2;
				break;
			}
		}
	}

	menuDiv.style.visibility = "visible";
	orderDiv.style.visibility = "hidden";
	addMenu(src, name, itemPrice, itemQuantity, itemOption1, itemOption2);
}

function setting(src, name, itemPrice) {
	const drinkImg = document.getElementsByClassName("drinkImg");
	const menuName = document.getElementById("menuName");
	drinkImg[0].src = src;
	menuName.innerText = name;
	eachPrice.innerText = `?????? ${itemPrice}`;
	footerSum.innerText = itemPrice;
	headerSum.innerText = itemPrice;
	// ?????? ?????????
	menuQuantity.innerText = "1";
	decideCancel.addEventListener("click", handleDecideCancel);
	decideOrder.addEventListener("click", handleDecideOrder);
	chevronLeft.style.visibility = "hidden";
	chevronRight.style.visibility = "hidden";
	shotPrice = 0;
}

function goToOnlyShot() {
	menuDiv.style.visibility = "hidden";
	orderDiv.style.visibility = "visible";
	tableDiv.innerHTML =
		'<table id="onlyShot"><tbody><tr><td class="onlyShot_topping">?????????</td><td class="onlyShot">?????????1???<br>(+ 500)</td><td class="onlyShot">?????????2???<br>(+ 1,000)</td><td class="onlyShot">?????????</td><td class="onlyShot selected">????????????</td></tr></tbody></table>';
	const onlyShot = document.getElementsByClassName("onlyShot");
	for (var Btn of onlyShot) {
		Btn.addEventListener("click", handleOnlyShot);
	}
}

function goToOnlyCream() {
	menuDiv.style.visibility = "hidden";
	orderDiv.style.visibility = "visible";
	tableDiv.innerHTML =
		'<table id="onlyCream"><tbody><tr><td class="onlyCream_topping">??????</td><td class="onlyCream">??????O</td><td class="onlyCream selected">??????X</td></tr></tbody></table>';
	const onlyCream = document.getElementsByClassName("onlyCream");
	for (var Btn of onlyCream) {
		Btn.addEventListener("click", handleOnlyCream);
	}
}
function goToShotCream() {
	menuDiv.style.visibility = "hidden";
	orderDiv.style.visibility = "visible";
	tableDiv.innerHTML =
		'<table id="shotCream"><tbody><tr class="first"><td class="shotCream_shot_topping">??????</td><td class="shotCream_shot">?????????1???<br>(+ 500)</td><td class="shotCream_shot">?????????2???<br>(+ 1,000)</td><td class="shotCream_shot selected">????????????</td></tr><tr><td class="shotCream_cream_topping">??????2</td><td class="shotCream_cream">??????O</td><td class="shotCream_cream selected">??????X</td></tr></tbody></table>';
	const shotCream1 = document.getElementsByClassName("shotCream_shot");
	const shotCream2 = document.getElementsByClassName("shotCream_cream");
	for (var Btn of shotCream1) {
		Btn.addEventListener("click", handleShotCream1);
	}
	for (var Btn of shotCream2) {
		Btn.addEventListener("click", handleShotCream2);
	}
}
function goToShotCinnamon() {
	menuDiv.style.visibility = "hidden";
	orderDiv.style.visibility = "visible";
	tableDiv.innerHTML =
		'<table id="shotCinnamon"><tbody><tr class="first"><td class="shotCinnamon_shot_topping">??????</td><td class="shotCinnamon_shot">?????????1???<br>(+ 500)</td><td class="shotCinnamon_shot">?????????2???<br>(+ 1,000)</td><td class="shotCinnamon_shot selected">????????????</td></tr><tr><td class="shotCinnamon_cinnamon_topping">??????2</td><td class="shotCinnamon_cinnamon">?????????O</td><td class="shotCinnamon_cinnamon selected">?????????X</td></tr></tbody></table>';
	const shotCinnamon1 = document.getElementsByClassName("shotCinnamon_shot");
	const shotCinnamon2 = document.getElementsByClassName(
		"shotCinnamon_cinnamon"
	);
	for (var Btn of shotCinnamon1) {
		Btn.addEventListener("click", handleShotCinnamon1);
	}
	for (var Btn of shotCinnamon2) {
		Btn.addEventListener("click", handleShotCinnamon2);
	}
}

function trackItem() {
	html = this.innerHTML;
	console.log(html);
	src = html.split('"')[3];
	name = html.split(">")[2];
	name = name.split("<")[0];
	itemPrice = html.split(">")[4];
	itemPrice = itemPrice.split("<")[0];
	prop = html.split(">")[8];
	prop = prop.split("<")[0];
	soldout = html.split('>')[10].split('<')[0];

	if (soldout == " true") {
		alert('????????? ???????????????.')
		return
	}
	if (prop == "true,false,false") {
		goToOnlyShot();
		setting(src, name, itemPrice);
		return;
	} else if (prop == "false,true,false") {
		goToOnlyCream();
		setting(src, name, itemPrice);
		return;
	} else if (prop == "true,true,false") {
		goToShotCream();
		setting(src, name, itemPrice);
		return;
	} else if (prop == "true,false,true") {
		goToShotCinnamon();
		setting(src, name, itemPrice);
		return;
	}
	addMenu(src, name, itemPrice);
}

function handleOnlyShot(event) {
	const onlyShot = document.getElementsByClassName("onlyShot");
	for (var Btn of onlyShot) {
		Btn.className = "onlyShot";
		sum = parseInt(footerSum.innerText.split(",").join(""));
		if (Btn == event.target) {
			Btn.classList.add("selected");
			num = parseInt(menuQuantity.innerText);
			if (Btn == onlyShot[0]) {
				sum -= shotPrice * num;
				shotPrice = 500;
				footerSum.innerText = (sum + shotPrice * num)
					.toLocaleString("en")
					.split(".")[0];
			} else if (Btn == onlyShot[1]) {
				sum -= shotPrice * num;
				shotPrice = 1000;
				footerSum.innerText = (sum + shotPrice * num)
					.toLocaleString("en")
					.split(".")[0];
			} else {
				sum -= shotPrice * num;
				footerSum.innerText = sum.toLocaleString("en").split(".")[0];
				shotPrice = 0;
			}
		}
	}
}

function handleOnlyCream(event) {
	const onlyCream = document.getElementsByClassName("onlyCream");

	for (var Btn of onlyCream) {
		Btn.className = "onlyCream";
		if (Btn == event.target) {
			Btn.classList.add("selected");
		}
	}
}

function handleShotCream1(event) {
	const shotCream1 = document.getElementsByClassName("shotCream_shot");

	for (var Btn of shotCream1) {
		Btn.className = "shotCream_shot";
		sum = parseInt(footerSum.innerText.split(",").join(""));
		if (Btn == event.target) {
			Btn.classList.add("selected");
			num = parseInt(menuQuantity.innerText);
			if (Btn == shotCream1[0]) {
				sum -= shotPrice * num;
				shotPrice = 500;
				footerSum.innerText = (sum + shotPrice * num)
					.toLocaleString("en")
					.split(".")[0];
			} else if (Btn == shotCream1[1]) {
				sum -= shotPrice * num;
				shotPrice = 1000;
				footerSum.innerText = (sum + shotPrice * num)
					.toLocaleString("en")
					.split(".")[0];
			} else {
				sum -= shotPrice * num;
				footerSum.innerText = sum.toLocaleString("en").split(".")[0];
				shotPrice = 0;
			}
		}
	}
}

function handleShotCream2(event) {
	const shotCream2 = document.getElementsByClassName("shotCream_cream");
	for (var Btn of shotCream2) {
		Btn.className = "shotCream_cream";
		if (Btn == event.target) {
			Btn.classList.add("selected");
		}
	}
}

function handleShotCinnamon1(event) {
	const shotCinnamon1 = document.getElementsByClassName("shotCinnamon_shot");
	for (var Btn of shotCinnamon1) {
		Btn.className = "shotCinnamon_shot";
		sum = parseInt(footerSum.innerText.split(",").join(""));
		if (Btn == event.target) {
			Btn.classList.add("selected");
			num = parseInt(menuQuantity.innerText);
			if (Btn == shotCinnamon1[0]) {
				sum -= shotPrice * num;
				shotPrice = 500;
				footerSum.innerText = (sum + shotPrice * num)
					.toLocaleString("en")
					.split(".")[0];
			} else if (Btn == shotCinnamon1[1]) {
				sum -= shotPrice * num;
				shotPrice = 1000;
				footerSum.innerText = (sum + shotPrice * num)
					.toLocaleString("en")
					.split(".")[0];
			} else {
				sum -= shotPrice * num;
				footerSum.innerText = sum.toLocaleString("en").split(".")[0];
				shotPrice = 0;
			}
		}
	}
}

function handleShotCinnamon2(event) {
	const shotCinnamon2 = document.getElementsByClassName(
		"shotCinnamon_cinnamon"
	);
	for (var Btn of shotCinnamon2) {
		Btn.className = "shotCinnamon_cinnamon";
		if (Btn == event.target) {
			Btn.classList.add("selected");
		}
	}
}

function handleMinusBtn() {
	if (menuQuantity.innerText == 1) return;
	num = parseInt(menuQuantity.innerText) - 1;
	menuQuantity.innerText = num;
	nowPrice = parseInt(eachPrice.innerHTML.split(" ")[1].split(",").join(""));
	newPrice = (nowPrice * num).toLocaleString("en").split(".")[0];
	newPriceWithCream = ((nowPrice + shotPrice) * num).toLocaleString("en").split(".")[0];
	// price.innerText = `?????? ${newPrice}`;
	headerSum.innerText = newPrice;
	footerSum.innerText = newPriceWithCream;
}

function handlePlusBtn() {
	num = parseInt(menuQuantity.innerText) + 1;
	menuQuantity.innerText = num;
	nowPrice = parseInt(eachPrice.innerHTML.split(" ")[1].split(",").join(""));
	newPrice = (nowPrice * num).toLocaleString("en").split(".")[0];
	newPriceWithCream = ((nowPrice + shotPrice) * num)
		.toLocaleString("en")
		.split(".")[0];
	// price.innerText = `?????? ${newPrice}`;
	headerSum.innerText = newPrice;
	footerSum.innerText = newPriceWithCream;
}

function handleCancelAll() {
	cancelBtn.style.visibility = "visible";
	cancelBtn.style.position = "relative";
	cancelBtn.style.top = "-400px";
	body.style.pointerEvents = "none";
	cancelBtn.style.pointerEvents = "auto";
}

function handleYesBtn() {
	window.location.href = "/";
}

function handleNoBtn() {
	cancelBtn.style.visibility = "hidden";
	body.style.pointerEvents = "auto";
}

function main() {
	showCategory("COFFEE(HOT)");
	showMenuPage(0);
	setDisplay(displayNumber);

	navItemLeftBtn.addEventListener("click", minusNum);
	navItemRightBtn.addEventListener("click", plusNum);
	showCategory("COFFEE(HOT)");
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

	pulsBtn.addEventListener("click", handlePlusBtn);
	minusBtn.addEventListener("click", handleMinusBtn);

	cancelAll.addEventListener("click", handleCancelAll);
	noBtn.addEventListener("click", handleNoBtn);
	yesBtn.addEventListener("click", handleYesBtn);

	//JH   ?????? ?????? ??? ????????? ?????? ????????? JSON?????? ???????????????
	payByCard.addEventListener("click", () => {

		if (bannerImage.style.opacity == 1) {
			payByCard.style.pointerEvents = "none";
		}
		else {
			payByCard.style.pointerEvents = "auto";
		}

		//?????? ?????? ??????????????? ??????????????? ????????? ???????????? ??????????????? ????????????.

		let store = JSON.parse(new Store_adapter().getStoreInfo())
		store.orderNum++;// ????????? ??????????????? ??????????????? orderNum??? ????????? ???????????? ???????????? storeInfo??? ????????????????????? ?????? ????????? orderNum??? storeInfo??? ?????? ?????? shoppingcart??? ????????? ?????? ??? ??? ??????
		if (store.orderNum % 100 == 0) {
			store.orderNum -= 100
		}
		new Store_adapter().setStoreInfo(store)
		const takeout = (new URLSearchParams(window.location.search).get("takeout") == "true") ? true : false;

		const shoppingCart = new ShoppingCart(store.id, store.orderNum, takeout);

		const itemLength = document.querySelectorAll("#cartQuantity").length;
		for (let i = 0; i < itemLength; i++) {
			//??????, ??????, ?????? ????????????
			const itemQuantity = parseInt(document.querySelectorAll("#cartQuantity")[i].innerText);
			const itemPrice = parseInt(document.querySelectorAll("#orderPrice")[i].innerText.split(",").join(""));
			let itemName = document.querySelectorAll("#orderName")[i].innerText
			itemName = itemName.slice(0, itemName.indexOf("\n"))
			if (itemName.indexOf("??????") != -1) {
				itemName = itemName.slice(0, itemName.length - 4)
			} if (itemName.indexOf("?????????") != -1) {
				itemName = itemName.slice(0, itemName.length - 4)
			}
			if (itemName.indexOf("+") != -1) {
				itemName = itemName.slice(0, itemName.length - 4)
			}
			if (itemName[itemName.length - 1] == ' ') {
				itemName = itemName.slice(0, itemName.length - 1)
			}


			//?????? ??????
			const itemOptionText = orderNameDiv.children[i].innerText
			let itemShot = 0;//??? ??????
			const shotIndex = itemOptionText.indexOf("?????????");
			if (-1 < shotIndex)// ?????? +1~2
				itemShot = parseInt(itemOptionText[shotIndex + 4]);
			else if (-1 < itemOptionText.indexOf("?????????")) //??? ?????????
				itemShot = -1;

			const itemCream = (itemOptionText.indexOf("??????O") != -1)
			const itemCinnamon = (itemOptionText.indexOf("?????????O") != -1)

			//?????? ??????
			shoppingCart.insertOrder(new Menu("", itemName, itemPrice, itemQuantity, "", itemShot, itemCream, itemCinnamon).getValue())
		}

		let orderInfo = shoppingCart.constructOrderList()

		let form = document.createElement("form");
		form.style.visibility = "hidden"; // no user interaction is necessary
		form.method = "POST"; // forms by default use GET query strings
		form.action = "/check";
		var input = document.createElement("input");
		input.name = "orderList";
		input.value = JSON.stringify(orderInfo);
		form.appendChild(input); // add key/value pair to form
		document.body.appendChild(form); // forms cannot be submitted outside of body
		form.submit(); // send the payload and navigate
	});
	//JH******************************************
}

main();