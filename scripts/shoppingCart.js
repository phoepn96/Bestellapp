let cart = {
	items: {},
};

const shoppingCartContentRef = document.getElementById("shoppingCartContent");
const shoppingCartWrapperRef = document.getElementById("shoppingCartWrapper");

function openCart() {
	shoppingCartContentRef.classList.toggle("hide");
	shoppingCartWrapperRef.classList.toggle("hide");
	shoppingCartContentRef.classList.toggle("show");
	shoppingCartWrapperRef.classList.toggle("show");
}

function intoCart(key, restaurant, course, mealType, meal) {
	loadData();
	getDataIntoCartObj(key, restaurant, course, mealType, meal);
	loadDataIntoCartDiv();
}

function getDataIntoCartObj(key, restaurant, course, mealType, meal) {
	const cartItemDivRef = document.getElementById("cartItems");
	if (cartItemDivRef) {
		if (!cart["items"].hasOwnProperty(restaurant)) {
			cart["items"][restaurant] = {};
		}
		if (!cart["items"][restaurant].hasOwnProperty(meal)) {
			cart["items"][restaurant][meal] = {
				amount: 1,
				price:
					mealData[key]["Restaurants"][restaurant]["Speisen"][course][mealType][
						meal
					]["Preis"],
			};
		} else {
			cart["items"][restaurant][meal]["amount"]++;
		}
		saveData();
	}
}

function loadDataIntoCartDiv() {
	const cartItemDivRef = document.getElementById("cartItems");
	if (cartItemDivRef) {
		cartItemDivRef.innerHTML = "";
		Object.keys(cart["items"]).forEach((restaurant) => {
			cartItemDivRef.innerHTML += cartTemp(restaurant);
			Object.keys(cart["items"][restaurant]).forEach((meal) => {
				const cartMealRef = document.getElementById(`${restaurant}MealDiv`);
				cartMealRef.innerHTML += cartMealTemp(restaurant, meal);
			});
		});
		getFinalPrice();
	}
}

function redirect() {
	if (Object.keys(cart["items"]).length != 0) {
		shoppingCartContentRef.innerHTML = `
		<h2>Deine Bestellung wurde aufgegeben!</h2>
        <button class='continueBtn' onclick='initCart(), placeholder(), lieferkosten()'>Mehr bestellen!!!</button>
        `;
	} else {
		document.getElementById("info").classList.add("showInfo");
		document.getElementById("info").classList.remove("hideInfo");
		setTimeout(() => {
			document.getElementById("info").classList.remove("showInfo");
			document.getElementById("info").classList.add("hideInfo");
		}, 2000);
	}
}

function initCart() {
	shoppingCartContentRef.innerHTML = shoppingCartTemp();
}

function decreaseAmount(restaurant, meal) {
	if (cart["items"][restaurant][meal]["amount"] > 1) {
		cart["items"][restaurant][meal]["amount"]--;
	} else {
		delete cart["items"][restaurant][meal];
	}
	if (Object.keys(cart["items"][restaurant]).length === 0) {
		delete cart["items"][restaurant];
	}

	saveData();
	loadDataIntoCartDiv();
	placeholder();
	getFinalPrice();
}

function upAmount(restaurant, meal) {
	cart["items"][restaurant][meal]["amount"]++;
	saveData();
	loadDataIntoCartDiv();
	getFinalPrice();
}

function placeholder() {
	const cartItemDivRef = document.getElementById("cartItems");
	if (cartItemDivRef) {
		if (cartItemDivRef.innerHTML === "") {
			cartItemDivRef.innerHTML =
				"<p class='placeholder'>Füge etwas zum Warenkorb hinzu!</p>";
		}
	}
}

function lieferkosten() {
	const cartItemDivRef = document.getElementById("cartItems");
	if (cartItemDivRef) {
		const SliderRef = document.getElementById("checkbox");
		const deliveryDivRef = document.getElementById("deliveryCost");
		if (deliveryDivRef) {
			if (SliderRef.checked) {
				deliveryDivRef.innerHTML += costTemp();
			} else {
				deliveryDivRef.innerHTML = "";
			}
		}
	}
	getFinalPrice();
}

function getFinalPrice() {
	let sum = 0;
	document.querySelectorAll(".price").forEach((price) => {
		sum += parseFloat(price.innerHTML);
	});

	showFinalPrice(sum);
}

function showFinalPrice(sum) {
	const priceDiv = document.getElementById("finalPriceDiv");
	if (priceDiv) {
		if (document.querySelectorAll(".itemPrice").length != 0) {
			priceDiv.innerHTML = `<div class="showPrice"><h3>Zu zahlender Betrag:</h3> <span>${sum}€</span></div>`;
			priceDiv.classList.add("showInfo");
			priceDiv.classList.remove("hideInfo");
		} else {
			priceDiv.classList.add("hideInfo");
			priceDiv.classList.remove("showInfo");
		}
	}
}
