import React from "react";
//Count-up
import CountUp from "react-countup";
//progressbar
import Progress from "../components/progress.js";
// translation
import { useTranslation } from "next-i18next";

const DashboardProgress = ({
    name = ["one"],
    countStart = [0],
    countEnd = [20],
    duration = 1,
    dateType,
    progresCount = 1,
    color = "primary",
    minvalue = 0,
    maxvalue = 100,
}) => {
    const { t } = useTranslation("Dashboard");
    return (
        <>
            <div className="d-flex justify-content-between">
                {name.map((ele, i) => (
                    <div key={i}>
                        <span>
                            <b>{t(ele)}</b>
                        </span>
                        <div className="mt-2">
                            <h2 className="counter">
                                <CountUp
                                    start={countStart[i]}
                                    end={countEnd[i]}
                                    duration={duration}
                                />
                            </h2>
                        </div>
                    </div>
                ))}
                <div>
                    <span
                        className={`badge bg-${color} p-2`}
                        style={{ letterSpacing: "1.2px" }}
                    >
                        {dateType}
                    </span>
                </div>
            </div>
            <div className="d-flex justify-content-between mt-2">
                <div>
                    <span>{"Percentage"}</span>
                </div>
                <div>
                    <span>{progresCount}%</span>
                </div>
            </div>
            <div className="mt-3">
                <Progress
                    softcolors={color}
                    color={color}
                    value={progresCount}
                    minvalue={minvalue}
                    maxvalue={maxvalue}
                    className="shadow-none w-100"
                    style={{ height: "6px" }}
                />
            </div>
        </>
    );
};
export default DashboardProgress;
