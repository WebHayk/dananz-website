import {FC} from "react";
import {SocialMediaModel, VectorIconModel} from "core/models/interfaces";
import {Helpers} from "core/helpers";

interface SocialIconItemModel {
    socialMedia: SocialMediaModel<FC<VectorIconModel>>
}

export const SocialIconItem: FC<SocialIconItemModel> = (
    {
        socialMedia
    }
) => {

    const {url} = socialMedia;

    const handleClick = () => Helpers.openUrl(url);

    return (
        <div
            onClick={handleClick}
            className={"group bg-placeholder p-1 cursor-pointer rounded-full"}
        >
            <socialMedia.key/>
        </div>
    )
}
