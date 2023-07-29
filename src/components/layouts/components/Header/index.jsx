import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import logo from "~/assets/logo.png";
import Navbar from "../Navbar";
import Input from "../InputSearch/Input";
const cx = classNames.bind(styles);

function Header() {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("logo")}>
				<img src={logo} alt="Logo" />
			</div>
			<Input />
			<Navbar />
		</div>
	);
}

export default Header;
