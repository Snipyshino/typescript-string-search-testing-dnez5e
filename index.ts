// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

let base = 'eggs and ham and something else';
let vals = ['eggs', 'eggs(', '(eggs)', '[e-z]'];

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

vals.forEach((val) => {
console.log('search ' + (base.search(escapeRegExp(val)) >= 0));
console.log('search unescaped ' + (base.search(val) >= 0));
console.log('includes '+ base.includes(val));
});
