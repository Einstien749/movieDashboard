import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type IInputSearchType = {
  onTextChange : (e : string) => void
}

export const InputSearchField = ({onTextChange} : IInputSearchType) => {
  const [query, setQuery] = useState("");
  const handleTextChange = (e: string) => {
    onTextChange(e);
    setQuery(e)
  }
  return (
    <div className="relative w-[85%]">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => handleTextChange(e.target.value)}
        className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-12 outline-none focus:border-blue-500 bg-[#B2BEB540]"
      />

      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
    </div>
  );
};
