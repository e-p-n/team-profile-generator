const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
  const engineer = new Engineer('Eric Normann', 1, 'eric.n@me.com', 'e-p-n');

  expect(engineer.role).toBe('Engineer');
  expect(engineer.github).toBe('e-p-n');
});

test("gets engineer's github", () => {
    const engineer = new Engineer('Eric Normann', 1, 'eric.n@me.com', 'e-p-n');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('e-p-n'));

});

test("gets engineer's role", () => {
    const engineer = new Engineer('Eric Normann', 1, 'eric.n@me.com', 'e-p-n');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});