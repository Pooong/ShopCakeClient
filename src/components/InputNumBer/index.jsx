import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from "./InputNumber.module.scss";

const cx = classNames.bind(styles);
function InputNumber({
    large = false,
    value,
    setReduceValue,
    setIncreaseValue,
    onChange,
}) {
    // console.log(setReduceValue);
    return (
        <div
            className={cx("wrapper", {
                large,
            })}>
            <Button
                icon
                small
                className={cx("button")}
                onClick={setReduceValue}>
                {" "}
                -
            </Button>
            <input
                type="number"
                value={value}
                onChange={(e) => {
                    console.log(e);
                    return onChange(e);
                }}
            />
            <Button
                icon
                small
                className={cx("button")}
                onClick={setIncreaseValue}>
                +
            </Button>
        </div>
    );
}

export default InputNumber;
