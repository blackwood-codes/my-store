function Cart({ cartItems, onRemove }) {
  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="cart-container">
      <h2>Your Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => onRemove(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
          <button className="checkout-btn">Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;