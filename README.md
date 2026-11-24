# CvSU Mini Store - Product Catalog

A mini product catalog built with React and Vite for **Laboratory Exercise 3: React Props and Component Communication** (DCIT26: Application Development and Emerging Technologies).

## Features

- Reusable `ProductCard` component that receives data through props
- Product data loaded from `src/data/products.js` and rendered with `.map()` and unique keys
- Prop destructuring with a default `category` value of `"General"`
- Conditional rendering and styling for in-stock and out-of-stock products
- Callback prop (`onAddToCart`) to send data from child to parent
- Cart message in `App` showing total items added and the last added product
- `children` prop used to display badges (e.g., `New`, `Sale`) on selected cards
- Responsive card grid layout with basic CSS styling

## Project Structure

```text
src/
  components/
    ProductCard.jsx
    ProductCard.css
  data/
    products.js
  App.jsx
  App.css
  index.css
  main.jsx
```

## Run the Project

```bash
npm install
npm run dev
```

## Guide Questions

### 1. What is the difference between props and state?

Props are values passed from a parent component to a child component so the child can display data or use behavior provided by the parent. State is data managed inside a component that can change over time, usually because of user interaction. In this project, product details are passed as props to `ProductCard`, while the cart count and last added item are stored as state in `App`.

### 2. Why can a child component not modify the props it receives?

A child component cannot modify its props because props are read-only and owned by the parent component. React uses this one-way data flow to keep components predictable and easier to debug. If a child needs to cause a change, it should call a function passed from the parent (a callback prop) so the parent can update its own state.

### 3. How does the `onAddToCart` callback allow data to flow from child to parent even though props only flow downward?

Props flow downward from parent to child, but a prop can also be a function. In this app, `App` passes `handleAddToCart` to each `ProductCard` as the `onAddToCart` prop. When the Add to Cart button is clicked, `ProductCard` calls that function and sends the product title back up. The parent receives that value and updates its state, which updates the cart message.

### 4. Why is the `key` prop required when rendering a list with `.map()`? What could happen if it is missing or duplicated?

The `key` prop helps React identify which list items are stable across renders when items are added, removed, or reordered. Without keys, or with duplicate keys, React may reuse or update the wrong components, which can lead to incorrect UI behavior, unexpected state issues, or performance problems. In this project, each product uses its unique `id` as the key.

### 5. What does the `children` prop allow you to do that a normal prop does not?

The `children` prop allows you to pass JSX content between a component’s opening and closing tags, making the component more flexible and reusable. Instead of only passing simple values like strings or numbers, you can insert custom elements such as badges or labels inside the card. In this project, some `ProductCard` components receive `<span>New</span>` or `<span>Sale</span>` as children.
