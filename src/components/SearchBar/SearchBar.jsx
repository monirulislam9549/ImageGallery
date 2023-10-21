import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../Providers/SearchProvider";

const accessKey = import.meta.env.VITE_REACT_APP_ACCESS_KEY;

const SearchBar = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const { setSearchQuery, setSelectedSuggestion } = useContext(SearchContext);

  useEffect(() => {
    if (inputValue) {
      // Fetch suggestions from the Unsplash API
      fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${inputValue}&client_id=${accessKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          // Extract suggestions from the API response
          const suggestionResults = data.results.map(
            (result) => result.alt_description
          );
          setSuggestions(suggestionResults);
        });
    } else {
      // Clear suggestions when the input is empty
      setSuggestions([]);
    }
  }, [inputValue]);

  // Handle selecting a suggestion
  const handleSuggestionSelect = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setSearchQuery(suggestion);
    // setInputValue("");
    setSuggestions([]);
  };

  const clearInput = () => {
    setInputValue("");
    setSelectedSuggestion("");
    setSearchQuery("");
  };

  return (
    <div>
      <div className="flex relative ">
        <input
          className="py-2 rounded-md px-2 text-start h-14 text-black font-medium outline-0 w-[600px]"
          type="text"
          placeholder="Search for images..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            // Clear selected suggestion when typing
            setSelectedSuggestion("");
          }}
        />
        {inputValue && ( // Render clear icon if inputValue is not empty
          <svg
            onClick={clearInput} // Call clearInput when the icon is clicked
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute inset-y-4 right-5 bottom-5 flex justify-center items-center text-gray-700 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 absolute inset-y-4 right-5 bottom-5 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg> */}
      </div>
      {suggestions.length > 0 && (
        <ul className="bg-white text-justify  font-medium p-2 rounded-md w-[600px] mt-1.5">
          {suggestions.map((suggestion, index) => (
            <li
              className="cursor-pointer leading-relaxed hover:bg-[#0076CE] rounded-sm text-black p-1 hover:text-white"
              key={index}
              onClick={() => handleSuggestionSelect(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
