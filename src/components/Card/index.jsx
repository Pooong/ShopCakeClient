import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import Button from "~/components/Button";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/Ci";
const cx = classNames.bind(styles);

function Card({ item }) {
    return (
        <Link className={cx("wrapper")}>
            <div className={cx("thumbnail")}>
                <img src={item.image} alt="" />
            </div>
            <div className={cx("infor")}>
                <div className={cx("action")}>
                    <Button icon small primary>
                        <CiShoppingCart />
                    </Button>
                </div>
                <h5 className={cx("name")}>{item.name}</h5>
                <span className={cx("price")}>{item.price}</span>
            </div>
        </Link>
    );
}

export default Card;
