const mainRef = document.getElementById("main");

function init() {
	mainRef.innerHTML = "";
	mainRef.innerHTML = mainSelectionTemp();
	loadFilterSection();
	loadRestaurantSelection();
}

function loadFilterSection() {
	const filterDivRef = document.getElementById("filterRestaurantDiv");
	filterDivRef.innerHTML = "";

	Object.keys(mealData).forEach((key) => {
		filterDivRef.innerHTML += filterDivTemp(key);
	});
}

function loadRestaurantSelection() {
	const restaurantContentDivRef = document.getElementById(
		"restaurantContentDiv"
	);
	restaurantContentDivRef.innerHTML = "";

	Object.keys(mealData).forEach((key) => {
		Object.keys(mealData[`${key}`]["Restaurants"]).forEach((restaurant) => {
			restaurantContentDivRef.innerHTML += restaurantCardTemp(key, restaurant);
		});
	});
}
