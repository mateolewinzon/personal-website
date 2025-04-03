import Head from "next/head"

export const AppHead = () => {
    return <Head>
        <title>Mateo Lewinzon</title>
        <meta
            name="description"
            content="Full-stack developer working in fintech"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Mateo Lewinzon" />
        <meta property="og:description" content="Full-stack developer working in fintech" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://lewinzon.dev" />
        <link rel="sitemap" href="https://lewinzon.dev/sitemap.xml" />
    </Head>
}