import "./ProductCard.css";

function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  const formattedPrice = `₱${price.toFixed(2)}`;

  return (
    <article className={`product-card ${inStock ? "in-stock" : "out-of-stock"}`}>
      <div className="product-card-header">
        <span className="product-category">{category}</span>
        {children ? <div className="product-badge">{children}</div> : null}
      </div>

      <h2 className="product-title">{title}</h2>
      <p className="product-price">{formattedPrice}</p>

      <p className={`stock-label ${inStock ? "label-in-stock" : "label-out-of-stock"}`}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>

      <button
        type="button"
        className="add-to-cart-button"
        onClick={() => onAddToCart(title)}
        disabled={!inStock}
      >
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;
