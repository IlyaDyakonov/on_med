import { NavLink } from "react-router-dom";
// import './StartPages.css';
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import UsersList from "./uslis";

/**
 * НА ЭТОЙ СТРАНИЦЕ БУДУТ КЛИЕНТЫ ВИДЕТЬ ДОКТОРОВ
 */
export function Customers() {
    // Получаем данные о состоянии пользователя из Redux store

    const loginUser = useSelector((state: RootState) => state.users.loginUser); // loginUser.name: apuox
    const activeState = useSelector((state: RootState) => state.users.activeState); // activeState: auth


    // Рендеринг навигационного меню
    return (
        <nav className="crud-menu">
            {activeState === 'auth' && loginUser ? (
                <div className="auth-name">
                    <h1>Добро пожаловать в наш сервис, уважаемый "{loginUser.username}"!</h1>
                    <h1>Список доступных врачей:
                    <UsersList/>
                    </h1>
                </div>
            ) : (
                <div className="menu-login">
                    <h2 className="menu-login-welcome">Добро пожаловать на наш сервис «Online medics!»!</h2>
                    <p className="menu-login-log-reg">Перед началом работы
                        <NavLink to="/login" className={'crud-menu__item'}>войдите</NavLink>
                        или
                        <NavLink to="/register" className={'crud-menu__item'}>зарегистрируйтесь</NavLink>
                    </p>
                </div>
            )}

        </nav>
    )
}
