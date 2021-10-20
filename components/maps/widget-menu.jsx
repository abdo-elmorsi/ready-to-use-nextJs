import React, {useState} from 'react';
import Styles from '../../styles/WidgetMenu.module.scss';
import {useSelector} from "react-redux";

const WidgetMenu = () => {
    const [state, setState] = useState(false);
    const isActiveDarkMode = useSelector((state) => state.toggleMode.value)

    return (
        <aside className={`${Styles.menu} ${!isActiveDarkMode && Styles.dark}`}>

            <nav className={`${Styles.nav} ${state && Styles.active} rounded shadow-lg overflow-hidden`}>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
                <div className={`${Styles.nav__link} ${state && Styles.active}`}>Home</div>
            </nav>

            <div onClick={() => setState(!state)} className={`${Styles.hamburger} ${state && Styles.active}`}>
                <span className={Styles.hamburger__patty}/>
                <span className={Styles.hamburger__patty}/>
                <span className={Styles.hamburger__patty}/>
            </div>

        </aside>
    );
}

export default WidgetMenu;