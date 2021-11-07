import React from 'react'
import {Card, Col, Row} from 'react-bootstrap'
import Styles from '../styles/Dashboard.module.scss'
import Google from "../components/maps/google";
import avatars1 from "../public/assets/images/saferoad_logo_icon.svg";
import dynamic from "next/dynamic";
import Stars from "../components/Stars"
import DashboardProgress from "../components/dashboardProgress"
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});
const Home = () => {
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
                                    <DashboardProgress 
                                        name={["Active_Vehicles","Total_Vehicles"]}
                                        countStart={[0,0]}
                                        countEnd={[12,15]}
                                        dateType={"Monthly"}
                                        progresCount={35}
                                        color={"primary"}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="12">
                            <Card>
                                <Card.Body>
                                    <DashboardProgress 
                                        name={["Offline_Vehicles"]}
                                        countStart={[0]}
                                        countEnd={[10]}
                                        dateType={"Anual"}
                                        progresCount={24}
                                        color={"warning"}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="12">
                            <Card>
                                <Card.Body>
                                <DashboardProgress 
                                        name={["Active_Drivers","Total_Drivers"]}
                                        countStart={[0,0]}
                                        countEnd={[15,40]}
                                        dateType={"Today"}
                                        progresCount={50}
                                        color={"danger"}
                                    />
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
                                type="radialBar" height="300"/>
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
                            <Stars name="Firas Saleh" imgSrc={avatars1} imgAlt={"one"} starsCount={1} />
                            <Stars name="Maaz FMB120" imgSrc={avatars1} imgAlt={"tow"} starsCount={2} />
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
                            <Stars name="Maaz FMB120" imgSrc={avatars1} imgAlt={"one"} starsCount={3} />
                            <Stars name="Firas Saleh" imgSrc={avatars1} imgAlt={"tow"} starsCount={4} />
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
                            <Stars name="Driver name 1" imgSrc={avatars1} imgAlt={"one"} starsCount={5} />
                            <Stars name="Driver name 2" imgSrc={avatars1} imgAlt={"tow"} starsCount={1} />
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
                            <Stars name="Driver name 1" imgSrc={avatars1} imgAlt={"one"} starsCount={2} />
                            <Stars name="Driver name 2" imgSrc={avatars1} imgAlt={"tow"} starsCount={3} />
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
export const getStaticProps = async ({locale}) => {
    /*if (!user) {
        return {
            redirect: {
                destination: '/sginin',
                permanent: false,
            },
        }
    }*/
    return {
        props: {
            ...(await serverSideTranslations(locale, ['Dashboard', 'main'])),
        },
    };
}
export default Home;

// translation ##################################
