import { Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
// translation
import { useTranslation } from "next-i18next";

const CardCountStart = ({ icon, iconColor, title, countEnd, desc }) => {
    const { t } = useTranslation("Management");
    return (
        <Col md="6" xl="3" className="mb-3">
            <Card className="h-100 w-100 border rounded">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex justify-content-between align-items-center w-100 mb-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className={`p-3 rounded bg-soft-${iconColor}`}>
                                <FontAwesomeIcon
                                    className="fa-2x"
                                    icon={icon}
                                    size="lg"
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center ps-3">
                            <h2 className="counter">
                                <CountUp
                                    start={0}
                                    end={countEnd}
                                    duration={1}
                                />
                            </h2>
                            <h5 className="mb-0 text-center">{t(title)}</h5>
                        </div>
                    </div>
                    {desc && <span className="text-center">{desc}</span>}
                </Card.Body>
            </Card>
        </Col>
    );
};
export default CardCountStart;
