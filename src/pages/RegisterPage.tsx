import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  interface UserData {
    fio: string;
    dob: string;
    gender: string;
    phone: string;
    email: string;
    password: string;
  }
  const [formData, setFormData] = useState<UserData>({
    fio: '',
    dob: '',
    gender: 'мужской',
    phone: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { fio, dob, gender, phone, email } = formData;
    const user = { fio, dob, gender, phone, email };
    localStorage.setItem('neuroUser', JSON.stringify(user));
    alert('Регистрация успешна!');
    navigate('/profile');
  };
  return (
    <section className="form-section">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <label>ФИО:</label>
        <input
          type="text"
          name="fio"
          value={formData.fio}
          onChange={handleChange}
          required
        />

        <label>Дата рождения:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label>Пол:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="мужской">Мужской</option>
          <option value="женский">Женский</option>
          <option value="другое">Другое</option>
        </select>

        <label>Телефон:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Пароль:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Зарегистрироваться</button>
        <p>Уже есть аккаунт? <a href="/login">Войдите</a></p>
      </form>
    </section>
  )
}
export default RegisterPage;