import { useState } from 'react';

function ItemForm({ onAddItem }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('Electronics');
    const [stock, setStock] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddItem({ name, price, category, stock: Number(stock) });
        setName('');
        setPrice('');
    };

    return (
      <form onSubmit={handleSubmit} className="item-form">
        <input 
          className="item-input"
          placeholder="Item Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        
        {/* New Category Dropdown */}
        <select 
          className="category-select"
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Clothing">Clothing</option>
          <option value="Other">Other</option>
        </select>

        
        <input 
          className="price-input"
          type="number"
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="price-input"
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          min="1"
        />
        <button type="submit" className="submit-btn">Post</button>
    </form>
    );
}
export default ItemForm;