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
  function sendImgStats () {
    characterArray = [
      characters.geralt,
      characters.ciri,
      characters.imlerith,
      characters.vesemir,
    ];
    for (var i = 0; i < characterArray.length; i++) {
      $ ('#stats' + i).html (
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

  sendImgStats ();
  //audio variables
  let geraltImg = document.getElementById ('geralt-img');
  let attackSound = new Audio ('assets/sound/SwordsCollide.mp3');
  let deathSound = new Audio ('assets/sound/Decapitation.mp3');
  let winningSound = new Audio ('assets/sound/TaDa.mp3');

  function changeImageBorder () {
    $ ('#selected-character-id').click (function () {
      $ (this).css ('border', 'solid 5px greenyellow');
    });
  }

  function fightSequence (characterChosen, characterDefender) {
    var playersCharacter = Object.assign ({}, characterChosen);
    var computersCharacter = Object.assign ({}, characterDefender);
  }

  function onImgClick () {
    $ ('.img-wrap').click (function () {
      console.log ('image clicked');
      console.log (characters);
      attackSound.play ();
      $ ('#selected-character-id').css ('border', 'solid 5px greenyellow');
    });
  }


  function whatCharacterIsClicked () {
    $ ('#stats0, #stats1, #stats2, #stats3').click (function (e) {
      if (this.id === 'stats0') {
        console.log ('clicked geralt!');
        characters.geralt.isSelected = true;
        if (characters.geralt.isSelected) {
          $ ('#selected-character-id').html (
            "<img id='selected-character-id' src='" +
              characters.geralt.imageUrl +
              "' />"
          );
          $ ('#geralt-wrap').hide ();
          $ ('.character-text').hide ();
          //$('geralt-img').hide();
        }
        onImgClick ();
      } else if (this.id === 'stats1') {
        console.log ('clicked ciri!');
        characters.ciri.isSelected = true;
        // checkIfcharacterIsChosen(characters.ciri);
        if (characters.ciri.isSelected) {
          $ ('#selected-character-id').html (
            "<img src='" + characters.ciri.imageUrl + "' />"
          );
          $ ('#ciri-wrap').hide ();
          $ ('.character-text').hide ();
        }
        onImgClick ();
      } else if (this.id === 'stats2') {
        console.log ('clicked imleith!');
        characters.imlerith.isSelected = true;
        if (characters.imlerith.isSelected) {
          $ ('#selected-character-id').html (
            "<img id='selected-character-id' src='" +
              characters.imlerith.imageUrl +
              "' />"
          );
          $ ('#imlerith-wrap').hide ();
          $ ('.character-text').hide ();
        }

        onImgClick ();
      } else if (this.id === 'stats3') {
        console.log ('clicked vesemir!');
        characters.vesemir.isSelected = true;
        if (characters.vesemir.isSelected) {
          $ ('#selected-character-id').html (
            "<img id='selected-character-id' src='" +
              characters.vesemir.imageUrl +
              "' />"
          );
          $ ('#vesemir-wrap').hide ();
          $ ('.character-text').hide ();
        }

        onImgClick ();
      }
    });
  }

  

  // // function checkIfcharacterIsChosen(characters) {
  // if(characters.isSelected) {
  //     $("#opponents").html("<img src='" + characters.imageUrl + "' />")
  //     }
  // // {
});
