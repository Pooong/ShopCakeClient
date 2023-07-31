import Offcanvas from "react-bootstrap/Offcanvas";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import Title from "../Title";
import { CardMenu } from "~/components/Card";
import { CartContext } from "../../App";
import { useContext } from "react";
const cx = classNames.bind(styles);

function Cart({ show, handleClose }) {
    const { cart, setCart } = useContext(CartContext);
    return (
        <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            scroll="true"
            className={cx("cart")}>
            <Offcanvas.Header className={cx("cart-header")} closeButton>
                <Title primary className={cx("cart-title")}>
                    Giỏ hàng
                </Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={cx("cart-content")}>
                {cart.map((product, index) => (
                    <CardMenu key={index} item={product} />
                ))}
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Cart;
