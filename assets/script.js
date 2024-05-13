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