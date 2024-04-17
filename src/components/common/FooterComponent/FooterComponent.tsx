import {FC} from "react";
import Typography from "UI/Typography";
import SocialIconsList from "./SocialIconsList";
import EmailSubscriptionControl from "./EmailSubscriptionControl";

export const FooterComponent: FC = () => {
    return (
        <div className={"content-container my-20 max-lg:my-10 max-sm:my-5"}>
            <div className={"flex-between items-baseline max-xl:flex-col max-lg:gap-5"}>
                <div className={"flex flex-col gap-3"}>
                    <img
                        loading={"lazy"}
                        width={126}
                        height={54}
                        src={"/images/logo.svg"}
                        alt={"App logo"}
                    />
                    <Typography
                        className={"text-secondary font-semibold"}
                        variant={"h4"}
                    >
                        One of the best furniture agency.
                    </Typography>
                </div>
                <div className={"flex flex-col gap-10"}>
                    <EmailSubscriptionControl />
                    <div className={"flex flex-col gap-2.5"}>
                        <Typography
                            className={"text-secondary"}
                            variant={"small"}
                        >
                            Follow us on
                        </Typography>
                        <div className={"flex items-center gap-6"}>
                            <SocialIconsList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
