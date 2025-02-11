function filterSelection(key) {
	const restaurantContentDivRef = document.getElementById(
		"restaurantContentDiv"
	);
	restaurantContentDivRef.innerHTML = "";

	Object.keys(mealData[key]["Restaurants"]).forEach((restaurant) => {
		restaurantContentDivRef.innerHTML += restaurantCardTemp(key, restaurant);
	});
}
