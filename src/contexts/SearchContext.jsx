import { createContext, useContext, useEffect, useState } from "react";

const ApiKey = import.meta.env.VITE_API_KEY;
const ApiUrl = import.meta.env.VITE_API_URL;

const SearchContext = createContext();

function SearchProvider({ children }) {
  // STATE FOR SUBMIT
  const [searchSubmit, setSearchSubmit] = useState("");
  // STATE FOR INPUT USER
  const [searchInput, setSearchInput] = useState("");
  //STATE FOR FETCH
  const [dataValues, setDataValues] = useState([]);

  //! FUNCTION SET SUBMIT
  const setSubmit = (e) => {
    e.preventDefault();
    setSearchSubmit(searchInput);
  };

  //! FUNCTION SET INPUT USER
  const setInput = (e) => {
    setSearchInput(e.target.value);
  };

  //! CALL API
  const fetchData = () => {
    const ApiUrlSet = new URL(ApiUrl + "/movie");
    ApiUrlSet.searchParams.set("api_key", ApiKey);
    ApiUrlSet.searchParams.set("query", searchSubmit);
    fetch(ApiUrlSet.href)
      .then((res) => res.json())
      .then((data) => {
        setDataValues(data.results);
      });
  };

  useEffect(fetchData, [searchSubmit]);

  const searchObject = {
    setInput,
    searchInput,
    setSubmit,
    searchSubmit,
    dataValues,
  };
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
