import {FC, memo} from "react";

export const GallerySection: FC = memo(() => {
    return (
        <section className={"content-container max-lg:my-[50px] my-[100px]"}>
            <div className="grid grid-cols-2 gap-8 max-lg:gap-4">
                <img
                    loading={"lazy"}
                    className="w-full h-auto object-cover"
                    src="/images/grid/1.jpg"
                    alt="1"
                />
                <img
                    loading={"lazy"}
                    className="w-full h-auto object-cover"
                    src="/images/grid/2.jpg"
                    alt="2"
                />
                <img
                    loading={"lazy"}
                    className="col-span-2 w-full h-auto object-cover"
                    src="/images/grid/3.jpg"
                    alt="3"
                />
                <img
                    loading={"lazy"}
                    className="w-full h-auto object-cover"
                    src="/images/grid/4.jpg"
                    alt="4"
                />
                <img
                    loading={"lazy"}
                    className="w-full h-auto object-cover"
                    src="/images/grid/5.jpg"
                    alt="5"
                />
            </div>
        </section>
    )
});

GallerySection.displayName = "GallerySection";
