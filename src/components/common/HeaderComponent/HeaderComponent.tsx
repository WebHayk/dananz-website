import {FC, useState} from "react";
import Button from "UI/Button";
import HeaderNavList from "./HeaderNavList";
import {HEADER_NAV_LIST} from "core/database";
import cs from "classnames";
import CloseIcon from "assets/icons/CloseIcon";

export const HeaderComponent: FC = () => {

    const [isToggled, setToggled] = useState<boolean>(false);

    const handleToggle = () => setToggled(prevState => !prevState);

    return (
        <header className={"content-container"}>
            <div className={"flex-between py-10 max-lg:py-5 max-sm:py-2"}>
                <div>
                    <img
                        loading={"lazy"}
                        width={126}
                        height={54}
                        src={"/images/logo.svg"}
                        alt={"App logo"}
                    />
                </div>
                <div className={"gap-16 max-xl:gap-8 max-lg:gap-4 max-sm:gap-2 flex items-center"}>
                    <nav className={cs({
                        ["fixed absolute-reset bg-secondary h-full flex items-center justify-center"]: isToggled,
                        ["max-xl:hidden"]: !isToggled
                    })}>
                        <HeaderNavList
                            isToggled={isToggled}
                            list={HEADER_NAV_LIST}
                        />
                        <button
                            onClick={handleToggle}
                            className={"absolute right-3 top-8 max-sm:top-5"}
                        >
                            <CloseIcon
                                width={"32"}
                                height={"32"}
                                fill={"#fff"}
                            />
                        </button>
                    </nav>
                    <Button
                        color={"primary"}
                        onClick={() => true}
                    >
                        Contact us
                    </Button>
                    <button
                        onClick={handleToggle}
                        className="xl:hidden"
                    >
                        <img
                            alt={"toggle-icon"}
                            width={24}
                            height={24}
                            loading={"lazy"}
                            src={"/images/toggle-icon.svg"}
                        />
                    </button>
                </div>
            </div>
        </header>
    )
}
