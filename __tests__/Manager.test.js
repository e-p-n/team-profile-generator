//const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates an manager object', () => {
  const manager = new Manager('Eric Normann', 1, 'eric.n@me.com', 1);

  expect(manager.role).toBe('Manager');
  expect(manager.officeNumber).toEqual(expect.any(Number));
});


test("gets manager's role", () => {
    const manager = new Manager('Eric Normann', 1, 'eric.n@me.com', 1);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});

test("gets manager's office number", () => {
    const manager = new Manager('Eric Normann', 1, 'eric.n@me.com', 1);

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('1'));
});

