import { useState, useEffect } from "react";
import { SideBar } from "../../components/sidebar";
import { InputSearchField } from "../../components/inputsearchfield";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MovieCard } from "../../components/moviecard";
import type { Movie } from "../../components/moviecard";

type IHomeType = {
  movies : Movie[] | []
}

export const Home = ({ movies } : IHomeType) => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const filterPopularMovies = () => {
    if (movies?.length > 0) {
      const knownMovies = movies?.filter((movie : Movie) => movie?.vote_average > 7);
      setPopularMovies(knownMovies);
    }
  };
  useEffect(() => {
    filterPopularMovies();
  }, [movies]);
  return (
    <div className="w-full h-full">
      <section className="fixed left-0 top-0 h-screen w-[15%] text-black p-6 border-r border-r-gray-400">
        <SideBar />
      </section>
      <section className="ml-[15%] h-screen w-[85%] overflow-y-auto p-8">
        <div className="h-[10vh] flex flex-row items-center w-full justify-between">
          <InputSearchField onTextChange={(e) => console.log(e)}/>{" "}
          <button className="py-3 px-6 bg-[#3B82F6] mx-2 rounded-xl">
            <FontAwesomeIcon className="text-white" icon={faFilter} />
            <span className="mx-2 text-white">Filters</span>
          </button>
        </div>
        <div className="my-4">
          <h4 className="text-2xl font-bold">Discover Movies</h4>
          <p className="my-3">Find and explore your next favourite movie.</p>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <span className="font-bold">Now Playing</span>{" "}
            <span className="font-bold text-[#3B82F6] mx-2">View All</span>
          </div>
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
        <div className="my-4">
          <div className="flex flex-row justify-between">
            <span className="font-bold">Popular Movies</span>{" "}
            <span className="font-bold text-[#3B82F6] mx-2">View All</span>
          </div>
          {popularMovies?.length > 0 ? (
            <div className="overflow-x-auto mt-6 py-8 overflow-x-auto no-scrollbar">
              <div className={"flex space-x-4 px-2"}>
                {popularMovies.map((movie) => (
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
      </section>
    </div>
  );
};
