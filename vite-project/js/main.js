import "../styles/style.css";
import { cookies } from "./cookies";
console.log(cookies);

const DOM = (everything = document.querySelector(`everything`));
/* let sorting1 = cookies.filter((cookies) => cookies.usefulIn.includes("arena"));
sorting.forEach(
  (cookies) =>
    function makeCard() {
      `<section class="everything">
    <div class="Category child-1">
      <h3>Type: ${cookies.type}</h3>
      <img src="/images/hollyberry.png" alt="Hollyberry Cookie" />
      <h3>Rarity: Ancient</h3>
      <h2>${cookies.name}</h2>
    </div>
  </section>`;
    }
); //whatever is put in the doughtype box comes out under it);
 */
const sorting = {
  getAllProducts: null,
  getCookies: function () {
    cookies.filter((cookies) => cookies.type.includes(`charge`));
    cookies.forEach((cookies) => {
      console.log(cookies.name);
      everything.insertAdjacentHTML = `<h1>${cookies.name}</h1>`;
    });
  },
};
sorting.getCookies();
//create an array
//create a funciton to inject menu item
//iterate (foreach) over array and insert HTML
//button event listen to filter
//OOP object
