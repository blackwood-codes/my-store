

function ItemList({ items, onDelete }) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <div className="item-info">
            <div className="title-row">
              <h3>{item.name}</h3>
              <span className="category-tag">{item.category}</span>
            </div>
            <p>${item.price}</p>
          </div>
          <button className="delete-btn" onClick={() => onDelete(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default ItemList;