# Focus Timer (DOM and Browser project)

A Pomodoro-style timer: focus for a set time, then a break, repeated until you stop it. It also shows the order JavaScript runs things in, and includes a background job that keeps the page responsive.

## How to open it

Double-click `index.html`. No install needed.

## Which topics it uses

- **Event loop**: the "Show event order" button logs the order of synchronous code, promise callbacks (microtasks), and `setTimeout` (task queue).
- **Promises and microtasks**: `runPhase` returns a Promise. `Promise.resolve().then` and `queueMicrotask` are used in the event order demo.
- **async/await**: `startCycle` waits for each phase with `await`, so the work and break steps read in order.
- **setInterval and non-blocking code**: the clock updates every 250 ms without blocking clicks, scrolling or typing.
- **Chunking long work**: the background job processes 300,000 items in pieces of 10,000 and gives control back to the browser between pieces with `setTimeout(0)`. A single loop of that size would freeze the page.
- **DOM work**: buttons enable and disable, the log adds new lines at the top, and the progress bar width is updated.

## Notes

- The clock compares against the real time (`Date.now()`), so it stays accurate even when the tab is in the background and the timer runs late.
- Skipping a focus period does not count as a completed session.

## Files

- `index.html` - the whole app (HTML, CSS and JavaScript in one file)
