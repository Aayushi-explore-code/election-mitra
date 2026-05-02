const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./lighthouse.json', 'utf8'));
console.log(data.categories.accessibility.score * 100);
