/* Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
 */

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener(
  "input",
  (e) =>
    (output.textContent = e.currentTarget.value
      ? e.currentTarget.value
      : "Anonymous")
);
