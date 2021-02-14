const Info = require('./lib/Info');

const info = new Info();

const team = info.collectManager();
console.log(team);