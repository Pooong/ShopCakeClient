import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Button = forwardRef(
    (
        {
            to,
            href,
            primary = false,
            outline = false,
            text = false,
            icon = false,
            rounded = false,
            small,
            large,
            className,
            children,
            ...passprops
        },
        ref
    ) => {
        let Type = "button";
        const props = {
            ...passprops,
        };
        if (to) {
            props.to = to;
            Type = Link;
        }
        if (href) {
            props.href = href;
            Type = "a";
        }
        const classes = cx("wrapper", {
            [className]: className,
            primary,
            outline,
            text,
            icon,
            rounded,
            small,
            large,
        });

        return (
            <Type ref={ref} {...props} className={classes}>
                {children}
            </Type>
        );
    }
);

Button.displayName = "Button";

export default Button;
