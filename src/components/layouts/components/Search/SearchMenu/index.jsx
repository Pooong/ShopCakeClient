import classNames from "classnames/bind";
import { useEffect } from "react";
import styles from "../Search.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function SearchMenu({ searchRef, setShowResults, setSearchResults }) {
    useEffect(() => {
        function handleClickOutSide(e) {
            if (!searchRef.current.contains(e.target)) {
                setShowResults(false);
                setSearchResults([]);
            }
        }
        document.addEventListener("click", handleClickOutSide);
        return () => {
            document.removeEventListener("click", handleClickOutSide);
        };
    }, []);
    return (
        <div className={cx("search-menu")}>
            <Link className={cx("search-card")} to={"/"}>
                <div className={cx("thumbnail")}>
                    <img
                        src="/src/assets/ProductCake/pngwing.com (1).png"
                        alt=""
                    />
                </div>
                <div className={cx("infor")}>
                    <span className={cx("name")}>
                        Bánh kem dâu socola vị ngon siêu cấp
                    </span>
                    <span className={cx("price")}>500 000</span>
                </div>
            </Link>
            <Link className={cx("search-card")} to={"/"}>
                <div className={cx("thumbnail")}>
                    <img
                        src="/src/assets/ProductCake/pngwing.com (1).png"
                        alt=""
                    />
                </div>
                <div className={cx("infor")}>
                    <span className={cx("name")}>
                        Bánh kem dâu socola vị ngon siêu cấp
                    </span>
                    <span className={cx("price")}>500 000</span>
                </div>
            </Link>
            <Link className={cx("search-card")} to={"/"}>
                <div className={cx("thumbnail")}>
                    <img
                        src="/src/assets/ProductCake/pngwing.com (1).png"
                        alt=""
                    />
                </div>
                <div className={cx("infor")}>
                    <span className={cx("name")}>
                        Bánh kem dâu socola vị ngon siêu cấp
                    </span>
                    <span className={cx("price")}>500 000</span>
                </div>
            </Link>
        </div>
    );
}

export default SearchMenu;
