let students = [
  "Mike",
  "Jacob",
  "Brandon",
  "Chico",
  "DeShawn",
  "Erica",
  "Jordan",
  "Josh D",
  "Josh H",
  "Dominic",
  "Jessica",
];
let picked = [];
const button = document.querySelector("button");
const popcorn = () => {
  const randomNumber = () => Math.floor(Math.random() * students.length);
  let random = randomNumber();
  console.log(random);
  let pick = students[random];
  console.log(pick);
  students.splice(random, 1);
  console.log(students);
  const P = document.querySelector("p");
  P.innerText = pick;
  document.body.append(P);
};
button.addEventListener("click", popcorn);
