import "../styles/style.css";
import { cookies } from "./cookies";
console.log(cookies);

const DOMselectors = {
  everything: document.querySelector(`#everything`),
  choosingCookies: document.querySelector(`#choosingCookies`),
  dropDown: document.querySelector(`dropDown`),
  lightDark: document.querySelector(`#lightDark`),
  card: document.querySelector(`card`),
};
let usefulInArena = cookies.filter((cookies) =>
  cookies.usefulIn.includes(" arena")
);
let usefulInWE = cookies.filter((cookies) =>
  cookies.usefulIn.includes(" world exploration")
);
let usefulInMM = cookies.filter((cookies) =>
  cookies.usefulIn.includes(" master mode")
);
let usefulInOdyssey = cookies.filter((cookies) =>
  cookies.usefulIn.includes(" odyssey")
);
let usefulInTOSC = cookies.filter((cookies) =>
  cookies.usefulIn.includes(" tosc")
);
let usefulInGuild = cookies.filter((cookies) =>
  cookies.usefulIn.includes(" guild battle")
);
let usefulInDecor = cookies.filter((cookies) =>
  cookies.usefulIn.includes(" decor")
);
let usefulInBC = cookies.filter((cookies) =>
  cookies.usefulIn.includes(" beauty contest")
);

let common = cookies.filter((cookies) => cookies.rarity.includes(" common"));
let rare = cookies.filter((cookies) => cookies.rarity.includes(" rare"));
let epic = cookies.filter((cookies) => cookies.rarity.includes(" epic"));
let superEpic = cookies.filter((cookies) =>
  cookies.rarity.includes(" superEpic")
);
let legendary = cookies.filter((cookies) =>
  cookies.rarity.includes(" legendary")
);
let ancient = cookies.filter((cookies) => cookies.rarity.includes(" ancient"));
let special = cookies.filter((cookies) => cookies.rarity.includes(" special"));
let superUltraRare = cookies.filter((cookies) =>
  cookies.rarity.includes(" super-ultra-extra-rare")
);

let charge = cookies.filter((cookies) => cookies.type.includes(" charge"));
let defense = cookies.filter((cookies) => cookies.type.includes(" defense"));
let bomber = cookies.filter((cookies) => cookies.type.includes(" bomber"));
let ranged = cookies.filter((cookies) => cookies.type.includes(" ranged"));
let ambush = cookies.filter((cookies) => cookies.type.includes(" ambush"));
let magic = cookies.filter((cookies) => cookies.type.includes(" magic"));
let healing = cookies.filter((cookies) => cookies.type.includes(" healing"));
let support = cookies.filter((cookies) => cookies.type.includes(" support"));
let bts = cookies.filter((cookies) => cookies.type.includes(" bts"));

usefulInArena.forEach((cookies) =>
  DOMselectors.everything.insertAdjacentHTML(
    "beforeend",
    `<div class="Category">
      <h3>Type: ${cookies.type}</h3>
      <h3>Rarity: ${cookies.rarity}</h3>
      <h3>Useful In: ${cookies.usefulIn}</h3>
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
