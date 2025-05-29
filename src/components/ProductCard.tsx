import React from "react";
import {type Product } from "../data/products.tsx";

type Props = {
  product: Product;
  onClick: () => void;
};

const ProductCard: React.FC<Props> = ({ product, onClick }) => (
  <div className="catalog-item" onClick={onClick}>
    <img src={product.image} alt={product.title} />
    <div className="overlay">
      {product.title} — {product.price}₽
    </div>
  </div>
);

export default ProductCard;
