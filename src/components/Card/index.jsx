import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import Button from "~/components/Button";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/Ci";
import { CartContext } from "../../App";
import { useContext } from "react";
const cx = classNames.bind(styles);

function Card({ item, className }) {
    const { cart, setCart } = useContext(CartContext);
    return (
        <Link className={cx("card", { ...className })}>
            <div className={cx("thumbnail")}>
                <img src={item.image} alt="" />
            </div>
            <div className={cx("infor")}>
                <div className={cx("action")}>
                    <Button
                        icon
                        small
                        primary
                        onClick={(e) => {
                            e.preventDefault();
                            setCart((pre) => [...pre, item]);
                        }}>
                        <CiShoppingCart />
                    </Button>
                </div>
                <h5 className={cx("name")}>{item.name}</h5>
                <span className={cx("price")}>{item.price}</span>
            </div>
        </Link>
    );
}

function CardMenu({ item, small = false, className }) {
    return (
        <Link className={cx("card-menu", { small, ...className })} to={"/"}>
            <div className={cx("thumbnail")}>
                <img src={item.image} alt="" />
            </div>
            <div className={cx("infor")}>
                <h5 className={cx("name")}>{item.name}</h5>
                <span className={cx("price")}>{item.price}</span>
            </div>
        </Link>
    );
}

export { Card, CardMenu };
