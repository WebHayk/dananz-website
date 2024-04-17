import {FC} from "react";
import {HeaderNavItemModel} from "core/models/interfaces";
import HeaderNavItem from "./HeaderNavItem";
import cs from "classnames";

interface HeaderNavListModel {
    list: HeaderNavItemModel[],
    isToggled: boolean
}

export const HeaderNavList: FC<HeaderNavListModel> = (
    {
        list,
        isToggled
    }
) => {
    return (
        <ul className={cs({
            ["flex-col"]: isToggled
        }, "flex items-center gap-5")}>
            {
                list.map(item => {
                    let {label} = item;
                    return (
                        <HeaderNavItem
                            isToggled={isToggled}
                            key={label}
                            item={item}
                        />
                    )
                })
            }
        </ul>
    )
}
