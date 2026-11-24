import { useState } from "react";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import products from "./data/products";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAddedItem, setLastAddedItem] = useState("");
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const handleAddToCart = (productTitle) => {
    setCartCount((count) => count + 1);
    setLastAddedItem(productTitle);
  };

  const handleClearFilters = () => {
    setSearchText("");
    setCategory("All");
    setSortOrder("default");
  };

  const normalizedSearch = searchText.trim().toLowerCase();

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(normalizedSearch);
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  if (sortOrder === "price-low-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "price-high-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

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

      <SearchBar
        searchText={searchText}
        onSearchTextChange={setSearchText}
        category={category}
        onCategoryChange={setCategory}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
        onClearFilters={handleClearFilters}
      />

      <p className="results-count">
        Showing {filteredProducts.length} of {products.length} products
      </p>

      {filteredProducts.length === 0 ? (
        <p className="empty-state">No products found. Try a different keyword or category.</p>
      ) : (
        <section className="product-grid" aria-label="Product catalog">
          {filteredProducts.map((product) => (
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
      )}
    </main>
  );
}

export default App;
