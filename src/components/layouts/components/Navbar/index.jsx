import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { BsList } from "react-icons/bs";
import Button from "~/components/Button";
import Cart from "../Cart";
import Menu from "../../../Menu/Menu";
import { useRef, useState } from "react";

const cx = classNames.bind(styles);
const items = [
    {
        name: "Home",
        to: "/",
    },
    {
        name: "Menu",
        to: "/product",
    },
    {
        name: "About",
        to: "/about",
    },
    {
        name: "Service",
        to: "/service",
    },
];

const itemSmallWindows = [
    ...items,
    {
        name: "Login",
        to: "/login",
        especially: true,
    },
];

function Navbar() {
    let isLogin = true;
    const buttonRef = useRef();
    const [openMenu, setOpenMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);

    return (
        <>
            <div className={cx("wrapper")}>
                <div className={`d-none d-md-flex ${cx("content")}`}>
                    {items.map((item, index) => (
                        <Button
                            key={index}
                            className={cx("link")}
                            to={item.to}
                            small>
                            {item.name}
                        </Button>
                    ))}
                    {isLogin ? (
                        <>
                            <Button primary to="/login">
                                Login
                            </Button>
                        </>
                    ) : (
                        <></>
                    )}
                    <Button icon large>
                        <LiaShoppingBasketSolid onClick={handleShowCart} />
                    </Button>
                </div>
                <div className={`d-md-none d-flex ${cx("content")}`}>
                    <Button
                        ref={buttonRef}
                        className={cx("dropdown")}
                        onClick={() => {
                            setOpenMenu(!openMenu);
                        }}
                        icon>
                        <BsList />
                        {openMenu ? (
                            <Menu
                                items={itemSmallWindows}
                                buttonOpen={buttonRef}
                                openMenu={openMenu}
                                setOpenMenu={setOpenMenu}
                            />
                        ) : (
                            <></>
                        )}
                    </Button>
                    <Button icon large onClick={handleShowCart}>
                        <LiaShoppingBasketSolid />
                    </Button>
                </div>
            </div>
            <Cart show={showCart} handleClose={handleCloseCart} />
        </>
    );
}

export default Navbar;
