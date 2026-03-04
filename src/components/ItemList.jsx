

function ItemList({ items, onDelete, onAddToCart }) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <div className="item-info">
            <div className="title-row">
              <h3>{item.name}</h3>
              <span className="category-tag">{item.category}</span>
            </div>
            <p className="item-price">${item.price}</p>
          </div>
          {/* <button className="delete-btn" onClick={() => onDelete(item.id)}>
            Delete
          </button>
          */}
          <div className="button-group">
            <button className="buy-btn" onClick={() => onAddToCart(item)}>
              Add to Cart
            </button>
            <button className="delete-btn" onClick={() => onDelete(item.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ItemList;