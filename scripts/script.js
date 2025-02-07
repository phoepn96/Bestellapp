const mealData = {
	italienisch: {
		Bild: "../assets/küchenarten/italienisch.png",
		Restaurants: {
			Luigis: {
				Bild: "../assets/restaurant/luigis.png",
				Bewertung: 4.5,
				Speisen: {
					Vorspeise: {
						Bruscetta: {
							Beschreibung: "Krosses Brot mit Knoblauch, Tomaten und Rucola",
							Preis: 12,
						},
					},
					Hauptgericht: {
						Pizza: {
							Beschreibung:
								"Alle Pizzen werden mit Marinarasoße und Mozzarella serviert",
							Peperoni: {
								Beschreibung: "Mit pikanter Salami und scharfer Pepperoni",
								Preis: 14,
							},
							Funghi: {
								Beschreibung: "Pizza mit frischen Champignons",
								Preis: 13,
							},
						},
						Pasta: {
							"Spaghetti Carbonara": {
								Beschreibung: "Mit Speck, Ei und Parmesan-Sahne-Sauce",
								Preis: 13,
							},
							"Penne Arrabbiata": {
								Beschreibung: "Mit Tomatensoße, Knoblauch und Chili",
								Preis: 12,
							},
						},
					},
					Nachspeise: {
						Tiramisu: {
							Beschreibung:
								"Klassische italienische Nachspeise mit Mascarpone und Espresso",
							Preis: 8,
						},
						"Panna Cotta": {
							Beschreibung: "Sahnige Puddingspeise mit Waldbeersauce",
							Preis: 7,
						},
					},
					Getränke: {
						Wein: {
							Rotwein: 6,
							Weißwein: 6,
						},
						Softdrinks: {
							"Coca-Cola": 3,
							Wasser: 2,
						},
					},
				},
			},
			Francescos: {
				Bild: "../assets/restaurant/francesco.png",
				Bewertung: 4.2,
				Speisen: {
					Vorspeise: {
						Caprese: {
							Beschreibung: "Tomaten mit Mozzarella und Basilikum",
							Preis: 10,
						},
					},
					Hauptgericht: {
						Pizza: {
							Margherita: {
								Beschreibung:
									"Klassische Pizza mit Tomatensoße, Mozzarella und Basilikum",
								Preis: 11,
							},
							Prosciutto: {
								Beschreibung: "Pizza mit Tomatensoße, Mozzarella und Schinken",
								Preis: 13,
							},
						},
						Lasagne: {
							Beschreibung:
								"Geschichtete Pasta mit Hackfleischsoße, Béchamel und Käse überbacken",
							Preis: 14,
						},
					},
					Nachspeise: {
						"Gelato Misto": {
							Beschreibung: "Gemischtes Eis mit Sahne",
							Preis: 5,
						},
					},
					Getränke: {
						Wein: {
							Chianti: 8,
							"Pinot Grigio": 7,
						},
						Softdrinks: {
							Sprite: 3,
							Fanta: 3,
						},
					},
				},
			},
		},
	},
	amerikanisch: {
		Bild: "../assets/küchenarten/amerikanisch.png",
		Restaurants: {
			"Bills Burger Shack": {
				Bild: "../assets/restaurant/shacks.png",
				Bewertung: 4.6,
				Speisen: {
					Vorspeise: {
						"Onion Rings": {
							Beschreibung: "Knusprig frittierte Zwiebelringe",
							Preis: 5,
						},
						"Chicken Wings": {
							Beschreibung: "Würzig marinierte Hähnchenflügel",
							Preis: 6,
						},
					},
					Hauptgericht: {
						Burger: {
							Cheeseburger: {
								Beschreibung:
									"Burger mit Rindfleisch, Käse, Salat, Tomate und Zwiebeln",
								Preis: 10,
							},
							"Bacon Burger": {
								Beschreibung:
									"Burger mit Rindfleisch, knusprigem Speck, Käse und BBQ-Sauce",
								Preis: 12,
							},
						},
						"Hot Dogs": {
							Classic: {
								Beschreibung:
									"Wiener Würstchen im Brötchen mit Ketchup und Senf",
								Preis: 6,
							},
							"Chili Dog": {
								Beschreibung: "Hot Dog mit herzhafter Chili con Carne",
								Preis: 8,
							},
						},
					},
					Nachspeise: {
						Cheesecake: {
							Beschreibung: "Cremiger Käsekuchen mit Fruchtsauce",
							Preis: 5,
						},
					},
					Getränke: {
						Milkshakes: {
							Vanille: 5,
							Schokolade: 5,
						},
						Softdrinks: {
							Coke: 3,
							"Dr Pepper": 3,
						},
					},
				},
			},
			"American Diner": {
				Bild: "../assets/restaurant/americandiner.png",
				Bewertung: 4.0,
				Speisen: {
					Vorspeise: {
						"Mozzarella Sticks": {
							Beschreibung: "Frittierte Käse-Sticks mit Marinara-Sauce",
							Preis: 6,
						},
					},
					Hauptgericht: {
						Burger: {
							"Double Cheeseburger": {
								Beschreibung:
									"Zwei Rindfleischpatties mit Käse, Salat, Tomate und Zwiebeln",
								Preis: 14,
							},
						},
						Steak: {
							Beschreibung: "Saftiges Rindersteak mit Pommes und Salat",
							Preis: 20,
						},
					},
					Nachspeise: {
						Brownie: {
							Beschreibung: "Schokoladiger Brownie mit Vanilleeis",
							Preis: 6,
						},
					},
					Getränke: {
						Softdrinks: {
							Cola: 3,
							Sprite: 3,
						},
						Bier: {
							Budweiser: 4,
						},
					},
				},
			},
		},
	},
	deutsch: {
		Bild: "../assets/küchenarten/deutsch.png",
		Restaurants: {
			"Berliner Eck": {
				Bild: "../assets/restaurant/berliner.png",
				Bewertung: 4.1,
				Speisen: {
					Vorspeise: {
						Soleier: {
							Beschreibung: "Eingelegte Eier mit Senf und Gewürzen",
							Preis: 5,
						},
					},
					Hauptgericht: {
						"Currywurst mit Pommes": {
							Beschreibung: "Berliner Currywurst mit würziger Sauce und Pommes",
							Preis: 10,
						},
						"Eisbein mit Sauerkraut": {
							Beschreibung:
								"Gepökeltes Eisbein mit Sauerkraut und Kartoffelpüree",
							Preis: 15,
						},
					},
					Nachspeise: {
						"Berliner Pfannkuchen": {
							Beschreibung: "Gefüllter Krapfen mit Marmelade und Puderzucker",
							Preis: 4,
						},
					},
					Getränke: {
						Bier: {
							"Berliner Pilsner": 5,
						},
						Softdrinks: {
							Apfelschorle: 3,
							Cola: 3,
						},
					},
				},
			},

			"Bayerische Stube": {
				Bild: "../assets/restaurant/bayerisch.png",
				Bewertung: 4.3,
				Speisen: {
					Vorspeise: {
						Obazda: {
							Beschreibung: "Bayerischer Käseaufstrich mit Brezel",
							Preis: 7,
						},
						Leberknödelsuppe: {
							Beschreibung: "Herzhafte Suppe mit Leberknödeln",
							Preis: 6,
						},
					},
					Hauptgericht: {
						Schweinsbraten: {
							Beschreibung:
								"Saftiger Schweinebraten mit Kruste, Knödel und Krautsalat",
							Preis: 16,
						},
						"Weißwurst mit Brezel": {
							Beschreibung: "Traditionelle Weißwurst mit süßem Senf und Brezel",
							Preis: 9,
						},
					},
					Nachspeise: {
						Kaiserschmarrn: {
							Beschreibung:
								"Süße, zerrissene Pfannkuchen mit Puderzucker und Apfelmus",
							Preis: 8,
						},
					},
					Getränke: {
						Bier: {
							"Helles Bier": 5,
							Weißbier: 6,
						},
						Softdrinks: {
							Spezi: 3,
							Wasser: 2,
						},
					},
				},
			},
		},
	},
	asiatisch: {
		Bild: "../assets/küchenarten/asiatisch.png",
		Restaurants: {
			"Sushi Bar": {
				Bild: "../assets/restaurant/sushibar.png",
				Bewertung: 4.8,
				Speisen: {
					Vorspeise: {
						Misosuppe: {
							Beschreibung:
								"Traditionelle Suppe mit Miso-Paste, Tofu und Algen",
							Preis: 4,
						},
					},
					Hauptgericht: {
						Sushi: {
							Maki: {
								Beschreibung:
									"Röllchen mit Algenblatt, Reis und Füllung nach Wahl",
								Preis: 8,
							},
							Nigiri: {
								Beschreibung: "Reisballen mit rohem Fisch belegt",
								Preis: 10,
							},
						},
						Ramen: {
							Beschreibung:
								"Nudelsuppe mit Brühe, Gemüse und wahlweise Fleisch oder Tofu",
							Preis: 12,
						},
					},
					Nachspeise: {
						Mochi: {
							Beschreibung: "Kleine Reiskuchen mit süßer Füllung",
							Preis: 5,
						},
					},
					Getränke: {
						Tee: {
							"Grüner Tee": 3,
							Jasmintee: 3,
						},
					},
				},
			},
			"Wok Express": {
				Bild: "../assets/restaurant/wok.png",
				Bewertung: 4.1,
				Speisen: {
					Vorspeise: {
						Frühlingsrollen: {
							Beschreibung: "Knusprige Teigrollen gefüllt mit Gemüse",
							Preis: 5,
						},
					},
					Hauptgericht: {
						"Gebratener Reis": {
							Beschreibung: "Gebratener Reis mit Gemüse, Ei und Sojasauce",
							Preis: 9,
						},
						"Gebratene Nudeln": {
							Beschreibung: "Gebratene Nudeln mit Gemüse und Huhn oder Tofu",
							Preis: 10,
						},
					},
					Nachspeise: {
						"Gebackene Banane": {
							Beschreibung: "Frittierte Banane mit Honig",
							Preis: 4,
						},
					},
					Getränke: {
						Softdrinks: {
							Coke: 3,
							Fanta: 3,
						},
						Bier: {
							Tsingtao: 4,
						},
					},
				},
			},
		},
	},
};

