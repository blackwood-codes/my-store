import { useState } from 'react';

function ItemForm({ onAddItem }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddItem({ name, price });
        setName('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <button type="submit">Post Item</button>
        </form>
    );
}
export default ItemForm;