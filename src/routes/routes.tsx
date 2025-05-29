import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import NoMatchPage from '../pages/NoMatchPage';
import AboutUsPage from '../pages/AboutUsPage';
import CartPage from '../pages/CartPage';
import RegisterPage from '../pages/RegisterPage';
import SalesPage from '../pages/SalesPage';
import CatalogPage from '../pages/CatalogPage';
import PromoMonth from '../pages/PromoMonth';
import PromoBirthday from '../pages/PromoBirthday';
import PromoSpecial from '../pages/PromoSpecial';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage'
function AppRoutes() {
    const navigationRoutes = [
        { path: '/', element: <MainPage /> },
        { path: '/about', element: <AboutUsPage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/catalog', element: <CatalogPage /> },
        { path: '/cart', element: <CartPage /> },
        { path: '/register', element: <RegisterPage /> },
        { path: '/sales', element: <SalesPage /> },
        { path: '/promo-month', element: <PromoMonth /> },
        { path: '/promo-birthday', element: <PromoBirthday /> },
        { path: '/promo-special', element: <PromoSpecial /> },
        { path: '/profile', element: <ProfilePage /> },
        { path: '/*', element: <NoMatchPage /> },

    ]
    return (
        <Routes>
            {navigationRoutes.map((route) => (<Route key={route.path} path={route.path} element={route.element} />))}
        </Routes>
    );
}
export default AppRoutes;