import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLayerGroup} from '@fortawesome/free-solid-svg-icons'
import dynamic from "next/dynamic";

const Running = dynamic(() => import('./cars/Running'))
const Stopped = dynamic(() => import('./cars/Stopped'))
const Idling = dynamic(() => import('./cars/Idling'))
export const TypeIcon = ({fileType, droppable}) => {


    switch (fileType) {
        case "Running":
            return <Running/>;
        case "Stopped":
            return <Stopped/>;
        case "Idling":
            return <Idling/>;
        default:
            return null;
    }
};
