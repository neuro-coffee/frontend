import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type CartItem = {
  name: string;
  price: number;
  image: string;
  date: string;
};

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    payment: "кофейне"
  });

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  const removeItem = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Заказ оформлен! Имя: ${formData.name}, Телефон: ${formData.phone}, Оплата: ${formData.payment}`);
    localStorage.removeItem("cart");
    setCart([]);
    setIsModalOpen(false);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="cart-section">
      <h1 className="page-title">Корзина</h1>
      <div id="cart-container">
        {cart.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={item.date} className="cart-item">
                <img src={item.image} alt={item.name} width="60" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price}₽</p>
                </div>
                <button onClick={() => removeItem(index)}>Удалить</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div id="total-price">
        {cart.length > 0 && (
          <h3>Итого: {totalPrice}₽</h3>
        )}
      </div>
      {cart.length > 0 && (
        <button
          id="checkout-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Оформить заказ
        </button>
      )}
      <div className="modal" style={{ display: isModalOpen ? "block" : "none" }} id="order-modal">
        <div className="modal-content">
          <span className="close" onClick={() => setIsModalOpen(false)}>
            &times;
          </span>
          <h2>Оформление заказа</h2>
          <form id="order-form" onSubmit={handleSubmit}>
            <label>Имя:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Телефон:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label>Оплата:</label>
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option value="кофейне">В кофейне</option>
              <option value="онлайн">Онлайн</option>
            </select>
            <button type="submit">Заказать</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