const mainRef = document.getElementById("main");

function init() {
	console.log("test");
	mainRef.innerHTML = "";
	mainRef.innerHTML = mainSelectionTemp();
	loadFilterSection();
	loadRestaurantSelection();
}

function loadFilterSection() {
	const filterDivRef = document.getElementById("filterRestaurantDiv");
	filterDivRef.innerHTML = "";

	Object.keys(mealData).forEach((key) => {
		console.log(mealData[`${key}`].Bild);
		filterDivRef.innerHTML += filterDivTemp(key);
	});
}

function loadRestaurantSelection() {
	const restaurantContentDivRef = document.getElementById(
		"restaurantContentDiv"
	);
	restaurantContentDivRef.innerHTML = "";

	Object.keys(mealData).forEach((key) => {
		Object.keys(mealData[`${key}`].Restaurants).forEach((restaurant) => {
			restaurantContentDivRef.innerHTML += restaurantCardTemp(key, restaurant);
		});
	});
}

function openMenu(key, restaurant) {
	mainRef.innerHTML = "<div id='menuDiv'></div>";
	const menuDivRef = document.getElementById("menuDiv");
	Object.keys(mealData[key]["Restaurants"][restaurant]["Speisen"]).forEach(
		(mealType) => {
			menuDivRef.innerHTML += showMenuTemp(mealType);
			fillMenu(key, restaurant, mealType);
		}
	);
}

function fillMenu(key, restaurant, mealType) {
	Object.keys(
		mealData[key]["Restaurants"][restaurant]["Speisen"][mealType]
	).forEach((mealSubtype) => {
		const mealTypeMenuDivRef = document.getElementById(`${mealType}`);
		mealTypeMenuDivRef.innerHTML += mealSubtypeTemp(
			key,
			restaurant,
			mealType,
			mealSubtype
		);
	});
}
