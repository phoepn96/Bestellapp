function mainSelectionTemp() {
	return `<div id="selectionContentDiv">
                <div id="filterRestaurantDiv">
                </div>
                <img class="divideImg" src="../assets/assets/gerichte.png" alt="Zwischenbild">
                <div class="divider"></div>
                <h2>Bei diesen Partnern bestellen: </h2>
                <div id="restaurantContentDiv">
                </div>
            </div>`;
}

function filterDivTemp(key) {
	return `<div class=filterCard>
                <img src="${mealData[key].Bild}" alt="filterImg">
                <h3>${key}</h3>
            </div>   `;
}

function restaurantCardTemp(key, restaurant) {
	return `<div class="restaurantCard" onclick="openMenu('${key}', '${restaurant}')">
       <h3>${restaurant}</h3>
                <img src="${
									mealData[key]["Restaurants"][restaurant].Bild
								}" alt="${restaurant}">
                <div class="restaurantCardText">    
                 
                  
                    <p>${Object.keys(
											mealData[key]["Restaurants"][restaurant]["Speisen"][
												"Hauptspeisen"
											]
										)}</p>
                      <div class="ratingDiv">
                         <img src="../assets/Material/Favicon/star.png" alt="star">
                         <p>${
														mealData[key]["Restaurants"][restaurant].Bewertung
													}</p>
                     </div>
                </div>
              
                `;
}
