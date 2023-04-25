/* Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.


Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи. */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxDiv = document.querySelector("#boxes");

function handleCreate() {
  if (input.value === "") return;
  createBoxes(input.value);
  input.value = "";
}
function createBoxes(amount) {
  let sizeBox = 30;
  for (let i = 0; i < +amount; i += 1) {
    const markup = document.createElement("div");
    markup.style.backgroundColor = getRandomHexColor();
    markup.style.width = `${sizeBox}px`;
    markup.style.height = `${sizeBox}px`;
    sizeBox += 10;
    boxDiv.append(markup);
  }
}
function destroyBoxes() {
  boxDiv.innerHTML = "";
}

createBtn.addEventListener("click", handleCreate);
destroyBtn.addEventListener("click", destroyBoxes);
