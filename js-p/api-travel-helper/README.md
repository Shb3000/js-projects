# Travel Helper (two APIs)

A small page with two parts:

1. **Weather now**: type a city and see its current temperature, weather and wind.
2. **Currency converter**: convert an amount between currencies, using today's exchange rates.

## How to open it

Double-click `index.html`. You need an internet connection, because both parts call online services. No API keys are needed.

## The two APIs

- **Open-Meteo** (open-meteo.com): a geocoding request turns the city name into coordinates. A second request gets the current weather for those coordinates. Two steps, one after the other.
- **open.er-api.com**: one request returns exchange rates against USD. The page loads them once and reuses them, so changing the amount does not make another request.

## Which topics it uses

- **fetch**: every request goes through one helper, `getJSON`, which checks `response.ok` and parses the JSON.
- **async/await**: `checkWeather` waits for the city search before it asks for the weather.
- **try / catch / finally**: errors show a message, and the search button is turned off while a search is running.
- **Promise.all / Promise.allSettled**: at startup the default weather and the rates load at the same time. `allSettled` lets one succeed even if the other fails.
- **Destructuring and spread**: pulling values out of API responses, and building the weather object.
- **Array and template work**: `CURRENCIES` fills the dropdowns, and the weather code is turned into a word.

## Notes

- Rates are relative to USD, so a conversion goes amount → USD → target currency.
- The city search takes the first result, so type the full name for a less common place.
- The page is built to avoid inserting API text as HTML, so the values are placed with `textContent`.

## Files

- `index.html` - the whole app (HTML, CSS and JavaScript in one file)
- `README.md` - this file
