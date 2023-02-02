import Head from "next/head";
import { getPost, getSlugs } from '../../lib/posts';

// mengambil routes agar lebih otomatis, berdasarkan slug
export async function getStaticPaths() {
    const slugs = await getSlugs();
    return {
        paths: slugs.map((slug) => ({
            params: { slug },
        })),
        // dibawah ini adalah contoh mengambil slug secara manual
        // paths: [
        //     { params: { slug: 'first-post'} },
        //     { params: { slug: 'second-post'} }
        // ],
        fallback: false,
    };
}

// mengambil static properties, dan mengambil properti dari post yang sudah kita buat
export async function getStaticProps({ params: { slug } }) {
    console.log('[PostPage] getStaticProps():', slug);
    const post = await getPost(slug);
    // console.log('data:', data);
    return {
        props: { post }
    };
}

// menampilkan post menjadi halaman html
function PostPage({ post }) {
    console.log('[PostPage] render:', post);
    return (
        <>
            <Head>
                <title>{post.title} - My Blog</title>
            </Head>
            <main>
                <p>{post.date}</p>
                <h1>{post.title}</h1>
                <article dangerouslySetInnerHTML={{ __html: post.body }}></article>
            </main>
        </>
    );
}

export default PostPage;