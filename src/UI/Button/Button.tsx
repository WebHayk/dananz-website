import {FC, ReactNode} from "react";
import cs from "classnames";

type ColorType = "primary" | "white";

interface ButtonPropsModel {
    color?: ColorType,
    children: ReactNode,
    onClick: () => void,
    disabled?: boolean,
    className?: string
}

export const Button: FC<ButtonPropsModel> = (
    {
        color = "primary",
        children,
        onClick,
        disabled,
        className
    }
) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cs({
                ["bg-primary text-white hover:bg-transparent hover:text-primary hover:border-primary"]: color === "primary",
                ["bg-white text-secondary hover:bg-transparent hover:text-white hover:border-white"]: color === "white",
                [className as string]: className
            }, "border border-transparent disabled:bg-tertiary duration-animation disabled:opacity-75 max-md:px-4 max-lg:py-2 px-8 py-4 text-center font-medium")}
        >
            {children}
        </button>
    )
}
