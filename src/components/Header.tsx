import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    //@ts-ignore
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const userData = localStorage.getItem("neuroUser");
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const scrollToFooter = (e: React.MouseEvent) => {
        const footer = document.getElementById("footer");
        if (footer) {
            e.preventDefault();
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };

    //@ts-ignore
    const handleLogout = () => {
        localStorage.removeItem("neuroUser");
        localStorage.removeItem("cart");
        window.location.href = "/";
    };

    return (
        <header>
            <div className="logo">
                <img src="logo.svg" alt="Neuro Coffee" className="logo-img" />
            </div>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/catalog">Каталог</Link>
                <Link to="/about">О компании</Link>
                <Link to="/sales">Акции</Link>
                <Link to="/cart">Корзина</Link>
                <Link to="#footer" onClick={scrollToFooter}>Контакты</Link>
            </nav>
            <Link to="/profile" className="profile-icon" />
        </header>
    );
};

export default Header;