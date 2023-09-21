import React from "react";
import Board from "./Board";
import GalleryNav from "./GalleryNav";
import { SearchProvider } from "./SearchContext";
const Gallery = () => {
  return (
    <div>
      <SearchProvider>
        <GalleryNav />
        <Board />
      </SearchProvider>
    </div>
  );
};

export default Gallery;
