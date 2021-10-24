import React from "react";
import { TypeIcon } from "./TypeIcon";
import styles from "../../styles/CustomDragPreview.module.scss";

export const CustomDragPreview = ({monitorProps}) => {
    const item = monitorProps.item;
    return (
        <div className={styles.root}>
            <div className={styles.icon}>
                <TypeIcon droppable={item.droppable} fileType={item?.data?.fileType} />
            </div>
            <div className={styles.label}>{item.text}</div>
        </div>
    );
};
