import YoutubeIcon from "assets/icons/YoutubeIcon";
import TikTokIcon from "assets/icons/TikTokIcon";
import FacebookIcon from "assets/icons/FacebookIcon";
import InstagramIcon from "assets/icons/InstagramIcon";
import {HeaderNavItemModel, SocialMediaModel, VectorIconModel} from "../models/interfaces";
import {FC} from "react";

export const SOCIAL_ICONS: SocialMediaModel<FC<VectorIconModel>>[] = [
    {key: YoutubeIcon, url: "https://www.youtube.com/"},
    {key: TikTokIcon, url: "https://www.tiktok.com/"},
    {key: FacebookIcon, url: "https://www.facebook.com/"},
    {key: InstagramIcon, url: "https://www.instagram.com/"}
];

export const HEADER_NAV_LIST: HeaderNavItemModel[] = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/" },
    { label: "Services", path: "/" },
    { label: "Our Teams", path: "/", isImportant: true }
];
