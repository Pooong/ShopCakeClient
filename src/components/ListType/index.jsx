import { useState } from "react";
import classNames from "classnames/bind";
import ButtonType from "../ButtonType";
import styles from "./ListType.module.scss";

const cx = classNames.bind(styles);

function ListType({ items, className }) {
    const [indexTypeActive, setIndexTypeActive] = useState(0);
    return (
        <div
            className={`d-flex justify-content-center w-100 ${cx("wrapper", {
                ...className,
            })}`}>
            <div className="d-flex w-auto overflow-auto">
                {items.map((item, index) => {
                    return (
                        <ButtonType
                            active={index == indexTypeActive}
                            key={index}
                            item={item}
                            onClick={() => setIndexTypeActive(index)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ListType;
