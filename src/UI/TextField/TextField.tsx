import {ChangeEvent, FC, HTMLInputTypeAttribute, ReactNode} from "react";
import cs from "classnames";
import Typography from "../Typography";

interface TextFieldModel {
    value: string,
    type: HTMLInputTypeAttribute,
    placeholder?: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    rightChildren?: ReactNode,
    error?: string
}

export const TextField: FC<TextFieldModel> = (
    {
        type,
        value,
        placeholder,
        onChange,
        rightChildren,
        error
    }
) => {
    return (
        <div className={"w-full relative"}>
            <div className={"w-full relative"}>
                <input
                    className={cs({
                        ["pe-10"]: rightChildren
                    }, "rounded-none placeholder-placeholder border-b border-b-secondary w-full outline-none py-3.5")}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                    type={type}
                />
                <div className={"absolute right-0 top-1/2 translate-y-[-50%]"}>
                    {rightChildren}
                </div>
            </div>
            {
                error
                &&
                <Typography
                    className={"text-red-800 mt-1"}
                    variant={"small"}
                >
                    {error}
                </Typography>
            }
        </div>
    )
}
