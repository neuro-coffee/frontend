const PromoBirthday = () => {
    return (
        <main className="promo-detail">
            <h1 className="page-title">Акция — День Рождения</h1>

            <div className="promo-highlight">
                <p>В твой День Рождения — <strong>напиток в подарок!</strong></p>
            </div>

            <p>
                Neuro Coffee поздравляет с праздником! Подарок доступен в день рождения и на следующий день. Просто покажи документ с датой рождения.
            </p>

            <div className="promo-conditions">
                <p><strong>Условия:</strong><br />
                    – Один подарок на человека.<br />
                    – Напиток стоимостью до 400₽ на выбор из основного меню.<br />
                    – Действует при предъявлении паспорта или любого документа с датой.
                </p>
            </div>
        </main>
    )
}
export default PromoBirthday;