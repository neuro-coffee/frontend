import React, { useState } from "react";
import {type Product } from "../data/products";

type Props = {
  product: Product;
  onClose: () => void;
};

const ProductModal: React.FC<Props> = ({ product, onClose }) => {
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({
      name: product.title,
      price: product.price,
      image: product.image,
      date: new Date().toLocaleString()
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={product.image} alt={product.title} className="modal-img" />
        <h3 className="modal-title">{product.title}</h3>
        <p className="modal-description">{product.description}</p>
        <div className="modal-details">
          {product.details.map((d) => (
            <div className="modal-detail" key={d.title}>
              <div className="modal-detail-title">{d.title}</div>
              <div className="modal-detail-value">{d.value}</div>
            </div>
          ))}
        </div>
        <div className="modal-buttons">
          <button className="btn btn-primary" onClick={addToCart} disabled={added}>
            {added ? "✓ Добавлено" : "Добавить в корзину"}
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
