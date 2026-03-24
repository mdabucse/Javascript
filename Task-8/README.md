# Simple SPA with Hash-Based Routing

A basic front-end Single Page Application (SPA) built using HTML, CSS, and JavaScript.  
This project demonstrates navigation between multiple views without reloading the page.

## Features

* Hash-based navigation (`#home`, `#about`, `#contact`)
* Dynamic content rendering
* No page reloads
* Active link highlighting
* Simple and clean UI

## Project Structure
```
project/
│── index.html
│── app.js

```


## How It Works

* User clicks a navigation link
* URL hash changes (e.g., `#about`)
* `hashchange` event is triggered
* The `render()` function updates the content dynamically
* Only the content inside the app container is replaced

## JavaScript Functions

### `render()`

* Reads the current URL hash
* Defaults to `home` if no hash is present
* Matches the hash with predefined routes
* Updates the DOM using `innerHTML`
* Handles invalid routes (404 fallback)

## Key Concepts

### Hash Routing

* Uses URL hash (`#`) to simulate page navigation
* No server request or page reload

### Event Listeners

* `load` → Runs when page loads
* `hashchange` → Runs when URL changes

### DOM Manipulation

* Updates only a specific part of the page (`#app`)
* Improves performance and user experience

## Notes

This is a front-end only implementation.  
No backend or real routing library is used.