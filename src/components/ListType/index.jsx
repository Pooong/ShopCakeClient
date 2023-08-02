import classNames from "classnames/bind";
import ButtonType from "../ButtonType";
import styles from "./ListType.module.scss";

const cx = classNames.bind(styles);

function ListType({ items, typeActive, setTypeActive, className }) {
    return (
        <div
            className={`d-flex justify-content-center w-100 ${cx("wrapper", {
                ...className,
            })}`}>
            <div className="d-flex w-auto overflow-auto">
                {items.map((item, index) => {
                    return (
                        <ButtonType
                            active={item.type == typeActive}
                            key={index}
                            item={item}
                            onClick={() => setTypeActive(item.type)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ListType;
