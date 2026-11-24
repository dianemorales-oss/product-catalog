import { useState } from "react";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAddedItem, setLastAddedItem] = useState("");

  const handleAddToCart = (productTitle) => {
    setCartCount((count) => count + 1);
    setLastAddedItem(productTitle);
  };

  const cartMessage =
    cartCount === 0
      ? "Your cart is empty."
      : `Items added to cart: ${cartCount} (Last added: ${lastAddedItem})`;

  return (
    <main className="app">
      <header className="app-header">
        <h1>CvSU Mini Store</h1>
        <p className="cart-message">{cartMessage}</p>
      </header>

      <section className="product-grid" aria-label="Product catalog">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
            onAddToCart={handleAddToCart}
          >
            {product.id === 1 ? <span>New</span> : null}
            {product.id === 5 ? <span>Sale</span> : null}
          </ProductCard>
        ))}
      </section>
    </main>
  );
}

export default App;
