import {FC, memo} from "react";
import Typography from "UI/Typography";

export const HomeSection: FC = memo(() => {
    return (
        <section className={"content-container max-lg:my-[50px] my-[100px]"}>
            <div className={"flex-center flex-col text-center"}>
                <div className={"grid lg:grid-cols-3"}>
                    <div className={"col-start-2"}>
                        <Typography variant={"h2"}>
                            Minimalist Room
                        </Typography>
                        <Typography
                            className={"pt-10 pb-14 max-lg:pt-5 max-lg:pb-7"}
                            variant={"body"}
                        >
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout.
                        </Typography>
                    </div>
                </div>
                <img
                    className={"w-full"}
                    loading={"lazy"}
                    alt={"Main"}
                    src={"/images/main-image.jpg"}
                />
            </div>
        </section>
    )
});

HomeSection.displayName = "HomeSection";
