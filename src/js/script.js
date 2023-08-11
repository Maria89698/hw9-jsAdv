// 1

let time = 0;
const interval1 = setInterval(() => {
    time+=1;
    
    if (time === 5) {
        clearInterval(interval1);
        console.log("Інтервал зупинено після 5 повідомлень.");
    } else {
        alert('Hello, world!');
    }
}, 500);

// 2
let size = 50; // розмір за замовчуванням
let position = 0; // позиція за замовчуванням
const interval2 = setInterval(() => {
  size += 30; // змінюємо розмір
  position += 50; // змінюємо позицію

  document.getElementById("box1").style.width = `${size}px`;
  document.getElementById("box1").style.height = `${size}px`;
  document.getElementById("box2").style.left = `${position}px`;
  document.getElementById("box2").style.top = `${position}px`;
  
  if (size >= 200) {
    clearInterval(interval2);
  }; // Якщо розмір об'єкту - 200, очищаємо інтервал.
}, 500);



// 3
const block = document.querySelector('#box3'); // Беремо об'єкт з HTML-файлу.

let score = 0; // Создаємо лічильник очок.
const text = document.querySelector('#text') // Беремо текст-лічильник з HTML-файлу.
const setLocationId = setInterval(() => {
    const left = Math.random()*100;
    const top = Math.random()*100;
    block.style.left = `${left}%`;
    block.style.top = `${top}%`;
    if (score === 5) {
      console.log('score = 5');
      clearInterval(setLocationId)
      text.textContent = '0'
      block.removeEventListener('click', () => {
        score ++
        text.textContent = score
      }) // Якщо кількість очок дорівнює 5, очищаємо лічильник і видаляємо подію.
    }
}, 1000); // Добавляємо інтервал і рухаємо об'єкт по будь-яким точкам.

block.addEventListener('click', countScore);
function countScore() {
  score ++
  text.textContent = score
}


// 4
const inputEl = document.querySelector('#input-js') // Поле вводу з HTML-файлу.
let inputVal
let delay = 0
inputEl.addEventListener('input', onInputText)
const timeOutId = setTimeout(() => {
  console.log(inputVal);
  alert('Hello')
}, delay); // 
function onInputText(event) {
  inputVal = event.target.value
  delay = inputVal*1000
  console.log(delay);
}