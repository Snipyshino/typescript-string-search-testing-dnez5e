// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

let base = 'eggs and ham and something else';
let val = 'eggs';

function escapeRegExp(string) {
  return string.replace(/[{(]/g, '\\$&'); // $& means the whole matched string
}

const result = escapeRegExp(base).search(val) >= 0;
const result2 = base.includes(val);

appDiv.innerHTML =
  `
<h1>SSH</h1>
<h2>Result: ${result}</h2>
<h2>Result: ${result2}</h2>
`;