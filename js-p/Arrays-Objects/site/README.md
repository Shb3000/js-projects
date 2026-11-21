# Corner Shop (Arrays and Objects project)

A small working shop page built to practice arrays and objects. You can search products, filter by category, sort by price, add items to a cart, and change quantities. The cart is saved in the browser, so it is still there after a refresh.

## How to open it

Double-click `index.html`. No install needed.

## Which topics it uses

- **Array methods**: `filter` (search and category), `sort` (on the filtered copy), `find` (product lookup), `map` (cart updates), `reduce` (cart total and item count), `forEach` (rendering)
- **Destructuring**: `({ id, name, price, qty }) =>` in the product and cart loops and in the total calculation
- **Spread and rest**: `[...cart, newItem]` to add an item, `{ ...item, qty: item.qty + 1 }` to change one field without editing the old object
- **JSON**: `JSON.stringify` to save the cart and to show the order, `JSON.parse` to load it back

## Notes

- Clicking the `-` button on the last item of a product removes it from the cart.
- "Show order JSON" toggles the cart as raw JSON text.
- Products are in the `PRODUCTS` array at the top of the script. Add an object there and it shows up in the list.
- Saving uses `localStorage`, wrapped in `try` so the page still works if storage is blocked.

## Files

- `index.html` - the whole app (HTML, CSS and JavaScript in one file)
- `README.md` - this file
