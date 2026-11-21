# Post Reader (Async JS project)

A small blog reader. You can search posts, open one to see its author and comments, and save favourites. The posts, authors and comments are written into the app, so it works offline. Favourites stay saved in the browser after a refresh.

## How to open it

Double-click `index.html`. No internet connection needed.

## Which topics it uses

- **Callbacks**: `debounce(callback, delay)` waits for the user to stop typing before it runs the search. The `setTimeout` calls use callbacks too.
- **Promises**: `getJSON` returns a Promise. It uses `Promise.race` to give up if the answer takes longer than 5 seconds, and `.finally` to clear the timer.
- **async/await**: `loadPosts` and `openPost` read like normal step-by-step code, with `try/catch` for errors.
- **Promise.all**: opening a post loads the author and the comments at the same time.
- **JSON**: favourites are saved with `JSON.stringify` and loaded with `JSON.parse`.

## Notes

- The "request" is simulated with a short delay, so you can see the loading message. Those delays are in `getJSON`, and the data is in the `POSTS`, `USERS` and `COMMENTS` arrays at the top of the script. You can change or add entries there.
- If a post's data is missing, the detail panel shows an error message.
- If you click another post while one is still loading, the old result is ignored.
- The author is cached, so opening another post by the same author does not load it again.

## Files

- `index.html` - the whole app (HTML, CSS and JavaScript in one file)
- `README.md` - this file
