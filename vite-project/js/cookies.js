import "../styles/style.css";

const cookies = [
  {
    name: "hollyberry cookie",
    type: "defense",
    rarity: "ancient",
    img: "/hollyberry.png",
    usefulIn: [" arena", " world exploration", " master mode"],
  },
  {
    name: "pure vanilla cookie",
    type: "healer",
    rarity: "ancient",
    img: "/pure_vanilla.png",
    usefulIn: [
      " arena",
      "  world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "dark cacao cookie",
    type: "charge",
    rarity: "ancient",
    img: "/dark_cacao.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "black pearl cookie",
    type: "ambush",
    rarity: "legendary",
    img: "/black_pearl.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "frost queen cookie",
    type: "magic",
    rarity: "legendary",
    img: "/frost_queen.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "sea fairy cookie",
    type: "bomber",
    rarity: "legendary",
    img: "/sea_fairy.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "sherbet cookie",
    type: "ranged",
    rarity: "SEpic",
    img: "/sherbet.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "clotted cream cookie",
    type: "magic",
    rarity: "SEpic",
    img: "/clotted_cream.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "oyster cookie",
    type: "support",
    rarity: "SEpic",
    img: "/oyster.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "vampire cookie",
    type: "ambush",
    rarity: "epic",
    img: "/vampire.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "sorbet shark cookie",
    type: "ambush",
    rarity: "epic",
    img: "/sorbet_shark.png",
    usefulIn: [" world exploration", " arena", " master mode"],
  },
  {
    name: "mala sauce cookie",
    type: "charge",
    rarity: "epic",
    img: "/mala_sauce.png",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "cream puff cookie",
    type: "support",
    rarity: "epic",
    img: "/cream_puff.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "eclair cookie",
    type: "support",
    rarity: "epic",
    img: "/eclair.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "caramel arrow cookie",
    type: "ranged",
    rarity: "epic",
    img: "/caramel_arrow.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "twizzly gummy cookie",
    type: "ranged",
    rarity: "epic",
    img: "/twizzly_gummy.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "purple yam cookie",
    type: "charge",
    rarity: "epic",
    img: "/purple_yam.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "wildberry cookie",
    type: "defense",
    rarity: "epic",
    img: "/wildberry.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "cotton cookie",
    type: "support",
    rarity: "epic",
    img: "/cotton.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "financier cookie",
    type: "defense",
    rarity: "epic",
    img: "/financier.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "chili pepper cookie",
    type: "ambush",
    rarity: "epic",
    img: "/chili_pepper.png",
    usefulIn: [" world exploration", " arena"],
  },
  {
    name: "espresso cookie",
    type: "magic",
    rarity: "epic",
    img: "/espresso.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "affogato cookie",
    type: "bomber",
    rarity: "epic",
    img: "/affogato.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "pumpkin pie cookie",
    type: "magic",
    rarity: "epic",
    img: "/pumpkin_pie.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "crunchy chip cookie",
    type: "charge",
    rarity: "epic",
    img: "/crunchy_chip.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "cream unicorn cookie",
    type: "healer",
    rarity: "epic",
    img: "/cream_unicorn.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "pomegranate cookie",
    type: "support",
    rarity: "epic",
    img: "/pomegranate.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "dark choco cookie",
    type: "charge",
    rarity: "epic",
    img: "/dark_choco.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "cherry blossom cookie",
    type: "ambush",
    rarity: "epic",
    img: "/cherry_blossom.png",
    usefulIn: [" guild battle", " tosc", " arena"],
  },
  {
    name: "licorice cookie",
    type: "magic",
    rarity: "epic",
    img: "/licorice.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "strawberry crepe cookie",
    type: "defense",
    rarity: "epic",
    img: "/strawberry_crepe.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "rye cookie",
    type: "ranged",
    rarity: "epic",
    img: "/rye.png",
    usefulIn: [" guild battle", " tosc", " arena"],
  },
  {
    name: "black raisin cookie",
    type: "ambush",
    rarity: "epic",
    img: "/black_raisin.png",
    usefulIn: [" arena", " world exploration", " master mode", " tosc"],
  },
  {
    name: "raspberry cookie",
    type: "charge",
    rarity: "epic",
    img: "/raspberry.png",
    usefulIn: [" arena", " world exploration", " master mode", " tosc"],
  },
  {
    name: "herb cookie",
    type: "healer",
    rarity: "epic",
    img: "/herb.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "pastry cookie",
    type: "ranged",
    rarity: "epic",
    img: "/pastry.png",
    usefulIn: [" arena", " tosc"],
  },
  {
    name: "almond cookie",
    type: "support",
    rarity: "epic",
    img: "/almond.png",
    usefulIn: [" arena", " guild battle"],
  },
  {
    name: "werewolf cookie",
    type: "charge",
    rarity: "epic",
    img: "/werewolf.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "squid ink cookie",
    type: "magic",
    rarity: "epic",
    img: "/squid_ink.png",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "tiger lily cookie",
    type: "ranged",
    rarity: "epic",
    img: "/tiger_lily.png",
    usefulIn: [" arena", " world exploration", " guild battle"],
  },
  {
    name: "cocoa cookie",
    type: "defense",
    rarity: "epic",
    img: "/cocoa.png",
    usefulIn: [" world exploration", " master mode", " odyssey", " tosc"],
  },
  {
    name: "latte cookie",
    type: "magic",
    rarity: "epic",
    img: "/latte.png",
    usefulIn: [" world exploration", " master mode", " odyssey", " tosc"],
  },
  {
    name: "moon rabbit cookie",
    type: "defense",
    rarity: "epic",
    img: "/moon_rabbit.png",
    usefulIn: [" world exploration", " master mode", " odyssey", " tosc"],
  },
  {
    name: "lilac cookie",
    type: "support",
    rarity: "epic",
    img: "/lilac.png",
    usefulIn: [" arena", " world exploration", " guild battle"],
  },
  {
    name: "milk cookie",
    type: "defense",
    rarity: "epic",
    img: "/milk.png",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "madeleine cookie",
    type: "defense",
    rarity: "epic",
    img: "/madeleine.png",
    usefulIn: [" arena", " world exploration", " guild battle", " odyssey"],
  },
  {
    name: "snow sugar cookie",
    type: "magic",
    rarity: "epic",
    img: "/snow_sugar.png",
    usefulIn: [" arena", " world exploration", " guild battle"],
  },
  {
    name: "tea knight cookie",
    type: "charge",
    rarity: "epic",
    img: "/tea_knight.png",
    usefulIn: [" arena", " world exploration", " guild battle"],
  },
  {
    name: "mint choco cookie",
    type: "support",
    rarity: "epic",
    img: "/mint_choco.png",
    usefulIn: [" arena", " world exploration", " guild battle"],
  },
  {
    name: "mango cookie",
    type: "magic",
    rarity: "epic",
    img: "/mango.png",
    usefulIn: [" world exploration"],
  },
  {
    name: "fig cookie",
    type: "support",
    rarity: "epic",
    img: "/fig.png",
    usefulIn: [" world exploration", " arena"],
  },
  {
    name: "kumiho cookie",
    type: "charge",
    rarity: "epic",
    img: "/kumiho.png",
    usefulIn: [" world exploration", " master mode", " arena", " tosc"],
  },
  {
    name: "poison mushroom cookie",
    type: "bomber",
    rarity: "epic",
    img: "/poison_mushroom.png",
    usefulIn: [" world exploration", " master mode", " odyssey", " tosc"],
  },
  {
    name: "sparkling cookie",
    type: "healer",
    rarity: "epic",
    img: "/sparkling.png",
    usefulIn: [" world exploration"],
  },
  {
    name: "black caviar cookie",
    type: "bomber",
    rarity: "epic",
    img: "/captain_caviar.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "schwarzwalder",
    type: "charge",
    rarity: "epic",
    img: "/schwarzwalder.webp",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "parfait cookie",
    type: "support",
    rarity: "epic",
    img: "/parfait.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "red velvet cookie",
    type: "charge",
    rarity: "epic",
    img: "/red_velvet.png",
    usefulIn: [" tosc", " arena", " world exploration"],
  },
  {
    name: "macaron cookie",
    type: "magic",
    rarity: "epic",
    img: "/macaron.png",
    usefulIn: [" guild battle", " world exploration"],
  },
  {
    name: "candy diver cookie",
    type: "support",
    rarity: "epic",
    img: "/candy_diver.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "carol cookie",
    type: "healer",
    rarity: "epic",
    img: "/carol.png",
    usefulIn: [
      " arena",
      " world exploration",
      " master mode",
      " odyssey",
      " tosc",
    ],
  },
  {
    name: "bts cookie",
    type: "bts",
    rarity: "special",
    img: "/bts.png",
    usefulIn: [
      " arena",
      " world exploration",
      " tosc",
      " odyssey",
      " master mode",
    ],
  },
  {
    name: "tails cookie",
    type: "ambush",
    rarity: "special",
    img: "/tails.png",
    usefulIn: [" decor", " arena"],
  },
  {
    name: "sonic cookie",
    type: "ambush",
    rarity: "special",
    img: "/sonic.png",
    usefulIn: [" decor", " arena"],
  },
  {
    name: "cherry cookie",
    type: "bomber",
    rarity: "rare",
    img: "/cherry.png",
    usefulIn: [" tosc", " arena", " world exploration"],
  },
  {
    name: "carrot cookie",
    type: "support",
    rarity: "rare",
    img: "/carrot.png",
    usefulIn: [" arena"],
  },
  {
    name: "adventurer cookie",
    type: "ambush",
    rarity: "rare",
    img: "/adventurer.png",
    usefulIn: [" world exploration"],
  },
  {
    name: "blackberry cookie",
    type: "magic",
    rarity: "rare",
    img: "/blackberry.png",
    usefulIn: [" guild battle", " world exploration", " arena"],
  },
  {
    name: "avocado cookie",
    type: "defense",
    rarity: "rare",
    img: "/avocado.png",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "pancake cookie",
    type: "ambush",
    rarity: "rare",
    img: "/pancake.png",
    usefulIn: [" arena", " tosc"],
  },
  {
    name: "onion cookie",
    type: "support",
    rarity: "rare",
    img: "/onion.png",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "devil cookie",
    type: "magic",
    rarity: "rare",
    img: "/devil.png",
    usefulIn: [" tosc"],
  },
  {
    name: "clover cookie",
    type: "support",
    rarity: "rare",
    img: "/clover.png",
    usefulIn: [" arena", " tosc"],
  },
  {
    name: "gumball cookie",
    type: "bomber",
    rarity: "rare",
    img: "/gumball.png",
    usefulIn: [" tosc", " arena", " world exploration"],
  },
  {
    name: "princess cookie",
    type: "charge",
    rarity: "rare",
    img: "/princess.png",
    usefulIn: [" world exploration", " guild battle", " arena"],
  },
  {
    name: "custard cookie iii",
    type: "healer",
    rarity: "rare",
    img: "/custard_iii.png",
    usefulIn: [" arena", " world exploration", " odyssey", " tosc"],
  },
  {
    name: "muscle cookie",
    type: "charge",
    img: "/muscle.png",
    rarity: "common",
    usefulIn: [" beauty contest"],
  },
  {
    name: "wizard cookie",
    type: "magic",
    rarity: "common",
    img: "/wizard.png",
    usefulIn: [" world exploration", " guild battle"],
  },
  {
    name: "strawberry cookie",
    type: "defense",
    rarity: "common",
    img: "/strawberry.png",
    usefulIn: [" world exploration"],
  },
  {
    name: "beet cookie",
    type: "ranged",
    rarity: "common",
    img: "/beet.png",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "angel cookie",
    type: "healer",
    rarity: "common",
    img: "/angel.png",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "ninja cookie",
    type: "ambush",
    rarity: "common",
    img: "/ninja.png",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "gingerbrave",
    type: "charge",
    rarity: "common",
    img: "/gingerbrave.png",
    usefulIn: [" arena", " master mode", " odyssey", " tosc"],
  },
];

export { cookies };
