import { InputSearchField } from "../../components/inputsearchfield";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import type { Movie } from "../../components/moviecard";
import { MovieCard } from "../../components/moviecard";

type ISearchType = {
  movies : Movie[] | []
}

export const Search = ({ movies } : ISearchType) => {
  const [searchResult, setSearchResult] = useState<Movie[]>(movies);
  console.log(movies);
  const [year, setYear] = useState<number | string>();
  const [rating, setRating] = useState<number | string>(0);
  const handleFilterByYear = (text: any) => {
    if (movies?.length) {
      const result = movies?.filter((movie : Movie) =>
        movie?.release_date?.includes(String(text))
      );
      console.log(result, "result", text);
      setSearchResult(result);
    }
  };
  const handleFilterByRating = (text: number | string) => {
    if (movies?.length) {
      const result = movies?.filter(
        (movie : Movie) => Number(Number(movie?.vote_average).toFixed(1)) > Number(text)
      );
      console.log(result, "result", text);
      setSearchResult(result);
    }
  };
  const handleClearFilter = () => {
    if (year || rating) {
      setYear("");
      setRating(0);
      setSearchResult(movies);
    }
  };
  const handleFilterByTitle = (text: string) => {
    if (movies?.length) {
      const result = movies.filter((movie : Movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      );
      console.log(result, "result", text);
      setSearchResult(result);
    }
  };
  useEffect(() => {
    setSearchResult(movies);
  }, [movies?.length]);

  return (
    <div className="px-8">
      <div className="h-[10vh] flex flex-row items-center w-full justify-between">
        <InputSearchField onTextChange={(e) => handleFilterByTitle(e)} />{" "}
        <button className="py-3 px-6 bg-[#3B82F6] mx-2 rounded-xl">
          <FontAwesomeIcon className="text-white" icon={faFilter} />
          <span className="mx-2 text-white">Filters</span>
        </button>
      </div>
      <div className="flex flex-row items-center">
        <div className="grid grid-cols-4 gap-x-4 w-[90%]">
          <div className="flex flex-col">
            <label
              htmlFor="genre"
              className="text-lg font-bold text-black-500 my-2"
            >
              Genre
            </label>

            <select
              id="genre"
              name="genre"
              className="h-[50px] bg-[#B2BEB540] rounded-xl px-1"
            >
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="year"
              className="text-lg font-bold text-black-500 my-2"
            >
              Year
            </label>

            <select
              id="year"
              name="year"
              className="h-[50px] bg-[#B2BEB540] rounded-xl px-1"
              onChange={(e) => {
                setYear(e?.target?.value);
                console.log(e.target?.value);
                handleFilterByYear(e.target?.value);
              }}
              value={year}
            >
              <option value="">All Year</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="rating"
              className="text-lg font-bold text-black-500 my-2"
            >
              Rating
            </label>

            <select
              id="rating"
              name="rating"
              className="h-[50px] bg-[#B2BEB540] rounded-xl px-1"
              onChange={(e) => {
                setRating(e.target?.value);
                handleFilterByRating(e?.target?.value);
              }}
              value={rating}
            >
              <option value="0">All Rating</option>
              <option value="9">9+</option>
              <option value="8">8+</option>
              <option value="7">7+</option>
              <option value="6">6+</option>
              <option value="5">5+</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="sort"
              className="text-lg font-bold text-black-500 my-2"
            >
              Sort By
            </label>

            <select
              id="sort"
              name="sort"
              className="h-[50px] bg-[#B2BEB540] rounded-xl px-1"
            >
              <option value="action">Popularity</option>
            </select>
          </div>
        </div>
        <button
          className="px-2 h-[70px] mx-2 pt-4 my-auto text-blue-500"
          onClick={handleClearFilter}
        >
          clear filter
        </button>
      </div>
      <div>
        {searchResult?.length > 0 ? (
          <div className="overflow-x-auto mt-6 py-8 overflow-x-auto no-scrollbar">
            <div className={"flex space-x-4 px-2"}>
              {searchResult.map((movie) => (
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
