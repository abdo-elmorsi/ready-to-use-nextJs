import React from "react";
import Meta from "../components/meta";

const PageNotFound = () => {
    return (
        <>
            <Meta title="English Stu | 404 Page" />
            <div className="d-flex justify-content-center align-items-center fs-5 text-danger">
                <div>404</div>
            </div>
        </>
    );
};

export default PageNotFound;
