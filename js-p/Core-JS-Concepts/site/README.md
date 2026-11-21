# Calculator (Core JS Concepts project)

A working calculator with a history panel and a scientific mode. You can click the buttons or use the keyboard (numbers, + - * /, Enter, Backspace, Esc).

## How to open it

Double-click `index.html`. No install needed.

## Which topics it uses

- **Arrow functions**: the `ops` object holds one arrow function per operator. The `÷` one returns `null` when dividing by zero.
- **Closures**: `createHistory()` keeps its list private. Only `add`, `all` and `clear` can reach it.
- **Higher-order functions and callbacks**: `new Calculator(onChange)` takes a callback that updates the display. `.map`, `.filter` and `.forEach` are used when building the keypad and the history.
- **Hoisting**: function declarations can be used before they appear in the file. The page setup code at the bottom relies on this.
- **`this` and `bind`**: the calculator methods use `this` to read and change its state. Event listeners use arrow functions so `this` stays correct.
- **Prototypes and classes**: `Calculator` is a class, and `ScientificCalculator extends Calculator` adds square root and percent. Switching modes creates a new object of the right kind.

## Files

- `index.html` - the whole app (HTML, CSS and JavaScript in one file)
