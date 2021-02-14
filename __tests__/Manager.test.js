//const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates an manager object', () => {
  const manager = new Manager('Eric Normann', 1, 'eric.n@me.com', 1);

  expect(manager.name).toBe('Eric Normann');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe('eric.n@me.com');
  expect(manager.role).toBe('Manager');
  expect(manager.officeNumber).toEqual(expect.any(Number));
});


test("gets manager's name", () => {
    const manager = new Manager('Eric Normann', 1, 'eric.n@me.com', 1);

    expect(manager.getName()).toEqual(expect.stringContaining('Eric Normann'));
});

test("gets manager's ID", () => {
    const manager = new Manager('Eric Normann', 1, 'eric.n@me.com', 1);

    expect(manager.getId()).toEqual(expect.any(Number));
});

test("gets manager's email", () => {
    const manager = new Manager('Eric Normann', 1, 'eric.n@me.com', 1);

    expect(manager.getEmail()).toEqual(expect.stringContaining('eric.n@me.com'));
});

test("gets manager's role", () => {
    const manager = new Manager('Eric Normann', 1, 'eric.n@me.com', 1);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});

test("gets manager's OFFICE NUMBER", () => {
    const manager = new Manager('Eric Normann', 1, 'eric.n@me.com', 1);

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('1'));
});

