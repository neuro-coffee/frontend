import React, { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        localStorage.setItem(
            "neuroUser",
            JSON.stringify({ email })
        );
        alert("Вход выполнен успешно!");
        navigate("/profile");
    };

    return (
        <>
            <section className="form-section">
                <h1>Вход</h1>
                <form id="login-form" onSubmit={handleSubmit}>
                    <label>Электронная почта:</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Пароль:</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Войти</button>
                    <p>
                        Нет аккаунта?{" "}
                        <a href="/register" onClick={(e) => {
                            e.preventDefault();
                            navigate("/register");
                        }}>
                            Зарегистрируйтесь
                        </a>
                    </p>
                </form>
            </section>
        </>
    );
};

export default LoginPage;
