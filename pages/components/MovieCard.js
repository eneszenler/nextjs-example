import Link from "next/link";

const MovieCard = ({item}) => {
  return (
    <Link href={`/movie/${item?.id}`}>
        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${item?.poster_path}`} alt={item.title} />
        <h3>{item?.title}</h3>
    </Link>
  );
};
export default MovieCard;
