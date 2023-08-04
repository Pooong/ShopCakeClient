import classNames from "classnames/bind";
import styles from "./SlideShowImage.module.scss";

import { useState } from "react";
const cx = classNames.bind(styles);

function SlideShowImage({ items }) {
    const [imageActive, setImageActive] = useState(items[0]);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("image-wrapper")}>
                <img alt="" src={imageActive} />
            </div>
            <div className={cx("slide-images")}>
                {items.map((image, index) => (
                    <div key={index}>
                        <img
                            className={cx("image", {
                                active: image == imageActive,
                            })}
                            onClick={() => setImageActive(image)}
                            src={image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SlideShowImage;
