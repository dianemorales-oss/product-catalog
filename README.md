# CvSU Mini Store - Live Search and Filter

A mini product catalog built with React and Vite for **DCIT26: Application Development and Emerging Technologies**.

This project extends **Laboratory Exercise 3: React Props and Component Communication** by adding **Laboratory Exercise 4: React `useState` and `useEffect` (Live Search and Filter)** features.

## Features

- Reusable `ProductCard` component with props, callback communication, and `children` badges
- Reusable controlled `SearchBar` component (keyword input, category dropdown, sort dropdown, and clear button)
- Live product filtering by keyword and category
- Price sorting options: Default, Price: Low to High, and Price: High to Low
- Debounced search input (300ms) using `useEffect`, `setTimeout`, and cleanup with `clearTimeout`
- Document title updates with the current number of matching products
- Result count display (`Showing X of Y products`) and friendly empty-state message
- Cart functionality from Lab 3 preserved (`Add to Cart`, total count, and last added item)
- Responsive layout for the search bar and product grid

## Project Structure

```text
src/
  components/
    ProductCard.jsx
    ProductCard.css
    SearchBar.jsx
    SearchBar.css
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

## Guide Questions (Laboratory Exercise 4)

### 1. Why do we use two separate states, `searchText` and `debouncedSearch`, instead of only one?

`searchText` stores what the user is typing immediately so the input stays responsive and controlled on every keystroke. `debouncedSearch` stores the delayed value that is actually used for filtering. Separating them lets the UI update instantly while the expensive/filtering logic runs only after the user pauses typing, which avoids unnecessary updates on every character.

### 2. What would happen if the debounce effect did not return a cleanup function?

Without a cleanup function, each keystroke would schedule a new `setTimeout`, but previous timers would not be canceled. That means older timers could still run later and update `debouncedSearch` with stale values, causing extra renders and out-of-order or flickering filter results instead of applying only the final paused input.

### 3. What is the purpose of the dependency array? What happens if it is empty (`[]`)? What happens if it is left out completely?

The dependency array tells React which values the effect depends on, so React knows when to re-run (and clean up) the effect. If it is empty (`[]`), the effect runs once after the initial render (and cleanup runs on unmount). If it is left out completely, the effect runs after every render, which can cause repeated work, performance issues, or infinite update loops if the effect updates state.

### 4. Why should we avoid sorting the original `products` array directly?

Sorting mutates the array in place. If we sort the original `products` array directly, we permanently change the source data and can introduce bugs or unexpected behavior in other parts of the app that rely on the original order. Creating a copy before sorting (for example, with the spread operator `[...filteredProducts]`) keeps the original data unchanged and makes rendering predictable.

### 5. Is the filtered product list better stored in its own state, or calculated from existing state during rendering? Explain your choice.

It is better to calculate the filtered product list from existing state during rendering (`search`/debounced value, category, sort order, and the original products data). This avoids duplicating data in state, prevents the filtered list from getting out of sync with its source values, and keeps state as the single source of truth. Since the filtered list can be derived, computing it during render is simpler and more reliable.

