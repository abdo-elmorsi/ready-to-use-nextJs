import React, {useEffect, useRef, useState} from 'react';
import {Tree} from "@minoru/react-dnd-treeview";
import {CustomNode} from "./CustomNode";
import {CustomDragPreview} from "./CustomDragPreview";
import styles from '../../styles/Tree.module.scss'
import {Button} from "react-bootstrap";

const MenuTree = () => {
    const [treeData, setTreeData] = useState([]);
    const handleDrop = (newTree) => setTreeData(newTree);
    const [selectedNodes, setSelectedNodes] = useState([]);
    const ref = useRef(null);
    const data = [
        {
            "id": 1,
            "parent": 0,
            "droppable": true,
            "text": "Folder 1"
        },
        {
            "id": 2,
            "parent": 1,
            "droppable": false,
            "text": "File 1-1",
            "data": {
                "fileType": "Running",
                "fileSize": "0.5MB"
            }
        },
        {
            "id": 3,
            "parent": 1,
            "droppable": false,
            "text": "File 1-2",
            "data": {
                "fileType": "Idling",
                "fileSize": "4.8MB"
            }
        },
        {
            "id": 4,
            "parent": 0,
            "droppable": true,
            "text": "Folder 2"
        },
        {
            "id": 5,
            "parent": 4,
            "droppable": true,
            "text": "Folder 2-1"
        },
        {
            "id": 6,
            "parent": 5,
            "droppable": false,
            "text": "File 2-1-1",
            "data": {
                "fileType": "Stopped",
                "fileSize": "2.1MB"
            }
        },
        {
            "id": 7,
            "parent": 0,
            "droppable": false,
            "text": "File 3",
            "data": {
                "fileType": "Stopped",
                "fileSize": "0.8MB"
            }
        }
    ]
    let toggleOpen = true;
    const handleOpenAll = () => {
        toggleOpen
            ? ref.current.openAll()
            : ref.current.closeAll()
        toggleOpen = !toggleOpen
    };
    const search = (e) => {
        setTreeData(data.filter(i => i.text.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())))
        console.error(data.filter(i => i.text.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())))
    }
    const handleSelect = (node) => {
        console.error(node)

        const item = selectedNodes.find((n) => n.id === node.id);

        if (!item) {
            setSelectedNodes([...selectedNodes, node]);
        } else {
            setSelectedNodes(selectedNodes.filter((n) => n.id !== node.id));
        }
    };
    useEffect(() => {
    }, []);

    return (
        <div className={styles.app}>
            <div className={styles.current}>
                <p>
                    Current node:
                    <span className={styles.currentLabel}>
                {selectedNodes.length === 0
                    ? "none"
                    : selectedNodes.map((n) => n.text).join(", ")}
              </span>
                </p>
            </div>
            <Button onClick={handleOpenAll}>select all</Button>
            <input type="text" onChange={search}/>
            <Tree
                tree={treeData}
                ref={ref}
                rootId={0}
                initialOpen={true}
                render={(node, {depth, isOpen, onToggle}) => (
                    <CustomNode
                        node={node}
                        depth={depth}
                        isOpen={isOpen}
                        isSelected={!!selectedNodes.find((n) => n.id === node.id)}
                        onToggle={onToggle}
                        onSelect={handleSelect}
                    />
                )}
                dragPreviewRender={(monitorProps) => (
                    <CustomDragPreview monitorProps={monitorProps}/>
                )}
                onDrop={handleDrop}
                classes={{
                    draggingSource: styles.draggingSource,
                    dropTarget: styles.dropTarget
                }}
            />
        </div>);
}

export default MenuTree;