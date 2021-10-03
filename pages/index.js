import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import {Counter} from "../components/counter/Counter";
export default function Home({articles}) {

  return (
    <div className={styles.container}>
      {/*  {articles && articles.map((article) => (
            <Link href="/" as={`/article/${article.id}`} key={article.id}>
                <a className={styles.card}>
                    <h3>{article.title} &rarr;</h3>
                    <p>{article.body}</p>
                </a>
            </Link>
        ))}*/}
        <Counter />
    </div>
  )
}
export const getServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    const articles = await res.json()
    return {
        props: {
            articles
        }
    }
}