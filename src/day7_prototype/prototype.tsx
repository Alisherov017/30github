//! 1️⃣ Прототипное наследование
//* ❓ Что такое прототипное наследование в JavaScript?
// Ответ: В JS каждый объект наследует свойства и методы от другого объекта — прототипа.
//  Это называется прототипным наследованием.

// 🔹 Пример:
const person = {
  greet7() {
    console.log("Hello!");
  },
};

const user7 = Object.create(person);
user7.greet7(); // "Hello!"

//? 🔹 Объяснение:
// Object.create(person) создает новый объект user, который наследует методы person.
// Когда вызывается user.greet(), JS сначала ищет greet у user, но не находит.
// Тогда он идет в прототип person и находит там greet().

// ========
// ========
// ========
//! 3️⃣ Классы в JavaScript (ES6)
// *❓ Как объявить класс в JS?
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
}

const cat = new Animal("Tom");
cat.sayHi(); // "Hi, I am Tom"

//?🔹 Объяснение:
// class Animal — это синтаксический сахар над prototype.
// constructor(name) задает свойства.
// Метод sayHi() автоматически добавляется в Animal.prototype.

// ========
// ========
// ========
// !5️⃣ Полиморфизм и переопределение методов
class Bird {
  fly() {
    console.log("Flying...");
  }
}

class Penguin extends Bird {
  fly() {
    console.log("Penguins can't fly!");
  }
}

const pingu = new Penguin();
pingu.fly(); // "Penguins can't fly!"

//? 🔹 Объяснение:
// Penguin унаследовал Bird, но переопределил fly().
// Теперь pingu.fly() выводит другое сообщение.
