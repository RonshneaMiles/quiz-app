import blackbusinessmodel1 from "./images/blackbusinessmodel1-removebg.png";
import fallCollectionModel from "./images/fallcollectionmodel-removebg-preview.png";
import loungewearModel from "./images/loungewear-removebg-preview.png";
import summerModel from "./images/summerstyle-removebg-preview.png";

import jacketStyle from "./images/blackjacket.jpg";
import shirtStyle from "./images/white-top.jpg";
import loungewearStyle from "./images/grey-loungewear.jpg";

import loungewearStyle2 from "./images/black-loungewear2.jpg";
import loungewearStyle1 from "./images/black-loungewear.jpg";
import bomberJacket from "./images/bomberjacket-black.jpg";
import cashmereDress from "./images/cashmere-dress.jpeg";
import fallFloral from "./images/fall-floral-skirt.png";
import fallMauveJacket from "./images/fall-mauve-jacket.png";
import purpleSweatpants from "./images/purple-sweatpants.jpg";
import whiteSummerTank from "./images/white-summer-tank.jpg";

const Form = document.getElementById("new-user-form");

export const sliderItems = [
  {
    id: 1,
    img: `${blackbusinessmodel1}`,
    title: "WINTER COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF YOUR ORDER TODAY!",
    bg: "F3F1EE",
  },
  {
    id: 2,
    img: `${fallCollectionModel}`,
    title: "AUTUMN VIBES",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF YOUR ORDER TODAY!",
    bg: "9E8B8B",
  },
  {
    id: 3,
    img: `${loungewearModel}`,
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF YOUR ORDER TODAY!",
    bg: "C98688",
  },
  {
    id: 4,
    img: `${summerModel}`,
    title: "SUMMER SHENANIGANS",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF YOUR ORDER TODAY!",
    bg: "9A5C4B",
  },
];

export const categories = [
  {
    id: 1,
    img: `${jacketStyle}`,
    title: "COATS AND JACKETS",
  },
  {
    id: 2,
    img: `${loungewearStyle}`,
    title: "LOUNGEWEAR",
  },
  {
    id: 3,
    img: `${shirtStyle}`,
    title: "TOPS",
  },
];

export const popularProducts = [
  {
    id: 1,
    img: `${loungewearStyle2}`,
  },
  {
    id: 2,
    img: `${bomberJacket}`,
  },
  {
    id: 3,
    img: `${cashmereDress}`,
  },
  {
    id: 4,
    img: `${fallFloral}`,
  },
  {
    id: 5,
    img: `${fallMauveJacket}`,
  },
  {
    id: 6,
    img: `${purpleSweatpants}`,
  },
  {
    id: 7,
    img: `${whiteSummerTank}`,
  },
  {
    id: 8,
    img: `${loungewearStyle1}`,
  },
];

export function handleSubmit(event) {
  event.preventDefault();
  let formData = new FormData(Form);
  const formDataObj = Object.fromEntries(formData);
  console.log(formDataObj);
}
