import SendGridProvider from "./SendGridProvider.js";
import SESProvider from "./SESProvider.js";
import SMTPProvider from "./SMTPProvider.js";

class Provider {
    provider(name){
        switch(name){
            case "sendgrid":
                return new SendGridProvider();
            case "ses":
                return new SESProvider();
            case "smtp":
                return new SMTPProvider();
            default:
                throw new Error("Invalid provider");
        }
    }
}

export default Provider;