function outerFunction(outerVariable: string) {
  return function innerFunction(innerVariable: string) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const newFunc = outerFunction("Hello");
newFunc("World"); // Outer: Hello, Inner: World
