import Offcanvas from "react-bootstrap/Offcanvas";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import Title from "~/components/Title";
import Button from "~/components/Button";
import { FaChevronRight } from "react-icons/fa";
import { CardInCart } from "~/components/Card";
import { CartContext } from "~/providers/CartProvider";
import { useContext } from "react";
const cx = classNames.bind(styles);

function Cart({ show, handleClose }) {
    const { cart } = useContext(CartContext);
    return (
        <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            scroll="true"
            className={cx("cart")}>
            <Offcanvas.Header className={cx("cart-header")}>
                <Title primary className={cx("cart-title")}>
                    Giỏ hàng
                </Title>
                <Button icon onClick={handleClose}>
                    <FaChevronRight />
                </Button>
            </Offcanvas.Header>
            <Offcanvas.Body className={cx("cart-content")}>
                {cart.map((detail, index) => (
                    <CardInCart key={index} item={detail} />
                ))}
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Cart;
