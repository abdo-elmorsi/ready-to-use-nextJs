import {useEffect, useState} from "react";

const getWindowDimensions = () => {
    const navH = document.querySelector('.nav.iq-navbar').clientHeight
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height,
        heightWithoutNav: height - navH
    };
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

export default useWindowDimensions;
