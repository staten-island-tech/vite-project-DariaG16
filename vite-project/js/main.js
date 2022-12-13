import "../styles/style.css";
import { cookies } from "./cookies";
console.log(cookies);
const DOMselectors = {
  everything: document.querySelector(`everything`),
  dropDown: document.querySelector(`dropDown`),
  lightDark: document.querySelector(`#lightDark`),
  card: document.querySelector(`card`),
};
let sorting1 = cookies.filter((cookies) => cookies.usefulIn.includes("arena"));
sorting1.forEach((cookies) =>
  DOMselectors.card.insertAdjacentHTML(
    "beforeend",
    `<div class="Category child-1">
      <h3>Type: ${cookies.type}</h3>
      <img src="/images/hollyberry.png" alt="Hollyberry Cookie" />
      <h3>Rarity: Ancient</h3>
      <h2>${cookies.name}</h2>
      </div>`
  )
);

/* const sorting = {
  getAllProducts: null,
  getCookies: function () {
    cookies.filter((cookies) => cookies.type.includes(`charge`));
    cookies.forEach((cookies) => {
      console.log(cookies.name);
      DOM.everything.insertAdjacentHTML = `<h1>${cookies.name}</h1>`;
    });
  },
}; 
sorting.getCookies(); */
//create an array :D
//create a funciton to inject menu item :D
//iterate (foreach) over array and insert HTML
/* const result = cookies.filter((cookie) => cookie.skill === "ranged"); //filters the cookies based on their skills
console.log(result);

cookies.forEach((cookies) => {
  DOM.everything.insertAdjacentHTML(
    afterend,
    `<div class="Category child-1">
     <h3>Type: Defense</h3>
    <img src="/images/hollyberry.png" alt="Hollyberry Cookie" />
    <h3>Rarity: Ancient</h3>
    <h2>Hollyberry cookie</h2>
    </div>`
  );
  console.log(cookies.name);
  console.log(cookies.skill);
  cookies.usefulIn.forEach((usefulIn) => {
    console.log(usefulIn);
  });
}); */
//button event listen to filter
//OOP object
