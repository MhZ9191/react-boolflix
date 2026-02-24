import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  //! STATE PER SUBMIT
  const [searchSubmit, setSearchSubmit] = useState("");
  //! FUNCTION SET SUBMIT
  const setSubmit = (e) => {
    e.preventDefault();
    setSearchSubmit(searchInput);
  };

  //! STATE PER INPUT USER
  const [searchInput, setSearchInput] = useState("");
  //! FUNCTION SET INPUT USER
  const setInput = (e) => {
    setSearchInput(e.target.value);
  };

  const searchObject = { setInput, searchInput, setSubmit, searchSubmit };
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
