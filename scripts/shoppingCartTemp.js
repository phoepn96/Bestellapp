function cartTemp(restaurant) {
	return `<div class="restaurantCartDiv">
                <h3>${restaurant}:</h3>
                <div id="${restaurant}MealDiv">
                </div>
				<div class="divideSmall"></div>
            </div>`;
}

function cartMealTemp(restaurant, meal) {
	return `<div class="mealCombined">
                <p><button id="minus" onclick="decreaseAmount('${restaurant}', '${meal}')">-</button>${
		cart["items"][restaurant][meal]["amount"]
	}<button id="plus" onclick="upAmount('${restaurant}', '${meal}')">+</button></p>
                <p>${meal}</p>
				
                <span class="price itemPrice">${
									cart["items"][restaurant][meal]["amount"] *
									cart["items"][restaurant][meal]["price"]
								}€<button id="binBtn" onclick="deleteMeal('${restaurant}', '${meal}')"><img src="../assets/Material/Favicon/bin.png"></button></span>
								
    `;
}

function shoppingCartTemp() {
	return `
    <div id="cartHeadline"><h2>Warenkorb(<span id="itemCount"></span>):</h2></div>
						<div id="cartItems"></div>
						<div id="deliveryCost"></div>
						<div id="finalPriceDiv" class="hideInfo"></div>
						<div id="info" class="hideInfo">Wähle zuerst dein Essen aus!</div>
						<button id="payBtn" onclick="clearStorage(), redirect(), loadData(), showItemCount()">
							Jetzt bestellen!
						</button>`;
}

function costTemp() {
	return `<div class="cost">
                <p>Lieferkosten:</p>
                <span class="price" class=>2.89€</span>
            </div>
			<div class="divideSmall"></div>`;
}
