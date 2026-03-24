# Drag and Drop List Reordering

A simple drag and drop list application built with HTML5 Drag and Drop API.

## Features

- Drag and drop items to reorder
- Visual feedback during dragging
- Automatic number updates
- Reset button to restore original order

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling and layout
- `script.js` - Drag and drop functionality

## How to Use

1. Open `index.html` in your web browser
2. Click and drag any item in the list
3. Drop it in a new position
4. Click "Reset Order" to go back to the original order


## Events Used

- `dragstart` - When dragging begins
- `dragend` - When dragging ends
- `dragover` - While dragging over elements
- `dragenter` - When entering a drop target
- `dragleave` - When leaving a drop target
- `drop` - When item is dropped

## Functions Explained

### Event Listeners

**dragstart**
- Saves which item is being dragged
- Adds 'dragging' class to make it look faded

**dragend**
- Removes the 'dragging' class
- Calls updateNumbers() to refresh all numbers

**dragover**
- Prevents default browser behavior
- Calculates where to insert the item
- Moves the item to the new position in real-time

**dragenter**
- Adds 'drag-over' class to highlight the item
- Shows visual feedback to user

**dragleave**
- Removes 'drag-over' class
- Removes highlight when mouse leaves

**drop**
- Prevents default browser behavior
- Removes all highlights from items

### Helper Functions

**getDragAfterElement(container, mouseY)**
- Finds the correct position to insert the dragged item
- Compares mouse position with each item's position
- Returns the element that should come after the dragged item

**updateNumbers()**
- Gets all list items
- Updates the number badge (1, 2, 3, etc.) for each item
- Ensures numbers match the current order

**Reset Button Click**
- Reloads the page to reset everything to original state

## Browser Support

Works on all modern browsers that support HTML5 Drag and Drop API.