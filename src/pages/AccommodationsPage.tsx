import Header from "../components/Header";
import Head from "next/head";
export default function AccommodationsPage(){
    return(
        <>
        <Head>
            <title>Destino</title>
            <meta name="description" content="Página de acomodações disponíveis no destino" />
        </Head>
        <Header />
        <main>
            <h1>Pagina Acomodações</h1>
        </main>
        </>
    )
}