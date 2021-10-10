import styles from "../styles/Loader.module.scss";

const Loader = ({ loading }) => {
    return (
        <div className={loading ? styles.body_loading : styles.none}>
            <div
                className={styles.lds_ellipsis}
            >
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    )
}

export default Loader
