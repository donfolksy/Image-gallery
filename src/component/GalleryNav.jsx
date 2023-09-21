import React from "react";
import {Link} from "react-router-dom"
import {BiSearchAlt2} from "react-icons/bi"
import { useSearch } from "./SearchContext";
const GalleryNav = () => {
    const { searchQuery, setSearchQuery } = useSearch();
    const handleSearchChange = (e) => {
		// Update the search state with the input value
		setSearchQuery(e.target.value);
	};
  return (
    <div className="container gallery-nav d-flex justify-content-between mt-3 mb-5">
      <Link to="/">

        <h2>The Imaginarium Gallery</h2>
      </Link>
       <div className="gal-nav d-flex justify-content-between align-items-center p-2">
        <input value={searchQuery}
								onChange={handleSearchChange} type="text" placeholder="Search"/> 
       <BiSearchAlt2/>
       </div>
       <button >Log out</button>
    </div>
  );
};

export default GalleryNav;
