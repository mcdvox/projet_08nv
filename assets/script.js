const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// ETAPE 2
// Déclaration des flèches du carrousel
const arrowLeft = document.querySelector(".arrow_left"); // Déclaration de la constante arrow_left.
const arrowRight = document.querySelector(".arrow_right"); // Déclaration de la constante arrow_right.
console.log(arrowLeft, arrowRight); // Affichage dans la console des valeurs des variables arrowLeft et arrowRight.

// Evènement du clique Gauche
arrowLeft.addEventListener("click", function() { // Ecoute de l'évènement click gauche.
	console.log("Flèche gauche cliquée"); // Affichage dans la console "Flèche gauche cliquée".
});

// Evènement du clique Droit
arrowRight.addEventListener("click", function() { // Ecoute de l'évènement click droit.
	console.log("Flèche droite cliquée"); // Affichage dans la console "Flèche droite cliquée".
});
// FIN ETAPE 2

// ETAPE 3
// Affichage des données de slide dans la console
console.log(slides);

// Fonction pour afficher des points représentant chaque image dans la présentation.
function displayDots() {
	const dots = document.querySelector(".dots"); // Déclaration de l'élément dots.
	let index = 0;
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == index) dot.classList.add("dot_selected");
	}
}
displayDots();
// FIN ETAPE 3

// ETAPE 4
// Fonction pour gérer le clique gauche
function clickGauche() {
	const imgSlide = document.querySelector(".banner-img");
	const tagLineSlide = document.querySelector("#banner p")
	let index = 0;
	arrowLeft.addEventListener("click", () => {
		const arrayDots = document.querySelectorAll(".dots .dot");
		arrayDots[index].classList.remove("dot_selected");
		index--;
		imgSlide.src = "./assets/images/slideshow/" + slides[index].image;
		tagLineSlide.innerHTML = slides[index].tagLine;
		arrayDots[index].classList.add("dot_selected");
		console.log("Flèche gauche cliquée");
	});
}
clickGauche();

// Fonction pour gérer le clique droit
function clickDroit() {
	const imgSlide = document.querySelector(".banner-img");
	const tagLineSlide = document.querySelector("#banner p")
	let index = 0;
	arrowRight.addEventListener("click", () => {
		const arrayDots = document.querySelectorAll(".dots .dot");
		arrayDots[index].classList.remove("dot_selected");
		index++;
		imgSlide.src = "./assets/images/slideshow/" + slides[index].image;
		tagLineSlide.innerHTML = slides[index].tagLine;
		arrayDots[index].classList.add("dot_selected");
		console.log("Flèche droite cliquée");
	});
}
clickDroit();
// FIN ETAPE 4