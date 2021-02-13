const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
  const engineer = new Engineer('Eric Normann', 1, 'eric.n@me.com', 'e-p-n');

  expect(engineer.name).toBe('Eric Normann');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBe('eric.n@me.com');
  expect(engineer.role).toBe('Engineer');
  expect(engineer.gitHub)
});


test("gets engineer's name", () => {
    const engineer = new Engineer('Eric Normann', 1, 'eric.n@me.com', 'e-p-n');

     expect(engineer.getName()).toEqual(expect.stringContaining('Eric Normann'));
});

test("gets engineer's ID", () => {
    const engineer = new Engineer('Eric Normann', 1, 'eric.n@me.com', 'e-p-n');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

test("gets engineer's email", () => {
    const engineer = new Engineer('Eric Normann', 1, 'eric.n@me.com', 'e-p-n');

    expect(engineer.getEmail()).toEqual(expect.stringContaining('eric.n@me.com'));
});

test("gets engineer's github", () => {
    const engineer = new Engineer('Eric Normann', 1, 'eric.n@me.com', 'e-p-n');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('e-p-n'));

});

test("gets engineer's role", () => {
    const engineer = new Engineer('Eric Normann', 1, 'eric.n@me.com', 'e-p-n');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});


