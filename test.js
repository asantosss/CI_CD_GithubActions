const fs = require('fs');
const { JSDOM } = require('jsdom');

// Leer el archivo HTML
const html = fs.readFileSync('./index.html', 'utf8');
const dom = new JSDOM(html);
const helloText = dom.window.document.getElementById('hello').textContent;

if (helloText === 'Hello World!') {
  console.log('✅ Test Passed: Hello World encontrado');
  process.exit(0);
} else {
  console.error('❌ Test Failed: Hello World no encontrado');
  process.exit(1);
}
