import Slide from "~/components/Slide";
import Container from "~/components/Container";
import Title from "~/components/Title";

import CardAbout from "~/components/CardAbout";
import { useEffect, useState } from "react";
import instance from "~/axios";
import { LuCandy } from "react-icons/lu";
import { FaBirthdayCake, FaPizzaSlice } from "react-icons/fa";
import { IoIosIceCream } from "react-icons/io";
import banner from "~/assets/banner";
import about from "~/assets/about";
import ListType from "../ListType";

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
        type: "Pizza",
        icon: FaPizzaSlice,
        to: "#",
    },
];

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        instance.get("/api/product/show").then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <>
            <Slide items={banner} />
            <div className="page">
                <Title primary>Our Hot Dishes</Title>
                <Container items={products} sizeS={2} sizeM={3} sizeL={4} />
                <Title primary>Type Products</Title>
                <div className="mb-5">
                    <ListType items={type} />
                </div>
                <div className="mb-5">
                    <Container
                        items={productType}
                        sizeS={1}
                        sizeM={2}
                        sizeL={3}
                    />
                </div>
                <div className="mb-5">
                    <CardAbout item={about[0]} />
                </div>
            </div>
        </>
    );
}

export default Home;
