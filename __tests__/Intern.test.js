const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('Eric Normann', 1, 'eric.n@me.com', 'U of T');

  expect(intern.role).toBe('Intern');
  expect(intern.school).toBe('U of T');
});


test("gets intern's school", () => {
    const intern = new Intern('Eric Normann', 1, 'eric.n@me.com', 'U of T');

    expect(intern.getSchool()).toEqual(expect.stringContaining('U of T'));

});

test("gets intern's role", () => {
    const intern = new Intern('Eric Normann', 1, 'eric.n@me.com', 'U of T');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});