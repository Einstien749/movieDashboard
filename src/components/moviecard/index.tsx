import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string; // ISO date string (YYYY-MM-DD)
  softcore: boolean;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
type IMovieCard = {
  movie: Movie;
};

export const MovieCard = ({ movie }: IMovieCard) => {
  const navigation = useNavigate();
  const handleCardClick = () => {
    navigation("/details", {
      state: { movie },
    });
  };
  return (
    <div className="" onClick={handleCardClick}>
      <div className="relative h-[200px] w-[200px] rounded-xl cursor-pointer shadow-lg">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          className="h-[200px] w-[200px] object-cover"
        />
        <span className="absolute top-0 right-0 bg-[#00000090] rounded-sm px-1">
          <FontAwesomeIcon icon={faStar} className="text-[#FFD700]" />{" "}
          <span className="mx-1 text-white">
            {Number(movie?.vote_average).toFixed(1)}
          </span>
        </span>
      </div>
      <p className="text-lg font-bold my-2">{movie?.title}</p>
      <p>{new Date(movie?.release_date).getFullYear()}</p>
    </div>
  );
};
