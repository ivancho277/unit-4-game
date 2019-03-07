$ (document).ready (function () {
  let characters = {
    geralt: {
      name: 'Geralt',
      health: 120,
      attack: 8,
      counterAttack: 15,
      imageUrl: 'assets/images/geralt.jpg',
      isSelected: false,
    },
    vesemir: {
      name: 'Vesemir',
      health: 100,
      attack: 14,
      counterAttack: 5,
      imageUrl: 'assets/images/vesemir.jpg',
      isSelected: false,
    },
    ciri: {
      name: 'Ciri',
      health: 150,
      attack: 8,
      counterAttack: 20,
      imageUrl: 'assets/images/ciri.jpg',
      isSelected: false,
    },
    imlerith: {
      name: 'Imlerith',
      health: 180,
      attack: 7,
      counterAttack: 20,
      imageUrl: 'assets/images/imlerith.jpg',
      isSelected: false,
    },
  };

  //send stats to images
  function sendImgStats (elmentID) {
    characterArray = [
      characters.geralt,
      characters.ciri,
      characters.imlerith,
      characters.vesemir,
    ];
    for (var i = 0; i < characterArray.length; i++) {
      $ (elmentID + i).html (
        '<p>' +
          characterArray[i].name +
          '<br> Health: ' +
          characterArray[i].health +
          '<br> Attack: ' +
          characterArray[i].attack +
          '<br> CounterAttack: ' +
          characterArray[i].counterAttack +
          '</p>'
      );
    }
  }
  //function call
  sendImgStats ("#stats");
  //audio variables
  let geraltImg = document.getElementById ('geralt-img');
  let attackSound = new Audio ('assets/sound/SwordsCollide.mp3');
  let deathSound = new Audio ('assets/sound/Decapitation.mp3');
  let winningSound = new Audio ('assets/sound/TaDa.mp3');

  // function to change image border (not invoked anywhere) 
  function changeImageBorder () {
    $ ('#selected-character-id').click (function () {
      $ (this).css ('border', 'solid 5px greenyellow');
    });
  }
   // where Players character will fight defending character
  function fightSequence (characterChosen, characterDefender) {
    var playersCharacter = Object.assign ({}, characterChosen);
    var computersCharacter = Object.assign ({}, characterDefender);
  }

  //on an image click play sound and make border
  function onImgClick () {
    $ ('.img-wrap').one ("click",function (e) {
      console.log ('image clicked');
      console.log (characters);
      attackSound.play ();
      $ ('#selected-character-id').css ('border', 'solid 5px greenyellow');
      $(this).off(e);
    });
  }



  //returns what character is selected and hids the original picture while moving to a new id element on the page.
  function whatCharacterIsClicked () {
    $ ('#stats0, #stats1, #stats2, #stats3').on ("click", function (e) {
      if (this.id === 'stats0') {
        console.log ('clicked geralt!');
        characters.geralt.isSelected = true;
        if (characters.geralt.isSelected) {
          $ ('#selected-character-id').html (
            "<img id='selected-character-id' src='" +
              characters.geralt.imageUrl +
              "' />"
          );
          $('#attack-btn').html("<button type='button' class='btn btn-primary btn-lg'>Attack</button>")
          $('#main-actions').text("You chose Geralt!");
          $ ('#geralt-wrap').hide ();
          $ ('.character-text').hide ();
          
          //$('geralt-img').hide();
        }
        onImgClick ();
        return characters.geralt;
      } else if (this.id === 'stats1') {
        console.log ('clicked ciri!');
        characters.ciri.isSelected = true;
        // checkIfcharacterIsChosen(characters.ciri);
        if (characters.ciri.isSelected) {
          $ ('#selected-character-id').html (
            "<img src='" + characters.ciri.imageUrl + "' />"
          );
          $('#attack-btn').html("<button type='button' class='btn btn-primary btn-lg'>Attack</button>")
          $('#main-actions').text("You chose Ciri!");
          $ ('#ciri-wrap').hide ();
          $ ('.character-text').hide ();
          
        }
        onImgClick ();
        return characters.ciri;
      } else if (this.id === 'stats2') {
        console.log ('clicked imleith!');
        characters.imlerith.isSelected = true;
        if (characters.imlerith.isSelected) {
          $ ('#selected-character-id').html (
            "<img id='selected-character-id' src='" +
              characters.imlerith.imageUrl +
              "' />"
          );
          $('#attack-btn').html("<button type='button' class='btn btn-primary btn-lg'>Attack</button>")
          $('#main-actions').text("You chose Imlerith!");
          $ ('#imlerith-wrap').hide ();
          $ ('.character-text').hide ();
          
        }

        onImgClick ();
        return characters.imlerith;
      } else if (this.id === 'stats3') {
        console.log ('clicked vesemir!');
        characters.vesemir.isSelected = true;
        if (characters.vesemir.isSelected) {
          $ ('#selected-character-id').html (
            "<img id='selected-character-id' src='" +
              characters.vesemir.imageUrl +
              "' />"
          );
          $('#attack-btn').html("<button type='button' class='btn btn-primary btn-lg'>Attack</button>")
          $('#main-actions').text("You chose Vesemir!");
          $ ('#vesemir-wrap').hide ();
          $ ('.character-text').hide ();
          
        }

        onImgClick ();
        return characters.vesemir;
      }
      else
      return;
    });
  }

  //atempt to only call function once when needed.
 
  
  console.log("The chosen one IS: ", whatCharacterIsClicked());
  
  // // function checkIfcharacterIsChosen(characters) {
  // if(characters.isSelected) {
  //     $("#opponents").html("<img src='" + characters.imageUrl + "' />")
  //     }
  // // {
});
