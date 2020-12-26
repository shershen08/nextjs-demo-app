import Link from 'next/link'
import Head from 'next/head'
export const config = { amp: true }

export default function FirstPost() {
    return (<>
    <Head>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

    </Head>
        <h1>First Post</h1>
        
         <Link href="/">
          <a>Back to home</a>
        </Link>
    </>)
  }