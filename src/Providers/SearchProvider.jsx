import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const value = {
    selectedSuggestion,
    setSelectedSuggestion,
    searchQuery,
    setSearchQuery,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
