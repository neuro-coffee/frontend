const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-left">
                <p>Контакты: info@neurocoffee.ru</p>
                <a href="https://t.me/neurocoffee" target="_blank">Telegram</a>
                <a href="https://vk.com/neurocoffee" target="_blank">VK</a>
            </div>
            <div className="footer-center">
                <div className="footer-logo">
                    <img src="logo.svg" alt="Neuro Coffee" className="logo-img" />
                </div>
                <p>+7 (999) 123-45-67</p>
            </div>
            <div className="footer-right">
                <p>График работы:<br />Пн–Пт: 8:00–21:00<br />Сб–Вс: 9:30–22:00</p>
            </div>
        </footer>
    )
}
export default Footer;