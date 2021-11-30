import React, {useEffect, useState} from 'react';
import Tree, {TreeNode} from 'rc-tree';
import 'rc-tree/assets/index.css';
import Styles from '../../styles/Tree.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {SyncOnCheck, SyncOnExpand} from "../../lib/slices/vehicleProcessStatus";
import {GetStatusString, iconUrl} from "../../helpers/helpers";

const MenuTree = () => {
    const [All, setAll] = useState(0);
    const [treeFilter, setTreeFilter] = useState("");
    const [TreeStyleHeight, setTreeStyleHeight] = useState(0);
    const [loading, setLoading] = useState(false);
    const stateReducer = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(_ => {
        const ele = document.getElementById('widget_menu');
        const setSize = () => ele && setTreeStyleHeight(ele.clientHeight / 1.3)
        window.addEventListener('resize', setSize);
        setLoading(true)
        setSize()
        // console.log(stateReducer?.firebase?.status)
    }, []);


    const onCheck = (selectedKeys, info) => {
        const byGroup = info.checkedNodesPositions.filter(i => i.pos.split('-').length === 2);
        console.log('onCheck', info)
        if (byGroup.length > 0) {
            dispatch(SyncOnCheck(byGroup[0].node.children))
        } else if (info.checkedNodes.length > 0) {
            dispatch(SyncOnCheck(info?.checkedNodes))
        } else {
            dispatch(SyncOnCheck([]))
        }
    };

    const onExpand = (expandedKeys, info) => {
        if (expandedKeys.length > 0) {
            dispatch(SyncOnExpand(info.node.children))
        } else {
            dispatch(SyncOnExpand([]))
        }
    };

    const customLabel = node => (<span className="cus-label">
        <span style={{fontSize: '.75rem'}}>{node.title}</span>
      </span>)

    const handleFilter = (e) => {
        setTreeFilter(e.target.value.toLocaleLowerCase());
    }

    const handleFilterTree = (treeNode) => {
        if (treeFilter) {
            // if not group
            if (!Array.isArray(treeNode.title.props.children)) {
                return treeNode.title.props.children.toLocaleLowerCase().includes(treeFilter)
            }
            return treeNode.key.toLocaleLowerCase().includes(treeFilter)
        }
    }

    const titleRender = (data) => {
        console.warn(data)
        if (data.children) {
            data.children.map(obj => {
                obj.title = obj['DisplayName'];
            });
        }
        if (data.key === "child 6") {
            return null
        } else {
            return customLabel(data)
        }
    }

    const Icon = (props) => {
        console.log(props)
        /*if (pos.split('-').length === 2) {
            return (<i className={Styles.cars__icon}/>);
        } else {
            return (<i className={OverSpeedingStatus? Styles.car__running : Styles.car__over_speed}/>)
        }*/
    };

    const loop = data => data?.map((item, index) => {
            if (item.children) {
                return (
                    <TreeNode
                        key={`${item?.title}_${index}`}
                        icon={<i className={Styles.cars__icon}/>}
                        data={item}
                        title={(
                            <span className="d-flex align-items-center" style={{fontSize: '12px'}}>
                                {item?.title}
                                <span className="badge bg-secondary px-1 mx-2">{item.children?.length}</span>
                            </span>)}>
                        {loop(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item?.SerialNumber}
                             data={item}
                             icon={(<div className="position-relative">{<img
                                 src={iconUrl(item?.VehicleStatus)} width={11} height={20}
                                 alt={GetStatusString(item?.VehicleStatus)}
                                 title={GetStatusString(item?.VehicleStatus)}/>}</div>)}
                             isLeaf={true}
                             switcherIcon={props => {
                                 if (stateReducer?.firebase?.status[props.eventKey]){
                                     props.icon =
                                         (<img
                                             src={iconUrl(stateReducer?.firebase?.status[props.eventKey])} width={11} height={20}
                                             alt={GetStatusString(stateReducer?.firebase?.status[props.eventKey])}
                                             title={GetStatusString(stateReducer?.firebase?.status[props.eventKey])}/>)
                                 }
                                 // console.log(props.icon.props.children.props.src)
                                 // console.log(props.icon.props.children.props.alt)
                                 // console.log(props.icon.props.children.props.title)
                                 // console.log(props.eventKey)
                                 console.log(props)
                             }}
                             title={(
                                 <div className="d-flex align-items-center">

                                     <div className="me-1" title={item?.DisplayName} style={{fontSize: '10px'}}>
                                         {item?.DisplayName}
                                     </div>

                                     <div title={item?.DisplayName} className="fw-bold me-1" style={{fontSize: '11px'}}>
                                         ({item?.SerialNumber})
                                     </div>

                                 </div>
                             )}/>;
        });

    return (
        <div className="position-relative">
            <div id="menu-scrollbar">
                <input type="text" onChange={handleFilter}/>
                <div className={`tree_root ${stateReducer.config.darkMode && Styles.dark}`}
                     style={{height: TreeStyleHeight}}>
                    <Tree
                        selectable={false}
                        showLine
                        checkable
                        onCheck={onCheck}
                        onActiveChange={key => console.log(key)}
                        defaultExpandedKeys={['0-0-0', '0-0-1']}
                        defaultSelectedKeys={['0-0-0', '0-0-1']}
                        defaultCheckedKeys={['0-0-0', '0-0-1']}
                        onExpand={onExpand}
                        virtual={false}
                        filterTreeNode={handleFilterTree}
                        height={TreeStyleHeight - 50}>
                        {loop(stateReducer?.firebase?.Vehicles)}
                    </Tree>

                </div>
            </div>
        </div>
    );
}
export default MenuTree;
