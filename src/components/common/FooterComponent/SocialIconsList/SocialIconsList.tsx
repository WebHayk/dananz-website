import {FC} from "react";
import {SOCIAL_ICONS} from "core/database";
import SocialIconItem from "./SocialIconItem";

export const SocialIconsList: FC = () => {
    return (
        <>
            {
                SOCIAL_ICONS.map(icon => {
                    return (
                        <SocialIconItem
                            key={icon.url}
                            socialMedia={icon}
                        />
                    )
                })
            }
        </>
    )
}
