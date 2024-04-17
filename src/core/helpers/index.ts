import {EMAIL_REGEXP} from "../variables";

export class Helpers {
    static openUrl = (url: string, target: string = "_blank") => window.open(url, target);

    static isEmailValue = (email: string): boolean => {
        return EMAIL_REGEXP.test(email);
    }
}
