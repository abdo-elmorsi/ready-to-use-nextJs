import React, {useEffect, useState} from 'react';
import Styles from '../../styles/WidgetMenu.module.scss';
import {useSelector} from "react-redux";
import Scrollbar from "smooth-scrollbar";
import MenuTree from "../tree/menu-tree";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSlidersH, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const WidgetMenu = () => {
    const [state, setState] = useState(false);
    const [openConfig, setOpenConfig] = useState(false);
    const config = useSelector((state) => state.config);

    useEffect(
        () => {
            Scrollbar.init(document.querySelector('.menu-scrollbar'))
        }, []
    )
    return (

        <aside className={`${config.darkMode && Styles.dark}`}>
            <nav className={`${Styles.nav} ${state && Styles.active} rounded shadow-lg pt-5 overflow-hidden`}>
                <button onClick={() => setOpenConfig(!openConfig)} type="button" className={Styles.config_btn}>
                    <FontAwesomeIcon icon={faSlidersH}/>
                </button>

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
                        <MenuTree/>
                    </div>
                </div>
                <div className={`${Styles.config} ${openConfig && Styles.active}`}>
                    <button onClick={() => setOpenConfig(!openConfig)} type="button"
                            className={Styles.config_btn_close}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </button>

                    <div className={`sidebar-body pt-3 data-scrollbar menu-scrollbar ${Styles.config_main}`} data-scroll="1">
                        <div className={`${Styles.nav__item} ${openConfig && Styles.active}`}>
                            <MenuTree/>
                        </div>
                    </div>
                </div>
            </nav>
            <div onClick={() => setState(!state) | setOpenConfig(false)}
                 className={`${Styles.hamburger} ${state && Styles.active}`}>
                <span className={Styles.hamburger__patty}/>
                <span className={Styles.hamburger__patty}/>
                <span className={Styles.hamburger__patty}/>
            </div>

        </aside>
    );
}

export default WidgetMenu;