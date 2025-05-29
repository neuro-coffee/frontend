import { useNavigate } from "react-router-dom";
import YandexMap from "../components/YandexMap";

const MainPage = () => {
    const navigate = useNavigate();

    const openModal = (type: string) => {
        alert(`Открыть модальное окно: ${type}`);
    };

    return (
        <>
            <section className="main-hero">
                <h1>Neuro Coffee</h1>
                <p>Найди свой любимый вкус кофе</p>
                <button
                    className="button-primary"
                    onClick={() => navigate("/catalog#drinks")}
                >
                    Найти
                </button>
            </section>

            <section className="section">
                <h2>Наша продукция</h2>
                <div className="products-grid">
                    <div className="catalog-item" onClick={() => openModal('waffles')}>
                        <img src="Вафли.jfif" alt="Вафли" />
                        <div className="overlay">Вафли с лососем — 440₽</div>
                    </div>
                    <div className="catalog-item" onClick={() => openModal('porridge')}>
                        <img src="Каша.jfif" alt="Каша" />
                        <div className="overlay">Рисовая каша с сезонными ягодами — 410₽</div>
                    </div>
                    <div className="catalog-item" onClick={() => openModal('cinnabon')}>
                        <img src="Синнабон.jfif" alt="Синнабон" />
                        <div className="overlay">Синнабон Красный бархат — 360₽</div>
                    </div>
                    <div className="catalog-item" onClick={() => openModal('cherryLatte')}>
                        <img src="Вишневый_латте.jfif" alt="Вишневый латте" />
                        <div className="overlay">Вишнево-ванильный латте — 440₽</div>
                    </div>
                </div>
                <button
                    className="button-primary"
                    onClick={() => navigate("/catalog")}
                >
                    Перейти в каталог
                </button>
            </section>

            <section className="section-alt">
                <h2>Акция месяца</h2>
                <div className="promo-box styled-promo">
                    <div className="promo-image-container">
                        <img src="Май.jfif" alt="Акция месяца" className="promo-image" />
                    </div>
                    <div className="promo-content">
                        <h3>Весеннее предложение!</h3>
                        <p>Весь май дарим <strong>30% скидку</strong> на все виды латте!</p>
                        <div className="promo-buttons">
                            <button
                                className="button-primary"
                                onClick={() => navigate("/promo-month")}
                            >
                                Узнать подробнее
                            </button>
                        </div>
                    </div>
                </div>
                <div className="all-promotions">
                    <button
                        className="button-secondary"
                        onClick={() => navigate("/sales")}
                    >
                        Все акции
                    </button>
                </div>
            </section>

            <section className="section">
                <h2>Заходите к нам</h2>
                <YandexMap
                    center={[54.7286, 55.9426]}
                    zoom={16}
                    balloonContent="Neuro Coffee, ул. Верхнеторговая, 1"
                />
            </section>
        </>
    );
};

export default MainPage;
