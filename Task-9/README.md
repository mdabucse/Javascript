# Infinite Scrolling Content Loader

A simple front-end project that demonstrates infinite scrolling using JavaScript. Content is dynamically loaded as the user scrolls toward the bottom of the page.

## Features

- Detects scroll position
- Loads data dynamically (simulated API)
- Prevents duplicate requests using loading state
- Automatically fills screen if content is insufficient
- Smooth user experience with loading indicator

## How It Works

1. Initial content is loaded using `loadContent()`.
2. If the page is not scrollable, more content is automatically loaded.
3. A scroll event listener detects when the user is near the bottom.
4. Additional data is fetched and appended to the DOM.

## Key Functions

### `fetchData()`
Simulates an API call using `setTimeout` and returns 10 items per page.

### `loadContent()`
- Prevents multiple calls using `isLoading`
- Fetches data asynchronously
- Appends items to the page
- Ensures page becomes scrollable

### Scroll Detection
Triggers loading when:

## Concepts Used

- DOM Manipulation
- Async/Await
- Event Handling (Scroll)
- Infinite Scrolling Pattern
- State Management


## Notes

- Data fetching is simulated (can be replaced with real API)
- Auto-loading ensures functionality even when initial content is small
- Optimized to avoid redundant API calls
