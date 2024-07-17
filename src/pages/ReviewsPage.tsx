import Header from "../components/Header";
import Head from "next/head";
export default function ReviewsPage(){
    return(
        <>
        <Head>
            <title>Página de Comentarios</title>
            <meta name="description" content="Página de comentários e avaliações dos usuários" />
        </Head>
        <Header />
        <main>
            <h1>Pagina Destino</h1>
        </main>
        </>
    )
}