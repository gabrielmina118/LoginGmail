import NextLinkComponent from "../src/components/Link";
import { loginGmailFirebase } from "../src/services/login";

export default function HomePage() {


    async function loginGmail(){
        try {
            const gmail = await loginGmailFirebase()
            console.log("gmail",gmail)
        } catch (error) {
            console.log("error",error);
        }
    }

    return (
        <div>
            <h1>Alura Cases - Home</h1>
            <NextLinkComponent href={"/faq"}>
                ir para pagina do FAQ
            </NextLinkComponent>
            <button onClick={() => loginGmail()}>Logar com gmail</button>
        </div>
    );
}
