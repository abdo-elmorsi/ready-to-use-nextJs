import React, {useState} from 'react';
import 'rc-tree/assets/index.css';
import {useDispatch, useSelector} from "react-redux";
import {Col, Row} from "react-bootstrap";
import Styles from '../../styles/Filter_tree.module.scss';

const FilterTree = ({active}) => {
    const stateReducer = useSelector((state) => state);
    const dispatch = useDispatch();
    const cars = [
        {
            id: 1,
            title: 'Running',
            img: './assets/images/cars/1.png'
        },
        {
            id: 0,
            title: 'Stopped',
            img: './assets/images/cars/0.png'
        },
        {
            id: 2,
            title: 'Idling',
            img: './assets/images/cars/2.png'
        },
        {
            id: 5,
            title: 'Offline',
            img: './assets/images/cars/5.png'
        },
        {
            id: 101,
            title: 'Over Speed',
            img: './assets/images/cars/101.png'
        },
        {
            id: 100,
            title: 'Over Street Speed',
            img: './assets/images/cars/100.png'
        },
        {
            id: 201,
            title: 'Invalid location',
            img: './assets/images/cars/201.png'
        },
    ]
    const [Status, setStatus] = useState([]);

    const handleRadio = (event) => {
        // add to list
        if (event.target.checked) {
            setStatus([
                ...Status,
                event.target.value
            ]);
        } else {
            // remove from list
            setStatus(
                Status.filter((state) => state !== event.target.value),
            );
        }

    }
    return (
        <div className="mt-3">
            <Row className={`text-center rounded ${Styles.cars}`}>
                {cars?.map(car => (
                    <Col key={`car_icon_${car?.id}`} xs={1} className={`m-1 ${Styles.cars__car} ${active && Styles.active}`}>
                        <input type="checkbox" onChange={handleRadio} value={car?.id} className="btn-check"
                               name="options" id={car?.id}
                               autoComplete="off"/>
                        <label
                            className={`btn ${stateReducer.config.darkMode ? 'btn-outline-light' : 'btn-outline-primary'} border-0 p-1`}
                            htmlFor={car?.id}>
                            <img width="14" src={car?.img} alt={car?.title}
                                 title={car?.title}/>
                        </label>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
export default FilterTree;
