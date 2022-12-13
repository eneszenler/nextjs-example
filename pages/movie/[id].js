import Head from "next/head";
import MovieCard from "../components/MovieCard";
import styles from "../../styles/Home.module.scss";

const MovieDetail = ({movie, similarMovies}) => {
  console.log(movie);
  return (
    <div className="movie">
      <Head>
        <title>{movie?.title}</title>
      </Head>
      <div
        className="cover"
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`}}
      >
        <div className="container">
          <div className="banner-content">
            <div className="display-flex">
              <h3>{movie?.title}</h3>
              <h4>{movie?.release_date}</h4>
            </div>
            <div className="summary">{movie?.overview}</div>
          </div>
        </div>
      </div>

      <main className={styles.popular}>
        <div className="similar">
          <h2>Similar Movies</h2>
          <div className={styles["popular-inner"]}>
            {similarMovies?.results?.map((item) => (
              <MovieCard item={item} />
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        .movie {
          margin: 0 auto;
          position: relative;

          .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 600px;
            background-size: cover;
            z-index: -1;

            &::before {
              content: "";
              background: linear-gradient(to bottom, transparent, #000);
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }

            .banner-content {
              position: absolute;
              bottom: 10px;
              left: 0;
            }

            .display-flex {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-right: 20px;
            }

            h3 {
              font-size: 30px;
              font-weight: bold;
              margin-bottom: 20px;
            }

            h4 {
              font-size: 20px;
              font-weight: bold;
              margin-bottom: 20px;
            }

            .summary {
              font-size: 16px;
              color: #e0dfdf;
              line-height: 1.7;
            }
          }
          .container {
            width: 1200px;
            margin: 0 auto;
            position: relative;
            min-height: 600px;
          }
        }

        .similar {
          margin-top: 600px;
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps({params}) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params?.id}?api_key=8c378a876f91566d43c84472aceb9f08&language=en-US`
  );

  const similarResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${params?.id}/similar?api_key=8c378a876f91566d43c84472aceb9f08&language=en-US&page=1`
  );

  const movie = await response.json();
  const similarMovies = await similarResponse.json();

  return {
    props: {
      movie,
      similarMovies,
    },
  };
}

export default MovieDetail;
