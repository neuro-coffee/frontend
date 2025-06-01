import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import type { Product } from "../data/products"; // Импортируем тип Product

const categories = [
  { key: "Соленые завтраки", label: "Соленые завтраки" },
  { key: "Сладкие завтраки", label: "Сладкие завтраки" },
  { key: "Десерты", label: "Десерты" },
  { key: "Напитки", label: "Напитки" },
  { key: "Special", label: "Special Меню" },
];

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/products/");
        if (!response.ok) {
          throw new Error("Ошибка при загрузке продуктов");
        }
        const data = await response.json();
        console.log("API response:", data); // Для отладки

        // Преобразуем данные из API в формат Product
        const transformedProducts: Product[] = data.results.map((item: any) => ({
          id: item.id.toString(),
          title: item.name,
          image: item.image || "placeholder.jpg",
          price: item.price,
          categories: item.types.map((type: any) => type.name).length > 0
            ? item.types.map((type: any) => type.name)
            : ["Без категории"], // Сохраняем все категории
          description: item.description || "Описание отсутствует",
          details: [
            { title: "Цена", value: `${item.price}₽` },
            { title: "Вес", value: item.weight ? `${item.weight}г` : "Не указан" },
            { title: "Калории", value: item.calorific || "Не указан" },
          ],
        }));

        setProducts(transformedProducts);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Неизвестная ошибка");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

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
                .filter((p) => p.categories.includes(cat.key)) // Фильтрация по массиву категорий
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => setSelected(product)}
                  />
                ))}
            </div>
            {cat.key === "Напитки" && <hr />}
          </React.Fragment>
        ) : null
      )}
      <h1 className="page-title">Special Меню</h1>
      <hr />
      <div className="catalog-grid">
        {products
          .filter((p) => p.categories.includes("Special")) // Фильтрация по массиву категорий
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
