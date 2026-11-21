# Async JavaScript Exercises

This folder contains HTML exercises covering asynchronous JavaScript concepts.

## Exercises

### 1. Callbacks (`callbacks.html`)
Learn about callback functions:
- Basic callback pattern
- Callback with arguments
- Nested callbacks
- Callback with delay (setTimeout)
- Callback error handling
- Callback with multiple parameters
- Callback hell pattern
- Callback chaining
- Callback return values

### 2. Promises (`promises.html`)
Master Promise syntax:
- Creating a Promise
- Promise.then() for success
- Promise.catch() for errors
- Promise.all() for multiple promises
- Promise.any() for any resolved value
- Promise.race() for first resolved
- Promise.resolve() for any value
- Promise.reject() for rejection
- Promise chaining

### 3. async/await (`async-await.html`)
Use async/await syntax:
- Basic async function
- async with setTimeout
- Multiple async functions
- await in loops
- Error handling with try/catch
- Promise.all with async/await
- Promise.any with async/await
- Promise.race with async/await
- Nested async functions
- async/await pattern

### 4. Fetch API (`fetch.html`)
Work with the Fetch API:
- Basic GET request
- JSON response parsing
- Custom headers
- POST request with body
- PUT request
- DELETE request
- Fetch with timeout (AbortController)
- Fetch chains
- Error handling
- Cache-related headers

## How to Use

1. Open any `.html` file in your browser
2. Read the code comments and exercise descriptions
3. Execute the code to see the output
4. Modify the code to practice different scenarios

## Key Concepts

- **Callbacks**: Functions passed as arguments to other functions
- **Callback Hell**: Nested callbacks that are hard to read
- **Promise**: An object representing a pending operation
- **Promise States**: pending, fulfilled, rejected
- **async**: Function that returns a Promise
- **await**: Pauses execution until a Promise resolves
- **Fetch**: Modern API for making HTTP requests
- **AbortController**: Control fetch operations with timeouts

## Tips

- Prefer Promise or async/await over callbacks for new code
- Use Promise.all() for concurrent operations
- Handle errors with .catch() or try/catch blocks
- Use Fetch for making HTTP requests
- Set timeouts to avoid hanging requests

---
*Created for JavaScript learning and practice*
