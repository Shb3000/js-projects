# DOM & Browser JavaScript Exercises

This folder contains HTML exercises covering JavaScript's interaction with the browser, specifically focusing on the event loop and non-blocking behavior.

## Exercises

### 1. Event Loop (`event-loop.html`)
Understand JavaScript's event loop mechanism:
- Order of synchronous vs. asynchronous code execution
- Callback queue mechanics
- Microtasks (Promise.then) vs. Macrotasks (setTimeout/setInterval)
- Promise chaining and resolution order
- async/await execution flow
- Rejection handling
- Promise.race() behavior

### 2. Non-blocking Behavior (`non-blocking.html`)
Learn about non-blocking operations:
- Blocking vs. non-blocking code
- setTimeout and its immediate placement in callback queue
- Promise-based non-blocking I/O simulation
- Event loop processing of scheduled callbacks
- Concurrent non-blocking operations
- async/await with setTimeout
- setInterval for repeated non-blocking tasks

## How to Use

1. Open any `.html` file in your browser
2. Observe the output order or timing
3. Understand how the JavaScript event loop processes code
4. Modify the code to experiment with different timing scenarios

## Key Concepts

- **Call Stack**: Executes synchronous code line-by-line
- **Microtask Queue**: Processed before the call stack empties (Promises, queueMicrotask)
- **Macrotask Queue**: Processed after microtasks (setTimeout, setInterval, I/O)
- **Event Loop**: Continuously checks the call stack and queues, moving ready tasks

## Tips

- Blocking code halts execution until it completes
- setTimeout callbacks are enqueued immediately but executed later
- Promise callbacks run before setTimeout callbacks
- async/await code is still a microtask, not synchronous
- Multiple non-blocking operations can run concurrently

---
*Created for JavaScript learning and practice*
