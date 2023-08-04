import { useState } from "react";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import instance from "~/axios";
import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import SlideShowImage from "../SlideShowImage";
import Title from "~/components/Title";
import InputNumber from "~/components/InputNumber";
import Button from "~/components/Button";
import image1 from "~/assets/ProductCake/pngwing.com (1).png";
import image2 from "~/assets/ProductCake/pngwing.com (2).png";
const cx = classNames.bind(styles);
const images = [image1, image2];
function ProductDetail() {
    // const { slug } = useParams();
    // const [product, setProduct] = useState();
    // useEffect(() => {
    //     instance.get(`/api/product/${slug}`).then((res) => {
    //         setProduct(res.data);
    //     });
    // }, []);
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="page">
            <div className={cx("content")}>
                <div className={cx("thumbnail")}>
                    <SlideShowImage items={images} />
                </div>
                <div className={cx("infor")}>
                    <Title className={cx("name")}>
                        Bánh sinh nhật siêu to khổng lồ
                    </Title>
                    <div className={cx("description")}>
                        <h3>Description:</h3>
                        <span>
                            Bánh sinh nhật siêu to khổng lồ siêu cấp ngon ngọt
                            bổ rẻ Bánh sinh nhật siêu to khổng lồ siêu cấp ngon
                            ngọt bổ rẻ Bánh sinh nhật siêu to khổng lồ siêu cấp
                            ngon ngọt bổ rẻ Bánh sinh nhật siêu to khổng lồ siêu
                            cấp ngon ngọt bổ rẻ
                        </span>
                    </div>
                    <div className={cx("quantity")}>
                        <h3>Quantity:</h3>
                        <InputNumber
                            large
                            value={quantity}
                            onChange={(e) => {
                                setQuantity(e.target.value);
                            }}
                        />
                    </div>
                    <div className={cx("action")}>
                        <Button primary large>
                            Mua hàng
                        </Button>
                        <Button outline large>
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
