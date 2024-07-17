import Header from "../components/Header";
import Head from "next/head";
export default function DestinationPage(){
    return(
        <>
        <Head>
            <title>Destino</title>
            <meta name="description" content="Página de detalhes do destino com informações e clima" />
        </Head>
        <Header />
        <main>
            <h1>Pagina Destino</h1>
        </main>
        </>
    )
}