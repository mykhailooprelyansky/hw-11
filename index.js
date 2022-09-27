import { colors } from "./js/colors.js";

const buttonStartRef = document.querySelector('[data-action="start"]');
const buttonStopRef = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// const func = (colors) => {
// //   return colors.map((color) => color);
// // };
// // console.log(func(colors));
