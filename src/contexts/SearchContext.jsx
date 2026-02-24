import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  //! STATE PER INPUT USER
  const [searchInput, setSearchInput] = useState("");
  //! FUNCTION SET INPUT USER
  const setInput = (e) => {
    setSearchInput(e.target.value);
  };

  const searchObject = { setInput, searchInput };
  return (
    <SearchContext.Provider value={searchObject}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  return useContext(SearchContext);
}

export { SearchProvider, useSearch };
