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

function scrollOnTop() {
	document.documentElement.scrollTop = 0;
}

const header = document.getElementById("header");
const btnDiv = document.getElementById("BtnDivDnone");
const headerObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				btnDiv.classList.add("hide");
			} else {
				btnDiv.classList.remove("hide");
			}
		});
	},
	{ root: null, threshold: 0.4 }
);

headerObserver.observe(header);

function backToSelection() {
	const backToSelecBtn = document.getElementById("restBack");
	const selectionContent = document.getElementById("selectionContentDiv");
	if (selectionContent) {
		backToSelecBtn.classList.add("hide");
	} else {
		backToSelecBtn.classList.remove("hide");
	}
}

function checkCartVisibility() {
	const cartWrapper = document.getElementById("shoppingCartWrapper");
	const cartContent = document.getElementById("shoppingCartContent");
	if (cartWrapper) {
		if (cartWrapper.classList.contains("hide")) {
			openCart();
		}
	}
}
