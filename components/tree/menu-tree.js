import React, {useEffect, useRef, useState} from 'react';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';

const MenuTree = () => {
    const setTreeRef = useRef();
    const [treeData, setTreeData] = useState([]);
    const [treeFilter, setTreeFilter] = useState("");

    useEffect(_ => {
        const x = async () => {
            const res = await fetch('https://saferoad-web.herokuapp.com/vehicles/settings', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY0YTExMjA0LWQ5YmEtNGUwZi1hOTUxLTExMGRlZDE3NjIzNSIsImV4cCI6MTY0MTA0OTI5NSwiaWF0IjoxNjM1ODY1Mjk1fQ.zcKMqAaXGBXRuhBX3YVcYbAIxSgFHj8Ympq9YJVNdzU'
                }
            })
            return await res.json()
        }
        x().then(value => {
            const groupBy = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});
            let groups = groupBy(value, 'GroupName');
            let result = []
            for (let key in groups) if (groups.hasOwnProperty(key)) result.push({title: key, children: groups[key]})
            console.error(result)
            setTreeData(result);
        })
    }, [])
    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
        // this.selKey = info.node.props.eventKey;
    };

    const customLabel = node => (
        <span className="cus-label">
        <span style={{fontSize: '.75rem'}}>{node.title}</span>
      </span>
    )
    const handleFilter = (e) => {
        setTreeFilter(e.target.value.toLocaleLowerCase());
        // setTreeData()
    }
    const handleFilterTree = (treeNode) => {
        if (treeFilter) {
            return treeNode.title.toLocaleLowerCase().includes(treeFilter)
        }
    }
    const titleRender = (node) => {
        if (node.children) {
            node.children.map(obj => {
                obj.title = obj['DisplayName'];
            });
        }
        if (node.title === "child 6") {
            return null
        } else {
            return customLabel(node)
        }
    }
    const Icon = ({pos}) => {
        if (pos.split('-').length === 2) {
            return (<svg viewBox="0 0 640 512" width="15" height="20">
                <path fill="currentColor"
                      d="M499.32 275.65A32.06 32.06 0 0 0 469.8 256h-75.6a32 32 0 0 0-29.41 19.4L345.2 320h173.6zM336 344a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm250.77-67.4l-14-32.72A111.86 111.86 0 0 0 469.8 176h-75.6a111.86 111.86 0 0 0-102.94 67.88l-14 32.72A80.16 80.16 0 0 0 224 352v32a79.67 79.67 0 0 0 32.07 63.65c0 .12-.07.23-.07.35v32a32 32 0 0 0 32 32h16a32 32 0 0 0 32-32v-16h192v16a32 32 0 0 0 32 32h16a32 32 0 0 0 32-32v-32c0-.12-.07-.23-.07-.35A79.67 79.67 0 0 0 640 384v-32a80.16 80.16 0 0 0-53.23-75.4zM592 384a32 32 0 0 1-32 32H304a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h6.86l24.52-57.21A64 64 0 0 1 394.2 224h75.6a64 64 0 0 1 58.82 38.79L553.14 320H560a32 32 0 0 1 32 32zm-64-40a24 24 0 1 0 24 24 24 24 0 0 0-24-24zM275.32 99.65A32.06 32.06 0 0 0 245.8 80h-75.6a32 32 0 0 0-29.41 19.4L121.2 144h173.6zM252.79 252.4l5.32-12.4H80a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h6.86l24.52-57.21A64 64 0 0 1 170.2 48h75.6a64 64 0 0 1 58.82 38.79L329.14 144H336c6.62 0 12.41 2.49 17.52 5.93A143.81 143.81 0 0 1 394.2 144h14.88a80.3 80.3 0 0 0-46.31-43.4l-14-32.72A111.86 111.86 0 0 0 245.8 0h-75.6A111.86 111.86 0 0 0 67.26 67.88l-14 32.72A80.16 80.16 0 0 0 0 176v32a79.67 79.67 0 0 0 32.07 63.65c0 .12-.07.23-.07.35v32a32 32 0 0 0 32 32h16a32 32 0 0 0 32-32v-16h100.46a112 112 0 0 1 40.33-35.6zM88 192a24 24 0 1 0 24-24 24 24 0 0 0-24 24z"/>
            </svg>)
        } else {
            return (<svg id="Group_378" data-name="Group 378"
                         width="20" height="20" viewBox="0 0 19.583 40">
                <defs>
                    <clipPath id="clip-path">
                        <rect id="Rectangle_199" data-name="Rectangle 199" width="19.583" height="40" fill="none"/>
                    </clipPath>
                    <clipPath id="clip-path-3">
                        <path id="Path_203" data-name="Path 203"
                              d="M9.712,0A13.753,13.753,0,0,0,5.666.575V2.268h8.257V.575A13.748,13.748,0,0,0,9.877,0Z"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient" x1="-0.686" y1="17.637" x2="-0.565" y2="17.637"
                                    gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#261e2a"/>
                        <stop offset="1" stopColor="#0d0c0d"/>
                    </linearGradient>
                    <clipPath id="clip-path-4">
                        <path id="Path_204" data-name="Path 204"
                              d="M6.511,16.257a10.831,10.831,0,0,0-2.761.773l.108.646a9.469,9.469,0,0,1,2.794-.848,29.215,29.215,0,0,1,6.285,0,9.469,9.469,0,0,1,2.794.848l.108-.646a10.833,10.833,0,0,0-2.76-.773A25.843,25.843,0,0,0,9.8,16.088a25.832,25.832,0,0,0-3.284.169"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-2" x1="-0.31" y1="15.058" x2="-0.227" y2="15.058"
                                    gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#040506"/>
                        <stop offset="1" stopColor="#161616"/>
                    </linearGradient>
                    <clipPath id="clip-path-5">
                        <path id="Path_205" data-name="Path 205"
                              d="M6.276,9.747a14.721,14.721,0,0,0-2.957.99c-.285.129-.446.232-.5.34a1.618,1.618,0,0,0,.035.592l.005.021a1.358,1.358,0,0,1,.462-.286,14.786,14.786,0,0,1,2.957-.99,17.339,17.339,0,0,1,7.037,0,14.786,14.786,0,0,1,2.957.99,1.393,1.393,0,0,1,.464.286l0-.021a1.614,1.614,0,0,0,.036-.592c-.055-.108-.217-.211-.5-.34a14.721,14.721,0,0,0-2.957-.99A16.291,16.291,0,0,0,9.8,9.386a16.294,16.294,0,0,0-3.519.361"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-3" x1="-0.195" y1="13.287" x2="-0.124" y2="13.287"
                                    xlinkHref="#linear-gradient-2"/>
                    <clipPath id="clip-path-6">
                        <path id="Path_206" data-name="Path 206"
                              d="M6.276,10.414a14.786,14.786,0,0,0-2.957.99,1.358,1.358,0,0,0-.462.286l.893,5.34a10.831,10.831,0,0,1,2.761-.773,31.9,31.9,0,0,1,6.568,0,10.833,10.833,0,0,1,2.76.773l.895-5.34a1.393,1.393,0,0,0-.464-.286,14.786,14.786,0,0,0-2.957-.99A16.291,16.291,0,0,0,9.8,10.053a16.294,16.294,0,0,0-3.519.361"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-4" x1="-0.206" y1="4.292" x2="-0.134" y2="4.292"
                                    gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#131015"/>
                        <stop offset="1" stopColor="#161616"/>
                    </linearGradient>
                    <clipPath id="clip-path-7">
                        <path id="Path_207" data-name="Path 207"
                              d="M7.059,36.284a11.852,11.852,0,0,1-2.678-.88,17.867,17.867,0,0,1,.107-3.654,20.246,20.246,0,0,0,5.307.664,19.173,19.173,0,0,0,5.311-.634,17.852,17.852,0,0,1,.1,3.624,11.831,11.831,0,0,1-2.677.88,15.854,15.854,0,0,1-2.737.188,15.82,15.82,0,0,1-2.735-.188M15,31.1a13.762,13.762,0,0,1-5.2.815,15.367,15.367,0,0,1-5.2-.829c-.157-.059-.24-.095-.24-.095-.059.223-.111.449-.155.672a16.382,16.382,0,0,0-.227,4.293,13.352,13.352,0,0,0,2.88.882,23.175,23.175,0,0,0,5.884,0,13.33,13.33,0,0,0,2.879-.882,16.388,16.388,0,0,0-.222-4.271c-.045-.231-.1-.463-.16-.694,0,0-.078.042-.236.109"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-5" x1="-0.312" y1="1.476" x2="-0.229" y2="1.476"
                                    xlinkHref="#linear-gradient-2"/>
                    <clipPath id="clip-path-8">
                        <path id="Path_208" data-name="Path 208"
                              d="M4.381,35.4a11.852,11.852,0,0,0,2.678.88,19.976,19.976,0,0,0,5.472,0,11.831,11.831,0,0,0,2.677-.88,17.852,17.852,0,0,0-.1-3.624,19.173,19.173,0,0,1-5.311.634,20.246,20.246,0,0,1-5.307-.664A17.867,17.867,0,0,0,4.381,35.4"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-6" x1="-0.379" y1="1.724" x2="-0.289" y2="1.724"
                                    xlinkHref="#linear-gradient-4"/>
                    <clipPath id="clip-path-9">
                        <path id="Path_209" data-name="Path 209"
                              d="M2.363,15.587c.062,1.522.236,3.616.233,4.967,0,1.282-.047,2.152-.084,2.6l1.175.418-.2-5.522L2.363,11.5s-.1,1.679,0,4.083"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-7" x1="-1.595" y1="2.362" x2="-0.891" y2="2.362"
                                    xlinkHref="#linear-gradient-4"/>
                    <clipPath id="clip-path-10">
                        <path id="Path_210" data-name="Path 210"
                              d="M16.1,18.048l-.2,5.522,1.176-.418c-.044-.434-.081-1.316-.084-2.6,0-1.351.171-3.445.233-4.967.1-2.4,0-4.083,0-4.083Z"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-8" x1="-11.182" y1="2.362" x2="-10.479" y2="2.362"
                                    xlinkHref="#linear-gradient-4"/>
                    <clipPath id="clip-path-11">
                        <path id="Path_211" data-name="Path 211"
                              d="M2.477,31.715a6.615,6.615,0,0,0,.794-1.381,6.785,6.785,0,0,0,.561-1.519L3.7,24.2l-1.219-.534c-.134,1.728,0,8.052,0,8.052"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-9" x1="-1.574" y1="2.029" x2="-0.902" y2="2.029"
                                    xlinkHref="#linear-gradient-4"/>
                    <clipPath id="clip-path-12">
                        <path id="Path_212" data-name="Path 212"
                              d="M15.894,24.2l-.137,4.618a6.785,6.785,0,0,0,.561,1.519,6.615,6.615,0,0,0,.794,1.381s.134-6.324,0-8.052Z"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-10" x1="-10.582" y1="2.029" x2="-9.911" y2="2.029"
                                    xlinkHref="#linear-gradient-4"/>
                    <clipPath id="clip-path-13">
                        <path id="Path_213" data-name="Path 213"
                              d="M3.943,1.461A10.7,10.7,0,0,0,2.3,2.781a.826.826,0,0,0,.69-.155L5,1.343A.992.992,0,0,0,5.374.675a4.771,4.771,0,0,0-1.431.786"
                              fill="none"/>
                    </clipPath>
                    <radialGradient id="radial-gradient" cx="1.08" cy="2.129" r="1.831"
                                    gradientTransform="matrix(0.702, 0, 0, -0.769, 0.312, 38.83)"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#fff"/>
                        <stop offset="1" stopColor="#937197"/>
                    </radialGradient>
                    <clipPath id="clip-path-14">
                        <path id="Path_214" data-name="Path 214"
                              d="M14.586,1.343,16.6,2.626a.826.826,0,0,0,.69.155c-.4-.535-.935-.717-1.643-1.32A4.759,4.759,0,0,0,14.215.675a1,1,0,0,0,.371.668"
                              fill="none"/>
                    </clipPath>
                    <radialGradient id="radial-gradient-2" cx="-0.338" cy="2.129" r="1.831"
                                    gradientTransform="matrix(0.702, 0, 0, -0.769, -0.142, 38.83)"
                                    xlinkHref="#radial-gradient"/>
                    <clipPath id="clip-path-16">
                        <rect id="Rectangle_183" data-name="Rectangle 183" width="9.036" height="6.882"
                              transform="translate(7.698 10.148)" fill="none"/>
                    </clipPath>
                    <clipPath id="clip-path-17">
                        <path id="Path_217" data-name="Path 217"
                              d="M16.27,11.4a14.7,14.7,0,0,0-2.957-.99,14.327,14.327,0,0,0-1.652-.267,40.447,40.447,0,0,0-3.964,6,32.674,32.674,0,0,1,5.381.111,10.788,10.788,0,0,1,2.761.773l.895-5.341a1.429,1.429,0,0,0-.464-.285"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-11" x1="-0.626" y1="2.831" x2="-0.534" y2="2.831"
                                    gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#131015"/>
                        <stop offset="1" stopColor="#040506"/>
                    </linearGradient>
                    <clipPath id="clip-path-18">
                        <rect id="Rectangle_184" data-name="Rectangle 184" width="13.581" height="2.437"
                              transform="translate(3.004 36.24)" fill="none"/>
                    </clipPath>
                    <clipPath id="clip-path-19">
                        <rect id="Rectangle_185" data-name="Rectangle 185" width="3.114" height="8.845"
                              transform="translate(1.883 1.693)" fill="none"/>
                    </clipPath>
                    <clipPath id="clip-path-20">
                        <rect id="Rectangle_186" data-name="Rectangle 186" width="3.114" height="8.845"
                              transform="translate(14.606 1.693)" fill="none"/>
                    </clipPath>
                    <clipPath id="clip-path-21">
                        <path id="Path_221" data-name="Path 221"
                              d="M17.176,13.707c.016.774.7-.45.689-1.053s-.689-.742-.689-.742a13.6,13.6,0,0,0,0,1.8"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-12" x1="-8.914" y1="10.674" x2="-8.376" y2="10.674"
                                    xlinkHref="#linear-gradient-4"/>
                    <clipPath id="clip-path-22">
                        <path id="Path_222" data-name="Path 222"
                              d="M17.625,12.951l1.942.62a.4.4,0,0,0-.05-.337,6.646,6.646,0,0,0-1.5-.649.318.318,0,0,0-.107-.02c-.186,0-.255.207-.282.386"
                              fill="none"/>
                    </clipPath>
                    <radialGradient id="radial-gradient-3" cx="-3.669" cy="-52.401" r="1.527"
                                    gradientTransform="matrix(0.51, 0, 0, -0.51, -3.95, 132.503)"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#44a571"/>
                        <stop offset="1" stopColor="#4a9e2d"/>
                    </radialGradient>
                    <clipPath id="clip-path-23">
                        <path id="Path_223" data-name="Path 223"
                              d="M17.609,13.21l1.908.5a.591.591,0,0,0,.05-.136l-1.942-.62a1.515,1.515,0,0,0-.016.259"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-13" x1="-8.968" y1="35.779" x2="-8.458" y2="35.779"
                                    xlinkHref="#linear-gradient-4"/>
                    <clipPath id="clip-path-24">
                        <path id="Path_224" data-name="Path 224"
                              d="M1.671,12.612c-.016.6.717,1.827.733,1.053a12.443,12.443,0,0,0,0-1.8s-.716.14-.733.742"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-14" x1="-0.642" y1="10.5" x2="-0.088" y2="10.5"
                                    xlinkHref="#linear-gradient-4"/>
                    <clipPath id="clip-path-25">
                        <path id="Path_225" data-name="Path 225"
                              d="M1.569,12.543a6.7,6.7,0,0,0-1.5.65A.364.364,0,0,0,0,13.409a.493.493,0,0,0,.023.147l1.939-.623c-.024-.183-.093-.41-.287-.41a.312.312,0,0,0-.106.02"
                              fill="none"/>
                    </clipPath>
                    <radialGradient id="radial-gradient-4" cx="0.737" cy="-48.348" r="1.489"
                                    gradientTransform="matrix(0.527, 0, 0, -0.527, 0.255, 121.868)"
                                    xlinkHref="#radial-gradient-3"/>
                    <clipPath id="clip-path-26">
                        <path id="Path_226" data-name="Path 226"
                              d="M.023,13.556a.527.527,0,0,0,.043.109l1.908-.5a1.623,1.623,0,0,0-.012-.235Z"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-15" x1="-0.012" y1="36.977" x2="0.5" y2="36.977"
                                    xlinkHref="#linear-gradient-4"/>
                    <clipPath id="clip-path-28">
                        <path id="Path_231" data-name="Path 231"
                              d="M7.465,39.705a.4.4,0,0,0-.328.177c1.02.1,1.912.116,2.357.118H10.1c.445,0,1.332-.021,2.346-.117a.4.4,0,0,0-.328-.178Z"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-16" x1="-1.344" y1="1" x2="-1.156" y2="1"
                                    xlinkHref="#linear-gradient-4"/>
                    <clipPath id="clip-path-30">
                        <rect id="Rectangle_197" data-name="Rectangle 197" width="9.641" height="4.692"
                              transform="translate(5.615 31.78)" fill="none"/>
                    </clipPath>
                    <clipPath id="clip-path-31">
                        <path id="Path_232" data-name="Path 232"
                              d="M15.1,31.78a19.164,19.164,0,0,1-5.31.634c-.541,0-1.05-.019-1.529-.052-1.517.714-2.437,2.958-2.652,3.533a12.582,12.582,0,0,0,1.445.389,19.976,19.976,0,0,0,5.472,0,11.8,11.8,0,0,0,2.677-.881,17.8,17.8,0,0,0-.1-3.623"
                              fill="none"/>
                    </clipPath>
                    <linearGradient id="linear-gradient-17" x1="-0.474" y1="1.126" x2="-0.381" y2="1.126"
                                    xlinkHref="#linear-gradient-11"/>
                </defs>
                <g id="Group_377" data-name="Group 377" clipPath="url(#clip-path)">
                    <g id="Group_313" data-name="Group 313">
                        <g id="Group_312" data-name="Group 312" clipPath="url(#clip-path)">
                            <path id="Path_202" data-name="Path 202"
                                  d="M18.356,6.214A6.525,6.525,0,0,0,17.289,2.78a.822.822,0,0,1-.69-.154L14.586,1.343a.994.994,0,0,1-.371-.667c-.1-.035-.193-.069-.293-.1v1.7H5.666V.574c-.1.034-.2.067-.292.1A.991.991,0,0,1,5,1.343L2.99,2.626a.823.823,0,0,1-.69.154A6.516,6.516,0,0,0,1.233,6.214c-.52,4.7-.158,12.083-.18,13.9-.115,9.7.327,15.61.942,17.655a1.839,1.839,0,0,0,.81.974.7.7,0,0,1,.32-.069c.717,0,1.066.49,1.86.35.524-.093.7.36.762.679.47.077.942.135,1.39.177a.4.4,0,0,1,.327-.177h4.654a.4.4,0,0,1,.328.178c.334-.031.683-.071,1.034-.122.05-.318.216-.834.772-.735.793.14,1.143-.35,1.86-.35a.644.644,0,0,1,.482.185,1.983,1.983,0,0,0,1-1.09c.615-2.045,1.057-7.953.941-17.655-.021-1.819.341-9.2-.179-13.9"
                                  fill="#ab9d00"/>
                        </g>
                    </g>
                    <g id="Group_315" data-name="Group 315">
                        <g id="Group_314" data-name="Group 314" clipPath="url(#clip-path-3)">
                            <rect id="Rectangle_170" data-name="Rectangle 170" width="8.257" height="2.268"
                                  transform="translate(5.666 0)" fill="url(#linear-gradient)"/>
                        </g>
                    </g>
                    <g id="Group_317" data-name="Group 317">
                        <g id="Group_316" data-name="Group 316" clipPath="url(#clip-path-4)">
                            <rect id="Rectangle_171" data-name="Rectangle 171" width="12.089" height="1.588"
                                  transform="translate(3.75 16.088)" fill="url(#linear-gradient-2)"/>
                        </g>
                    </g>
                    <g id="Group_319" data-name="Group 319">
                        <g id="Group_318" data-name="Group 318" clipPath="url(#clip-path-5)">
                            <rect id="Rectangle_172" data-name="Rectangle 172" width="14.083" height="2.304"
                                  transform="translate(2.753 9.386)" fill="url(#linear-gradient-3)"/>
                        </g>
                    </g>
                    <g id="Group_321" data-name="Group 321">
                        <g id="Group_320" data-name="Group 320" clipPath="url(#clip-path-6)">
                            <rect id="Rectangle_173" data-name="Rectangle 173" width="13.877" height="6.977"
                                  transform="translate(2.857 10.053)" fill="url(#linear-gradient-4)"/>
                        </g>
                    </g>
                    <g id="Group_323" data-name="Group 323">
                        <g id="Group_322" data-name="Group 322" clipPath="url(#clip-path-7)">
                            <rect id="Rectangle_174" data-name="Rectangle 174" width="12.064" height="6.097"
                                  transform="translate(3.762 30.996)" fill="url(#linear-gradient-5)"/>
                        </g>
                    </g>
                    <g id="Group_325" data-name="Group 325">
                        <g id="Group_324" data-name="Group 324" clipPath="url(#clip-path-8)">
                            <rect id="Rectangle_175" data-name="Rectangle 175" width="11.146" height="4.785"
                                  transform="translate(4.221 31.75)" fill="url(#linear-gradient-6)"/>
                        </g>
                    </g>
                    <g id="Group_327" data-name="Group 327">
                        <g id="Group_326" data-name="Group 326" clipPath="url(#clip-path-9)">
                            <rect id="Rectangle_176" data-name="Rectangle 176" width="1.421" height="12.066"
                                  transform="translate(2.266 11.504)" fill="url(#linear-gradient-7)"/>
                        </g>
                    </g>
                    <g id="Group_329" data-name="Group 329">
                        <g id="Group_328" data-name="Group 328" clipPath="url(#clip-path-10)">
                            <rect id="Rectangle_177" data-name="Rectangle 177" width="1.422" height="12.066"
                                  transform="translate(15.901 11.504)" fill="url(#linear-gradient-8)"/>
                        </g>
                    </g>
                    <g id="Group_331" data-name="Group 331">
                        <g id="Group_330" data-name="Group 330" clipPath="url(#clip-path-11)">
                            <rect id="Rectangle_178" data-name="Rectangle 178" width="1.489" height="8.052"
                                  transform="translate(2.343 23.663)" fill="url(#linear-gradient-9)"/>
                        </g>
                    </g>
                    <g id="Group_333" data-name="Group 333">
                        <g id="Group_332" data-name="Group 332" clipPath="url(#clip-path-12)">
                            <rect id="Rectangle_179" data-name="Rectangle 179" width="1.489" height="8.052"
                                  transform="translate(15.757 23.663)" fill="url(#linear-gradient-10)"/>
                        </g>
                    </g>
                    <g id="Group_335" data-name="Group 335">
                        <g id="Group_334" data-name="Group 334" clipPath="url(#clip-path-13)">
                            <rect id="Rectangle_180" data-name="Rectangle 180" width="3.074" height="2.158"
                                  transform="translate(2.3 0.675)" fill="url(#radial-gradient)"/>
                        </g>
                    </g>
                    <g id="Group_337" data-name="Group 337">
                        <g id="Group_336" data-name="Group 336" clipPath="url(#clip-path-14)">
                            <rect id="Rectangle_181" data-name="Rectangle 181" width="3.074" height="2.158"
                                  transform="translate(14.215 0.675)" fill="url(#radial-gradient-2)"/>
                        </g>
                    </g>
                    <g id="Group_353" data-name="Group 353">
                        <g id="Group_352" data-name="Group 352" clipPath="url(#clip-path)">
                            <path id="Path_215" data-name="Path 215"
                                  d="M4.986,39.025c-.794.141-1.144-.35-1.861-.35a.7.7,0,0,0-.319.07,8.03,8.03,0,0,0,2.942.96c-.061-.32-.238-.773-.762-.68"
                                  fill="#61a41d"/>
                            <path id="Path_216" data-name="Path 216"
                                  d="M14.252,39.025c-.555-.1-.722.417-.772.735a9.3,9.3,0,0,0,3.114-.9.64.64,0,0,0-.481-.186c-.718,0-1.068.491-1.861.35"
                                  fill="#61a41d"/>
                            <g id="Group_342" data-name="Group 342">
                                <g id="Group_341" data-name="Group 341">
                                    <g id="Group_340" data-name="Group 340" clipPath="url(#clip-path-16)">
                                        <g id="Group_339" data-name="Group 339">
                                            <g id="Group_338" data-name="Group 338" clipPath="url(#clip-path-17)">
                                                <rect id="Rectangle_182" data-name="Rectangle 182" width="10.846"
                                                      height="11.354"
                                                      transform="matrix(0.579, -0.815, 0.815, 0.579, 4.446, 14.719)"
                                                      fill="url(#linear-gradient-11)"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g id="Group_345" data-name="Group 345" opacity="0.21">
                                <g id="Group_344" data-name="Group 344">
                                    <g id="Group_343" data-name="Group 343" clipPath="url(#clip-path-18)">
                                        <path id="Path_218" data-name="Path 218"
                                              d="M10.546,38.663c4.187-.137,6.04-1.38,6.04-1.38l-.828-1.044A11.3,11.3,0,0,1,9.8,37.458a11.3,11.3,0,0,1-5.963-1.219L3,37.283s1.854,1.243,6.04,1.38c.218.008.751.013.751.013.284,0,.533,0,.751-.013"
                                              fill="#fff"/>
                                    </g>
                                </g>
                            </g>
                            <g id="Group_348" data-name="Group 348">
                                <g id="Group_347" data-name="Group 347">
                                    <g id="Group_346" data-name="Group 346" clipPath="url(#clip-path-19)">
                                        <path id="Path_219" data-name="Path 219"
                                              d="M5,1.692A5.159,5.159,0,0,0,2.126,5.854a45.033,45.033,0,0,0-.24,4.684S2.774,3.345,5,1.692"
                                              fill="#1e1d18"/>
                                    </g>
                                </g>
                            </g>
                            <g id="Group_351" data-name="Group 351">
                                <g id="Group_350" data-name="Group 350">
                                    <g id="Group_349" data-name="Group 349" clipPath="url(#clip-path-20)">
                                        <path id="Path_220" data-name="Path 220"
                                              d="M14.607,1.692a5.159,5.159,0,0,1,2.871,4.162,45.28,45.28,0,0,1,.241,4.684s-.889-7.193-3.112-8.846"
                                              fill="#1e1d18"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g id="Group_355" data-name="Group 355">
                        <g id="Group_354" data-name="Group 354" clipPath="url(#clip-path-21)">
                            <rect id="Rectangle_188" data-name="Rectangle 188" width="1.859" height="2.634"
                                  transform="matrix(0.888, -0.459, 0.459, 0.888, 16.068, 12.453)"
                                  fill="url(#linear-gradient-12)"/>
                        </g>
                    </g>
                    <g id="Group_357" data-name="Group 357">
                        <g id="Group_356" data-name="Group 356" clipPath="url(#clip-path-22)">
                            <rect id="Rectangle_189" data-name="Rectangle 189" width="1.973" height="1.006"
                                  transform="translate(17.625 12.565)" fill="url(#radial-gradient-3)"/>
                        </g>
                    </g>
                    <g id="Group_359" data-name="Group 359">
                        <g id="Group_358" data-name="Group 358" clipPath="url(#clip-path-23)">
                            <rect id="Rectangle_190" data-name="Rectangle 190" width="1.963" height="0.756"
                                  transform="translate(17.604 12.951)" fill="url(#linear-gradient-13)"/>
                        </g>
                    </g>
                    <g id="Group_361" data-name="Group 361">
                        <g id="Group_360" data-name="Group 360" clipPath="url(#clip-path-24)">
                            <rect id="Rectangle_191" data-name="Rectangle 191" width="1.807" height="2.676"
                                  transform="translate(0.686 12.312) rotate(-24.492)" fill="url(#linear-gradient-14)"/>
                        </g>
                    </g>
                    <g id="Group_363" data-name="Group 363">
                        <g id="Group_362" data-name="Group 362" clipPath="url(#clip-path-25)">
                            <rect id="Rectangle_192" data-name="Rectangle 192" width="1.962" height="1.033"
                                  transform="translate(0 12.523)" fill="url(#radial-gradient-4)"/>
                        </g>
                    </g>
                    <g id="Group_365" data-name="Group 365">
                        <g id="Group_364" data-name="Group 364" clipPath="url(#clip-path-26)">
                            <rect id="Rectangle_193" data-name="Rectangle 193" width="1.955" height="0.732"
                                  transform="translate(0.023 12.933)" fill="url(#linear-gradient-15)"/>
                        </g>
                    </g>
                    <g id="Group_367" data-name="Group 367">
                        <g id="Group_366" data-name="Group 366" clipPath="url(#clip-path)">
                            <path id="Path_227" data-name="Path 227"
                                  d="M1.074,19.836a.183.183,0,0,0-.179.187v1.553a.183.183,0,0,0,.179.188Z"
                                  fill="#2b2a21"/>
                            <path id="Path_228" data-name="Path 228"
                                  d="M1.163,27.606a.183.183,0,0,0-.179.187v1.553a.183.183,0,0,0,.179.188Z"
                                  fill="#2b2a21"/>
                            <path id="Path_229" data-name="Path 229"
                                  d="M18.516,19.836a.183.183,0,0,1,.179.187v1.553a.183.183,0,0,1-.179.188Z"
                                  fill="#2b2a21"/>
                            <path id="Path_230" data-name="Path 230"
                                  d="M18.427,27.606a.183.183,0,0,1,.178.187v1.553a.183.183,0,0,1-.178.188Z"
                                  fill="#2b2a21"/>
                        </g>
                    </g>
                    <g id="Group_369" data-name="Group 369">
                        <g id="Group_368" data-name="Group 368" clipPath="url(#clip-path-28)">
                            <rect id="Rectangle_195" data-name="Rectangle 195" width="5.309" height="0.295"
                                  transform="translate(7.137 39.705)" fill="url(#linear-gradient-16)"/>
                        </g>
                    </g>
                    <g id="Group_376" data-name="Group 376">
                        <g id="Group_375" data-name="Group 375" clipPath="url(#clip-path)">
                            <g id="Group_374" data-name="Group 374">
                                <g id="Group_373" data-name="Group 373">
                                    <g id="Group_372" data-name="Group 372" clipPath="url(#clip-path-30)">
                                        <g id="Group_371" data-name="Group 371">
                                            <g id="Group_370" data-name="Group 370" clipPath="url(#clip-path-31)">
                                                <rect id="Rectangle_196" data-name="Rectangle 196" width="10.767"
                                                      height="9.31"
                                                      transform="matrix(0.838, -0.546, 0.546, 0.838, 3.438, 33.199)"
                                                      fill="url(#linear-gradient-17)"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>)
        }
    };

    return (
        <div className="tree_root pt-3"
             style={{height: 400}}>
                {/*<input aria-label="good" onChange={handleFilter}/>*/}
                <Tree
                    ref={setTreeRef}
                    className="myCls"
                    showLine
                    filterTreeNode={handleFilterTree}
                    selectable={false}
                    defaultExpandedKeys={['0-0-0', '0-0-1']}
                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                    checkable
                    titleRender={titleRender}
                    treeData={treeData}
                    icon={Icon}
                    onCheck={onSelect}
                    onActiveChange={key => console.log('Active:', key)}
                >

                </Tree>

        </div>
    );
}
export default MenuTree;
