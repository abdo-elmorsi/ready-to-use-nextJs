import React, {useEffect, useState} from 'react';
import Tree, {TreeNode} from 'rc-tree';
import Image from 'next/image'
import 'rc-tree/assets/index.css';
import Styles from '../../styles/Tree.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {SyncOnCheck, SyncOnExpand} from "../../lib/slices/vehicleProcessStatus";
import {getKey, GetStatusString, iconUrl} from "../../helpers/helpers";
import {FormControl} from "react-bootstrap";

const MenuTree = () => {
    const [Status, setStatus] = useState({
        stopped: 0,
        running: 0,
        idling: 0,
        offline: 0,
        over_street_speed: 0,
        over_speed: 0,
        invalid_location: 0
    });
    const [lists, setLists] = useState([]);
    const [statusIcons, setStatusIcons] = useState({});
    const [treeFilter, setTreeFilter] = useState("");
    const [TreeStyleHeight, setTreeStyleHeight] = useState(0);
    const [loading, setLoading] = useState(false);
    const stateReducer = useSelector((state) => state);
    const dispatch = useDispatch();
    const groupBy = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});

    useEffect(_ => {
        const ele = document.getElementById('widget_menu');
        const setSize = () => ele && setTreeStyleHeight(ele.clientHeight / 1.3)
        window.addEventListener('resize', setSize);
        setLoading(true)
        setSize()

        let groups = groupBy(stateReducer?.firebase?.Vehicles, 'GroupName');
        if (groups['null'] && groups['Default']) {
            groups['Default'] = [...groups['null'], ...groups['Default']];
        } else if (groups['null']) {
            groups['Default'] = [...groups['null']];
        }
        delete groups['null']
        let result = []
        for (let key in groups) if (groups.hasOwnProperty(key)) result.push({title: key, children: groups[key]})
        setLists(result)
        setStatusIcons(stateReducer?.firebase?.status)


        console.log(Object.values(statusIcons).map(i => {return {[getKey(i)]: i}}))
    }, [stateReducer?.firebase?.Vehicles, stateReducer?.firebase?.status, statusIcons]);


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
                             icon={(<div className="position-relative">
                                 <Image src={iconUrl(statusIcons[item?.SerialNumber])} width={11} height={20}
                                        alt={GetStatusString(statusIcons[item?.SerialNumber])}
                                        title={GetStatusString(statusIcons[item?.SerialNumber])}/></div>)}
                             isLeaf={true}
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
                <FormControl size="sm" type="text" className="mb-2" placeholder="Search..." onChange={handleFilter}/>
                <div className={`tree_root ${stateReducer.config.darkMode && Styles.dark}`}
                     style={{height: TreeStyleHeight}}>
                    <Tree
                        selectable={false}
                        showLine
                        checkable
                        // onCheck={onCheck}
                        onActiveChange={key => console.log(key)}
                        defaultExpandedKeys={['0-0-0', '0-0-1']}
                        defaultSelectedKeys={['0-0-0', '0-0-1']}
                        defaultCheckedKeys={['0-0-0', '0-0-1']}
                        onExpand={onExpand}
                        virtual={true}
                        filterTreeNode={handleFilterTree}
                        height={TreeStyleHeight - 80}>
                        {loop(lists)}
                    </Tree>
                </div>
            </div>
        </div>
    );
}
export default MenuTree;
