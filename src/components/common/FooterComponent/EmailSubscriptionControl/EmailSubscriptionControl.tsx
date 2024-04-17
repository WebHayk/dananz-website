import {ChangeEvent, FC, useState} from "react";
import Typography from "UI/Typography";
import TextField from "UI/TextField";
import {Helpers} from "core/helpers";

export const EmailSubscriptionControl: FC = () => {

    const [error, setError] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        let {value} = event.target;
        setEmail(value);
    }

    const handleSubmit = () => {
        let checkEmailValue = Helpers.isEmailValue(email);
        if (!checkEmailValue) {
            setError("Invalid email");
            return;
        }

        /** Some logic **/

        setError("");
        setEmail("");
    }

    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex items-center gap-2"}>
                <div className={"w-3.5 h-3.5 rounded-full bg-secondary"}></div>
                <Typography
                    className={"text-secondary"}
                    variant={"body"}
                >
                    Enter your email to get the latest news
                </Typography>
            </div>
            <TextField
                error={error}
                value={email}
                placeholder={"Email Address"}
                rightChildren={
                    <button
                        onClick={handleSubmit}
                        disabled={!email}
                    >
                        <img
                            alt={"arrow-icon"}
                            width={24}
                            height={9}
                            loading={"lazy"}
                            src={"/images/arrow-icon.svg"}
                        />
                    </button>
                }
                type={"email"}
                onChange={handleEmailChange}
            />
        </div>
    )
}
