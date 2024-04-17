import {FC} from "react";
import {VectorIconModel} from "../../../core/models/interfaces";

export const CloseIcon: FC<VectorIconModel> = ({fill, height, width}) => {
    return (
        <svg width={width || "24"} height={height || "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.00003 17L17 7" stroke={fill || "black"} strokeWidth="2" strokeLinecap="round"/>
            <path d="M7.00003 7.00027L17 17.0002" stroke={fill || "black"} strokeWidth="2" strokeLinecap="round"/>
        </svg>
    )
}
