/* eslint-disable no-console */
'use strict';

let loaf = {
  flour: 300,
  water: 210,
  hydration(){
    return(loaf.water / loaf.flour) * 100;
  }
};

console.log(loaf.hydration());
console.log(Object.keys(loaf));

let weirdObj = {
  foo: 'oof',
  bar: 2,
  fum: true,
  quux: 'fuxx',
  spam: null
};

for(let property in weirdObj) {
  console.log(`${property} and ${weirdObj[property]}`);
}

let food = {
  meals: ['breakfast', 'second breakfast', 'elevenses',
    'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(food.meals[3]);

let arrayOfUs = [
  {
    name: 'Brandon',
    jobTitle: 'student'
  },
  {
    name: 'Liz',
    jobTitle: 'server',
    boss: 'Brandon'
  },
  {
    name: 'Kevin',
    jobTitle: 'bartender',
    boss: 'Brandon'
  },

  {
    name: 'Noah',
    jobTitle: 'laborer',
    boss: 'Brandon'
  }

];

for(let obj in arrayOfUs) {
  if(arrayOfUs[obj].boss === undefined) {
    console.log((`"${arrayOfUs[obj].jobTitle} ${arrayOfUs[obj].name} doesn't report to anybody."`));
  } else {
    console.log(`"${arrayOfUs[obj].jobTitle} ${arrayOfUs[obj].name} reports to ${arrayOfUs[obj].boss}."`);
  }
}

const createCharacter = (name, nickname, race, origin, attack, defense) => {
  const character = {
    this.name = name,
    this.nickname = nickname,
    this.race = race,
    this.origin = origin,
    this.attack = attack,
    this.defense = defense,
    this.weapon = weapon,
    describe = function() {
      return `${name} is a ${race} from ${origin} who uses a ${weapon}`;
  },
    evaluateFight = function(character) {

      let myAttack = `${this.attack}`;
      let enemyDefense = `${enemy.defense}`;

      let myDefense = `${this.defense}`;
      let enemyAttack = `${enemy.attack}`;

      let damage = myAttack > enemyDefense ? myAttack - enemyDefense : 0;
      let defense = myDefense < enemyAttack ? enemyAttack - myDefense : 0;

      

      return `Your opponent takes ${damage} damage and you receive ${defense} damage`;
    }
  };

  return obj;
}

const lotrArray = [
  new Character('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'Wizard Staff'), 
  new Character('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'Ring'), 
  new Character('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'), 
  new Character('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'), 
  new Character('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow'), 
  new Character('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 8, 2, 'Hadhafang')
];

lotrArray.find(e => e.nickname === 'aragorn').describe(); 

const hobbits = lotrArray.filter(e => e.race === 'Hobbit');

const attackOverFive = lotrArray.filter(e => e.attack > 5);

console.log(attackOverFive);