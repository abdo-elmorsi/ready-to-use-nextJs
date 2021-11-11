import React, {useEffect, useRef, useState} from 'react';
import Tree, {TreeNode} from 'rc-tree';
import 'rc-tree/assets/index.css';
import Styles from '../../styles/Tree.module.scss';
import Scrollbar from "smooth-scrollbar";
import {useSelector} from "react-redux";
import axios from "axios";
import config from "../../config/config";
import {initializeApp} from "firebase/app";
import {getDatabase, onValue, ref} from "firebase/database";

const MenuTree = () => {
    const setTreeRef = useRef();
    const [treeData, setTreeData] = useState([]);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [treeFilter, setTreeFilter] = useState("");
    const [treeStyle, setTreeStyle] = useState({});
    const [loading, setLoading] = useState(false);
    const [OverSpeedingStatus, setOverSpeedingStatus] = useState(false);
    const stateReducer = useSelector((state) => state);

    useEffect(_ => {
        Scrollbar.init(document.getElementById('menu-scrollbar'));
        const ele = document.getElementById('widget_menu');
        const setSize = () => {
            if (ele) {
                setTreeStyle({height: ele.clientHeight / 1.3})
            }
        }
        window.addEventListener('resize', setSize);
        setLoading(true)
        axios.get(`${config.apiGateway.URL}vehicles/settings`).then(value => {
            const groupBy = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});
            let groups = groupBy(value.data, 'GroupName');
            let result = []
            for (let key in groups) if (groups.hasOwnProperty(key)) result.push({title: key, children: groups[key]})
            console.error(result)
            setTreeData(result);
            setLoading(false)
            setSize()
        })
    }, []);

    const SyncVehicleFB = (id) => {
        const App = initializeApp({
            databaseURL: "https://saferoad-srialfb.firebaseio.com"
        }, 'oncefb')
        const db = getDatabase(App);
        onValue(ref(db, id), (snapshot) => {
            if (!snapshot.hasChildren()) return;
            console.warn(GetStatusString(snapshot.val()?.VehicleStatus))
            console.warn(snapshot.val())
        });
    }

    const GetStatusString = (vehicleStatus) => {
        switch (vehicleStatus) {
            case 600 || 5:
                return "Offline.";
            case 101:
                return "Vehicle is Over Speeding.";
            case 100:
                return "Vehicle is running over street speed.";
            case 0:
                return "Vehicle is Stopped.";
            case 1:
                return "Vehicle is running normally.";
            case 2:
                return "Vehicle in Idle State.";
            default:
                return "Invalid Status";
        }
    }

    const onCheck = (selectedKeys, info) => {
        // console.log(selectedKeys)
        setCheckedKeys(selectedKeys);
        const getIds = info.checkedNodes.map(i => {
            return {SerialNumber: i.SerialNumber, AccountID: i.AccountID}
        }).filter(i => i.SerialNumber !== undefined || i.AccountID !== undefined);
        getIds.map(item => {
            // SyncVehicleFB(item.SerialNumber)
        });
    };

    const onExpand = (expandedKeys, info) => {
        // console.log(expandedKeys, info)
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
        data.map((item, index) => {
            if (item.children) {
                return (
                    <TreeNode
                        key={`${item?.title}_${index}`}
                        icon={<i className={Styles.cars__icon}/>}
                        title={item?.title}>
                        {loop(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={`${item?.DisplayName}_${index}`} icon={<i className={OverSpeedingStatus? Styles.car__running : Styles.car__over_speed}/>} title={item?.DisplayName} />;
        });
    // const s = Date.now();
    // const treeNodes = loop(this.state.gData);


    return (
        <div className="position-relative">
            <div className="sidebar-body mt-3 data-scrollbar" data-scroll="1" id="menu-scrollbar">
                <div className={`tree_root ${stateReducer.config.darkMode && Styles.dark}`} style={{...treeStyle}}>
                    {/*<input aria-label="good" onChange={handleFilter}/>*/}
                    <button type="button" onClick={()=>setOverSpeedingStatus(!OverSpeedingStatus)}>change icon</button>
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
                        onExpand={onExpand}
                        /*loadData={treeNode => {
                            console.log(treeNode)
                        }}*/

                    >
                        {/*{treeData?.map((group, indexParent) => (*/}
                        {/*    <TreeNode*/}
                        {/*        key={`${group?.title}_${indexParent}`}*/}
                        {/*        icon={<i className={Styles.cars__icon}/>}*/}
                        {/*        title={group?.title}*/}
                        {/*    >*/}
                        {/*        /!*{group?.children.map((child, indexChild) => (*/}
                        {/*            <TreeNode key={`${child?.DisplayName}_${indexChild}`} icon={<i className={OverSpeedingStatus? Styles.car__running : Styles.car__over_speed}/>} title={child?.DisplayName} />*/}
                        {/*        ))}*!/*/}
                        {/*    </TreeNode>*/}
                        {/*))}*/}
                        {loop(treeData)}
                    </Tree>

                </div>
            </div>

        </div>
    );
}
export default MenuTree;
