import React from "react";
import Image from "next/image";
import Styles from "../styles/Dashboard.module.scss";

function Stars({ name = "name", imgSrc, imgAlt = "image alt", starsCount = 3 }) {
    const starsBlack = 5 - starsCount;
    return (
        <div>
            <div className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                <div className="pe-3">
                    <Image
                        src={imgSrc}
                        className="rounded-circle bg-soft-primary p-1"
                        width="50"
                        height="50"
                        alt={imgAlt}
                    />
                </div>
                <div>
                    <h6 className={"mb-1 " + Styles.name_size}>{name}</h6>
                    <div className="text-black-50 text-warning">
                        {new Array(starsCount).fill({}).map((ora, i) => {
                            return (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.277rem"
                                    height="20px"
                                    viewBox="0 0 20 20"
                                    fill="orange"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            );
                        })}
                        {new Array(starsBlack).fill({}).map((bla, i) => {
                            return (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.277rem"
                                    height="20px"
                                    viewBox="0 0 20 20"
                                    fill="gary"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Stars;
