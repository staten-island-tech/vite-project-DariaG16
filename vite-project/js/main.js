import "../styles/style.css";
import { cookies } from "./cookies";
console.log(cookies);

let sorting = cookies.filter((cookies) => cookies.usefulIn.includes("arena"));
sorting.forEach((cookies) => );

sorting.insertAdjacentHTML(
    `beforeend`,
    `
    <div class="output1">
    <h2 id="cookieNam" class="output" >Cookie:</h2>
    <p id="rarityOut" class="output">Rarity: ${}</p> 
    <p id="skillTypeOut" class="output">Skill Type: ${}</p> 
    <button id="remove">REMOVE COOKIE</button></div>`
  ); //whatever is put in the doughtype box comes out under it