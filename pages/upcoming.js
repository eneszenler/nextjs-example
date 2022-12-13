import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MovieCard from "./components/MovieCard";

const Upcoming = ({movies}) => {
  return (
    <>
      <div>
        <Head>
          <title>Upcoming Movies</title>
        </Head>

        <main className={styles.popular}>
          <h2>Upcoming Movies</h2>
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
    `https://api.themoviedb.org/3/movie/upcoming?api_key=8c378a876f91566d43c84472aceb9f08&language=en-US&page=1`
  );
  const movies = await response.json();

  return {
    props: {
      movies,
    },
  };
}

export default Upcoming;
