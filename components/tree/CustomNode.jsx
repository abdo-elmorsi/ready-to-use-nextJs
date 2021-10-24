import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { TypeIcon } from "./TypeIcon";
import styles from "../../styles/CustomNode.module.scss";
export const CustomNode = ({node, onToggle, depth, isOpen, isSelected, onSelect}) => {
    const { droppable, data } = node;
    const indent = depth * 24;

    const handleToggle = (e) => {
        e.stopPropagation();
        onToggle(node.id);
    };

    const handleSelect = () => onSelect(node);

    return (
        <div
            className={`tree-node ${styles.root} ${isSelected && styles.isSelected}`}
            style={{ paddingInlineStart: indent }}>
            <div className={`${styles.expandIconWrapper} ${isOpen && styles.isOpen}`}>
                {node.droppable && (
                    <div onClick={handleToggle}>
                        <span>{<FontAwesomeIcon icon={faChevronRight} />}</span>
                    </div>
                )}
            </div>
            <div>
                <input type="checkbox" checked={isSelected} onChange={handleSelect}/>
            </div>
            <div>
                <TypeIcon droppable={droppable} fileType={data?.fileType} />
            </div>
            <div className={styles.labelGridItem}>
                <span>{node.text}</span>
            </div>
        </div>
    );
};
