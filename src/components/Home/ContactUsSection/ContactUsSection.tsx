import {FC, memo} from "react";
import Typography from "UI/Typography";
import Button from "UI/Button";

export const ContactUsSection: FC = memo(() => {
    return (
        <section className={"py-10 bg-primary w-full"}>
            <div className={"max-lg:grid-cols-1 max-lg:gap-5 w-full content-container grid grid-cols-5"}>
                <div className={"w-full lg:col-span-2"}>
                    <Typography
                        className={"font-semibold text-white"}
                        variant={"h4"}
                    >
                        let's discuss making your interior like a dream place!
                    </Typography>
                </div>
                <div className={"flex w-full flex-col gap-5 lg:col-span-3 lg:col-start-4"}>
                    <Typography
                        className={"text-placeholder"}
                        variant={"body"}
                    >
                        Contact us below to work together to build your amazing interior
                    </Typography>
                    <Button
                        className={"me-auto"}
                        color={"white"}
                        onClick={() => true}
                    >
                        Contact Us
                    </Button>
                </div>
            </div>
        </section>
    )
});

ContactUsSection.displayName = "ContactUsSection";
