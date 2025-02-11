function openMenu(key, restaurant) {
	mainRef.innerHTML = "";
	mainRef.innerHTML = "<div id='menuContentDiv'></div>";
	const menuContentDivRef = document.getElementById("menuContentDiv");
	menuContentDivRef.innerHTML = `<div id='menuContentDiv'>
                                    <div id='restaurantDiv'>
                                    <h2>Bei <span>${restaurant}</span> bestellen:</h2>
                                        <img src="${mealData[key]["Restaurants"][restaurant]["Bild"]}">
                                        
                                     </div>
                                     <div class="divider"></div>
                                    </div>`;

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
