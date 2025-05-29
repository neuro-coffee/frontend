import React from 'react';
type Item = {
  id: string;
  name: string;
  price: string;
  img: string;
};

interface CartProps {
  cartItems: Item[];
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ cartItems, onRemove, onCheckout }) => {
  if (cartItems.length === 0) {
    return <div className="empty-cart">Корзина пуста</div>;
  }

  return (
    <main className="cart-section">
      <h1 className="page-title">Корзина</h1>
      <div id="cart-container">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => onRemove(item.id)}>Удалить</button>
            </div>
          </div>
        ))}
      </div>
      <div id="total-price">
        Итого: {cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('₽', '')), 0)}₽
      </div>
      <button id="checkout-btn" onClick={onCheckout}>
        Оформить заказ
      </button>
    </main>
  );
};
export default Cart;