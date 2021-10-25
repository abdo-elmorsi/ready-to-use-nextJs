import React, {useEffect} from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import Image from "next/image"
import Styles from '../styles/Dashboard.module.scss'
//progressbar
import Progress from '../components/progress.js'
//Count-up
import CountUp from 'react-countup';
import Google from "../components/maps/google";
//Chart
import avatars1 from "../public/assets/images/saferoad_logo_icon.svg";
import dynamic from "next/dynamic";
// translation
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});
// import Vector from "../components/maps/vector";
export default function Home() {
    const {t} = useTranslation("Dashboard");
    const chart1 = {
        series: [{
            name: 'Fuel Consumption',
            type: 'column',
            data: [1702, 131, 942, 852, 648, 835, 932, 1231, 1386, 84]
        }, {
            name: 'Mileage',
            type: 'line',
            data: [26391, 2034, 14608, 13219, 10085, 12955, 14478, 19081, 21490, 1303]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: false,
                }
            },
            stroke: {
                width: [0, 4]
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
            },
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
            /* xaxis: {
                 type: 'datetime'
             },*/
            colors: ["#246c66", "#3e84b8"],

            yaxis: [{
                title: {
                    text: 'Fuel Consumption',
                },
                labels: {
                    show: true,
                    minWidth: 10,
                    maxWidth: 10,
                    style: {
                        colors: "#8A92A6",
                    },
                    offsetX: 0,
                },
            }, {
                opposite: true,
                title: {
                    text: 'Mileage'
                }
            }]
        },


    }
    /*
        const chart2 = {

            series: [55, 75, 33, 78, 65, 52],
            options: {
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                colors: [
                    "#c1c1c1",
                    "#7668f2",
                    "#272727",
                    "#f05959",
                    "#f2bf59",
                    "#70ea6b"],
                labels: [
                    'Offline',
                    'Idling',
                    'Running',
                    'Over Street Speed',
                    'Vehicle Disabled',
                    'Vehicle Enabled'
                ],

                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 0,
                    colors: ['#ffffff00'],
                },
                legend: {
                    position: 'right',
                    labels: {
                        colors: [
                            "#c1c1c1",
                            "#7668f2",
                            "#272727",
                            "#f05959",
                            "#f2bf59",
                            "#70ea6b"],
                        useSeriesColors: false
                    },
                },
                fill: {
                    opacity: 1,
                    colors: [
                        "#c1c1c1",
                        "#7668f2",
                        "#272727",
                        "#f05959",
                        "#f2bf59",
                        "#70ea6b"],
                },
                yaxis: {
                    show: false
                },
                plotOptions: {
                    polarArea: {
                        rings: {
                            strokeWidth: 0
                        },
                        spokes: {
                            strokeWidth: 0
                        },
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'right',
                            labels: {
                                colors: [
                                    "#c1c1c1",
                                    "#7668f2",
                                    "#272727",
                                    "#f05959",
                                    "#f2bf59",
                                    "#70ea6b"],
                                useSeriesColors: false
                            },
                        },
                    }
                }]
            },
        }
    */

    const chart2 = {

        series: [55, 75, 33, 78, 65, 52],
        options: {
            chart: {
                type: 'radialBar',
                redrawOnParentResize: true
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 360,
                    track: {
                        show: true,
                        startAngle: undefined,
                        endAngle: undefined,
                        background: '#ddd',
                        strokeWidth: '97%',
                        opacity: .2,
                        margin: 5,
                        dropShadow: {
                            enabled: false
                        }
                    },

                    hollow: {
                        margin: 5,
                        size: '30%',
                        background: 'transparent',
                        image: undefined,
                    },
                    dataLabels: {
                        colors: ['#585858'],
                        name: {
                            show: false,
                        },
                        value: {
                            fontSize: '1.5rem',
                            show: true,
                            offsetY: 9,
                            color: '#585858',

                        }
                    }
                }
            },
            colors: [
                "#c1c1c1",
                "#7668f2",
                "#272727",
                "#f05959",
                "#f2bf59",
                "#70ea6b"],
            labels: [
                'Offline',
                'Idling',
                'Running',
                'Over Street Speed',
                'Vehicle Disabled',
                'Vehicle Enabled'
            ],
            legend: {
                show: true,
                floating: false,
                fontSize: '15rem',
                position: 'right',
                labels: {
                    useSeriesColors: false,
                    colors: ['#585858']
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                markers: {
                    size: 0
                },
                itemMargin: {
                    vertical: 5
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                    }
                }
            }]
        },
    }
    const chart3 = {
        options: {
            chart: {
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            colors: ["#246c66", "#4bc7d2"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '28%',
                    endingShape: 'rounded',
                    borderRadius: 5,
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['2021-10-04', '2021-10-03', '2021-10-02', '2021-10-01', '2021-09-30'],
                labels: {
                    minHeight: 20,
                    maxHeight: 20,
                    style: {
                        colors: "#8A92A6",
                    },
                }
            },
            yaxis: {
                title: {
                    text: ''
                },
                labels: {
                    minWidth: 19,
                    maxWidth: 19,
                    style: {
                        colors: "#8A92A6",
                    },
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },
        series: [{
            name: 'Successful deals',
            data: [30, 50, 35, 60, 40]
        }, {
            name: 'Failed deals',
            data: [40, 50, 55, 50, 30]
        }]
    }
    const chart4 = {
        series: [{
            name: 'Number of Vehicles',
            data: [94, 80, 94, 80, 94, 80, 94]
        }],
        options: {
            chart: {
                height: 245,
                type: 'bar',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: false,
                },
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    columnWidth: '30%',
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 0
            },

            /*grid: {
                row: {
                    colors: ['#fff', '#f2f2f2']
                }
            },*/

            xaxis: {
                labels: {
                    minHeight: 100,
                    rotate: -45,
                },
                categories: [
                    "Change Engine Oil",
                    "Change Vehicle Breaks",
                    "Renew Vehicle License",
                    "Vehicle Wash",
                    "Change type",
                    "Change Gear Oil",
                    "Filter Change"
                ],
                tickPlacement: 'on'
            },
            yaxis: {
                title: {
                    text: 'Number of Vehicles',
                },
            },
            fill: {
                colors: ["#246c66"],
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: "horizontal",
                    shadeIntensity: 0.25,
                    gradientToColors: ["#4bc7d2"],
                    inverseColors: true,
                    opacityFrom: 0.85,
                    opacityTo: 0.85,
                    stops: [50, 0, 100]
                },
            }
        },


    }
    const Data_table = [
        {
            icon: 'edit',
            groupName: 'WR Team',
            vName: 'Ahmad Sirdah 5230 TGD',
            fixType: 'Vehicle Wash',
            date: '2008/11/28',
        },
        {
            icon: 'edit',
            groupName: 'WR Team',
            vName: 'Ahmad Sirdah 5230 TGD',
            fixType: 'Vehicle Wash',
            date: '2008/11/28',
        },
        {
            icon: 'edit',
            groupName: 'WR Team',
            vName: 'Ahmad Sirdah 5230 TGD',
            fixType: 'Vehicle Wash',
            date: '2008/11/28',
        },
        {
            icon: 'edit',
            groupName: 'WR Team',
            vName: 'Ahmad Sirdah 5230 TGD',
            fixType: 'Battery',
            date: '2008/11/28',
        },
        {
            icon: 'edit',
            groupName: 'WR Team',
            vName: 'Ahmad Sirdah 5230 TGD',
            fixType: 'Suspen',
            date: '2008/11/28',
        },
    ];

    return (
        <div>
            <Row>
                <Col lg="6">
                    <Row>
                        <Col md="12">
                            <Card>
                                <Card.Body>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span><b>{t("Active_Vehicles")}</b></span>
                                            <div className="mt-2">
                                                <h2 className="counter"><CountUp start={0} end={12}
                                                                                 duration={1}/></h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span><b>{t("Total_Vehicles")}</b></span>
                                            <div className="mt-2">
                                                <h2 className="counter"><CountUp start={0} end={15}
                                                                                 duration={1}/></h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-primary p-2"
                                                  style={{letterSpacing: "1.2px"}}>Monthly</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <span>{t("Percentage")}</span>
                                        </div>
                                        <div>
                                            <span>35%</span>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <Progress softcolors="primary" color="primary" className="shadow-none w-100"
                                                  value={70} minvalue={0} maxvalue={100} style={{height: "6px"}}/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="12">
                            <Card>
                                <Card.Body>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span><b>{t("Offline_Vehicles")}</b></span>
                                            <div className="mt-2">
                                                <h2 className="counter"><CountUp start={0} end={10} duration={1}/>
                                                </h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-warning p-2"
                                                  style={{letterSpacing: "1.2px"}}>Anual</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <span>{t("Percentage")}</span>
                                        </div>
                                        <div>
                                            <span>24%</span>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <Progress softcolors="warning" color="warning" className="shadow-none w-100"
                                                  value={24} minvalue={0} maxvalue={100} style={{height: "6px"}}/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="12">
                            <Card>
                                <Card.Body>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span><b>{t("Active_Drivers")}</b></span>
                                            <div className="mt-2">
                                                <h2 className="counter"><CountUp start={0} end={15}
                                                                                 duration={1}/></h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span><b>{t("Total_Drivers")}</b></span>
                                            <div className="mt-2">
                                                <h2 className="counter"><CountUp
                                                    start={0}
                                                    end={40}
                                                    duration={1}/></h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-danger p-2"
                                                  style={{letterSpacing: "1.2px"}}>Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <span>{t("Percentage")}</span>
                                        </div>
                                        <div>
                                            <span>50%</span>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <Progress softcolors="danger" color="danger" className="shadow-none w-100"
                                                  value={50} minvalue={0} maxvalue={100} style={{height: "6px"}}/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg="6">
                    <Card style={{height: "calc(100% - 2rem)"}}>
                        <Card.Body className="p-0 position-relative">
                            <Google/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="12" xl="6">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between flex-wrap">
                            <div className="header-title">
                                <h4 className={"card-title " + Styles.head_title}>{t("Vehicles_Status")}</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <Chart options={chart2.options} series={chart2.series}
                                   type="radialBar" height="240"/>
                        </div>
                    </div>
                </Col>
                <Col md="12" xl="6">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between flex-wrap">
                            <div className="header-title">
                                <h4 className={"card-title " + Styles.head_title}>{t("Average_Utilization")}</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <Chart className="d-activity" options={chart3.options} series={chart3.series} type="bar"
                                   height="245"/>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg="6">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between flex-wrap">
                            <div className="header-title">
                                <h4 className={"card-title " + Styles.head_title}>{t("Overall_Fuel_Consumption")}</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <Chart options={chart1.options} series={chart1.series} type="line" height="245"/>
                        </div>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between flex-wrap">
                            <div className="header-title">
                                <h4 className={"card-title " + Styles.head_title}>{t("Monthly_Preventive_Maintenance")}</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <Chart options={chart4.options} series={chart4.series} type="bar" height="245"/>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* cards for rates */}
            <Row>
                <Col lg="3">
                    <Card>
                        <Card.Header className="d-flex justify-content-center align-items-center">
                            <div className="header-title text-center">
                                <h4 className={"card-title " + Styles.head_title}>{t("Top_Drivers")}</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Firas Saleh</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Maaz FMB120</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <Card.Header className="d-flex justify-content-center align-items-center">
                            <div className="header-title text-center">
                                <h4 className={"card-title " + Styles.head_title}>{t("Worst_Drivers")}</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Maaz FMB120</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Firas Saleh</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <Card.Header className="d-flex justify-content-center align-items-center">
                            <div className="header-title text-center">
                                <h4 className={"card-title " + Styles.head_title}>{t("Top_Utilized_Vehicles")}</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Driver name 1</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Driver name 2</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <Card.Header className="d-flex justify-content-center align-items-center">
                            <div className="header-title text-center">
                                <h4 className={"card-title " + Styles.head_title}>{t("Worst_Utilized_Vehicles")}</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Driver name 1</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Driver name 2</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* table */}
            <Row>
                <Col sm="12">
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className={"card-title " + Styles.head_title}>{t("Next_repair_plans")}</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table id="datatable" className="table table-striped table-hover"
                                       data-toggle="data-table">
                                    <thead>
                                    <tr>
                                        {["#", "Group name", "Vehicles name", "Maintenance Type", "Next value"].map((ele, i) =>
                                            (<th key={i} className="text-center">{ele}</th>)
                                        )}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        Data_table.map((item, index) => (
                                            <tr key={item.vName + index}>
                                                <td className="text-center">{item.icon}</td>
                                                <td className="text-center">{item.groupName}</td>
                                                <td className="text-center">{item.vName}</td>
                                                <td className="text-center">{item.fixType}</td>
                                                <td className="text-center">{item.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

// translation ##################################
export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['Dashboard', 'main'])),
        },
    };
}

// translation ##################################