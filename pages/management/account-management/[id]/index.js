import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPlug, faUsersCog } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
// translation
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Component = ({ icon, title, end }) => {
   const { t } = useTranslation("Management");
    return (
        <Col md="6" xl="3">
            <Card>
                <Card.Body>
                    <div className="d-flex justify-content-between align-itmes-center">
                        <div>
                            <div className="p-3 rounded bg-soft-primary">
                                <FontAwesomeIcon
                                    className="fa-4x"
                                    icon={icon}
                                    size="lg"
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <h1 className="counter">
                                <CountUp start={0} end={end} duration={1} />
                            </h1>
                            <p className="mb-0">{t(title)}</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};
const Data_table = [
    {
        accName: "Demo Moaz",
        billing: "09/26/2021",
        parent: "SafeRoad All",
        status: "active",
        reseller: "Undistributed",
        action: "buttons here",
    },
    {
        accName: "Demo Moaz",
        billing: "09/26/2021",
        parent: "SafeRoad All",
        status: "active",
        reseller: "Undistributed",
        action: "buttons here",
    },
    {
        accName: "Demo Moaz",
        billing: "09/26/2021",
        parent: "SafeRoad All",
        status: "active",
        reseller: "Undistributed",
        action: "buttons here",
    },
    {
        accName: "Demo Moaz",
        billing: "09/26/2021",
        parent: "SafeRoad All",
        status: "active",
        reseller: "Undistributed",
        action: "buttons here",
    },
];

const AccountManagement = () => {
   const { t } = useTranslation("Management");
    return (
        <>
            <Row>
                <Component title="Total_Accounts" end={115} icon={faUsers} />
                <Component title="Active_Accounts" end={2} icon={faUsers} />
                <Component title="Suspended_Accounts" end={0} icon={faPlug} />
                <Component
                    title="Distributor_Accounts"
                    end={5}
                    icon={faUsersCog}
                />
            </Row>
            <Row>
                <Row className="g-3">
                    <Col sm="12">
                        <Card>
                            <nav className="navbar navbar-dark navbar-lg shadow rounded p-3">
                                <h3>{t("Manage_Accounts")}</h3>
                            </nav>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="w-100 header-title d-flex justify-content-between align-items-center p-3">
                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn-primary  px-3 py-2 me-3 "
                                        >
                                            Add Account
                                        </button>
                                    </div>
                                    <Form.Floating className=" custom-form-floating-sm form-group m-0">
                                        <Form.Control
                                            type="email"
                                            className=""
                                            id="floatingInput6"
                                            placeholder="Place Holder"
                                        />
                                        <label htmlFor="floatingInput">
                                            Search
                                        </label>
                                    </Form.Floating>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive">
                                    <table
                                        id="datatable"
                                        className="table table-striped text-center"
                                        data-toggle="data-table"
                                    >
                                        <thead>
                                            <tr>
                                                <th>Account Name</th>
                                                <th>Next Billing Date</th>
                                                <th>Parent Account</th>
                                                <th>Status</th>
                                                <th>Reseller</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Data_table.map((item, i) => (
                                                <tr key={i}>
                                                    <td>{item.accName}</td>
                                                    <td>{item.billing}</td>
                                                    <td>{item.parent}</td>
                                                    <td>{item.status}</td>
                                                    <td>{item.reseller}</td>
                                                    <td>{item.action}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <p className="lead text-warning text-end">
                                        pagination here
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* ================== second table  ===================== */}
                    <Col sm="12">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="w-100 header-title d-flex justify-content-between align-items-center p-3">
                                    <div>
                                        <h3>Incompleted Accounts</h3>
                                    </div>
                                    <Form.Floating className=" custom-form-floating-sm form-group m-0">
                                        <Form.Control
                                            type="email"
                                            className=""
                                            id="floatingInput6"
                                            placeholder="Place Holder"
                                        />
                                        <label htmlFor="floatingInput">
                                            Search
                                        </label>
                                    </Form.Floating>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive">
                                    <table
                                        id="datatable"
                                        className="table table-striped text-center"
                                        data-toggle="data-table"
                                    >
                                        <thead>
                                            <tr>
                                                <th>Account Name</th>
                                                <th>Next Billing Date</th>
                                                <th>Parent Account</th>
                                                <th>Status</th>
                                                <th>Reseller</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Data_table.map((item, i) => (
                                                <tr key={i}>
                                                    <td>{item.accName}</td>
                                                    <td>{item.billing}</td>
                                                    <td>{item.parent}</td>
                                                    <td>{item.status}</td>
                                                    <td>{item.reseller}</td>
                                                    <td>{item.action}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <p className="lead text-warning text-end">
                                        pagination here
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Row>
        </>
    );
};

export default AccountManagement;
export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["Management","main"])),
    },
});
