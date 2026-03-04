import { useState, useEffect } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  //const [items, setItems] = useState([]);

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('marked_items');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  //new state for search text
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('marked_items', JSON.stringify(items));
  }, [items]);

  const addItem = (newItem) => {
    setItems([...items, {...newItem, id: Date.now()}]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>
      <h1>Marketplace</h1>
      <ItemForm onAddItem={addItem} />
      {/* Search input */}
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Pass filtered items to ItemList */}
      <ItemList items={filteredItems} onDelete={deleteItem} />

      {filteredItems.length === 0 && items.length > 0 && (
        <p style={{ textAlign: 'center', color: '#64748b' }}>No items match your search.</p>
      )}
    </div>
  );
}

export default App;