const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('Eric Normann', 1, 'eric.n@me.com', 'U of T');

  expect(intern.name).toBe('Eric Normann');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe('eric.n@me.com');
  expect(intern.role).toBe('Intern');
  expect(intern.school).toBe('U of T');
});


test("gets intern's name", () => {
    const intern = new Intern('Eric Normann', 1, 'eric.n@me.com', 'U of T');

     expect(intern.getName()).toEqual(expect.stringContaining('Eric Normann'));
});

test("gets intern's ID", () => {
    const intern = new Intern('Eric Normann', 1, 'eric.n@me.com', 'U of T');

    expect(intern.getId()).toEqual(expect.any(Number));
});

test("gets intern's email", () => {
    const intern = new Intern('Eric Normann', 1, 'eric.n@me.com', 'U of T');

    expect(intern.getEmail()).toEqual(expect.stringContaining('eric.n@me.com'));
});

test("gets intern's school", () => {
    const intern = new Intern('Eric Normann', 1, 'eric.n@me.com', 'U of T');

    expect(intern.getSchool()).toEqual(expect.stringContaining('U of T'));

});

test("gets intern's role", () => {
    const intern = new Intern('Eric Normann', 1, 'eric.n@me.com', 'U of T');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});


