# Simple Calculator

A simple and clean calculator web application built using vanilla JavaScript. Perform basic arithmetic operations with an interactive UI.

---

## Features

* **Number Input**: Click buttons to enter numbers
* **Arithmetic Operations**: Addition, Subtraction, Multiplication, Division
* **Real-time Display**: Input updates instantly
* **Clear Function**: Reset the display easily
* **Responsive Layout**: Works on different screen sizes

---

## File Structure

```
calculator/
├── index.html   # HTML structure
├── script.js    # JavaScript logic
└── styles.css   # CSS styling
```

---

## Usage

### Entering Values

1. Click number buttons (0–9)
2. Values appear on the display

### Performing Calculations

1. Enter numbers and operators (+, -, *, /)
2. Click "=" button
3. Result is displayed instantly

### Clearing the Display

1. Click "C" button
2. Display resets to empty

---

## How It Works

### Key Functions

* `press(value)` - Adds numbers/operators to display
* `calculate()` - Evaluates the expression
* `clearDisplay()` - Clears the display

### Data Flow

```javascript
User Input → Display Update → Expression → Calculation → Result
```
--

## Notes

* Uses `eval()` for calculation (for learning purposes)
* Not recommended for production-level applications