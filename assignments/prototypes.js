/*
  Object oriented design is commonly used in video games.
  For this part of the assignment you will be implementing several constructor
  functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Parent -------------------------------
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
  this.name = attributes.name;
}
// Parent's destroy function -------------
GameObject.prototype.destroy = function() {
  return ( this.name + 'was removed from the game.');
}

// Child ----------------------------------------------------
function CharacterStats(attributes) {
  GameObject.call(this, attributes);

  this.healthPoints = attributes.healthPoints;
}
// child's takedamage funcution -----------------------------
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return( this.name + ' took damage.');

}

// grandchild-----------------------------------------------------------------
function Humanoid(attributes) {
  CharacterStats.call(this, attributes);
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}

// adding the grandchild's function -----------------------------------------
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return ( this.name + ' offers a greeting in. ' + this.language)



};
Humanoid.prototype.healthLeft = function(health) {

  if (health <= 0 ) {
   return ( this.name + ' has been killed ')
  }
  else {


    return ( this.name + ' has  ' + this.healthPoints + ' left ')



  }
};




// Test you work by un-commenting these 3 objects and the list of console logs below:

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used
// to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

//--- The villain creator
function villain (vaillianAttributes) {
Humanoid.call(this, vaillianAttributes);
this.defend = vaillianAttributes.defend;

}
//-- The villain actions
villain.prototype = Object.create(Humanoid.prototype);

villain.prototype.frontStab = function(character, damage) {
  character.healthPoints = character.healthPoints - damage;
 return ( this.name + " front stabs  " + character.name + " for " + damage + " damage ");

};


//- the hero creator-----
function Hero (attributes) {
  Humanoid.call (this, attributes)

}
//- the hero abilities
Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.heroicStab = function (character, damage)
{
  character.healthPoints = character.healthPoints - damage
  return ( this.name + " Heroically stabs with a devastating blow " + character.name + " for " + damage + " damage ");



}
Hero.prototype.flex = function (character, heal)
{
  character.healthPoints = character.healthPoints + heal
  return ( this.name + " Heroically flexes and heals  " + character.name + " for " + heal + "  health  ");



}


  const weeb = new villain({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 2,
      height: 4,
    },
    healthPoints: 20,
    name: "Mc Stabb'in ",
    team: 'Very Bad',
    weapons: [
      'Katana',
    ],
    language: 'Common Tongue',
  });

 const knight = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: " Mr StrongGoodPerson ",
    team: 'Very Not Bad',
    weapons: [
      'The Most Versatile of weapons',
    ],
    language: 'Common Tongue',
  });


console.log(weeb.frontStab(knight, 5));
console.log(knight.healthLeft (knight.healthPoints) );
console.log(knight.flex(knight, 20))
console.log(knight.healthLeft (knight.healthPoints) );
console.log(weeb.frontStab(knight, 5));
console.log(knight.healthLeft (knight.healthPoints) );
console.log(knight.heroicStab(weeb, 100));
console.log(weeb.healthLeft (weeb.healthPoints) );

