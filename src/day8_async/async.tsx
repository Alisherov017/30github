const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5; // 50% успеха
    success ? resolve("✅ Успех!") : reject("❌ Ошибка!");
  }, 1000);
});

myPromise
  .then((result) => console.log(result)) // Выполнится при успехе
  .catch((error) => console.log(error)) // Выполнится при ошибке
  .finally(() => console.log("🎯 Операция завершена"));
