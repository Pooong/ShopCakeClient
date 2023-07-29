import classNames from "classnames/bind";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

function Title({ small, large, primary, center, children }) {
    const classes = cx("title", {
        primary,
        small,
        large,
        center,
    });

    return (
        <div className={classes}>
            <h1>{children}</h1>
        </div>
    );
}

export default Title;
