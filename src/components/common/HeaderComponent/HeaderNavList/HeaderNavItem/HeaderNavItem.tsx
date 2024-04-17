import {FC} from "react";
import {HeaderNavItemModel as ItemModel} from "core/models/interfaces";
import Typography from "UI/Typography";
import cs from "classnames";
import {useNavigate} from "react-router-dom";

interface HeaderNavItemModel {
    item: ItemModel,
    isToggled: boolean
}

export const HeaderNavItem: FC<HeaderNavItemModel> = (
    {
        item,
        isToggled
    }) => {

    const navigate = useNavigate();

    const {
        path,
        label,
        isImportant
    } = item;

    const handleRedirect = () => navigate(path);

    return (
        <li
            onClick={handleRedirect}
            className={cs({
                ["text-white hover:bg-white/10"]: isToggled,
                ["hover:text-primary hover:bg-primary/5"]: !isToggled
            }, "duration-animation cursor-pointer px-5 py-3")}
        >
            <Typography
                className={cs({
                    ["font-semibold"]: isImportant && !isToggled
                })}
                variant={isToggled ? "h4" : "body"}
            >
                {label}
            </Typography>
        </li>
    )
}
