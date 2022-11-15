import React, { useState, useContext } from "react";
import { FooterConstants } from "../../Constants/string.constant";
import { SearchContext } from "../../Context/SearchContext";
import classes from "./Footer.module.css";

const Search = () => {
    const [searchedValue, setSearchedValue] = useState<string>("");
    const searchCtx = useContext(SearchContext);
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        searchCtx?.handleSearch(searchedValue);
        setSearchedValue("")
      };
  return (
    <form className={classes["search-form"]} onSubmit={handleFormSubmit} >
      <label>{FooterConstants.Search}</label>
      <input type="text" placeholder="Search" value={searchedValue} onChange={(e) => setSearchedValue(e.target.value)} />
    </form>
  );
};

export default Search;
