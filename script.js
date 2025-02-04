let mealData = {
  italienisch: {
    "Bild": "..assets/küchenarten/italienisch.png",
    Luigis: {
      Bewertung: 4.5,
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
    Francescos: {
      Bewertung: 4.2,
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
  amerikanisch: {
    Bild: "..assets/küchenarten/amerikanisch.png",
    "Bills Burger Shack": {
      Bewertung: 4.6,
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
            Beschreibung: "Wiener Würstchen im Brötchen mit Ketchup und Senf",
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
    "American Diner": {
      Bewertung: 4.0,
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
  asiatisch: {
    Bild: "..assets/küchenarten/asiatisch.png",
    "Sushi Bar": {
      Bewertung: 4.8,
      Vorspeise: {
        Misosuppe: {
          Beschreibung: "Traditionelle Suppe mit Miso-Paste, Tofu und Algen",
          Preis: 4,
        },
      },
      Hauptgericht: {
        Sushi: {
          Maki: {
            Beschreibung: "Röllchen mit Algenblatt, Reis und Füllung nach Wahl",
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
    "Wok Express": {
      Bewertung: 4.1,
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
};

console.log(
  mealData.amerikanisch["American Diner"].Hauptgericht.Burger[
    "Double Cheeseburger"
  ].Beschreibung
);

console.log(mealData);

Object.keys(mealData).forEach((key) => {
  console.log(key);
});
