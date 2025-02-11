function menuTemp(course) {
	return `<div class="courseDiv">
                <div class="${course}Bg">
                    <h2>${course}</h2>
                </div>
                <div class="mealDiv" id="${course}Div">
                </div>
            </div>
    `;
}

function mealTypeTemp(mealType) {
	return `<div class="mealTypeDiv">
                <h3>${mealType}</h3>
                <div class="mealDiv" id="${mealType}Div"></div>
            </div>`;
}

function mealTemp(key, restaurant, course, mealType, meal) {
	return `<div class="mealCard">
                <div class="mealCardText">
                    <h4>${meal}</h4>
                    <p>${mealData[key]["Restaurants"][restaurant]["Speisen"][course][mealType][meal]["Preis"]}€</p>
                </div>
                <div class="mealCardBtnDiv">
                    <p>${mealData[key]["Restaurants"][restaurant]["Speisen"][course][mealType][meal]["Beschreibung"]}</p>
                    <button class="addToCartBtn" onclick="intoCart('${key}', '${restaurant}', '${course}', '${mealType}', '${meal}'), checkCartVisibility()"><img src="../assets/Material/Favicon/plus.png"></button>
                </div>
            </div>`;
}
