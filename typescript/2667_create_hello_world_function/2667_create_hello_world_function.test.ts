import { createHelloWorld } from "./2667_create_hello_world_function";

describe("2667 Create Hello World Function Test", () => {
  it("should return a function", () => {
    const helloWorld = createHelloWorld();
    expect(typeof helloWorld).toBe("function");
  });

  it("should return a function that returns 'Hello World'", () => {
    const helloWorld = createHelloWorld();
    expect(helloWorld()).toBe("Hello World");
  });
});