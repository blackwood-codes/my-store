import { useState, useEffect } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import './App.css';
import './components/Cart.jsx';
import Cart from './components/Cart.jsx';

function App() {
  //const [items, setItems] = useState([]);
  const[cart, setCart] = useState([]);
/*
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
*/
  const addToCart = (product) => {
    if (product.stock <= 0) return;
      
      setCart([...cart, product]);

      setItems(prevItems =>
        prevItems.map(item =>
          item.id === product.id
          ? { ...item, stock: item.stock - 1 }
          : item 
        )
      );
    };


  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

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
      <ItemList items={filteredItems} onDelete={deleteItem} onAddToCart={addToCart}/>
      <Cart cartItems={cart} onRemove={removeFromCart} />

      {filteredItems.length === 0 && items.length > 0 && (
        <p style={{ textAlign: 'center', color: '#64748b' }}>No items match your search.</p>
      )}
    </div>
  );
}

export default App;