import Carousel from "react-bootstrap/Carousel";
import classNames from "classnames/bind";
import styles from "./Slider.module.scss";

const cx = classNames.bind(styles);

function Slider({ items }) {
    return (
        <Carousel data-bs-theme="dark">
            {items.map((item, index) => {
                return (
                    <Carousel.Item key={index} className={cx("wrapper")}>
                        <img
                            className={`d-block w-100 ${cx("image")}`}
                            src={item.src}
                            alt={"Image" + index}
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}

export default Slider;
