// ! 1️⃣ Замыкания (Closures)
//? Что такое замыкание в JavaScript?
// Ответ: Замыкание — это функция, которая "запоминает"
// переменные из своей внешней области видимости,
// даже если она вызывается вне этой области.

function outerFunction(outerVariable: string) {
  return function innerFunction(innerVariable: string) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const newFunc = outerFunction("Hello");
newFunc("World"); // Вывод: Outer: Hello, Inner: World

// ====
// ====
// ====
//! 2️⃣ Контекст this
//? ❓ Что такое this в JavaScript?
// Ответ: this — это объект, на который ссылается функция во время её вызова.
const obj = {
  name: "Ruslan",
  sayName() {
    console.log(this.name);
  },
};
obj.sayName(); // Ruslan

// ====
// ====
// ====
//! 3️⃣ Hoisting (Поднятие переменных и функций)
//? ❓ Что такое hoisting?
// Ответ: Hoisting (поднятие) — это механизм JavaScript, который перемещает объявления переменных и функций в начало их области видимости.

// console.log(a); // undefined
var a = 5;
console.log(a); // 5

//* ✅ Но с let и const есть разница!
// console.log(b); // Ошибка: Cannot access 'b' before initialization
let b = 10;

//* ✅ Вывод:
//* var поднимается, но получает значение undefined.
//* let и const тоже поднимаются, но остаются в "Temporal Dead Zone" (TDZ) и не инициализируются до объявления.

greet(); // ✅ Работает! "Hello!"
function greet() {
  console.log("Hello!");
}
//* Компилятор сначала обрабатывает объявления функций, а потом выполняет код.

function test() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }
  console.log(x); // ✅ 10 (var выходит за границы блока)
  // console.log(y); // ❌ Ошибка! y is not defined
  // console.log(z); // ❌ Ошибка! z is not defined
}
test();

// ====
// ====
// ====
//! 4️⃣ Event Loop (Цикл событий)
//? ❓ Как работает Event Loop в JavaScript?
// Ответ: Event Loop — это механизм, который позволяет JavaScript работать асинхронно, обрабатывая задачи в однопоточном окружении. Он управляет очередями задач и обеспечивает их выполнение в правильном порядке.
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Вывод:
// Start
// End
// Promise
// Timeout

// *✅ Event Loop позволяет JavaScript работать асинхронно, несмотря на однопоточность.
