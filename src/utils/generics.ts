interface ApiResponse<T> {
  data: T;
  status: number;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: "Ruslan", age: 22 },
  status: 200,
};

const productsResponse: ApiResponse<string[]> = {
  data: ["Laptop", "Mouse", "Keyboard"],
  status: 200,
};

// 💡 Как это работает?
// T — подставляется при создании объекта
// Теперь можно переиспользовать один интерфейс для разных данных

//
//! identity
function identity<T>(value: T): T {
  return value;
}

const user = identity({ id: 1, name: "Ruslan" }); // Тип: { id: number, name: string }
