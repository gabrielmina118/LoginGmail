import NextLinkComponent from "../src/components/Link";

export default function Page404() {
    return (
        <div>
            <p>Você se perdeu e caiu na página 404</p>
            <NextLinkComponent href={"/"}>
                Ir paga pagina home
            </NextLinkComponent>
        </div>
    );
}
