import { Routes , Route } from "react-router-dom";

import MovieDetail from '../pages/MovieDetail';
import Page404 from "../pages/Page404";
import React from 'react'
import MovieList from "../pages/MovieList";
import Search from "../pages/Search";

const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-700">
    <Routes>
      <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
      <Route path="movie/:id" element={<MovieDetail />} />
      <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
      <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
      <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
      <Route path="search" element={<Search apiPath="search/movie" />} />
      <Route path="*" element={<Page404 />} title="page 404 -_-"/>
      
      
    
    </Routes>
    </div>
    
  )
}

export default AllRoutes
