import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { BsList } from "react-icons/bs";
import Button from "~/components/Button";
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
		name: "About Us",
		to: "/about",
	},
	{
		name: "Service",
		to: "/service",
	},
];

function Navbar() {
	let isLogin = false;
	const buttonRef = useRef();
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div className={cx("wrapper")}>
			<div className={`d-none d-md-flex ${cx("content")}`}>
				{items.map((item, index) => (
					<Button key={index} className={cx("link")} to={item.to} small>
						{item.name}
					</Button>
				))}
				{isLogin ? (
					<>
						<Button primary to>
							Login
						</Button>
						<Button outline>Register</Button>
					</>
				) : (
					<></>
				)}
				<Button icon>
					<LiaShoppingBasketSolid />
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
						<Menu items={items} buttonOpen={buttonRef} openMenu={openMenu} setOpenMenu={setOpenMenu} />
					) : (
						<></>
					)}
				</Button>
				<Button icon>
					<LiaShoppingBasketSolid />
				</Button>
				{/* <Menu></Menu> */}
			</div>
		</div>
	);
}

export default Navbar;
