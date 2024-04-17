import {ElementType, FC, ReactNode} from "react";
import cs from "classnames";

export type Variant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body"
    | "small"
    | "large"
    ;

type Weight =
    | "thin"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";

interface Props {
    variant: Variant,
    onClick?: () => void
    children: ReactNode,
    className?: string,
    as?: ElementType,
    id?: string,
    style?: any,
    weight?: Weight
}

const tags: Record<Variant, ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    body: "p",
    small: "span",
    large: "h1"
};

const sizes: Record<Variant, string> = {
    h1: "text-5xl font-bold sm:text-6xl",
    h2: "text-4xl font-bold sm:text-5xl",
    h3: "text-3xl font-bold sm:text-4xl",
    h4: "text-2xl font-bold sm:text-3xl",
    h5: "text-base font-bold sm:text-xl",
    body: "text-sm sm:text-base",
    small: "text-sm",
    large: "text-7xl max-sm:text-5xl"
};

export const Typography: FC<Props> = (
    {
        variant,
        children,
        className,
        onClick,
        as,
        weight,
        id,
        style
    }) => {

    const sizeClasses = sizes[variant];
    const Tag = as || tags[variant];

    return (
        <Tag
            style={{...style}}
            id={id}
            onClick={onClick}
            className={cs({
                [`font-${weight}`]: weight
            }, `${sizeClasses} ${className} inline-block leading-snug`)}
        >
            {children}
        </Tag>
    )
}