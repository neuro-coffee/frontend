import React, { useState } from "react";
import { products,type Product } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

const categories = [
  { key: "Соленые завтраки", label: "Соленые завтраки" },
  { key: "Сладкие завтраки", label: "Сладкие завтраки" },
  { key: "Десерты", label: "Десерты" },
  { key: "Напитки", label: "Напитки" },
  { key: "Special", label: "Special Меню" }
];

const Catalog: React.FC = () => {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section className="catalog-section">
      <h1 className="page-title">Основное Меню</h1>
      <hr />
      {categories.map((cat) =>
        cat.key !== "Special" ? (
          <React.Fragment key={cat.key}>
            <h2>{cat.label}</h2>
            <div className="catalog-grid">
              {products
                .filter((p) => p.category === cat.key)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => setSelected(product)}
                  />
                ))}
            </div>
            {cat.key === "Напитки"}
          </React.Fragment>
        ) : null
      )}
      <h1 className="page-title">Special Меню</h1>
      <hr />
      <div className="catalog-grid">
        {products
          .filter((p) => p.category === "Special")
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelected(product)}
            />
          ))}
      </div>
      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Catalog;
