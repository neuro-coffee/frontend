import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type User = {
  fio: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
};

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("neuroUser");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("neuroUser");
    localStorage.removeItem("cart");
    window.location.href = "/";
  };

  return (
    <section className="profile-section">
      <h1>Личный кабинет</h1>
      <div id="user-info">
        {!user ? (
          <p>
            Пожалуйста, <Link to="/login">войдите</Link> или <Link to="/register">зарегистрируйтесь</Link>.
          </p>
        ) : (
          <>
            <p><strong>ФИО:</strong> {user.fio}</p>
            <p><strong>Дата рождения:</strong> {user.dob}</p>
            <p><strong>Пол:</strong> {user.gender}</p>
            <p><strong>Телефон:</strong> {user.phone}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </>
        )}
      </div>
      {user && (
        <button onClick={handleLogout}>Выйти</button>
      )}
    </section>
  );
};

export default ProfilePage;
