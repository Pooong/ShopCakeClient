import classNames from "classnames/bind";
import { useEffect } from "react";
import styles from "../Search.module.scss";
import { CardMenu } from "~/components/Card";
const cx = classNames.bind(styles);

function SearchMenu({ items, searchRef, setShowResults, setSearchResults }) {
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
            {items.map((item, index) => (
                <CardMenu key={index} item={item} small />
            ))}
        </div>
    );
}

export default SearchMenu;
