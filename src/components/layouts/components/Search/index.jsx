import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./Search.module.scss";
import Button from "~/components/Button";
import useChange from "~/hooks/useChange";
import SearchMenu from "./SearchMenu";

const products = [
    {
        name: "Bánh kem dâu socola vị ngon siêu cấp",
        price: "500 000",
        image: "/src/assets/ProductCake/pngwing.com (1).png",
    },
    {
        name: "Bánh kem socola vị ngon mê ly",
        price: "500 000",
        image: "/src/assets/ProductCake/pngwing.com (2).png",
    },
    {
        name: "Bánh kem 3 tầng phủ tuyết lung linh",
        price: "999 000",
        image: "/src/assets/ProductCake/pngwing.com (3).png",
    },
    {
        name: "Bánh kem dâu nhỏ nhắn xinh xắn",
        price: "100 000",
        image: "/src/assets/ProductCake/pngwing.com (4).png",
    },
    {
        name: "Bánh kem dâu socola vị ngon siêu cấp",
        price: "500 000",
        image: "/src/assets/ProductCake/pngwing.com (5).png",
    },
    {
        name: "Bánh kem socola vị ngon mê ly",
        price: "500 000",
        image: "/src/assets/ProductCake/pngwing.com (6).png",
    },
    {
        name: "Bánh kem 3 tầng phủ tuyết lung linh",
        price: "999 000",
        image: "/src/assets/ProductCake/pngwing.com (7).png",
    },
];

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
                    items={products}
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
