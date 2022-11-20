// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isPhoneNumber
test('Likely a number', () => {
  expect(functions.isPhoneNumber('858-535-7890')).toBe(true);
})
test('Good ()- format', () => {
  expect(functions.isPhoneNumber('(858) 535-7890')).toBe(true);
})
test('Bad number', () => {
  expect(functions.isPhoneNumber('(858')).toBe(false);
})
test('Raw number bad', () => {
  expect(functions.isPhoneNumber('8585357890')).toBe(false);
})

// isEmail
test('Good email', () => {
  expect(functions.isEmail('yus028@ucsd.edu')).toBe(true);
})
test('Good email fancy name', () => {
  expect(functions.isEmail('__y_u_s_0_2_8__@ucsd.edu')).toBe(true);
})
test('Not dot bad', () => {
  expect(functions.isEmail('yus028@ucsd')).toBe(false);
})
test('Many dots domain name', () => {
  expect(functions.isEmail('yus028@eng.ucsd.edu')).toBe(false);
})

// isStrongPassword
test('Good password', () => {
  expect(functions.isStrongPassword('yus028')).toBe(true);
})
test('All letters password', () => {
  expect(functions.isStrongPassword('abcdefgh')).toBe(true);
})
test('All numbers password', () => {
  expect(functions.isStrongPassword('12345678')).toBe(false);
})
test('Too short password', () => {
  expect(functions.isStrongPassword('yus')).toBe(false);
})

// isDate
test('Happy Birthday', () => {
  expect(functions.isDate('4/9/2002')).toBe(true);
})
test('Weird but Okay', () => {
  expect(functions.isDate('66/99/2048')).toBe(true);
})
test('Year too short', () => {
  expect(functions.isDate('04/09/02')).toBe(false);
})
test('The End of Eternity', () => {
  expect(functions.isDate('4/9/20202')).toBe(false);
})

// isHexColor
test('Valid hex', () => {
  expect(functions.isHexColor('#ffffff')).toBe(true);
})
test('Valid hex no #', () => {
  expect(functions.isHexColor('ffffff')).toBe(true);
})
test('Valid hex 3 char', () => {
  expect(functions.isHexColor('#fff')).toBe(true);
})
test('Valid hex 3 char no #', () => {
  expect(functions.isHexColor('fab')).toBe(true);
})
test('Scarlet Witch Hex', () => {
  expect(functions.isHexColor('#ffggff')).toBe(false);
})
test('Hello, it\'s me', () => {
  expect(functions.isHexColor('#hello')).toBe(false);
})