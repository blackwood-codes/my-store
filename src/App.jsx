import { useState, useEffect } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  //const [items, setItems] = useState([]);

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('marked_items');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('marked_items', JSON.stringify(items));
  }, [items]);

  const addItem = (newItem) => {
    setItems([...items, {...newItem, id: Date.now()}]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Marketplace</h1>
      <ItemForm onAddItem={addItem} />
      <ItemList items={items} onDelete={deleteItem} />
    </div>
  );
}

export default App;