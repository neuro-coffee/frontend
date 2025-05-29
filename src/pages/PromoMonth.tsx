const PromoMonth = () => {
    return (
        <main className="promo-detail">
            <h1 className="page-title">Акция месяца — Май</h1>

            <div className="promo-highlight">
                <p>
                    Весь <strong>май</strong> дарим <strong>30% скидку</strong> на все виды латте!
                </p>
            </div>

            <p>
                Попробуйте весенние вкусы с нотками ванили, миндаля и клубники — мы собрали самое лучшее, чтобы порадовать вас!
            </p>

            <p>
                Акция действует до <strong>31 мая</strong> включительно.
            </p>

            <div className="promo-conditions">
                <p>
                    <strong>Условия:</strong><br />
                    – Скидка применяется при заказе от 2 напитков.<br />
                    – Действует только на латте с любыми добавками.<br />
                    – Не суммируется с другими предложениями.
                </p>
            </div>
        </main>
    )
}
export default PromoMonth;