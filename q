[1mdiff --git a/app.js b/app.js[m
[1mindex 219e3ee..d68bae6 100644[m
[1m--- a/app.js[m
[1m+++ b/app.js[m
[36m@@ -1,32 +1,22 @@[m
[31m-import express from "express";[m
[31m-import { localsMiddleware } from "./middleware";[m
[31m-import { coffeeHot, coffeeIce } from "./fakedb";[m
[31m-import routes from "./routes";[m
[32m+[m[32mconst express = require("express")[m
[32m+[m[32mconst bodyParser = require('body-parser')[m
[32m+[m[32mconst localsMiddleware=require("./middleware")[m
 [m
[31m-const app = express();[m
[31m-const PORT = 4000;[m
[32m+[m[32mconst app = express()[m
[32m+[m[32mconst PORT = 4000[m
 [m
[31m-app.set("view engine", "pug");[m
[31m-app.use("/static", express.static("static"));[m
[31m-app.use(localsMiddleware);[m
[32m+[m[32mapp.use(bodyParser.urlencoded({ extended: true }))[m
[32m+[m[32mapp.use(bodyParser.json());[m
[32m+[m[32mapp.use(localsMiddleware.localsMiddleware)[m
[32m+[m[32mapp.set("view engine", "pug")[m
[32m+[m[32mapp.use("/static", express.static("static"))[m
 [m
[31m-app.listen(PORT);[m
[31m-[m
[31m-const handleCover = (req, res) => res.render("cover");[m
[31m-[m
[31m-const handleCoffeeHot = (req, res) => {[m
[31m-  res.render("coffeeHot", {[m
[31m-    coffeeHot,[m
[31m-  });[m
[31m-};[m
[31m-const handleCoffeeIce = (req, res) => {[m
[31m-  res.render("coffeeIce", { coffeeIce });[m
[31m-};[m
[31m-const handleAmericano = (req, res) => {[m
[31m-  res.render("americano");[m
[32m+[m[32mconst partials = {[m
[32m+[m[32m    header: 'partials/header',[m
[32m+[m[32m    footer: 'partials/footer'[m
 };[m
[32m+[m[32mrequire('./routes')(app, partials)[m
 [m
[31m-app.get(routes.cover, handleCover);[m
[31m-app.get(routes.coffeeHot, handleCoffeeHot);[m
[31m-app.get(routes.coffeeIce, handleCoffeeIce);[m
[31m-app.get(routes.americano, handleAmericano);[m
[32m+[m[32mapp.listen(PORT, () => {[m
[32m+[m[32m    console.log(`[${Date()}]\nTEAM13 SERVER RUNNING...\thttp://127.0.0.1:${PORT}`)[m
[32m+[m[32m})[m
\ No newline at end of file[m
[1mdiff --git a/middleware.js b/middleware.js[m
[1mindex 258348f..cf70b31 100644[m
[1m--- a/middleware.js[m
[1m+++ b/middleware.js[m
[36m@@ -1,6 +1,6 @@[m
 import routes from "./routes";[m
 [m
 export const localsMiddleware = (req, res, next) => {[m
[31m-  res.locals.routes = routes;[m
[31m-  next();[m
[31m-};[m
[32m+[m	[32mres.locals.routes = routes[m
[32m+[m	[32mnext()[m
[32m+[m[32m}[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 06da778..18e27df 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -9,6 +9,7 @@[m
     "@babel/core": "^7.12.3",[m
     "@babel/node": "^7.12.1",[m
     "@babel/preset-env": "^7.12.1",[m
[32m+[m[32m    "body-parser": "^1.19.0",[m
     "express": "^4.17.1",[m
     "nodemon": "^2.0.6",[m
     "pug": "^3.0.0"[m
[1mdiff --git a/routes.js b/routes.js[m
[1mindex 2088c45..65424c5 100644[m
[1m--- a/routes.js[m
[1m+++ b/routes.js[m
[36m@@ -1,25 +1,47 @@[m
[31m-const COVER = "/";[m
[31m-const COFFEEHOT = "/coffeeHot";[m
[31m-const COFFEEICE = "/coffeeIce";[m
[31m-const BEVERAGE = "/beverage";[m
[31m-const TEA = "/tea";[m
[31m-const JUICE = "/juice";[m
[31m-const ADE = "/ade";[m
[31m-const SMOOTHIEFRAFFE = "/smoothieFraffe";[m
[31m-const DESSERT = "/dessert";[m
[31m-const AMERICANO = "/americano";[m
[32m+[m[32mmodule.exports = (app, partials) => {[m
[32m+[m	[32mapp.get(routes.cover, (req, res) => {[m
[32m+[m		[32mres.render("cover", { routes })[m
[32m+[m	[32m})[m
[32m+[m	[32mapp.get(routes.coffeeHot, (req, res) => {[m
[32m+[m		[32mres.render("coffeeHot", { coffeeHot, routes })[m
[32m+[m	[32m})[m
[32m+[m	[32mapp.get(routes.coffeeIce, (req, res) => {[m
[32m+[m		[32mres.render("coffeeIce", { routes, coffeeIce })[m
[32m+[m	[32m})[m
[32m+[m	[32mapp.get(routes.americano, (req, res) => {[m
[32m+[m		[32mres.render("americano", { routes })[m
[32m+[m	[32m})[m
[32m+[m
[32m+[m	[32m//JH ������û���� ���۵� json �ޱ�[m
[32m+[m	[32mapp.post(routes.order, (req, res) => {[m
[32m+[m		[32mconsole.log(req.body)[m
[32m+[m		[32mconst order=req.body[m
[32m+[m		[32mlet amount = 0[m
[32m+[m		[32mfor (var it of order["order_list"]) {[m
[32m+[m			[32mamount+=it["item_price"][m
[32m+[m		[32m}[m
[32m+[m		[32morder["total_price"] = amount[m
[32m+[m		[32morder["total_quantity"] = order["order_list"].length[m
[32m+[m
[32m+[m		[32mres.send(JSON.stringify(order))[m
[32m+[m	[32m})[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mimport { coffeeHot, coffeeIce } from "./fakedb"[m
 [m
 const routes = {[m
[31m-  cover: COVER,[m
[31m-  coffeeHot: COFFEEHOT,[m
[31m-  coffeeIce: COFFEEICE,[m
[31m-  beverage: BEVERAGE,[m
[31m-  tea: TEA,[m
[31m-  juice: JUICE,[m
[31m-  ade: ADE,[m
[31m-  smoothieFraffe: SMOOTHIEFRAFFE,[m
[31m-  dessert: DESSERT,[m
[31m-  americano: AMERICANO,[m
[31m-};[m
[32m+[m	[32mcover: "/",[m
[32m+[m	[32mcoffeeHot: "/coffeeHot",[m
[32m+[m	[32mcoffeeIce: "/coffeeIce",[m
[32m+[m	[32mbeverage: "/beverage",[m
[32m+[m	[32mtea: "/tea",[m
[32m+[m	[32mjuice: "/juice",[m
[32m+[m	[32made: "/ade",[m
[32m+[m	[32msmoothieFraffe: "/smoothieFraffe",[m
[32m+[m	[32mdessert: "/dessert",[m
[32m+[m	[32mamericano: "/americano",[m
[32m+[m
[32m+[m	[32morder: "/order",[m
[32m+[m[32m}[m
 [m
[31m-export default routes;[m
[32m+[m[32mexport default routes[m
[1mdiff --git a/static/js/menu.js b/static/js/menu.js[m
[1mindex e7b5b0f..32fb673 100644[m
[1m--- a/static/js/menu.js[m
[1m+++ b/static/js/menu.js[m
[36m@@ -13,6 +13,7 @@[m [mconst bannerImage = document.getElementById("bannerImage");[m
 const item = document.getElementById("item");[m
 const orderNameDiv = document.getElementById("orderNameDiv");[m
 const orderPriceDiv = document.getElementById("orderPriceDiv");[m
[32m+[m[32mconst payByCard = document.getElementById("card");[m
 [m
 let num = 1;[m
 let index = 0;[m
[36m@@ -20,136 +21,156 @@[m [mlet len = menuPage.length;[m
 let displayNumber = parseInt((len - 1) / 12);[m
 [m
 function minusNum() {[m
[31m-  if (num == 1) {[m
[31m-    return;[m
[31m-  }[m
[31m-  num -= 1;[m
[31m-  if (num == 1) {[m
[31m-    navItemFirst.innerHTML = '<a href="/coffeeHot">Coffee(HOT)</a>';[m
[31m-    navItemSecond.innerHTML = '<a href="/coffeeIce">Coffee(ICE)</a>';[m
[31m-    navItemThird.innerText = "BEVERAGE";[m
[31m-    navItemFourth.innerText = "TEA";[m
[31m-  }[m
[32m+[m	[32mif (num == 1) {[m
[32m+[m		[32mreturn;[m
[32m+[m	[32m}[m
[32m+[m	[32mnum -= 1;[m
[32m+[m	[32mif (num == 1) {[m
[32m+[m		[32mnavItemFirst.innerHTML = '<a href="/coffeeHot">Coffee(HOT)</a>';[m
[32m+[m		[32mnavItemSecond.innerHTML = '<a href="/coffeeIce">Coffee(ICE)</a>';[m
[32m+[m		[32mnavItemThird.innerText = "BEVERAGE";[m
[32m+[m		[32mnavItemFourth.innerText = "TEA";[m
[32m+[m	[32m}[m
 }[m
 function plusNum() {[m
[31m-  if (num == 2) {[m
[31m-    return;[m
[31m-  }[m
[31m-  num += 1;[m
[32m+[m	[32mif (num == 2) {[m
[32m+[m		[32mreturn;[m
[32m+[m	[32m}[m
[32m+[m	[32mnum += 1;[m
 [m
[31m-  if (num == 2) {[m
[31m-    navItemFirst.innerText = "JUICE";[m
[31m-    navItemSecond.innerText = "ADE";[m
[31m-    navItemThird.innerText = "SMOOTHIE&FRAFFE";[m
[31m-    navItemFourth.innerText = "DESSERT";[m
[31m-  }[m
[32m+[m	[32mif (num == 2) {[m
[32m+[m		[32mnavItemFirst.innerText = "JUICE";[m
[32m+[m		[32mnavItemSecond.innerText = "ADE";[m
[32m+[m		[32mnavItemThird.innerText = "SMOOTHIE&FRAFFE";[m
[32m+[m		[32mnavItemFourth.innerText = "DESSERT";[m
[32m+[m	[32m}[m
 }[m
 [m
 function showMenuPage(num) {[m
[31m-  for (var i = 0; i < len; i++) {[m
[31m-    menuPage[i].style.display = "none";[m
[31m-    if (parseInt(i / 12) == num) menuPage[i].style.display = "grid";[m
[31m-  }[m
[32m+[m	[32mfor (var i = 0; i < len; i++) {[m
[32m+[m		[32mmenuPage[i].style.display = "none";[m
[32m+[m		[32mif (parseInt(i / 12) == num) menuPage[i].style.display = "grid";[m
[32m+[m	[32m}[m
 }[m
 [m
 function minusIndex() {[m
[31m-  if (index == 0) {[m
[31m-    return;[m
[31m-  }[m
[31m-  index -= 1;[m
[31m-  if (displayNumber == 1) {[m
[31m-    if (index == 0) {[m
[31m-      showMenuPage(0);[m
[31m-      nextBtnDisplay.innerText = "● ○";[m
[31m-    }[m
[31m-  }[m
[31m-  if (displayNumber == 2) {[m
[31m-    if (index == 0) {[m
[31m-      showMenuPage(0);[m
[31m-      nextBtnDisplay.innerText = "● ○ ○";[m
[31m-    }[m
[32m+[m	[32mif (index == 0) {[m
[32m+[m		[32mreturn;[m
[32m+[m	[32m}[m
[32m+[m	[32mindex -= 1;[m
[32m+[m	[32mif (displayNumber == 1) {[m
[32m+[m		[32mif (index == 0) {[m
[32m+[m			[32mshowMenuPage(0);[m
[32m+[m			[32mnextBtnDisplay.innerText = "● ○";[m
[32m+[m		[32m}[m
[32m+[m	[32m}[m
[32m+[m	[32mif (displayNumber == 2) {[m
[32m+[m		[32mif (index == 0) {[m
[32m+[m			[32mshowMenuPage(0);[m
[32m+[m			[32mnextBtnDisplay.innerText = "● ○ ○";[m
[32m+[m		[32m}[m
 [m
[31m-    if (index == 1) {[m
[31m-      showMenuPage(1);[m
[31m-      nextBtnDisplay.innerText = "○ ● ○";[m
[31m-    }[m
[31m-  }[m
[32m+[m		[32mif (index == 1) {[m
[32m+[m			[32mshowMenuPage(1);[m
[32m+[m			[32mnextBtnDisplay.innerText = "○ ● ○";[m
[32m+[m		[32m}[m
[32m+[m	[32m}[m
 }[m
 [m
 function plusIndex() {[m
[31m-  if (index == 2) {[m
[31m-    return;[m
[31m-  }[m
[31m-  index += 1;[m
[31m-  if (displayNumber == 1) {[m
[31m-    if (index == 1) {[m
[31m-      showMenuPage(1);[m
[31m-      nextBtnDisplay.innerText = "○ ●";[m
[31m-    }[m
[31m-  }[m
[31m-  if (displayNumber == 2) {[m
[31m-    if (index == 1) {[m
[31m-      showMenuPage(1);[m
[31m-      nextBtnDisplay.innerText = "○ ● ○";[m
[31m-    }[m
[31m-    if (index == 2) {[m
[31m-      showMenuPage(2);[m
[31m-      nextBtnDisplay.innerText = "○ ○ ●";[m
[31m-    }[m
[31m-  }[m
[32m+[m	[32mif (index == 2) {[m
[32m+[m		[32mreturn;[m
[32m+[m	[32m}[m
[32m+[m	[32mindex += 1;[m
[32m+[m	[32mif (displayNumber == 1) {[m
[32m+[m		[32mif (index == 1) {[m
[32m+[m			[32mshowMenuPage(1);[m
[32m+[m			[32mnextBtnDisplay.innerText = "○ ●";[m
[32m+[m		[32m}[m
[32m+[m	[32m}[m
[32m+[m	[32mif (displayNumber == 2) {[m
[32m+[m		[32mif (index == 1) {[m
[32m+[m			[32mshowMenuPage(1);[m
[32m+[m			[32mnextBtnDisplay.innerText = "○ ● ○";[m
[32m+[m		[32m}[m
[32m+[m		[32mif (index == 2) {[m
[32m+[m			[32mshowMenuPage(2);[m
[32m+[m			[32mnextBtnDisplay.innerText = "○ ○ ●";[m
[32m+[m		[32m}[m
[32m+[m	[32m}[m
 }[m
 [m
 function setDisplay(num) {[m
[31m-  if (num == 0) {[m
[31m-    nextBtnDisplay.innerText = "●";[m
[31m-    nextBtnLeft.removeEventListener;[m
[31m-    nextBtnRight.removeEventListener;[m
[31m-  }[m
[31m-  if (num == 1) {[m
[31m-    nextBtnDisplay.innerText = "● ○";[m
[31m-  }[m
[31m-  if (num == 2) {[m
[31m-    nextBtnDisplay.innerText = "● ○ ○";[m
[31m-  }[m
[32m+[m	[32mif (num == 0) {[m
[32m+[m		[32mnextBtnDisplay.innerText = "●";[m
[32m+[m		[32mnextBtnLeft.removeEventListener;[m
[32m+[m		[32mnextBtnRight.removeEventListener;[m
[32m+[m	[32m}[m
[32m+[m	[32mif (num == 1) {[m
[32m+[m		[32mnextBtnDisplay.innerText = "● ○";[m
[32m+[m	[32m}[m
[32m+[m	[32mif (num == 2) {[m
[32m+[m		[32mnextBtnDisplay.innerText = "● ○ ○";[m
[32m+[m	[32m}[m
 }[m
 [m
 function addMenu(src, name, price) {[m
[31m-  const spanForName = document.createElement("span");[m
[31m-  spanForName.id = "orderName";[m
[31m-  spanForName.innerText = name;[m
[31m-  orderNameDiv.appendChild(spanForName);[m
[31m-  const spanForPrice = document.createElement("span");[m
[31m-  spanForPrice.id = "orderPrice";[m
[31m-  spanForPrice.innerText = price;[m
[31m-  orderPriceDiv.appendChild(spanForPrice);[m
[31m-  const drinkImg = document.createElement("img");[m
[31m-  drinkImg.id = "orderDrink";[m
[31m-  drinkImg.src = src;[m
[31m-  spanForPrice.appendChild(drinkImg);[m
[31m-  banner.style.backgroundColor = "lightgray";[m
[31m-  bannerImage.style.opacity = 0;[m
[32m+[m	[32mconst spanForName = document.createElement("span");[m
[32m+[m	[32mspanForName.id = "orderName";[m
[32m+[m	[32mspanForName.innerText = name;[m
[32m+[m	[32morderNameDiv.appendChild(spanForName);[m
[32m+[m	[32mconst spanForPrice = document.createElement("span");[m
[32m+[m	[32mspanForPrice.id = "orderPrice";[m
[32m+[m	[32mspanForPrice.innerText = price;[m
[32m+[m	[32morderPriceDiv.appendChild(spanForPrice);[m
[32m+[m	[32mconst drinkImg = document.createElement("img");[m
[32m+[m	[32mdrinkImg.id = "orderDrink";[m
[32m+[m	[32mdrinkImg.src = src;[m
[32m+[m	[32mspanForPrice.appendChild(drinkImg);[m
[32m+[m	[32mbanner.style.backgroundColor = "lightgray";[m
[32m+[m	[32mbannerImage.style.opacity = 0;[m
 }[m
 [m
 function trackItem() {[m
[31m-  html = this.innerHTML;[m
[31m-  src = html.split('"')[3];[m
[31m-  name = html.split(" ")[5];[m
[31m-  price = html.split(" ")[8];[m
[31m-  // 이 정보를 이용해서 어떤 음료를 클릭한 것인지 알아내겠다.[m
[31m-  addMenu(src, name, price);[m
[32m+[m	[32mhtml = this.innerHTML;[m
[32m+[m	[32msrc = html.split('"')[3];[m
[32m+[m	[32mname = html.split(" ")[5];[m
[32m+[m	[32mprice = html.split(" ")[8];[m
[32m+[m	[32m// 이 정보를 이용해서 어떤 음료를 클릭한 것인지 알아내겠다.[m
[32m+[m	[32maddMenu(src, name, price);[m
 }[m
 [m
 function main() {[m
[31m-  showMenuPage(0);[m
[31m-  setDisplay(displayNumber);[m
[31m-  navItemLeftBtn.addEventListener("click", minusNum);[m
[31m-  navItemRightBtn.addEventListener("click", plusNum);[m
[32m+[m	[32mshowMenuPage(0);[m
[32m+[m	[32msetDisplay(displayNumber);[m
[32m+[m	[32mnavItemLeftBtn.addEventListener("click", minusNum);[m
[32m+[m	[32mnavItemRightBtn.addEventListener("click", plusNum);[m
 [m
[31m-  nextBtnLeft.addEventListener("click", minusIndex);[m
[31m-  nextBtnRight.addEventListener("click", plusIndex);[m
[32m+[m	[32mnextBtnLeft.addEventListener("click", minusIndex);[m
[32m+[m	[32mnextBtnRight.addEventListener("click", plusIndex);[m
 [m
[31m-  for (var i = 0; i < len; i++) {[m
[31m-    menuPage[i].addEventListener("click", trackItem);[m
[31m-  }[m
[32m+[m	[32mfor (var i = 0; i < len; i++) {[m
[32m+[m		[32mmenuPage[i].addEventListener("click", trackItem);[m
[32m+[m	[32m}[m
[32m+[m
[32m+[m	[32m//JH	결제 요청 시 서버에 주문 내역이 JSON으로 전달되도록 하기 위한 실험[m[41m [m
[32m+[m	[32mpayByCard.addEventListener("click", () => {[m
[32m+[m		[32mlet orderInfo = {[m
[32m+[m			[32m"order_list": [[m
[32m+[m				[32m{ "item_name": "아메리카노", "item_price": 3000 }, { "item_name": "카페라테", "item_price": 4000 }, { "item_name": "유자차", "item_price": 4500 },[m
[32m+[m			[32m][m
[32m+[m			[32m, "order_togo": true[m
[32m+[m			[32m//필요한 정보 추가 가능[m
[32m+[m		[32m}[m
[32m+[m
[32m+[m		[32mconst xhttp = new XMLHttpRequest();[m
[32m+[m		[32mxhttp.open("POST", "/order");[m
[32m+[m		[32mxhttp.setRequestHeader("Content-Type", "application/json");[m
[32m+[m		[32mxhttp.onload = () => {[m
[32m+[m			[32mconsole.log(xhttp.responseText)[m
[32m+[m		[32m}[m
[32m+[m		[32mxhttp.send(JSON.stringify(orderInfo));[m
[32m+[m	[32m})[m
[32m+[m	[32m//JH******************************************[m
 }[m
 main();[m
