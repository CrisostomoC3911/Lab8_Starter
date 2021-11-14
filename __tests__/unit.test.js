// unit.test.js

const functions = require("../code-to-unit-test/unit-test-me.js");

// TODO - Part 2
test("checks a valid phone number", () => {
  // TODO
  expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test("checks a valid phone number", () => {
  // TODO
  expect(functions.isPhoneNumber("987-654-3210")).toBe(true);
});

test("checks an invalid phone number", () => {
  // TODO
  expect(functions.isPhoneNumber("987-654-321")).toBe(false);
});

test("checks an invalid phone number", () => {
  // TODO
  expect(functions.isPhoneNumber("987-64-3210")).toBe(false);
});

test("checks a valid email", () => {
  // TODO
  expect(functions.isEmail("sussybaka@amongus.com")).toBe(true);
});
test("checks a valid email", () => {
  // TODO
  expect(functions.isEmail("poggywoggy@pogchamps.com")).toBe(true);
});

test("checks an invalid email", () => {
  // TODO
  expect(functions.isEmail("lil sussy baka")).toBe(false);
});

test("checks an invalid email", () => {
  // TODO
  expect(functions.isEmail("lilsussy@baka")).toBe(false);
});

test("checks a valid password", () => {
  // TODO
  expect(functions.isStrongPassword("AmogUs")).toBe(true);
});

test("checks a valid password", () => {
  // TODO
  expect(functions.isStrongPassword("RedIsSussy")).toBe(true);
});

test("checks a invalid password", () => {
  // TODO
  expect(functions.isStrongPassword("The Imposter Is Sus!")).toBe(false);
});

test("checks a invalid password", () => {
  // TODO
  expect(functions.isStrongPassword("Poggy Woggy Fwunga Baby!")).toBe(false);
});

test("checks a valid date", () => {
  // TODO
  expect(functions.isDate("69/69/6969")).toBe(true);
});

test("checks a valid date", () => {
  // TODO
  expect(functions.isDate("4/20/6969")).toBe(true);
});

test("checks an invalid date", () => {
  // TODO
  expect(functions.isDate("420/420/6969")).toBe(false);
});

test("checks an invalid date", () => {
  // TODO
  expect(functions.isDate("69/69/420")).toBe(false);
});

test("checks a valid hex color", () => {
  // TODO
  expect(functions.isHexColor("#420")).toBe(true);
});

test("checks a valid hex color", () => {
  // TODO
  expect(functions.isHexColor("#696")).toBe(true);
});

test("checks an invalid hex color", () => {
  // TODO
  expect(functions.isHexColor("#69")).toBe(false);
});

test("checks an invalid hex color", () => {
  // TODO
  expect(functions.isHexColor("#1337")).toBe(false);
});
