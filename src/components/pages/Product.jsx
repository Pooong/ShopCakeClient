import { useState } from "react";
import ListType from "~//components/ListType";
import Title from "~/components/Title";
import Container from "~/components/Container";
import { GiDonut } from "react-icons/gi";
import { LuCandy } from "react-icons/lu";
import { FaBirthdayCake, FaPizzaSlice } from "react-icons/fa";
import { IoIosIceCream } from "react-icons/io";

const productType = [
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
    {
        name: "Bánh kem 3 tầng phủ tuyết lung linh",
        price: "999 000",
        image: "/src/assets/ProductCake/pngwing.com (8).png",
    },
];

const type = [
    {
        type: "Candy",
        icon: LuCandy,
        to: "#",
    },
    {
        type: "Cake",
        icon: FaBirthdayCake,
        to: "#",
    },
    {
        type: "Pizza",
        icon: FaPizzaSlice,
        to: "#",
    },
    {
        type: "Cream",
        icon: IoIosIceCream,
        to: "#",
    },
    {
        type: "Donut",
        icon: GiDonut,
        to: "#",
    },
];
function Product() {
    const [typeActive, setTypeActive] = useState("");

    return (
        <div className="page">
            <div className="pt-2">
                <Title primary>{typeActive}</Title>
            </div>
            <div className="mb-5">
                <ListType
                    items={type}
                    typeActive={typeActive}
                    setTypeActive={setTypeActive}
                />
            </div>
            <div className="mb-5">
                <Container sizeS={2} sizeM={3} sizeL={4} items={productType} />
            </div>
        </div>
    );
}

export default Product;
