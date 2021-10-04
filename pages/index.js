import React from 'react'
import {Row, Col, Dropdown, Button} from 'react-bootstrap'
import Image from "next/image"
import Card from '../components/Card'
//progressbar
import Progress from '../components/progress.js'
//Count-up
import CountUp from 'react-countup';
import Google from "../components/maps/google";
//Chart
import dynamic from "next/dynamic";
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// import Vector from "../components/maps/vector";
export default function Home() {

    const chart1 = {
        options: {
            chart: {
                fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: false,
                }
            },
            colors: ["#3a57e8", "#4bc7d2"],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3,
            },
            yaxis: {
                show: true,
                labels: {
                    show: true,
                    minWidth: 19,
                    maxWidth: 19,
                    style: {
                        colors: "#8A92A6",
                    },
                    offsetX: -5,
                },
            },
            legend: {
                show: false,
            },
            xaxis: {
                labels: {
                    minHeight: 22,
                    maxHeight: 22,
                    show: true,
                    style: {
                        colors: "#8A92A6",
                    },
                },
                lines: {
                    show: false  //or just here to disable only x axis grids
                },
                categories: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug"]
            },
            grid: {
                show: false,
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: "vertical",
                    shadeIntensity: 0,
                    gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                    inverseColors: true,
                    opacityFrom: .4,
                    opacityTo: .1,
                    stops: [0, 50, 80],
                    colors: ["#3a57e8", "#4bc7d2"]
                }
            },
            tooltip: {
                enabled: true,
            },
        },
        series: [{
            name: 'total',
            data: [94, 80, 94, 80, 94, 80, 94]
        }, {
            name: 'pipline',
            data: [72, 60, 84, 60, 74, 60, 78]
        }]
    }
    //chart2
    const chart2 = {
        options: {
            colors: ["#4bc7d2", "#3a57e8"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 10,
                        size: "50%",
                    },
                    track: {
                        margin: 10,
                        strokeWidth: '50%',
                    },
                    dataLabels: {
                        show: false,
                    }
                }
            },
            labels: ['Apples', 'Oranges'],
        },
        series: [55, 75],
    }
    const chart3 = {
        options: {
            chart: {
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            colors: ["#3a57e8", "#4bc7d2"],
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
                categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'M', 'T', 'W'],
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
            data: [30, 50, 35, 60, 40, 60, 60, 30, 50, 35,]
        }, {
            name: 'Failed deals',
            data: [40, 50, 55, 50, 30, 80, 30, 40, 50, 55]
        }]
    }
    const state = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    };
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
                                            <span><b>Active Vehicles</b></span>
                                            <div className="mt-2">
                                                <h2 className="counter"><CountUp start={0} end={12}
                                                                                 duration={1}/></h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span><b>Total Vehicles</b></span>
                                            <div className="mt-2">
                                                <h2 className="counter"><CountUp start={0} end={15}
                                                                                 duration={1}/></h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-primary">Monthly</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <span>Percentage</span>
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
                                            <span><b>Offline Vehicles</b></span>
                                            <div className="mt-2">
                                                <h2 className="counter"><CountUp start={0} end={10} duration={1}/>
                                                </h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-warning">Anual</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <span>Percentage</span>
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
                                            <span><b>Active Drivers</b></span>
                                            <div className="mt-2">
                                                <h2 className="counter"><CountUp start={0} end={15}
                                                                                 duration={1}/></h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span><b>Total Drivers</b></span>
                                            <div className="mt-2">
                                                <h2 className="counter"><CountUp
                                                    start={0}
                                                    end={40}
                                                    duration={1}/></h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-danger">Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <span>Percentage</span>
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
                    <Card>
                        <Card.Body>
                            <div className="text-center pb-3">
                                <Google/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="12" xl="6">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between flex-wrap">
                            <div className="header-title">
                                <h4 className="card-title">Vehicles Status</h4>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as={Button} href="#" variant=" text-secondary" id="dropdownMenuButton1"
                                                 aria-expanded="false">
                                    This Week
                                </Dropdown.Toggle>
                                <Dropdown.Menu className=" dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                    <li><Dropdown.Item href="#">This Week</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#">This Month</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#">This Year</Dropdown.Item></li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="card-body">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <Chart className="col-md-8 col-lg-8" options={chart2.options} series={chart2.series}
                                       type="radialBar" height="250"/>
                                <div className="d-grid gap col-md-4 col-lg-4">
                                    <div className="d-flex align-items-start">
                                        <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="14"
                                             viewBox="0 0 24 24" fill="#3a57e8">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="#3a57e8"/>
                                            </g>
                                        </svg>
                                        <div className="ms-3">
                                            <span className="text-secondary">Fashion</span>
                                            <h6>251K</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="14"
                                             viewBox="0 0 24 24" fill="#4bc7d2">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="#4bc7d2"/>
                                            </g>
                                        </svg>
                                        <div className="ms-3">
                                            <span className="text-secondary">Accessories</span>
                                            <h6>176K</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="12" xl="6">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between flex-wrap">
                            <div className="header-title">
                                <h4 className="card-title">Average Utilization</h4>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as={Button} href="#" variant=" text-secondary" id="dropdownMenuButton3"
                                                 aria-expanded="false">
                                    This Week
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton3">
                                    <li><Dropdown.Item href="#">This Week</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#">This Month</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#">This Year</Dropdown.Item></li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="card-body">
                            <Chart className="d-activity" options={chart3.options} series={chart3.series} type="bar"
                                   height="230"/>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
