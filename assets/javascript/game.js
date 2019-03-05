$(document).ready(function() {

let characters = {
    "geralt" : {
        name: "geralt",
        health: 120,
        attack: 8,
        counterAttack: 15,
        imageUrl: "assets/images/geralt.jpg"
    },
    "vesemir" : {
        name: "vesemir",
        health: 100,
        attack: 14,
        counterAttack: 5,
        imageUrl: "assets/images/vesemir.jpg"
    },
    "ciri" : {
        name: "ciri",
        health: 150,
        attack: 8,
        counterAttack: 20,
        imageUrl: "assets/images/ciri.jpg"
    },
    "imlerith" : {
        name: "imlerith",
        health: 180,
        attack: 7,
        counterAttack: 20,
        imageUrl: "assets/images/imlerith.jpg"
    }
};

//audio variables
let geraltImg = document.getElementById('geralt-img');
let attackSound = new Audio('assets/sound/SwordsCollide.mp3');
let deathSound = new Audio('assets/sound/Decapitation.mp3');
let winningSound = new Audio('assets/sound/TaDa.mp3');

$("#geralt-img").click(function (e) { 
    console.log("clicked geralt!")
    attackSound.play();
    
});
















});