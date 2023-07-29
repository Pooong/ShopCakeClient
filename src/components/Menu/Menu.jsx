import { useEffect, useRef } from "react";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

const Menu = ({ items, buttonOpen, openMenu, setOpenMenu }) => {
	const menuRef = useRef();
	useEffect(() => {
		function handleClickOutside(e) {
			if (openMenu && !menuRef.current.contains(e.target) && !buttonOpen.current.contains(e.target)) {
				if (typeof setOpenMenu == "function") {
					setOpenMenu(false);
				}
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<ul
			className={cx("wrapper")}
			ref={menuRef}
			onClick={(e) => {
				e.stopPropagation();
			}}>
			{items.map((item, index) => (
				<li key={index}>
					<Button className={cx("link")} to={item.to}>
						{item.name}
					</Button>
				</li>
			))}
		</ul>
	);
};

export default Menu;
