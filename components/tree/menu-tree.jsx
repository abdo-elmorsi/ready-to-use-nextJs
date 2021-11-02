/*
import React, {useEffect, useState} from 'react';
import SortableTree, {changeNodeAtPath} from 'react-sortable-tree';
import '../../styles/Tree.module.scss';
import 'react-sortable-tree/style.css';


const MenuTree = () => {
    const [treeData, setTreeData] = useState([
        {
            title: 'root',
            isDirectory: true,
            expanded: true,
            children: [
                {
                    title: 'hello',
                    isDirectory: true,
                    expanded: true,
                    children: [
                        {
                            title: 'bar.js',
                        },
                        {
                            title: 'baz.js',
                        },
                        {
                            title: 'hello2',
                            isDirectory: true,
                            expanded: true,
                            children: [
                                {title: 'Маруся.jpg'}],
                        },
                    ],
                },
                {
                    title: 'world.js',
                    checked: false
                },
            ],
        },
    ]);
    useEffect(() => {
    }, []);
    const getNodeKey = ({treeIndex}) => treeIndex

    const renderTitle = (node, setTreeData, treeData, path) => {
        return (
            <span>{node.title}</span>
        )
    }

    const renderNodeCheckbox = (node, setTreeData, treeData, path) => {
        return [(<input type="checkbox"  onChange={event => {
            if (node.isDirectory) {
                node.children.map(i => {
                    i.checked = !node.checked;
                });
                node.checked = !node.checked
            } else {
                node.checked = !node.checked
            }
            setTreeData(
                changeNodeAtPath({
                    treeData,
                    path,
                    getNodeKey,
                    newNode: {...node},
                }),
            )
        }}/>), node.isDirectory ? '📁' : '🚚']

        /!* const rmButton = (
             <input
                 key="select"
                 type="checkbox"
                 onChange={event => {
                     setTreeData(
                         changeNodeAtPath({
                             treeData,
                             path,
                             getNodeKey,
                             newNode: { ...node, title },
                         }),
                     )
                 }}
             />
         )*!/
    }

    return (
        <div className="tree_root pt-3"
             style={{height: 400}}>

            <div>

                <SortableTree
                    isVirtualized={false}
                    treeData={treeData}
                    canNodeHaveChildren={node => !node.isDirectory}
                    scaffoldBlockPxWidth={15}
                    onChange={setTreeData}
                    generateNodeProps={({node, path}) => ({
                        icons: renderNodeCheckbox(node, setTreeData, treeData, path),
                        buttons: [],
                        title: renderTitle(node, setTreeData, treeData, path),
                    })}
                />

            </div>

        </div>
    );
}
export default MenuTree;*/
