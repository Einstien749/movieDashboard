import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { MovieCard } from "../../components/moviecard";
import type { Movie } from "../../components/moviecard";

type IDetailsType = {
  movies : Movie[] | []
}

export const Details = ({ movies } : IDetailsType) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const movieItem: Movie = location?.state?.movie;
  console.log(movieItem);
  return (
    <div className="px-4 py-4">
      <div>
        <button
          onClick={handleGoBack}
          className="text-[14px] font-bold cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className="mx-2">Back</span>
        </button>
      </div>
      <div className="my-2 flex flex-row">
        <div className="w-[40%]">
          <img
            src={`https://image.tmdb.org/t/p/original${movieItem?.backdrop_path}`}
            className="h-[400px] w-full object-cover"
          />
        </div>
        <div className="w-[60%] px-4">
          <h4 className="text-2xl font-bold text-black">{movieItem?.title}</h4>
          <span className="text-sm text-[#B2BEB5] my-2">
            {new Date(movieItem?.release_date).getFullYear()} . 2h 6m .{" "}
            {movieItem?.adult && "PG 13"}
          </span>
          <div className="my-2">
            <button className="font-bold bg-[#B2BEB540] p-1 rounded-md">
              <FontAwesomeIcon icon={faStar} className="text-[#FFD700]" />{" "}
              <span className="mx-1 text-black">
                {Number(movieItem?.vote_average).toFixed(1)}
              </span>
            </button>
            <span className="mx-6 text-[#B2BEB5]">
              ({movieItem?.vote_count} votes)
            </span>
            <button className="font-bold bg-[#3B82F6] p-1 rounded-md px-2">
              <FontAwesomeIcon icon={faHeart} className="text-[#ee0000]" />{" "}
              <span className="mx-1 text-white font-normal text-[14px]">
                Add To Favourites
              </span>
            </button>
          </div>
          <hr className="border-0 h-px bg-gray-300 my-6" />
          <p className="text-lg font-bold text-black-500">Overview</p>
          <p className="my-4">{movieItem?.overview}</p>
          <p className="text-lg font-bold text-black-200 mt-4">Genres</p>
          <div className="my-2">
            <span className="p-1 px-2 bg-[#B2BEB540] rounded-md">
              Science Fiction
            </span>
            <span className="p-1 px-2 bg-[#B2BEB540] rounded-md mx-4">
              Adventure
            </span>
            <span className="p-1 px-2 bg-[#B2BEB540] rounded-md">Action</span>
          </div>
          <div className="my-4">
            <div className="mt-2 grid grid-cols-2 gap-1">
              <span>Release Date</span>
              <span className="mx-8">
                {new Date(movieItem?.release_date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="my-2 grid grid-cols-2 gap-1">
              <span>Director</span>
              <span className="mx-8">Denis</span>
            </div>
            <div className="my-2 grid grid-cols-2 gap-1">
              <span>Cast</span>
              <span className="mx-8">Timothy, Zendaya, Rebecca Ferguson</span>
            </div>
            <div className="my-2 grid grid-cols-2 gap-1">
              <span>Language</span>
              <span className="mx-8">English</span>
            </div>
            <div className="my-2 grid grid-cols-2 gap-1">
              <span>Budget</span>
              <span className="mx-8">$190,000,000</span>
            </div>
            <div className="my-2 grid grid-cols-2 gap-1">
              <span>Revenue</span>
              <span className="mx-8">$714,444,358</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold">Similar Movies</p>{" "}
        {movies?.length > 0 ? (
          <div className="overflow-x-auto mt-6 py-8">
            <div className={"flex space-x-4"}>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full h-[200px] flex items-center justify-center">
            <p>No Movies</p>
          </div>
        )}
      </div>
    </div>
  );
};
