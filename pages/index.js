import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MovieCard from "./components/MovieCard";

export default function Home({movies}) {
  return (
    <>
      <div>
        <Head>
          <title>Popular Movies</title>
        </Head>

        <main className={styles.popular}>
          <h2>Popular Movies</h2>
          <div className={styles["popular-inner"]}> 
          {movies?.results?.map((item) => (
            <MovieCard item={item} />
          ))}
          </div>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=8c378a876f91566d43c84472aceb9f08&language=en-US&page=1`
  );
  const movies = await response.json();

  return {
    props: {
      movies,
    },
  };
}
