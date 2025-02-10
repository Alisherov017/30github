// Partial<T> делает все свойства необязательными
type User = {
  name: string;
  age: number;
};

const partialUser: Partial<User> = { name: "Ruslan" }; // age не обязательно

// Pick<T, K> позволяет выбрать только определённые свойства
type UserPreview = Pick<User, "name">;

const user1: UserPreview = { name: "Ruslan" }; // Только name, без age
