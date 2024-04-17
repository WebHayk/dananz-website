import {FC} from "react";
import Typography from "UI/Typography";

export const AboutSection: FC = () => {
    return (
        <section className={"content-container max-lg:my-[50px] my-[100px]"}>
            <div className={"max-lg:grid-cols-1 grid grid-cols-2 gap-8"}>
                <div className={"flex flex-col justify-between gap-6 max-lg:gap-3"}>
                    <div className={"flex flex-col gap-6 max-lg:gap-3"}>
                        <Typography
                            className={"text-secondary font-semibold"}
                            variant={"h5"}
                        >
                            Project Overview
                        </Typography>
                        <Typography
                            className={"text-tertiary"}
                            variant={"body"}
                        >
                            Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                        </Typography>
                    </div>
                    <div className={"flex items-center gap-20"}>
                        <Typography
                            className={"text-tertiary"}
                            variant={"body"}
                        >
                            July 22 - 2022
                        </Typography>
                        <Typography
                            className={"text-tertiary"}
                            variant={"body"}
                        >
                            Interior Design - Furniture
                        </Typography>
                    </div>
                </div>
                <div className={"flex flex-col justify-between gap-6 max-lg:gap-3"}>
                    <Typography
                        className={"text-secondary font-semibold"}
                        variant={"h5"}
                    >
                        Design Process
                    </Typography>
                    <Typography
                        className={"text-tertiary"}
                        variant={"body"}
                    >
                        Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                    </Typography>
                    <Typography
                        className={"text-tertiary"}
                        variant={"body"}
                    >
                        Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                    </Typography>
                </div>
            </div>
        </section>
    )
}
