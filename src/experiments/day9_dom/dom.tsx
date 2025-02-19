//! 1️⃣ DOM (Document Object Model)
//* DOM — это представление HTML-страницы в виде дерева объектов, к которым можно получить доступ и изменять с помощью JavaScript.

const element1 = document.getElementById("my-id"); // По ID
const elements2 = document.getElementsByClassName("my-class"); // По классу
const elements3 = document.getElementsByTagName("div"); // По тегу
const element4 = document.querySelector(".my-class"); // Первый элемент по селектору
const elements5 = document.querySelectorAll("div"); // Все элементы по селектору
