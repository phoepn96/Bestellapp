function cartTemp(restaurant) {
	return `<div class="restaurantCartDiv">
                <h4>${restaurant}:</h4>
                <div id="${restaurant}MealDiv">
                </div>
            </div>`;
}

function cartMealTemp(restaurant, meal) {
	return `<div class="mealCombined">
                <p><button id="minus" onclick="decreaseAmount('${restaurant}', '${meal}')">-</button>${
		cart["items"][restaurant][meal]["amount"]
	}<button id="plus" onclick="upAmount('${restaurant}', '${meal}')">+</button></p>
                <p>${meal}</p>
                <span class="price">${
									cart["items"][restaurant][meal]["amount"] *
									cart["items"][restaurant][meal]["price"]
								}€</span>
    `;
}

function shoppingCartTemp() {
	return `
    <div id="cartHeadline"><h2>Warenkorb:</h2></div>
						<div id="cartItems"></div>
						<div id="deliveryCost"></div>
						<div id="info" class="hideInfo">Wähle zuerst dein Essen aus!</div>
						<button id="payBtn" onclick="clearStorage(), redirect(), loadData()">
							Jetzt bestellen!
						</button>`;
}

function costTemp() {
	return `<div class="cost">
                <p>Lieferkosten:</p>
                <span class="price">2.89</span>€
            </div>`;
}
