import Slide from "./Slide";
import Banner from "~/assets/banner";
import Container from "./Container";
import Title from "./Title";
import ButtonType from "./ButtonType";
import { LuCandy } from "react-icons/lu";
import { FaBirthdayCake, FaPizzaSlice } from "react-icons/fa";
import { IoIosIceCream } from "react-icons/io";
import AddProductForm from "./AddProductForm";
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
    {
        name: "Bánh kem 3 tầng phủ tuyết lung linh",
        price: "999 000",
        image: "/src/assets/ProductCake/pngwing.com (8).png",
    },
];

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
    return (
        <>
            <Slide items={Banner} />
            <div className="page">
                <Title primary>Our Hot Dishes</Title>
                <Container items={products} sizeS={2} sizeM={3} sizeL={4} />
                <Title primary>Type Products</Title>
                <div className="d-flex justify-content-center w-100 mb-5 ">
                    <div className="d-flex w-auto overflow-auto">
                        {type.map((item, index) => (
                            <ButtonType key={index} item={item} />
                        ))}
                    </div>
                </div>
                <div>
                    <Container
                        items={productType}
                        sizeS={1}
                        sizeM={3}
                        sizeL={3}
                    />
                </div>
            </div>
            <AddProductForm />
        </>
    );
}

export default Home;
