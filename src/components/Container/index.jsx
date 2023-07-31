import classNames from "classnames/bind";
import styles from "./Container.module.scss";
import { Row, Col } from "react-bootstrap";
import Card from "~/components/Card";
const cx = classNames.bind(styles);

function Container({ items, sizeS, sizeM, sizeL, ...passprops }) {
    const props = {
        ...passprops,
    };
    if (sizeS) {
        props.xs = sizeS;
    }
    if (sizeM) {
        props.md = sizeM;
    }
    if (sizeL) {
        props.lg = sizeL;
    }
    return (
        <div className={cx("wrapper")}>
            <Row className={"justify-content-center " + cx("row")} {...props}>
                {items.map((item, index) => (
                    <Col key={index}>
                        <Card item={item} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Container;
