// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const familyDiv = document.getElementById('family');
appDiv.innerHTML = `<h1>Fam Finder</h1>`;

// Simple variables
let name = 'Chet Hill';
let age = 45;

console.log(`Name: ${name} | Age: ${age}`);

// Object Literal
let person = {
  name: 'Elizabeth Hill',
  age: 48,
};

console.log(`Name: ${person.name} Age: ${person.age}`);

// Array of Objects
let people = [
  {
    name: 'Cassandra Romero',
    age: 28,
  },
  {
    name: 'Malichi Hill',
    age: 22,
  },
  {
    name: 'Angelia Hill',
    age: 19,
  },
  {
    name: 'Dion Romero',
    age: 10,
  },
];

// Class Declaration
class Family {
  constructor(father, mother, children) {
    this.father = father;
    this.mother = mother;
    this.children = children;
  }

  familyMessage() {
    return `
      <h3>Father: ${this.father}<h3>
      <h3>Mother: ${this.mother}<h3>
      <p>Children: ${this.children}</p>
    `;
  }

  coupleMessage() {
    return `
      Husband: ${this.father}
      Wife: ${this.mother}
    `;
  }
}

// Function
let chill = (father, mother, children) => {
  father = name;
  mother = person.name;
  console.log(`Father: ${father}`);
  console.log(`Mother: ${mother}`);
  console.log('Children: ');
  children = people.map((child) => {
    console.log(`Name: ${child.name}`);
  });
};

// Use Class
let chet = new Family('Chet Hill', 'Elizabeth Hill', [
  'Cassandra Romero',
  'Malichi Hill',
  'Angelia Hill',
]);

let bryon = new Family('Bryon Hill', 'Porcia Redic', [
  'Bryon Hill Jr.',
  'Kaysha Hill',
  'Kyra Hill',
]);

let couple = (husband, wife) => {
  husband = chet.father;
  wife = chet.mother;
  console.log(`${husband} is married to ${wife}`);
};

chill();
couple();

familyDiv.innerHTML = chet.familyMessage();

console.log(chet.familyMessage());
console.log(bryon.familyMessage());

console.log(chet.coupleMessage());
console.log(bryon.coupleMessage());
