import classNames from "classnames/bind";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

function Title({ primary, center, children, className }) {
    const classes = cx("title", {
        primary,
        center,
        [className]: className,
    });

    return (
        <div className={classes}>
            <h1>{children}</h1>
        </div>
    );
}

export default Title;
