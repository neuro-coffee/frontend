import { Link } from 'react-router-dom';

const SalesPage = () => {
    return (
        <main className="sales-section">
            <h1 className="page-title">Наши Акции</h1>

            <div className="promo-box">
                <img src="Май.jfif" alt="Акция месяца" className="promo-image"/>
                <div className="promo-content">
                    <h3>Акция месяца</h3>
                    <p>Весь май дарим <strong>30% скидку</strong> на все виды латте!</p>
                    <Link to="/promo-month" className="button-primary">Узнать подробнее</Link>
                </div>
            </div>

            <div className="promo-box">
                <img src="ДР.jfif" alt="День Рождения" className="promo-image"/>
                <div className="promo-content">
                    <h3>День Рождения</h3>
                    <p>В день рождения и на следующий день — напиток до 400₽ бесплатно! Просто покажи документ с датой рождения.</p>
                    <Link to="/promo-birthday" className="button-primary">Узнать подробнее</Link>
                </div>
            </div>

            <div className="promo-box">
                <img src="Фраппучино.jfif" alt="Special меню" className="promo-image"/>
                <div className="promo-content">
                    <h3>Special меню</h3>
                    <p>Сезонное меню с эксклюзивными напитками: смородиновый флэт уайт, мята-молоко, тыквенный раф и многое другое.</p>
                    <Link to="/promo-special" className="button-primary">Узнать подробнее</Link>
                </div>
            </div>
        </main>
    )
}
export default SalesPage;
