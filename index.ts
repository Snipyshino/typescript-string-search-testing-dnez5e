// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");

let base = "eggs and ham and something else";
let vals = ["egg", "(eggs", "[e-z]", "eg[s"];

vals.forEach(val => {
  /**
   * You can use a tryCatch to catch the syntax error and use includes instead
   * In other words it can decide between using string or regex
   */
  try {
    const reg = RegExp(val);
    console.log("search " + val + " " + (base.search(reg) > -1));
  } catch (e) {
    if (e instanceof SyntaxError) {
      console.log("includes " + val + " " + base.includes(val));
    } else {
      console.error(e);
    }
  }
});
