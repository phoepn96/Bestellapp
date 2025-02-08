function openMenu(key, restaurant) {
	mainRef.innerHTML = "";
	mainRef.innerHTML = "<div id='menuContentDiv'></div>";
	const menuContentDivRef = document.getElementById("menuContentDiv");
	menuContentDivRef.innerHTML = "";

	Object.keys(mealData[key]["Restaurants"][restaurant]["Speisen"]).forEach(
		(course) => {
			menuContentDivRef.innerHTML += menuTemp(course);
			fillCourses(key, restaurant, course);
		}
	);
}

function fillCourses(key, restaurant, course) {
	Object.keys(
		mealData[key]["Restaurants"][restaurant]["Speisen"][course]
	).forEach((mealType) => {
		const mealTypeDivRef = document.getElementById(`${course}Div`);
		mealTypeDivRef.innerHTML += mealTypeTemp(mealType);
		fillMeals(key, restaurant, course, mealType);
	});
}

function fillMeals(key, restaurant, course, mealType) {
	Object.keys(
		mealData[key]["Restaurants"][restaurant]["Speisen"][course][mealType]
	).forEach((meal) => {
		const mealDivRef = document.getElementById(`${mealType}Div`);
		mealDivRef.innerHTML += mealTemp(key, restaurant, course, mealType, meal);
	});
}
