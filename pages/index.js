import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";

// menaruh listing post secara dinamis, di inisiasi dari file lib/posts dengan function getPosts
export async function getStaticProps() {
    const posts = await getPosts();
    return {
        props: { posts },
    };
}

function HomePage({ posts }) {
    console.log('[HomePage] render', posts);
    return (
        <>
            <Head>
                <title>My Blog</title>
                <meta name="description" value="This is my Blog" />
            </Head>
            <main>
                <h1>My Blog</h1>
                <ul>
                    {/* menampilkan per masing masing post yang di parsing dari function getStaticProps diatas, reminder bahwa untuk setiap foreach react harus ditampilkan 'key' yang berisi unique value dari per masing masing list */}
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link href={`/posts/${post.slug}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}

export default HomePage;