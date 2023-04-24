/* Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.


Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue. */

const decrement = document.querySelector("[data-action='decrement']");
const increment = document.querySelector("[data-action='increment']");
let counterValue = document.querySelector("#value");
decrement.addEventListener("click", () => {
  counterValue.innerHTML--;
});
increment.addEventListener("click", () => {
  counterValue.innerHTML++;
});
