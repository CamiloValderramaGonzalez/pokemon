import { FC, useEffect } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
    children: JSX.Element;
    title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Camilo Valderrama" />
                <meta
                    name="description"
                    content="Información sobre el Pokemón"
                />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
                <meta
                    property="og:title"
                    content={`Informacion sobre ${title}`}
                />
                <meta
                    property="og:description"
                    content={`Esta es la pagina de ${title}`}
                />
                <meta
                    property="og:image"
                    content={`${origin}/img/banner.png`}
                />

                {/* <!-- MS, fb & Whatsapp -->  */}

                {/* <!-- MS Tile - for Microsoft apps--> */}
                <meta
                    name="msapplication-TileImage"
                    content={`${origin}/img/banner.png`}
                />

                {/* <!-- fb & Whatsapp --> */}

                {/* <!-- Site Name, Title, and Description to be displayed --> */}
                <meta property="og:site_name" content="The Rock Photo Studio" />
                <meta
                    property="og:title"
                    content="The Rock Photo Studio in Florida"
                />
                <meta
                    property="og:description"
                    content="The best photo studio for your events"
                />

                {/* <!-- Image to display -->*/}
                {/*<!-- Replace   «example.com/image01.jpg» with your own --> */}
                <meta
                    property="og:image"
                    content={`${origin}/img/banner.png`}
                />

                {/* <!-- No need to change anything here --> */}
                <meta property="og:type" content="website" />
                <meta property="og:image:type" content="image/jpeg" />

                {/* <!-- Size of image. Any size up to 300. Anything above 300px will not work in WhatsApp --> */}
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />

                {/* <!-- Website to visit when clicked in fb or WhatsApp--> */}
                <meta property="og:url" content={`${origin}`} />
            </Head>
            <Navbar />
            <main
                style={{
                    padding: "0px 20px",
                }}
            >
                {children}
            </main>
        </>
    );
};
