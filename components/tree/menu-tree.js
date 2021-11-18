import React, {useEffect, useState} from 'react';
import Tree, {TreeNode} from 'rc-tree';
import 'rc-tree/assets/index.css';
import Styles from '../../styles/Tree.module.scss';
import Scrollbar from "smooth-scrollbar";
import {useDispatch, useSelector} from "react-redux";
import {SyncOnCheck, SyncOnExpand} from "../../lib/slices/vehicleProcessStatus";
import {GetStatusString} from "../../helpers/helpers";
import {Spinner} from "react-bootstrap";

const MenuTree = () => {
    const [All, setAll] = useState(0);
    const [lists, setLists] = useState([]);
    const [treeFilter, setTreeFilter] = useState("");
    const [treeStyle, setTreeStyle] = useState({});
    const [loading, setLoading] = useState(false);
    const [OverSpeedingStatus, setOverSpeedingStatus] = useState(false);
    const stateReducer = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(_ => {
        Scrollbar.init(document.getElementById('menu-scrollbar'));
        const ele = document.getElementById('widget_menu');
        const setSize = () => {
            if (ele) setTreeStyle({height: ele.clientHeight / 1.3})
        }
        window.addEventListener('resize', setSize);
        setLoading(true)
        setSize()

        const groupBy = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});

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

    }, [stateReducer?.firebase?.Vehicles]);


    const onCheck = (selectedKeys, info) => {
        const byGroup = info.checkedNodesPositions.filter(i => i.pos.split('-').length === 2);

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
        // setTreeData()
    }

    const handleFilterTree = (treeNode) => {
        /*  if (treeFilter) {
              return treeNode.title.toLocaleLowerCase().includes(treeFilter)
          }*/
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

    const loop = data =>
        data?.map((item, index) => {
            if (item.children) {
                return (
                    <TreeNode
                        key={`${item?.title}_${index}`}
                        icon={<i className={Styles.cars__icon}/>}
                        data={item}
                        title={(
                            <span className="d-flex align-items-center" style={{fontSize: '12px'}}>{item?.title}<span
                                className="badge bg-secondary px-1 mx-2">{item.children?.length}</span></span>)}>
                        {loop(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item?.SerialNumber}
                             data={item}
                             icon={(<div className="position-relative">{<img
                                 src={`/assets/images/cars/${item?.VehicleStatus}.png`} width={11} height={20}
                                 alt={GetStatusString(item?.VehicleStatus)}
                                 title={GetStatusString(item?.VehicleStatus)}/>}</div>)}
                             title={(<span className="d-flex align-items-center" title={item?.DisplayName}
                                           style={{fontSize: '12px'}}>{item?.DisplayName}</span>)}/>;
        });
    // const s = Date.now();
    // const treeNodes = loop(this.state.gData);


    return (
        <div className="position-relative">
            <div className="sidebar-body mt-3 data-scrollbar" data-scroll="1" id="menu-scrollbar">
                <div className={`tree_root ${stateReducer.config.darkMode && Styles.dark}`} style={{...treeStyle}}>
                    {/*<input aria-label="good" onChange={handleFilter}/>*/}
                    {/*<button type="button" onClick={()=>dispatch(VehiclesSettings(JSON.parse(localStorage.getItem(encryptName('uservehs')))))}>change icon</button>*/}
                    {/*   <Tree
                        ref={setTreeRef}
                        className="myCls"
                        showLine
                        // filterTreeNode={handleFilterTree}
                        selectable={false}
                        // fieldNames={{key: 'title'}}
                        defaultExpandedKeys={['0-0-0', '0-0-1']}
                        defaultSelectedKeys={['0-0-0', '0-0-1']}
                        defaultCheckedKeys={['0-0-0', '0-0-1']}
                        checkable
                        titleRender={titleRender}
                        treeData={treeData}
                        icon={Icon}
                        onCheck={onCheck}
                        onExpand={onExpand}
                        onActiveChange={key => console.log('Active:', key)}>
                    </Tree>
*/}
                    <Tree
                        selectable={false}
                        showLine
                        checkable
                        onCheck={onCheck}
                        defaultExpandedKeys={['0-0-0', '0-0-1']}
                        defaultSelectedKeys={['0-0-0', '0-0-1']}
                        defaultCheckedKeys={['0-0-0', '0-0-1']}
                        onExpand={onExpand}
                    >
                        {/*{treeData?.map((group, indexParent) => (
                            <TreeNode
                                key={`${group?.title}_${indexParent}`}
                                icon={<i className={Styles.cars__icon}/>}
                                title={group?.title}
                            >
                                {group?.children.map((child, indexChild) => (
                                    <TreeNode key={`${child?.DisplayName}_${indexChild}`} icon={<i className={OverSpeedingStatus? Styles.car__running : Styles.car__over_speed}/>} title={child?.DisplayName} />
                                ))}
                            </TreeNode>
                        ))}*/}
                        {loop(lists)}
                    </Tree>

                </div>
            </div>

        </div>
    );
}
export default MenuTree;
