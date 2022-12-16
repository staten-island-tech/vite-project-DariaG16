import "../styles/style.css";

const cookies = [
  {
    name: "hollyberry cookie",
    type: "defense",
    rarity: "ancient",
    image: "./public/hollyberry.png",
    usefulIn: [" arena", " world exploration", " master mode"],
  },
  {
    name: "pure vanilla cookie",
    type: "healer",
    rarity: "ancient",
    img: "./public/pure_vanilla.png",
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
    img: "./public/dark_cacao.png",
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
    img: "./public/black_pearl.png",
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
    img: "./public/frost_queen.png",
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
    img: "./public/sea_fairy.png",
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
    rarity: "super epic",
    img: "./public/sherbet.png",
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
    rarity: "super epic",
    img: "./public/clotted_cream.png",
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
    rarity: "super epic",
    img: "./public/oyster.png",
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
    usefulIn: [" world exploration", " arena", " master mode"],
  },
  {
    name: "mala sauce cookie",
    type: "charge",
    rarity: "epic",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "cream puff cookie",
    type: "support",
    rarity: "epic",
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
    usefulIn: [" world exploration", " arena"],
  },
  {
    name: "espresso cookie",
    type: "magic",
    rarity: "epic",
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
    usefulIn: [" guild battle", " tosc", " arena"],
  },
  {
    name: "licorice cookie",
    type: "magic",
    rarity: "epic",
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
    img: "./public/strawberry_crepe.png",
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
    img: "./public/rye.png",
    usefulIn: [" guild battle", " tosc", " arena"],
  },
  {
    name: "black raisin cookie",
    type: "ambush",
    rarity: "epic",
    img: "./public/black_raisin.png",
    usefulIn: [" arena", " world exploration", " master mode", " tosc"],
  },
  {
    name: "raspberry cookie",
    type: "charge",
    rarity: "epic",
    img: "./public/raspberry.png",
    usefulIn: [" arena", " world exploration", " master mode", " tosc"],
  },
  {
    name: "herb cookie",
    type: "healer",
    rarity: "epic",
    img: "./public/herb.png",
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
    img: "./public/pastry.png",
    usefulIn: [" arena", " tosc"],
  },
  {
    name: "almond cookie",
    type: "support",
    rarity: "epic",
    img: "./public/almond.png",
    usefulIn: [" arena", " guild battle"],
  },
  {
    name: "werewolf cookie",
    type: "charge",
    rarity: "epic",
    img: "./public/werewolf.png",
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
    img: "./public/squid_ink.png",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "tiger lily cookie",
    type: "ranged",
    rarity: "epic",
    img: "./public/tiger_lily.png",
    usefulIn: [" arena", " world exploration", " guild battle"],
  },
  {
    name: "cocoa cookie",
    type: "defense",
    rarity: "epic",
    img: "./public/cocoa.png",
    usefulIn: [" world exploration", " master mode", " odyssey", " tosc"],
  },
  {
    name: "latte cookie",
    type: "magic",
    rarity: "epic",
    img: "./public/latte.png",
    usefulIn: [" world exploration", " master mode", " odyssey", " tosc"],
  },
  {
    name: "moon rabbit cookie",
    type: "defense",
    rarity: "epic",
    img: "./public/moon_rabbit.png",
    usefulIn: [" world exploration", " master mode", " odyssey", " tosc"],
  },
  {
    name: "lilac cookie",
    type: "support",
    rarity: "epic",
    img: "./public/lilac.png",
    usefulIn: [" arena", " world exploration", " guild battle"],
  },
  {
    name: "milk cookie",
    type: "defense",
    rarity: "epic",
    img: "./public/milk.png",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "madeleine cookie",
    type: "defense",
    rarity: "epic",
    img: "./public/madeleine.png",
    usefulIn: [" arena", " world exploration", " guild battle", " odyssey"],
  },
  {
    name: "snow sugar cookie",
    type: "magic",
    rarity: "epic",
    img: "./public/show_sugar.png",
    usefulIn: [" arena", " world exploration", " guild battle"],
  },
  {
    name: "tea knight cookie",
    type: "charge",
    rarity: "epic",
    img: "./public/tea_knight.png",
    usefulIn: [" arena", " world exploration", " guild battle"],
  },
  {
    name: "mint choco cookie",
    type: "support",
    rarity: "epic",
    img: "./public/mint_choco.png",
    usefulIn: [" arena", " world exploration", " guild battle"],
  },
  {
    name: "mango cookie",
    type: "magic",
    rarity: "epic",
    img: "./public/mango.png",
    usefulIn: [" world exploration"],
  },
  {
    name: "fig cookie",
    type: "support",
    rarity: "epic",
    img: "./public/fig.png",
    usefulIn: [" world exploration", " arena"],
  },
  {
    name: "kumiho cookie",
    type: "charge",
    rarity: "epic",
    img: "./public/kumiho.png",
    usefulIn: [" world exploration", " master mode", " arena", " tosc"],
  },
  {
    name: "poison mushroom cookie",
    type: "bomber",
    rarity: "epic",
    img: "./public/poison_mushroom.png",
    usefulIn: [" world exploration", " master mode", " odyssey", " tosc"],
  },
  {
    name: "sparkling cookie",
    type: "healer",
    rarity: "epic",
    img: "./public/sparkling.png",
    usefulIn: [" world exploration"],
  },
  {
    name: "black caviar cookie",
    type: "bomber",
    rarity: "epic",
    img: "./public/captain_caviar.png",
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
    img: "./public/schwarzwalder.png",
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
    img: "./public/parfait.png",
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
    img: "./public/red_velvet.png",
    usefulIn: [" tosc", " arena", " world exploration"],
  },
  {
    name: "macaron cookie",
    type: "magic",
    rarity: "epic",
    img: "./public/macaron.png",
    usefulIn: [" guild battle", " world exploration"],
  },
  {
    name: "candy diver cookie",
    type: "support",
    rarity: "epic",
    img: "./public/candy_diver.png",
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
    img: "./public/carol.png",
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
    img: "./public/bts.png",
    usefulIn: [" arena", " world exploration", " tosc", "all"],
  },
  {
    name: "tails cookie",
    type: "ambush",
    rarity: "special",
    img: "./public/tails.png",
    usefulIn: [" decor", " arena"],
  },
  {
    name: "sonic cookie",
    type: "ambush",
    rarity: "special",
    img: "./public/sonic.png",
    usefulIn: [" decor", " arena"],
  },
  {
    name: "cherry cookie",
    type: "bomber",
    rarity: "rare",
    img: "./public/cherry.png",
    usefulIn: [" tosc", " arena", " world exploration"],
  },
  {
    name: "carrot cookie",
    type: "support",
    rarity: "rare",
    img: "./public/carrot.png",
    usefulIn: [" arena"],
  },
  {
    name: "adventurer cookie",
    type: "ambush",
    rarity: "rare",
    img: "./public/adventurer.png",
    usefulIn: [" world exploration"],
  },
  {
    name: "blackberry cookie",
    type: "magic",
    rarity: "rare",
    img: "./public/blackberry.png",
    usefulIn: [" guild battle", " world exploration", " arena"],
  },
  {
    name: "avocado cookie",
    type: "defense",
    rarity: "rare",
    img: "./public/avocado.png",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "pancake cookie",
    type: "ambush",
    rarity: "rare",
    img: "./public/pancake.png",
    usefulIn: [" arena", " tosc"],
  },
  {
    name: "onion cookie",
    type: "support",
    rarity: "rare",
    img: "./public/onion.png",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "devil cookie",
    type: "magic",
    rarity: "rare",
    img: "./public/devil.png",
    usefulIn: [" tosc"],
  },
  {
    name: "clover cookie",
    type: "support",
    rarity: "rare",
    img: "./public/clover.png",
    usefulIn: [" arena", " tosc"],
  },
  {
    name: "gumball cookie",
    type: "bomber",
    rarity: "rare",
    img: "./public/gumball.png",
    usefulIn: [" tosc", " arena", " world exploration"],
  },
  {
    name: "princess cookie",
    type: "charge",
    rarity: "rare",
    img: "./public/princess.png",
    usefulIn: [" world exploration", " guild battle", " arena"],
  },
  {
    name: "custard cookie iii",
    type: "healing",
    rarity: "rare",
    img: "./public/custard_iii.png",
    usefulIn: [" arena", " world exploration", " odyssey", " tosc"],
  },
  {
    name: "muscle cookie",
    type: "charge",
    img: "./public/muscle.png",
    rarity: "super-ultra-extra-rare",
    usefulIn: [" beauty contest"],
  },
  {
    name: "wizard cookie",
    type: "magic",
    rarity: "common",
    img: "./public/wizard.png",
    usefulIn: [" world exploration", " guild battle"],
  },
  {
    name: "strawberry cookie",
    type: "defense",
    rarity: "common",
    img: "./public/strawberry.png",
    usefulIn: [" world exploration"],
  },
  {
    name: "beet cookie",
    type: "ranged",
    rarity: "common",
    img: "./public/beet.png",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "angel cookie",
    type: "healer",
    rarity: "common",
    img: "./public/angel.png",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "ninja cookie",
    type: "ambush",
    rarity: "common",
    img: "./public/ninja.png",
    usefulIn: [" arena", " world exploration"],
  },
  {
    name: "gingerbrave",
    type: "charge",
    rarity: "common",
    img: "./public/gingerbrave.png",
    usefulIn: [" arena", " master mode", " odyssey", " tosc"],
  },
];

export { cookies };
