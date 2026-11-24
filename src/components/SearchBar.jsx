import "./SearchBar.css";

function SearchBar({
  searchText,
  onSearchTextChange,
  category,
  onCategoryChange,
  sortOrder,
  onSortOrderChange,
  onClearFilters,
}) {
  return (
    <section className="search-bar" aria-label="Search and filter products">
      <div className="search-field search-keyword">
        <label htmlFor="search-keyword">Search</label>
        <input
          id="search-keyword"
          type="text"
          value={searchText}
          onChange={(event) => onSearchTextChange(event.target.value)}
          placeholder="Search by product name"
        />
      </div>

      <div className="search-field">
        <label htmlFor="category-filter">Category</label>
        <select
          id="category-filter"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="School Supplies">School Supplies</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      <div className="search-field">
        <label htmlFor="sort-order">Sort</label>
        <select
          id="sort-order"
          value={sortOrder}
          onChange={(event) => onSortOrderChange(event.target.value)}
        >
          <option value="default">Default</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>

      <button type="button" className="clear-filters-button" onClick={onClearFilters}>
        Clear Filters
      </button>
    </section>
  );
}

export default SearchBar;
