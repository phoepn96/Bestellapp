function loadData() {
	const storedData = localStorage.getItem("Warenkorb");
	if (storedData) {
		cart = JSON.parse(storedData);
	} else {
		cart = { items: {} };
	}
}

function clearStorage() {
	localStorage.clear();
}

function saveData() {
	localStorage.setItem("Warenkorb", JSON.stringify(cart));
}
