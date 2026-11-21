# Recipe Book (Modern JS project)

A small recipe book. Search recipes, load them a few at a time, read the details, and build a shopping list from the recipes you pick.

## How to open it

Double-click `index.html`. No install needed.

## Which topics it uses

- **Optional chaining (`?.`)**: `recipe.author?.name`, `recipe.notes?.trim()`. Some recipes have no author or no notes, so the page does not crash.
- **Nullish coalescing (`??`)**: shows "Unknown cook" or "not rated" when a value is missing. Unlike `||`, a rating of 0 would still show.
- **Template literals**: all the HTML for cards, details and the shopping list.
- **Enhanced object literals**: `{ ...item, from: recipe.title }` builds each ingredient with its source recipe.
- **Generators and iterators**: `paginate()` hands out one page per `next()` call, which powers "Load more". `allIngredients()` yields ingredients one at a time.
- **Destructuring**: `const { value, done } = state.pager.next()`.
- **Map and Set**: a `Set` tracks the selected recipes, and a `Map` counts how many recipes use each ingredient.

## Notes

- ES modules (`import` / `export`) are not used here. Browsers block module imports when a page is opened straight from a file, so this page keeps everything in one file. To try modules, put the files on a local server (for example `npx serve`).

## Files

- `index.html` - the whole app (HTML, CSS and JavaScript in one file)
