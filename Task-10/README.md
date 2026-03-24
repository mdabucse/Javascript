# eCommerce Shopping Cart

A simple frontend eCommerce application built using HTML, CSS, and JavaScript.
It includes product listing, cart management, and checkout functionality using local storage.

## Features

* Dynamic product listing
* Add to cart / remove items
* Update product quantity
* Cart persistence using `localStorage`
* Real-time price calculation (subtotal, tax, discount)
* Product search and category filter
* Checkout system with cart reset
* Responsive layout

## Project Structure

```
project/
│── index.html
│── style.css
│── app.js
```

## How It Works

* Products are stored in a JavaScript array
* Cart state is managed using `localStorage`
* UI updates dynamically using DOM manipulation
* Totals are calculated based on cart items

## Cart Logic

* Add item → increases quantity if already exists
* Remove item → deletes from cart
* Update quantity → recalculates total instantly

## Checkout Flow

* Shows alert if cart is empty
* Displays total amount on checkout
* Clears cart after successful order

## Key Concepts Used

* DOM Manipulation
* Event Handling
* Local Storage
* Array Methods (`map`, `filter`, `reduce`)
* Responsive Design (CSS Grid/Flexbox)

