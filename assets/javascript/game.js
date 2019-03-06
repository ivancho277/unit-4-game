$(document).ready(function() {

let characters = {
    "geralt" : {
        name: "geralt",
        health: 120,
        attack: 8,
        counterAttack: 15,
        imageUrl: "assets/images/geralt.jpg",
        isSelected: false
    },
    "vesemir" : {
        name: "vesemir",
        health: 100,
        attack: 14,
        counterAttack: 5,
        imageUrl: "assets/images/vesemir.jpg",
        isSelected: false
    },
    "ciri" : {
        name: "ciri",
        health: 150,
        attack: 8,
        counterAttack: 20,
        imageUrl: "assets/images/ciri.jpg",
        isSelected: false
    },
    "imlerith" : {
        name: "imlerith",
        health: 180,
        attack: 7,
        counterAttack: 20,
        imageUrl: "assets/images/imlerith.jpg",
        isSelected: false
    }
};



//audio variables
let geraltImg = document.getElementById('geralt-img');
let attackSound = new Audio('assets/sound/SwordsCollide.mp3');
let deathSound = new Audio('assets/sound/Decapitation.mp3');
let winningSound = new Audio('assets/sound/TaDa.mp3');





$(function () {
    $("img").click(function() {
      $(this).css('border', "solid 5px greenyellow");  
    });
  });

function onImgClick(){
    $("img").click(function() {
        console.log("image clicked");
        console.log(characters);
        attackSound.play();      
    })
}

$("img").hover


$("#geralt-img").click(function (e) { 
    console.log("clicked geralt!");
    characters.geralt.isSelected = true;
    onImgClick();
});

$("#ciri-img").click(function (e) { 
    console.log("clicked ciri!");
    characters.ciri.isSelected = true;
    onImgClick();
});
$("#vesemir-img").click(function (e) { 
    console.log("clicked vesemir!");
    characters.vesemir.isSelected = true;
    onImgClick();
});
$("#imlerith-img").click(function (e) { 
    console.log("clicked imlerith!");
    characters.imlerith.isSelected = true;
    onImgClick();
});


// function checkIfcharacterIsChosen(characters) {
// if(characters.isSelected === true) {
//     $("#opponents").html(<img src= />)
// }
// {















});