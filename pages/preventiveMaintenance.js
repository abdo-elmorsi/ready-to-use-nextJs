import React, { useState, useEffect, useRef } from "react";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faCog,
  faHistory,
  faFileExcel,
} from "@fortawesome/free-solid-svg-icons";
// translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Row, Col, Form, Button, Card } from "react-bootstrap";
export const Actions = ({ id }) => {
  return (
    <div className="d-flex  flex-column text-primary">
      <Button className="text-start mb-1">
        <FontAwesomeIcon className="me-2" icon={faCog} size="sm" />
        reset
      </Button>
      <Button className="text-start mb-1">
        <FontAwesomeIcon className="me-2" icon={faEdit} size="sm" />
        edit
      </Button>
      <Button className="text-start mb-1">
        <FontAwesomeIcon className="me-2" icon={faTrash} size="sm" />
        delete
      </Button>
    </div>
  );
};
const Data_table = [
  {
    name: "Demo Moaz",
    plateNumber: "358480085000471",
    mainType: "Vechile Wash",
    periodTyoe: "By Fixed Date",
    startValue: "09/26/2021",
    nextValue: "09/19/2021",
    recurring: "Exist",
    notifyPeriod: "Value",
    notifyWhenValue: "0",
    overdue: "yes",
  },
  {
    name: "Demo Moaz",
    plateNumber: "358480085000471",
    mainType: "Vechile Wash",
    periodTyoe: "By Fixed Date",
    startValue: "09/26/2021",
    nextValue: "09/19/2021",
    recurring: "Exist",
    notifyPeriod: "Value",
    notifyWhenValue: "0",
    overdue: "yes",
  },
  {
    name: "Demo Moaz",
    plateNumber: "358480085000471",
    mainType: "Vechile Wash",
    periodTyoe: "By Fixed Date",
    startValue: "09/26/2021",
    nextValue: "09/19/2021",
    recurring: "Exist",
    notifyPeriod: "Value",
    notifyWhenValue: "0",
    overdue: "yes",
  },
  {
    name: "Demo Moaz",
    plateNumber: "358480085000471",
    mainType: "Vechile Wash",
    periodTyoe: "By Fixed Date",
    startValue: "09/26/2021",
    nextValue: "09/19/2021",
    recurring: "Exist",
    notifyPeriod: "Value",
    notifyWhenValue: "0",
    overdue: "yes",
  },
  {
    name: "Demo Moaz",
    plateNumber: "358480085000471",
    mainType: "Vechile Wash",
    periodTyoe: "By Fixed Date",
    startValue: "09/26/2021",
    nextValue: "09/19/2021",
    recurring: "Exist",
    notifyPeriod: "Value",
    notifyWhenValue: "0",
    overdue: "yes",
  },
];

export default function PreventiveMaintenance() {
  const { t } = useTranslation("preventiveMaintenance");

  const [result, setResult] = useState([]);
  const inputEl = useRef("");
  const handleSearch = () => {
    if (inputEl.current.value !== "") {
      const newData = Data_table.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLocaleLowerCase()
          .includes(inputEl.current.value.toLocaleLowerCase());
      });
      setResult(newData);
    } else {
      setResult(Data_table);
    }
  };
  const columns = [
    {
      name: "Display Name",
      selector: (row) => row.name,
      sortable: true,
      // center: true
    },
    {
      name: "Plate Number",
      selector: (row) => row.plateNumber,
      sortable: true,
      // center: true,
    },
    {
      name: "Maintenance Type",
      selector: (row) => row.mainType,
      sortable: true,
      // center: true,
    },
    {
      name: "Period Type",
      selector: (row) => row.periodTyoe,
      sortable: true,
      // center: true,
    },
    {
      name: "Start Value",
      selector: (row) => row.startValue,
      sortable: true,
      // center: true,
    },
    {
      name: "Next Value",
      selector: (row) => row.nextValue,
      sortable: true,
      // center: true,
    },
    {
      name: "Recurring",
      selector: (row) => row.recurring,
      sortable: true,
      // center: true,
    },
    {
      name: "Notify Period",
      selector: (row) => row.notifyPeriod,
      sortable: true,
      // center: true,
    },
    {
      name: "Notify When Value",
      selector: (row) => row.notifyWhenValue,
      sortable: true,
      // center: true,
    },
    {
      name: "Overdue",
      selector: (row) => row.overdue,
      sortable: true,
      // center: true,
    },
    {
      name: "Actions",
      // sortable: true,
      // center: true,
      reorder: true,
      cell: (row) => <Actions id={row.id} />,
    },
  ];
  // const [users, setUsers] = useState([]);
  // const [page, setPage] = useState(1);
  // const countPerPage = 5;
  // const getUserList = async () => {
  //     await fetch(
  //         `https://reqres.in/api/users?page=${page}&per_page=${countPerPage}&delay=1`
  //     )
  //         .then((response) => {
  //             return response.json();
  //         })
  //         .then((myJson) => {
  //             setUsers(myJson);
  //         })
  //         .catch((err) => {
  //             console.log(err);
  //         });
  // };
  useEffect(() => {
    setResult(Data_table);
    // getUserList();
  }, []);

  return (
    <div>
      {/* table */}
      <Row>
        <Col sm="12">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-center justify-content-md-between flex-wrap">
                <div className="d-flex justify-content-center flex-wrap mb-4">
                  <Button
                    variant="primary p-2"
                    className="mb-2 mb-md-0"
                    style={{ fontSize: "13px" }}
                  >
                    <FontAwesomeIcon className="me-2" icon={faCog} size="sm" />
                    {t("Add_Maintenance_Plan")}
                  </Button>
                  <Button
                    variant="primary p-2 ms-2"
                    className="mb-2 mb-md-0"
                    style={{ fontSize: "13px" }}
                  >
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faTrash}
                      size="sm"
                    />
                    {t("Delete_Selected")}
                  </Button>
                  <Button
                    variant="primary p-2 ms-2"
                    className="mb-2 mb-md-0"
                    style={{ fontSize: "13px" }}
                  >
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faHistory}
                      size="sm"
                    />
                    {t("View_History")}
                  </Button>
                  <Button
                    variant="primary p-2 ms-2"
                    className="mb-2 mb-md-0"
                    style={{ fontSize: "13px" }}
                  >
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faFileExcel}
                      size="sm"
                    />
                    {t("Export_To_Excel")}
                  </Button>
                </div>
                <Form.Floating className="custom-form-floating custom-form-floating-sm form-group">
                  <Form.Control
                    ref={inputEl}
                    type="search"
                    className=""
                    id="floatingInput5"
                    placeholder="Place Holder"
                    onChange={handleSearch}
                  />
                  <label htmlFor="floatingInput">{t("main:search")}</label>
                </Form.Floating>
              </div>
              <DataTable
                // title="Schedule Reports"
                columns={columns}
                highlightOnHover
                selectableRows
                // subHeader
                data={inputEl < 1 ? Data_table : result}
                pagination
                // paginationServer
                // paginationTotalRows={users.total}
                // paginationPerPage={countPerPage}
                // paginationComponentOptions={{
                //     noRowsPerPage: false,
                // }}
                // onChangePage={(page) => setPage(page)}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

// translation ##################################
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "preventiveMaintenance",
        "main",
      ])),
    },
  };
}
// translation ##################################
