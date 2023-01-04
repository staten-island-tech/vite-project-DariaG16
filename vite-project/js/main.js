import "../styles/style.css";
import { cookies } from "./cookies";
console.log(cookies);

const DOMselectors = {
  everything: document.querySelector(`#everything`),
  top: document.querySelector(`#top`),
  choosingCookies: document.querySelector(`#choosingCookies`),
  dropDown: document.querySelector(".dropDown"),
  lightDark: document.querySelector(`#lightDark`),
  raritybtn: document.querySelector(`#raritybtn`),
  typebtn: document.querySelector(`#typebtn`),
  usefulInBtn: document.querySelector(`#usefulInBtn`),
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
let common = cookies.filter((cookies) => cookies.rarity.includes("common"));
let rare = cookies.filter((cookies) => cookies.rarity.includes("rare"));
let epic = cookies.filter((cookies) => cookies.rarity.includes("epic"));
let superEpic = cookies.filter((cookies) => cookies.rarity.includes("SEpic"));
let legendary = cookies.filter((cookies) =>
  cookies.rarity.includes("legendary")
);
let ancient = cookies.filter((cookies) => cookies.rarity.includes("ancient"));
let special = cookies.filter((cookies) => cookies.rarity.includes("special"));

let charge = cookies.filter((cookies) => cookies.type.includes("charge"));
let defense = cookies.filter((cookies) => cookies.type.includes("defense"));
let bomber = cookies.filter((cookies) => cookies.type.includes("bomber"));
let ranged = cookies.filter((cookies) => cookies.type.includes("ranged"));
let ambush = cookies.filter((cookies) => cookies.type.includes("ambush"));
let magic = cookies.filter((cookies) => cookies.type.includes("magic"));
let healing = cookies.filter((cookies) => cookies.type.includes("healer"));
let support = cookies.filter((cookies) => cookies.type.includes("support"));

let temp1 = 0;
const rarities = [
  "Click here!",
  "Common",
  "Rare",
  "Epic",
  "Super-Epic",
  "Legendary",
  "Ancient",
  "Special",
  "Click here!",
];
if (temp1 == 0) {
  makeCards(cookies);
}
DOMselectors.raritybtn.addEventListener("click", function () {
  temp1++;
  DOMselectors.raritybtn.innerHTML = rarities[temp1];
  if (temp1 == 1) {
    makeCards(common);
  } else if (temp1 == 2) {
    makeCards(rare);
  } else if (temp1 == 3) {
    maceCards(epic);
  } else if (temp1 == 4) {
    maceCards(superEpic);
  } else if (temp1 == 5) {
    maceCards(legendary);
  } else if (temp1 == 6) {
    maceCards(ancient);
  } else if (temp1 == 7) {
    maceCards(special);
  } else if (temp1 > 7) {
    removeCard();
    temp1 = 0;
  }
});

let temp3 = 0;
const usefulIn = [
  "Click here!",
  "Arena",
  "World-Exploration",
  "Odyssey",
  "Tower-Of-Sweet-Chaos",
  "Guild-Battle",
  "Decor",
  "Beauty-Contest",
  "Master-Mode",
  "Click here!",
];
DOMselectors.usefulInBtn.addEventListener("click", function () {
  temp3++;
  DOMselectors.usefulInBtn.innerHTML = usefulIn[temp3];
  if (temp3 == 1) {
    maceCards(usefulInArena);
  } else if (temp3 == 2) {
    maceCards(usefulInWE);
  } else if (temp3 == 3) {
    maceCards(usefulInOdyssey);
  } else if (temp3 == 4) {
    maceCards(usefulInTOSC);
  } else if (temp3 == 5) {
    maceCards(usefulInGuild);
  } else if (temp3 == 6) {
    maceCards(usefulInDecor);
  } else if (temp3 == 7) {
    maceCards(usefulInBC);
  } else if (temp3 == 8) {
    maceCards(usefulInMM);
  } else if (temp3 > 8) {
    removeCard();
    temp3 = 0;
  }
});

let temp2 = 0;
const type = [
  "Click here!",
  "Charge",
  "Defense",
  "Bomber",
  "Ranged",
  "Ambush",
  "Magic",
  "Healing",
  "Support",
  "Click here!",
];
DOMselectors.typebtn.addEventListener("click", function () {
  temp2++;
  DOMselectors.typebtn.innerHTML = type[temp2];
  if (temp2 == 1) {
    makeCards(charge);
  } else if (temp2 == 2) {
    makeCards(defense);
  } else if (temp2 == 3) {
    makeCards(bomber);
  } else if (temp2 == 4) {
    makeCards(ranged);
  } else if (temp2 == 5) {
    makeCards(ambush);
  } else if (temp2 == 6) {
    makeCards(magic);
  } else if (temp2 == 7) {
    makeCards(healing);
  } else if (temp2 == 8) {
    makeCards(support);
  } else if (temp2 == 9) {
    removeCard();
    temp2 = 0;
  }
});

function removeCard() {
  const cards = document.querySelectorAll(".Category");
  const cardsArray = Array.from(cards);
  cardsArray.forEach((cards) => {
    cards.remove();
  });
}

document
  .querySelector("#lightDark")
  .addEventListener("click", function helpPlease() {
    if (document.body.classList.contains("warm")) {
      document.body.classList.add("cool");
      document.body.classList.remove("warm");
    } else {
      document.body.classList.add("warm");
      document.body.classList.remove("cool");
    }
  });

function makeCards(type) {
  removeCard();
  type.forEach((cookies) =>
    DOMselectors.everything.insertAdjacentHTML(
      "beforeend",
      `<div class="Category cards" >
    <h3>Type: ${cookies.type}</h3>
    <h3>Rarity: ${cookies.rarity}</h3>
    <h3>Useful In: ${cookies.usefulIn}</h3>
    <img class="images" src="${cookies.img}" alt="${cookies.name}">
    <h2>${cookies.name}</h2>
    </div>`
    )
  );
}
function maceCards(usefulIn) {
  removeCard();
  usefulIn.forEach((cookies) =>
    DOMselectors.everything.insertAdjacentHTML(
      "beforeend",
      `<div class="Category cards" >
    <h3>Type: ${cookies.type}</h3>
    <h3>Rarity: ${cookies.rarity}</h3>
    <h3>Useful In: ${cookies.usefulIn}</h3>
    <img class="images" src="${cookies.img}" alt="${cookies.name}">
    <h2>${cookies.name}</h2>
    </div>`
    )
  );
}
