import Head from "next/head";

function FirstPostPage() {
    console.log('[FirstPostPage] render');
    return (
        <>
            <Head>
                <title>First Post Page - My Blog</title>
            </Head>
            <main>
                <h1>First Post Page</h1>
                <p>This is my First Ever Blog Post!</p>
            </main>
        </>
    );
}

export default FirstPostPage;