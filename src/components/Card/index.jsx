import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import Button from "~/components/Button";
import InputNumber from "~/components/InputNumBer";
import { addDetail, deleteDetail } from "~/reducers/CartReducer/actions";
import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { CiShoppingCart } from "react-icons/Ci";
import { CartContext } from "~/providers/CartProvider";
import { useContext } from "react";
import {
    setQuantity,
    increaseQuantity,
    reduceQuantity,
} from "~/reducers/CartReducer/actions";

const cx = classNames.bind(styles);

function Card({ item, className }) {
    const { setCart } = useContext(CartContext);

    return (
        <Link className={cx("card", { [className]: className })}>
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
                            setCart(addDetail({ ...item, quantity: 1 }));
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

function CardInSearch({ item, small = false, className }) {
    return (
        <Link className={cx("card-inSearch", { small, ...className })}>
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

function CardInCart({ item, small = false, className }) {
    const { cart, setCart } = useContext(CartContext);

    return (
        <div className={cx("card-inCart", { small, ...className })}>
            <div className={cx("checkbox")}>
                <input type="checkbox" />
            </div>
            <div className="d-flex justify-content-between flex-grow-1">
                <div className={cx("thumbnail")}>
                    <img src={item.image} alt="" />
                </div>
                <div className={cx("infor")}>
                    <Link className={cx("name")}>{item.name}</Link>
                    <span className={cx("price")}>{item.price}</span>
                    <div className={cx("quantity")}>
                        <InputNumber
                            value={item.quantity}
                            setReduceValue={() => setCart(reduceQuantity(item))}
                            setIncreaseValue={() =>
                                setCart(increaseQuantity(item))
                            }
                            onChange={(e) => {
                                console.log(e.target.value);
                                setCart(
                                    setQuantity({
                                        ...item,
                                        quantity: e.target.value,
                                    })
                                );
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={cx("button")}>
                <Button icon onClick={() => setCart(deleteDetail(item))}>
                    <GrFormClose />
                </Button>
            </div>
        </div>
    );
}

export { Card, CardInSearch, CardInCart };
