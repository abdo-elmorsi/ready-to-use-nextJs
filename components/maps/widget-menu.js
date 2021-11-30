import React, {useEffect, useState} from 'react';
import Styles from '../../styles/WidgetMenu.module.scss';
import {useDispatch, useSelector} from "react-redux";
import MenuTree from "../tree/menu-tree";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faSlidersH} from '@fortawesome/free-solid-svg-icons'
import {toggle} from "../../lib/slices/toggleAddMarkerRoutingMachine";
import FilterTree from "../tree/filter-tree";

const WidgetMenu = () => {
    const [state, setState] = useState(false);
    const [openConfig, setOpenConfig] = useState(false);
    const stateReducer = useSelector((state) => state);
    const isOpenMarkerRoutingMachine = stateReducer.toggleAddMarkerRoutingMachine.value;
    const dispatch = useDispatch()

    useEffect(() => {
            if (isOpenMarkerRoutingMachine) {
                setState(true);
            }
            return false;
        }, [isOpenMarkerRoutingMachine]
    )

    const handleButton = () => {
        if (isOpenMarkerRoutingMachine) {
            dispatch(toggle(false));
            setState(!state);
        } else {
            setState(!state);
            setOpenConfig(false)
        }
    }
    return (

        <aside className={`${stateReducer.config.darkMode && Styles.dark}`}>
            <nav className={`${Styles.nav} ${(state && !isOpenMarkerRoutingMachine) && Styles.active} position-absolute rounded shadow-lg pt-5 overflow-hidden`} id="widget_menu">

                <button onClick={() => setOpenConfig(!openConfig)} type="button" className={Styles.config_btn}>
                    <FontAwesomeIcon icon={faSlidersH}/>
                </button>

                <div className={`${Styles.nav__item} ${(state && !isOpenMarkerRoutingMachine) && Styles.active}`}>
                    <div
                        className={`${Styles.section__one} d-flex align-items-center justify-content-center text-center`}>

                        <input type="radio" name="filterBtn" className="btn-check" id="btn-check-all"
                               autoComplete="off"/>
                        <label
                            className="btn btn-outline-primary mx-2 rounded d-flex align-items-center justify-content-between"
                            htmlFor="btn-check-all">
                            <span>All</span>
                            <span>{stateReducer.firebase.all}</span>
                        </label>

                        <input type="radio" name="filterBtn" className="btn-check" id="btn-check-active"
                               autoComplete="off"/>
                        <label
                            className="btn btn-outline-primary mx-2 rounded d-flex align-items-center justify-content-between"
                            htmlFor="btn-check-active">
                            <span>Active</span>
                            <span>{stateReducer.firebase.online}</span>
                        </label>

                        <input type="radio" name="filterBtn" className="btn-check" id="btn-check-stopped"
                               autoComplete="off"/>
                        <label
                            className="btn btn-outline-primary mx-2 rounded d-flex align-items-center justify-content-between"
                            htmlFor="btn-check-stopped">
                            <span>Stopped</span>
                            <span>{stateReducer.firebase.offline}</span>
                        </label>

                    </div>
                </div>

                <div className={`${Styles.nav__item} ${(state && !isOpenMarkerRoutingMachine) && Styles.active} mb-1`}>
                    <FilterTree active={(state && !isOpenMarkerRoutingMachine)}/>
                </div>

                <div className={`${Styles.nav__item} ${(state && !isOpenMarkerRoutingMachine) && Styles.active} border-top pt-2`}>
                    <MenuTree/>
                </div>

                <div className={`${Styles.config} ${openConfig && Styles.active}`}>
                    <button onClick={() => setOpenConfig(!openConfig)} type="button"
                            className={Styles.config_btn_close}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </button>
                    <h4 className={`${Styles.title} pt-2`}>Config</h4>
                    <div className={`sidebar-body pt-3 data-scrollbar menu-scrollbar ${Styles.config_main}`}
                         data-scroll="1">
                        <div className={`${Styles.nav__item} ${openConfig && Styles.active}`}>
                        </div>
                    </div>
                </div>
            </nav>
            <div onClick={handleButton}
                 className={`${Styles.hamburger} ${state && Styles.active}`}>
                <span className={Styles.hamburger__patty}/>
                <span className={Styles.hamburger__patty}/>
                <span className={Styles.hamburger__patty}/>
            </div>
        </aside>
    );
}

export default WidgetMenu;
