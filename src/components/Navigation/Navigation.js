import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
    return (

    <header className={s.header}>
        <nav>
            <NavLink
                exact
                to="/"
                className={s.link}
                // activeClassName={s.active}
            >
                Home
            </NavLink>

            <NavLink
                to="/movies"
                className={s.link}
                // activeClassName={s.active}
            >
                Movies
            </NavLink>
        </nav>
    </header>
    )
};