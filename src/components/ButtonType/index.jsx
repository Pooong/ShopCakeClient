import classNames from "classnames/bind";
import styles from "./ButtonType.module.scss";
import { Link } from "react-router-dom";
import Button from "../Button";
const cx = classNames.bind(styles);

function ButtonType({ item }) {
    const Icon = item.icon;
    return (
        <Link to={item.to} className={cx("wrapper")}>
            <Button icon small className={cx("icon")}>
                <Icon />
            </Button>
            <span className={cx("type")}>{item.type}</span>
        </Link>
    );
}

export default ButtonType;
