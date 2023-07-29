import Slider from "./Slider";
import Banner from "~/assets/banner";
import Container from "./Container";
import Title from "./Title";

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

function Home() {
    return (
        <>
            <Slider items={Banner} />
            <div className="page">
                <Title primary>Our Hot Dishes</Title>
                <Container items={products} sizeS={2} sizeM={3} sizeL={4} />
            </div>
        </>
    );
}

export default Home;
