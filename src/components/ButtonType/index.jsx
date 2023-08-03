import classNames from "classnames/bind";
import styles from "./ButtonType.module.scss";
import Button from "../Button";
const cx = classNames.bind(styles);

function ButtonType({ item, active, ...props }) {
    const Icon = item.icon;
    return (
        <div
            className={cx("wrapper", {
                active: active,
            })}
            {...props}>
            <Button icon className={cx("icon")}>
                <Icon />
            </Button>
            <span className={cx("type")}>{item.type}</span>
        </div>
    );
}

export default ButtonType;
