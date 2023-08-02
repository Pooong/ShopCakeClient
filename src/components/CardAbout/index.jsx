import classNames from "classnames/bind";
import styles from "./CardAbout.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function CardAbout({ item }) {
    const classes = cx("wrapper", {
        right: item.aboutRight,
        center: item.aboutCenter,
    });

    return (
        <div className={classes}>
            <div className={cx("thumbnail")}>
                <img src={item.image} alt="" />
            </div>
            <div className={cx("content")}>
                <h5>{item.title}</h5>
                <span>{item.description}</span>
                <Button primary large to={item.to} uppercase>
                    {item.button}
                </Button>
            </div>
        </div>
    );
}

export default CardAbout;
