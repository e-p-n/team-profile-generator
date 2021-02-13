const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('Eric Normann', 1, 'eric.n@me.com');

  expect(employee.name).toBe('Eric Normann');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('eric.n@me.com');
});


test("gets employee's name", () => {
  const employee = new Employee('Eric Normann', 1, 'eric.n@me.com');

  expect(employee.getName()).toEqual(expect.stringContaining('Eric Normann'));
});

test("gets employee's ID", () => {
  const employee = new Employee('Eric Normann', 1, 'eric.n@me.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
  const employee = new Employee('Eric Normann', 1, 'eric.n@me.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining('eric.n@me.com'));
});

test("gets employee's role", () => {
  const employee = new Employee('Eric Normann', 1, 'eric.n@me.com');

  expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});

