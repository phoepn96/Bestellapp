const mealData = {
	italienisch: {
		Bild: "../assets/küchenarten/italienisch.png",
		Restaurants: {
			Luigis: {
				Bild: "../assets/restaurant/luigis.png",
				Bewertung: 4.0,
				Speisen: {
					Vorspeisen: {
						Suppen: {
							Tomatensuppe: {
								Beschreibung:
									"Hausgemachte Tomatensuppe mit frischen, sonnengereiften Tomaten",
								Preis: 10,
							},
							Pilzsuppe: {
								Beschreibung: "Hausgemachte Pilzsuppe mit Pfifferlingen",
								Preis: 8,
							},
						},
						Antipasti: {
							"Gemischter Salat": {
								Beschreibung:
									"Gemischter Salat mit Tomate, Eisberg-Salat, Zwiebeln und hausgemachtem Dressing",
								Preis: 7,
							},
							"Salat Toskana": {
								Beschreibung:
									"Salat mit verschiedenen Kräutern aus der Toskana",
								Preis: 9,
							},
						},
					},
					Hauptspeisen: {
						Pasta: {
							"Spaghetti Carbonara": {
								Beschreibung: "Spaghetti mit Speck, Ei, Parmesan und Pfeffer",
								Preis: 14,
							},
							"Penne Arrabbiata": {
								Beschreibung:
									"Penne in scharfer Tomatensauce mit Knoblauch und Chili",
								Preis: 12,
							},
						},
						Pizza: {
							"Pizza Margherita": {
								Beschreibung:
									"Klassische Pizza mit Tomatensauce, Mozzarella und Basilikum",
								Preis: 11,
							},
							"Pizza Quattro Stagioni": {
								Beschreibung:
									"Pizza mit Artischocken, Schinken, Champignons und Oliven",
								Preis: 13,
							},
						},
					},
					Nachspeisen: {
						Klassisch: {
							Tiramisu: {
								Beschreibung:
									"Italienisches Schichtdessert mit Mascarpone, Espresso und Kakao",
								Preis: 8,
							},
							"Panna Cotta": {
								Beschreibung: "Gekochte Sahne mit Vanille und Himbeersauce",
								Preis: 7,
							},
						},
						"Eis & Sorbet": {
							"Hausgemachtes Schokoladeneis": {
								Beschreibung:
									"Cremiges Schokoladeneis aus feinster italienischer Schokolade",
								Preis: 6,
							},
							Zitronensorbet: {
								Beschreibung:
									"Erfrischendes Sorbet aus sizilianischen Zitronen",
								Preis: 6,
							},
						},
					},
					Getränke: {
						Alkoholisch: {
							"Rotwein Chianti": {
								Beschreibung: "Italienischer Rotwein aus der Toskana",
								Preis: 18,
							},
							Limoncello: {
								Beschreibung: "Zitronenlikör aus Süditalien",
								Preis: 5,
							},
						},
						Alkoholfrei: {
							"San Pellegrino": {
								Beschreibung: "Italienisches Mineralwasser mit Kohlensäure",
								Preis: 4,
							},
							Orangensaft: {
								Beschreibung: "Frisch gepresster Orangensaft",
								Preis: 5,
							},
						},
					},
				},
			},
			Francescos: {
				Bild: "../assets/restaurant/francesco.png",
				Bewertung: 4.2,
				Speisen: {
					Vorspeisen: {
						Suppen: {
							Minestrone: {
								Beschreibung:
									"Italienische Gemüsesuppe mit Bohnen, Karotten und Tomaten",
								Preis: 9,
							},
							"Zuppa di Pesce": {
								Beschreibung:
									"Fischsuppe mit frischen Meeresfrüchten und Tomaten",
								Preis: 12,
							},
						},
						Antipasti: {
							"Bruschetta al Pomodoro": {
								Beschreibung:
									"Geröstetes Brot mit frischen Tomaten, Knoblauch und Basilikum",
								Preis: 6,
							},
							"Vitello Tonnato": {
								Beschreibung: "Dünne Kalbfleischscheiben mit Thunfischsauce",
								Preis: 13,
							},
						},
					},
					Hauptspeisen: {
						Pasta: {
							"Tagliatelle al Tartufo": {
								Beschreibung: "Hausgemachte Bandnudeln mit Trüffelrahmsauce",
								Preis: 18,
							},
							"Lasagne al Forno": {
								Beschreibung:
									"Hausgemachte Lasagne mit Bolognesesauce und Bechamel",
								Preis: 15,
							},
						},
						"Fleisch & Fisch": {
							"Saltimbocca alla Romana": {
								Beschreibung:
									"Kalbsschnitzel mit Parmaschinken und Salbei in Weißweinsauce",
								Preis: 22,
							},
							"Branzino alla Griglia": {
								Beschreibung: "Gegrillter Wolfsbarsch mit Zitrone und Olivenöl",
								Preis: 24,
							},
						},
					},
					Nachspeisen: {
						Klassisch: {
							"Cannoli Siciliani": {
								Beschreibung:
									"Gefüllte knusprige Teigröllchen mit Ricotta-Creme",
								Preis: 9,
							},
							Tartufo: {
								Beschreibung: "Gefrorene Schokoladen-Trüffel mit Haselnusskern",
								Preis: 8,
							},
						},
						Fruchtig: {
							"Frische Erdbeeren mit Mascarpone": {
								Beschreibung:
									"Erdbeeren mit einer cremigen Mascarpone-Vanillesauce",
								Preis: 7,
							},
							"Mango-Sorbet": {
								Beschreibung: "Erfrischendes Sorbet aus reifen Mangos",
								Preis: 6,
							},
						},
					},
					Getränke: {
						Alkoholisch: {
							"Prosecco di Valdobbiadene": {
								Beschreibung: "Trockener italienischer Schaumwein",
								Preis: 20,
							},
							"Aperol Spritz": {
								Beschreibung: "Aperol mit Prosecco und Soda",
								Preis: 9,
							},
						},
						Alkoholfrei: {
							"Italienische Limonade": {
								Beschreibung:
									"Hausgemachte Zitronenlimonade mit frischen Zitronen",
								Preis: 5,
							},
							Espresso: {
								Beschreibung: "Kräftiger italienischer Espresso",
								Preis: 3,
							},
						},
					},
				},
			},
		},
	},
	amerikanisch: {
		Bild: "../assets/küchenarten/amerikanisch.png",
		Restaurants: {
			"American Diner": {
				Bild: "../assets/restaurant/shacks.png",
				Bewertung: 4.4,
				Speisen: {
					Vorspeisen: {
						Suppen: {
							"Clam Chowder": {
								Beschreibung:
									"Cremige Muschelsuppe mit Kartoffeln und Sellerie",
								Preis: 8,
							},
							"Texas Chili": {
								Beschreibung:
									"Würziges Rindfleisch-Chili mit Bohnen und Jalapeños",
								Preis: 9,
							},
						},
						Appetizer: {
							"Buffalo Wings": {
								Beschreibung:
									"Knusprige Hähnchenflügel mit scharfer Buffalo-Sauce",
								Preis: 10,
							},
							"Mozzarella Sticks": {
								Beschreibung:
									"Panierte und frittierte Mozzarella-Sticks mit Marinara-Dip",
								Preis: 7,
							},
						},
					},
					Hauptspeisen: {
						Burger: {
							"Classic Cheeseburger": {
								Beschreibung:
									"Rindfleisch-Patty mit Cheddar, Salat, Tomate und Zwiebeln",
								Preis: 12,
							},
							"BBQ Bacon Burger": {
								Beschreibung:
									"Burger mit knusprigem Bacon, BBQ-Sauce und Cheddar",
								Preis: 14,
							},
						},
						"Grill & Steaks": {
							"T-Bone Steak": {
								Beschreibung:
									"Saftiges T-Bone Steak, serviert mit Grillgemüse und Pommes",
								Preis: 26,
							},
							"BBQ Ribs": {
								Beschreibung:
									"Zarte Schweinerippchen in hausgemachter BBQ-Sauce",
								Preis: 22,
							},
						},
					},
					Nachspeisen: {
						Klassisch: {
							"New York Cheesecake": {
								Beschreibung: "Cremiger Cheesecake mit Erdbeersauce",
								Preis: 8,
							},
							"Brownie Sundae": {
								Beschreibung:
									"Schokoladenbrownie mit Vanilleeis und Schokoladensauce",
								Preis: 9,
							},
						},
						"Eis & Shakes": {
							"Vanilla Milkshake": {
								Beschreibung: "Cremiger Vanille-Milchshake mit Sahne",
								Preis: 6,
							},
							"Chocolate Fudge Shake": {
								Beschreibung: "Schokoladen-Milchshake mit Schokoladensirup",
								Preis: 7,
							},
						},
					},
					Getränke: {
						Alkoholisch: {
							"Budweiser Bier": {
								Beschreibung: "Amerikanisches Lagerbier",
								Preis: 5,
							},
							"Jack & Coke": {
								Beschreibung: "Jack Daniel’s Whiskey mit Cola",
								Preis: 8,
							},
						},
						Alkoholfrei: {
							"Root Beer": {
								Beschreibung: "Klassisches amerikanisches Root Beer",
								Preis: 4,
							},
							"Homemade Lemonade": {
								Beschreibung: "Frisch gepresste Zitronenlimonade",
								Preis: 5,
							},
						},
					},
				},
			},
			"Bill's Burger Shack": {
				Bild: "../assets/restaurant/americandiner.png",
				Bewertung: 4.8,
				Speisen: {
					Vorspeisen: {
						Suppen: {
							"Loaded Potato Soup": {
								Beschreibung:
									"Cremige Kartoffelsuppe mit Cheddar, Bacon und Frühlingszwiebeln",
								Preis: 8,
							},
							"Smoky Tomato Soup": {
								Beschreibung:
									"Geräucherte Tomatensuppe mit Basilikum und Croutons",
								Preis: 7,
							},
						},
						Appetizer: {
							"Onion Rings": {
								Beschreibung:
									"Knusprige, frittierte Zwiebelringe mit Ranch-Dip",
								Preis: 6,
							},
							"Jalapeño Poppers": {
								Beschreibung: "Gebackene Jalapeños gefüllt mit Frischkäse",
								Preis: 7,
							},
						},
					},
					Hauptspeisen: {
						Burger: {
							"The Shack Burger": {
								Beschreibung:
									"Klassischer Cheeseburger mit gegrilltem Patty, Salat und Special Sauce",
								Preis: 11,
							},
							"Bacon Monster Burger": {
								Beschreibung:
									"Doppelter Patty mit extra Bacon, Cheddar und BBQ-Sauce",
								Preis: 15,
							},
						},
						"Grill & Spezialitäten": {
							"Pulled Pork Sandwich": {
								Beschreibung:
									"Zartes, langsam gegartes Pulled Pork mit Cole Slaw auf einem Brioche Bun",
								Preis: 13,
							},
							"Buffalo Chicken Wrap": {
								Beschreibung:
									"Weizen-Tortilla mit knusprigem Buffalo Chicken, Ranch-Dressing und Gemüse",
								Preis: 12,
							},
						},
					},
					Nachspeisen: {
						Klassisch: {
							"Apple Pie": {
								Beschreibung:
									"Hausgemachter Apfelkuchen mit Zimt und Vanilleeis",
								Preis: 7,
							},
							"Peanut Butter Brownie": {
								Beschreibung:
									"Schokoladenbrownie mit Erdnussbutter und Schokoladensauce",
								Preis: 8,
							},
						},
						"Shakes & Eis": {
							"Strawberry Milkshake": {
								Beschreibung:
									"Erdbeer-Milchshake mit frischen Erdbeeren und Sahne",
								Preis: 6,
							},
							"Cookies & Cream Shake": {
								Beschreibung: "Cremiger Oreo-Milchshake mit Keksstücken",
								Preis: 7,
							},
						},
					},
					Getränke: {
						Alkoholisch: {
							"IPA Craft Beer": {
								Beschreibung:
									"Amerikanisches India Pale Ale mit fruchtigen Noten",
								Preis: 6,
							},
							"Whiskey Sour": {
								Beschreibung:
									"Klassischer Cocktail mit Bourbon, Zitronensaft und Zuckersirup",
								Preis: 9,
							},
						},
						Alkoholfrei: {
							"Homemade Sweet Tea": {
								Beschreibung: "Hausgemachter süßer Eistee nach Südstaaten-Art",
								Preis: 4,
							},
							"Cherry Cola": {
								Beschreibung: "Erfrischende Cola mit Kirschsirup",
								Preis: 5,
							},
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
				Bewertung: 4.9,
				Speisen: {
					Vorspeisen: {
						Suppen: {
							"Miso Suppe": {
								Beschreibung:
									"Traditionelle japanische Misosuppe mit Seetang, Tofu und Frühlingszwiebeln",
								Preis: 5,
							},
							"Tom Kha Gai": {
								Beschreibung:
									"Aromatische thailändische Kokossuppe mit Hühnchen und Zitronengras",
								Preis: 7,
							},
						},
						Appetizer: {
							Edamame: {
								Beschreibung: "Gedämpfte und leicht gesalzene junge Sojabohnen",
								Preis: 4,
							},
							Gyoza: {
								Beschreibung:
									"Japanische Teigtaschen mit Schweinefleisch- und Gemüsefüllung, serviert mit Sojasauce",
								Preis: 6,
							},
						},
					},
					Hauptspeisen: {
						"Sushi Rolls": {
							"California Roll": {
								Beschreibung: "Rolle mit Surimi, Avocado, Gurke und Sesam",
								Preis: 10,
							},
							"Spicy Tuna Roll": {
								Beschreibung:
									"Scharfe Thunfischrolle mit Frühlingszwiebeln und Chili-Mayo",
								Preis: 12,
							},
						},
						"Sashimi & Bowls": {
							"Lachs Sashimi": {
								Beschreibung: "Frischer, roher Lachs in dünnen Scheiben",
								Preis: 14,
							},
							"Poke Bowl": {
								Beschreibung:
									"Bunte Bowl mit rohem Thunfisch, Reis, Avocado und Edamame",
								Preis: 13,
							},
						},
					},
					Nachspeisen: {
						"Japanische Desserts": {
							"Mochi Eis": {
								Beschreibung:
									"Japanisches Reismehl-Dessert mit Eisfüllung (verschiedene Sorten)",
								Preis: 6,
							},
							Dorayaki: {
								Beschreibung:
									"Japanische Pfannkuchen mit süßer Azuki-Bohnenpaste",
								Preis: 7,
							},
						},
						"Asiatische Süßspeisen": {
							"Mango Sticky Rice": {
								Beschreibung:
									"Süßer Klebreis mit Kokosmilch und frischer Mango",
								Preis: 8,
							},
							Sesambällchen: {
								Beschreibung: "Frittierte Reisbällchen mit süßer Sesampaste",
								Preis: 6,
							},
						},
					},
					Getränke: {
						Alkoholisch: {
							Sake: {
								Beschreibung:
									"Traditioneller japanischer Reiswein, warm oder kalt serviert",
								Preis: 10,
							},
							"Plum Wine": {
								Beschreibung: "Japanischer Pflaumenwein, süß und fruchtig",
								Preis: 9,
							},
						},
						Alkoholfrei: {
							"Grüner Tee": {
								Beschreibung: "Frisch aufgebrühter japanischer grüner Tee",
								Preis: 4,
							},
							"Ramune Soda": {
								Beschreibung: "Japanische Limonade mit erfrischendem Geschmack",
								Preis: 5,
							},
						},
					},
				},
			},
			"Wok Express": {
				Bild: "../assets/restaurant/wok.png",
				Bewertung: 3.8,
				Speisen: {
					Vorspeisen: {
						Suppen: {
							"Hot & Sour Soup": {
								Beschreibung:
									"Scharf-saure Suppe mit Pilzen, Tofu und Bambusstreifen",
								Preis: 6,
							},
							"Wan-Tan Suppe": {
								Beschreibung:
									"Klare Brühe mit gefüllten Teigtaschen und Frühlingszwiebeln",
								Preis: 7,
							},
						},
						Appetizer: {
							Frühlingsrollen: {
								Beschreibung:
									"Knusprige Teigrollen gefüllt mit Gemüse und Glasnudeln",
								Preis: 5,
							},
							"Satay-Spieße": {
								Beschreibung: "Gegrillte Hähnchenspieße mit Erdnusssauce",
								Preis: 8,
							},
						},
					},
					Hauptspeisen: {
						"Wok-Gerichte": {
							"Kung Pao Chicken": {
								Beschreibung:
									"Gebratenes Hähnchen mit Erdnüssen, Paprika und scharfer Sauce",
								Preis: 12,
							},
							"Rindfleisch mit Brokkoli": {
								Beschreibung:
									"Zartes Rindfleisch mit Brokkoli in einer herzhaften Sojasauce",
								Preis: 14,
							},
						},
						"Nudel- & Reisgerichte": {
							"Gebratene Nudeln mit Garnelen": {
								Beschreibung:
									"Wok-gebratene Eiernudeln mit Garnelen, Gemüse und Sojasauce",
								Preis: 13,
							},
							"Gebratener Reis mit Huhn": {
								Beschreibung:
									"Aromatischer Reis mit Hühnchen, Ei und Frühlingszwiebeln",
								Preis: 11,
							},
						},
					},
					Nachspeisen: {
						"Asiatische Desserts": {
							"Gebackene Banane mit Honig": {
								Beschreibung: "Knusprig gebackene Banane mit süßem Honig",
								Preis: 6,
							},
							Kokospudding: {
								Beschreibung:
									"Leichter Pudding mit Kokosmilch und Tapioka-Perlen",
								Preis: 7,
							},
						},
						"Fruchtige Süßspeisen": {
							"Lychee in Sirup": {
								Beschreibung: "Süße Litschi-Früchte in leichtem Sirup",
								Preis: 5,
							},
							"Mango Pudding": {
								Beschreibung: "Cremiger Pudding mit frischen Mangostücken",
								Preis: 7,
							},
						},
					},
					Getränke: {
						Alkoholisch: {
							"Tsingtao Bier": {
								Beschreibung: "Chinesisches Lagerbier mit mildem Geschmack",
								Preis: 6,
							},
							Sake: {
								Beschreibung: "Japanischer Reiswein, warm oder kalt serviert",
								Preis: 9,
							},
						},
						Alkoholfrei: {
							"Jasmin-Tee": {
								Beschreibung: "Aromatischer chinesischer Tee mit Jasminblüten",
								Preis: 4,
							},
							"Bubble Tea": {
								Beschreibung: "Taiwanesischer Milchtee mit Tapioka-Perlen",
								Preis: 6,
							},
						},
					},
				},
			},
		},
	},
	deutsch: {
		Bild: "../assets/küchenarten/deutsch.png",
		Restaurants: {
			"Bayrische Stuben": {
				Bild: "../assets/restaurant/bayerisch.png",
				Bewertung: 4.9,
				Speisen: {
					Vorspeisen: {
						Suppen: {
							Leberknödelsuppe: {
								Beschreibung:
									"Kräftige Rinderbrühe mit hausgemachtem Leberknödel",
								Preis: 7,
							},
							Kartoffelsuppe: {
								Beschreibung: "Cremige Kartoffelsuppe mit Speck und Croutons",
								Preis: 6,
							},
						},
						Appetizer: {
							Obatzda: {
								Beschreibung:
									"Cremiger Käseaufstrich aus Camembert, Butter und Gewürzen, serviert mit Brezen",
								Preis: 9,
							},
							"Weißwurst mit Brezel": {
								Beschreibung:
									"Traditionelle Weißwurst mit süßem Senf und einer Brezel",
								Preis: 8,
							},
						},
					},
					Hauptspeisen: {
						"Deftige Klassiker": {
							"Schweinshaxe mit Knödeln": {
								Beschreibung:
									"Knusprig gegrillte Schweinshaxe mit Kartoffelknödel und Sauerkraut",
								Preis: 18,
							},
							Zwiebelrostbraten: {
								Beschreibung:
									"Zartes Rindersteak mit Röstzwiebeln, Bratensauce und Bratkartoffeln",
								Preis: 22,
							},
						},
						"Vegetarische Gerichte": {
							Käsespätzle: {
								Beschreibung:
									"Hausgemachte Spätzle mit geschmolzenem Bergkäse und Röstzwiebeln",
								Preis: 14,
							},
							"Rahmschwammerl mit Semmelknödel": {
								Beschreibung:
									"Cremige Pilzrahmsoße mit frischen Kräutern und hausgemachtem Semmelknödel",
								Preis: 13,
							},
						},
					},
					Nachspeisen: {
						"Bayerische Klassiker": {
							Kaiserschmarrn: {
								Beschreibung:
									"Leicht karamellisierter Pfannkuchenteig mit Rosinen, serviert mit Apfelmus",
								Preis: 9,
							},
							Germknödel: {
								Beschreibung:
									"Dampfknödel mit Pflaumenmusfüllung, Mohn und Vanillesauce",
								Preis: 8,
							},
						},
						"Süße Leckereien": {
							Apfelstrudel: {
								Beschreibung:
									"Warmer Strudel mit Äpfeln, Zimt und Rosinen, serviert mit Vanillesoße",
								Preis: 7,
							},
							"Bayerische Creme": {
								Beschreibung: "Luftige Vanillecreme mit Fruchtspiegel",
								Preis: 6,
							},
						},
					},
					Getränke: {
						Alkoholisch: {
							"Helles Bier": {
								Beschreibung: "Traditionelles bayerisches Helles vom Fass",
								Preis: 5,
							},
							Radler: {
								Beschreibung:
									"Erfrischender Mix aus Hellem Bier und Zitronenlimonade",
								Preis: 5,
							},
						},
						Alkoholfrei: {
							Spezi: {
								Beschreibung: "Klassischer Mix aus Cola und Orangenlimonade",
								Preis: 4,
							},
							Apfelschorle: {
								Beschreibung:
									"Spritziges Mixgetränk aus Apfelsaft und Mineralwasser",
								Preis: 4,
							},
						},
					},
				},
			},
			"Berliner Eck": {
				Bild: "../assets/restaurant/berliner.png",
				Bewertung: 4.3,
				Speisen: {
					Vorspeisen: {
						Suppen: {
							"Berliner Kartoffelsuppe": {
								Beschreibung:
									"Herzhafte Kartoffelsuppe mit Speck und Würstchen",
								Preis: 7,
							},
							Soljanka: {
								Beschreibung:
									"Würzige osteuropäische Suppe mit Paprika, Wurst und saurer Sahne",
								Preis: 8,
							},
						},
						Appetizer: {
							"Buletten mit Senf": {
								Beschreibung:
									"Zwei hausgemachte Berliner Frikadellen mit Senf und Brot",
								Preis: 9,
							},
							Rollmops: {
								Beschreibung:
									"Eingelegte Heringsröllchen mit Zwiebeln und Gurken",
								Preis: 7,
							},
						},
					},
					Hauptspeisen: {
						"Berliner Klassiker": {
							"Currywurst mit Pommes": {
								Beschreibung:
									"Original Berliner Currywurst mit hausgemachter Currysauce und Pommes Frites",
								Preis: 10,
							},
							"Eisbein mit Sauerkraut": {
								Beschreibung:
									"Gepökeltes und gekochtes Eisbein mit Sauerkraut und Erbsenpüree",
								Preis: 17,
							},
						},
						Hausmannskost: {
							"Königsberger Klopse": {
								Beschreibung: "Hackfleischklöße in Kapernsauce mit Kartoffeln",
								Preis: 14,
							},
							"Berliner Leber": {
								Beschreibung:
									"Gebratene Kalbsleber mit Apfelscheiben, Zwiebeln und Kartoffelpüree",
								Preis: 16,
							},
						},
					},
					Nachspeisen: {
						"Berliner Süßspeisen": {
							"Berliner Pfannkuchen": {
								Beschreibung:
									"Gefülltes Hefegebäck mit Marmelade und Puderzucker",
								Preis: 5,
							},
							"Rote Grütze mit Vanillesauce": {
								Beschreibung:
									"Fruchtige Beerengrütze mit hausgemachter Vanillesauce",
								Preis: 6,
							},
						},
						"Hausgemachte Leckereien": {
							Quarkkeulchen: {
								Beschreibung: "Kartoffel-Quark-Puffer mit Apfelmus und Zimt",
								Preis: 7,
							},
							Götterspeise: {
								Beschreibung: "Bunte Wackelpudding-Dessert mit Sahne",
								Preis: 5,
							},
						},
					},
					Getränke: {
						Alkoholisch: {
							"Berliner Pilsner": {
								Beschreibung: "Klassisches Berliner Pils vom Fass",
								Preis: 5,
							},
							"Berliner Weisse mit Schuss": {
								Beschreibung: "Sauerbier mit Waldmeister- oder Himbeersirup",
								Preis: 6,
							},
						},
						Alkoholfrei: {
							"Club-Mate": {
								Beschreibung: "Erfrischendes, koffeinhaltiges Mate-Tee-Getränk",
								Preis: 4,
							},
							"Berliner Fassbrause": {
								Beschreibung: "Traditionelles alkoholfreies Kräutergetränk",
								Preis: 4,
							},
						},
					},
				},
			},
		},
	},
};
