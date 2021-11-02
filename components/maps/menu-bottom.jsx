import React, {useEffect, useRef, useState} from 'react';
import Styles from '../../styles/MenuBottom.module.scss';
import {useDispatch, useSelector} from "react-redux";
import Scrollbar from "smooth-scrollbar";
import {toggle} from '../../lib/slices/toggleAddMarkerRoutingMachine'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const MenuBottom = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const ref = useRef();
    const toggleAddMarkerRoutingMachine = useSelector((state) => state.toggleAddMarkerRoutingMachine.value);

    useEffect(
        () => {
            document.querySelector('.leaflet-control-container > .leaflet-bottom.leaflet-left').style.bottom = `${ref.current.offsetHeight + 10}px`
            Scrollbar.init(document.getElementById('menu-scrollbar'))
        }, []
    )
    return (

        <>
            <div className={`${Styles.menu_bottom_main} d-flex position-absolute`} ref={ref}>
                <button type="button" className={`${Styles.show_btn } ${show && Styles.active} border-0 mx-1 p-2`} onClick={() => setShow(!show)}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
                <div className={`${Styles.list} ${show && Styles.active}`}>

                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(props)=>(
                            <Tooltip id="button-tooltip" {...props}>
                                Simple tooltip
                            </Tooltip>
                        )}
                    >
                        <button type="button" className={`border-0 mx-1 ${toggleAddMarkerRoutingMachine && Styles.active}`} onClick={() => dispatch(toggle(true))}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 22 22">
                                <path d="M18.563,15.125H13.75a2.063,2.063,0,0,1,0-4.125h4.125S22,6.4,22,4.125a4.125,4.125,0,0,0-8.25,0c0,1.487,1.757,3.962,2.978,5.5H13.75a3.438,3.438,0,0,0,0,6.875h4.813a2.063,2.063,0,0,1,0,4.125H5.272c1.22-1.538,2.978-4.013,2.978-5.5a4.125,4.125,0,0,0-8.25,0C0,17.4,4.125,22,4.125,22H18.563a3.438,3.438,0,0,0,0-6.875Zm-3.437-11a2.75,2.75,0,0,1,5.5,0c0,.877-1.293,2.922-2.75,4.744-1.461-1.83-2.75-3.893-2.75-4.744Zm-13.75,11a2.75,2.75,0,0,1,5.5,0c0,.877-1.293,2.922-2.75,4.744C2.664,18.038,1.375,15.976,1.375,15.125Zm2.75-.687a.688.688,0,0,0,0,1.375A.688.688,0,0,0,4.125,14.438Zm13.75-11a.688.688,0,0,0,0,1.375A.688.688,0,0,0,17.875,3.438Z"/>
                            </svg>
                        </button>
                    </OverlayTrigger>
                </div>

            </div>
        </>

    );
}

export default MenuBottom;