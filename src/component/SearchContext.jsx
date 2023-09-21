import { createContext, useContext, useState } from "react";
// Create a context for search state
const SearchContext = createContext();

// Create a custom hook to access the search context
export function useSearch() {
  return useContext(SearchContext);
}

// SearchProvider component to wrap your app with
export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
