import React,{useState} from 'react'
import {Search} from "../utils/storyinterface"

export const SearchContext = React.createContext<Search>({
    searchValue: "",
    handleSearch: (searchVal) => {}
});

const SearchContextProvider = (props: any) => {
    const [searchedValue, setsearchedValue] = useState<string>("new");
  
    const handleSearchedValue = (searchVal: string) => {
        console.log("searchVal****", searchVal)
      setsearchedValue(searchVal);
    };
  
    const contextValue = {
      searchValue: searchedValue,
      handleSearch: handleSearchedValue,
    };
    return <SearchContext.Provider value={contextValue}>{props.children}</SearchContext.Provider>;
  };
  export default SearchContextProvider;

