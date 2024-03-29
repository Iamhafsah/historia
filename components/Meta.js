import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/art.svg' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Historia - Celebrating Art 🎨',
    keywords: 'Museum pictures, Historical era, artifacts' ,
    description: "Experience the world's history in pictures"
}
export default Meta
