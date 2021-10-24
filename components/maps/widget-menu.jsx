import React, {useEffect, useState} from 'react';
import Styles from '../../styles/WidgetMenu.module.scss';
import {useSelector} from "react-redux";
import Scrollbar from "smooth-scrollbar";
import MenuTree from "../tree/menu-tree";

const WidgetMenu = () => {
    const [state, setState] = useState(false);
    const isActiveDarkMode = useSelector((state) => state.toggleMode.value)

    useEffect(
        () => {
            Scrollbar.init(document.querySelector('#menu-scrollbar'))
        }
        , []
    )
    return (

        <aside className={`${!isActiveDarkMode && Styles.dark}`}>
            <nav className={`${Styles.nav} ${state && Styles.active} rounded shadow-lg pt-5 overflow-hidden`}>
                <div className="sidebar-body pt-0 data-scrollbar" data-scroll="1" id="menu-scrollbar">
                    <div className={`${Styles.nav__item} ${state && Styles.active}`}>
                        <div
                            className={`${Styles.section__one} d-flex align-items-center justify-content-center text-center`}>
                            <button type="button"
                                    className="mx-2 rounded d-flex align-items-center justify-content-between">
                                <span>All</span>
                                <span>100</span>
                            </button>
                            <button type="button"
                                    className="mx-2 rounded d-flex align-items-center justify-content-between">
                                <span>Active</span>
                                <span>80</span>
                            </button>
                            <button type="button"
                                    className="mx-2 rounded d-flex align-items-center justify-content-between">
                                <span>Stopped</span>
                                <span>20</span>
                            </button>
                        </div>
                    </div>
                    <div className={`${Styles.nav__item} ${state && Styles.active}`}>
                        <MenuTree />
                    </div>
                </div>
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