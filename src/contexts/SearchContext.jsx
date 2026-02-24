import { createContext, useContext } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const test = 1;
  const searchObject = { test };
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
