var tardis = {
        name : "T.A.R.D.I.S.",
        hp : 180, 
        attack : 15,
        defense : 15,
        basePowerAttack : 15,
        counterAttackPower : 17,
        id : $("#tardis"),
        src : "assets/images/tardis.png"
    };
var angel = {
        name : "Weeping Angel",
        hp : 200, 
        attack : 15,
        defense : 15,
        basePowerAttack : 15,
        counterAttackPower : 17,
        id : $("#tardis"),
        src : "assets/images/angel.jpg"
    };
var dalek = {
        name : "Dalek",
        hp : 190, 
        attack : 15,
        defense : 15,
        basePowerAttack : 15,
        counterAttackPower : 17,
        id : $("#tardis"),
        src : "assets/images/dalek.png"
    };
var cyberman = {
        name : "Cyberman",
        hp : 170, 
        attack : 15,
        defense : 15,
        basePowerAttack : 15,
        counterAttackPower : 17,
        id : $("#tardis"),
        src : "assets/images/cyberman.jpg"
    };
var Game = {
    charList : [tardis, angel, dalek, cyberman],
    //holds the list of characters that the player can choose from to be
    chosenChar : [],
    //holds the character that the player picks to be
    enemiesArr : [],
    //holds the list of characters that the player can choose from to fight
    chosenEnemy : [],
    //holds the character that the player chooses to fight first
    defeatedArr : []
    //holds the list of characters that the player has defeated
};

function showAllCharacters() {
    for (var i = 0; i < Game.charList.length; i++) {
        var image = $("<img>");
        image.attr("src", Game.charList[i].src);
        //assigns the src from the objects in the charList 
        image.attr("data-number", i);
        //assigns a number that equals the index of the object
        image.attr("value", Game.charList[i].name);
        //assigns the name from the objects in the charList
        image.addClass("characters");
        //adds a class for css purposes
        $("#char-list").append(image);
    }
};
//displays the characters that the player can choose to be

function showChosenChar() {
    for (var i = 0; i < Game.chosenChar.length; i++) {
        var chosenImage = $('<img>');
        chosenImage.attr("src", Game.chosenChar[i].src);
        //assigns the src from the object in the chosenChar
        chosenImage.attr("data-number", i);
        //assigns a number that equals the index of the object
        chosenImage.attr("value", Game.chosenChar[i].name);
        //assigns the name from the object in the chosenChar
        chosenImage.addClass("characters");
        //adds a class for css purposes
        $("#chosen-char").append(chosenImage);
    }
};
//displays the character that the player chose to be

function showAllEnemies() {
    for (var i = 0; i < Game.enemiesArr.length; i++) {
        var enemyImages = $('<img>');
        enemyImages.attr("src", Game.enemiesArr[i].src);
        //assigns the src from the objects in the enemiesArr
        enemyImages.attr("data-number", i);
        //assigns a number that equals the index of the object
        enemyImages.attr("value", Game.enemiesArr[i].name);
        //assigns the name from the objects in the enemiesArr
        enemyImages.addClass("characters");
        //adds a class for css purposes
        $("#enemies-list").append(enemyImages);
    }
};
//displays the characters that are available to choose to attack

function showChosenEnemy() {
    for (var i = 0; i < Game.chosenEnemy.length; i++) {
        var enemyChosenImage = $('<img>');
        enemyChosenImage.attr("src", Game.chosenEnemy[i].src);
        //assigns the src from the object in the chosenEnemy
        enemyChosenImage.attr("data-number", i);
        //assigns a number that equals the index of the object
        enemyChosenImage.attr("value", Game.chosenEnemy[i].name);
        //assigns the name from the object in the chosenEnemy
        enemyChosenImage.addClass("characters");
        //adds a class for css purposes
        $("#chosen-enemy").append(enemyChosenImage);
    }
};
//displays the character that the player chose to fight

function enemyKilled() {
    if (Game.chosenEnemy[0].hp <= 0) {
       
        Game.defeatedArr.push(Game.chosenEnemy[0]);
        //pushes the defeated enemy into the defeatedArr
        
        if (Game.enemiesArr.length === 2) {
            window.alert("You've conquered one alien race, can you conquer another?");
        }
        //displays when there are two enemies left
        
        if (Game.enemiesArr.length === 1) {
            window.alert("You've conquered two alien races, can you become the master race?");
        }
        //displays when there is one enemy left
        
        Game.chosenEnemy = [];
        //resets the chosen enemy array to empty
        $("#chosen-enemy").empty();
        //empties what is displayed in the chosen-enemy div
    }
};
//function is only run when the chosenEnemy has <= 0 hp

function gameOver() {
    if (Game.chosenChar[0].hp <= 0) {
        window.alert("You've failed to become the master race.");
    }
};
//function is only run when the chosenChar has an hp value <= 0
    
function youWin() {
        window.alert("Congratulations, you've become the master race!")
};
//tells the player that they won

$("#char-list").on("click", ".characters", function(event) {
    var clickedChar = $(this).data("number");
    //assigns the value of the number attribute of the specific clicked object (this) to clickedChar
    Game.chosenChar.push(Game.charList[clickedChar]);
    //pushes the object that was clicked on from the charList to the chosenChar array
    Game.charList.splice(clickedChar, 1);
    //takes out the clicked on character out of the charList
    for (var i = 0; i < Game.charList.length; i++){
        Game.enemiesArr.push(Game.charList[i]);
        //pushes the spliced charList to the enemiesArr
    }
    
    $("#char-list").empty();
    
    showChosenChar();
    //displays the character that the player chose to be
    showAllEnemies();
    //displays the characters that are available to choose to attack
    window.alert("Chose an enemy to fight");
    //tells player to pick an enemy
});
//on click event for the char-list div

$("#enemies-list").on("click", ".characters", function(event) {
    var clickedEnemy = $(this).data("number");
    //assigns the value of the number attribute of the specific clicked object (this) to clickedEnemy
    Game.chosenEnemy.push(Game.enemiesArr[clickedEnemy]);
    //pushes the object that was clicked on from the enemiesArr to the chosenEnemy array
    Game.enemiesArr.splice(clickedEnemy, 1);
    //takes out the clicked on character out of the charList
    
    $("#enemies-list").empty();
    
    showAllEnemies();
    //displays the characters that are available to choose to attack
    showChosenEnemy();
    //displays the character that the player chose to fight
    window.alert("Attack!");
    //tells player to attack their enemy
});
//on click event for the enemies-list div

$("#attack-button").on("click", function(event) {
    Game.chosenChar[0].hp -= Game.chosenEnemy[0].counterAttackPower;
    //subtracts the enemies counterAttackPower value from your chosen characters hp value
    Game.chosenChar[0].basePowerAttack += Game.chosenChar[0].attack;
    //adds your characters attack power to your characters baseAttackPower to build power
    Game.chosenEnemy[0].hp -= Game.chosenChar[0].basePowerAttack;
    //subtracts your characters built up power attack from the chosen enemies hp
    
    var chosenCharHP = $('#chosen-char-hp');
    var chosenEnemyHP = $('#chosen-enemy-hp');
    chosenCharHP.text(Game.chosenChar[0].hp);
    chosenEnemyHP.text(Game.chosenEnemy[0].hp);
    
    enemyKilled();
    
    if(Game.defeatedArr.length === 3) {
        youWin();
    }
});
//on click event for the attack-button

$(document).ready(function () {
    showAllCharacters();
    window.alert("Choose an alien race to take over the world!");
});