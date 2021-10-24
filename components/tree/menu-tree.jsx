import React, {forwardRef, useEffect, useRef, useState} from 'react';
import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer'

import 'react-sortable-tree/style.css';

const MenuTree = () =>  {
    const [treeData, setTreeData] = useState([]);
    useEffect(() => {
        setTreeData([
            {title: 'Chicken', children: [{title: 'Egg'}]},
            {title: 'Fish', children: [{title: 'fingerline'}]},
        ])
    }, []);
    const renderNodeButtons = (node, setTreeData, treeData, path) => {
        const rmButton = (
            <button
                key="remove"

            >
                rm
            </button>
        )
    }
    return (
        <div style={{height: 400}}>

            <SortableTree
                treeData={treeData}
                onChange={treeData => setTreeData(treeData)}
                theme={FileExplorerTheme}
                isVirtualized={false}
                generateNodeProps={({ node, path }) => ({
                    icons: node.isDirectory ? [node.expanded ? '📂' : '📁'] : ['📄'],
                    buttons: renderNodeButtons(node, setTreeData, treeData, path),
                })}
            />
        </div>
    );
}
export default MenuTree;