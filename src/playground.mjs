// Spread syntax
const fruits = ["Apple", "Banana", "Orange"];
const vegetables = ["Cucumber", "Radish"];

console.log([...fruits, ...vegetables]);

// JS objects - a data structure that associates keys with values
const developer = {
  salary: 100000,
  experience: 4.5,
  techStack: ["Vue", "HTML", "CSS"],
  lookingForWork: true,
  doubleSalary() {
    this.salary *= 2;
    this.lookingForWork = false;
  },
};

developer.doubleSalary();
console.log(developer.salary);

export const eventOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

export const multiply = (num1, num2) => num1 * num2;

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((number) => {
  return number * number;
});
console.log(squares);

// Dynamic Object Properties

const favouriteFood = "sushi";

const goodFoods = {
  [favouriteFood]: true,
};

console.log(goodFoods);

// lets make a timer-based alternating thing
// setTimeout(() => {
//   console.log("I will print two seconds after start...BOOP");
// }, 2000);

// whenever you use setinterval, you should use a clear interval so it doesn't end up running indefinitely somewhere in background
const interval = setInterval(() => {
  console.log("I will print two seconds after start, forever...BOOP");
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);
