import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./Search.module.scss";
import Button from "~/components/Button";
import useChange from "~/hooks/useChange";
// import instance from "~/axios";
import SearchMenu from "./SearchMenu";
const cx = classNames.bind(styles);

function Search() {
    const [valueInput, setValueInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const inputRef = useRef();
    const searchRef = useRef();
    const valueSearch = useChange(valueInput, 2000);

    useEffect(() => {
        if (valueSearch) {
            handlePostApiSearch(valueSearch);
            return;
        }
        setSearchResults([]);
        return;
    }, [valueSearch]);

    const handlePostApiSearch = (value) => {
        console.log("Đã gửi API đi");
        setSearchResults(["1"]);
        // instance
        //     .post("/api/showbysearch", {
        //         value,
        //     })
        //     .then((res) => {
        //         setSearchResults(res.data);
        //     });
    };

    const handleClickButtonSearch = () => {
        if (valueInput) {
            handlePostApiSearch(valueInput);
        }
        inputRef.current.focus();
    };

    return (
        <div className={cx("search")} ref={searchRef}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Search"
                value={valueInput}
                spellCheck={false}
                onFocus={() => setShowResults(true)}
                onChange={(e) => {
                    setValueInput(e.target.value);
                }}
            />
            <div className={cx("search-btn")}>
                <Button icon small onClick={(e) => handleClickButtonSearch(e)}>
                    <AiOutlineSearch />
                </Button>
            </div>
            {showResults && searchResults.length > 0 ? (
                <SearchMenu
                    searchRef={searchRef}
                    setShowResults={setShowResults}
                    setSearchResults={setSearchResults}
                />
            ) : (
                <></>
            )}
        </div>
    );
}

export default Search;
