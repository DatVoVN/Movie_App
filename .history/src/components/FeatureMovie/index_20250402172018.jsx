import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import PaginateIndicator from "./PaginateIndicator";
import Movie from "../Movie";

const FeatureMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeMovieId, setActiveMovieId] = useState()
  useEffect(() => {
    const controller = new AbortController(); // Tạo AbortController để hủy request nếu cần
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODRkZDcwNWVjZWU3N2EzYmFmMWE5OTYwMGUyN2MwNCIsIm5iZiI6MTcyMTcxMDQyOC4zMjgsInN1YiI6IjY2OWYzNzVjNTI0M2RhODhhNzUwNGE1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nolvMGzTv0LYOa24_n9GfZjcgogpyVNNIlXiHhX1MpY",
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Lỗi API: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        const popularMovies = data.results.slice(0, 4);
        setMovies(popularMovies);
        setActiveMovieId(popularMovies[0].id)
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

    return () => controller.abort();
  }, []);

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error}</div>;
  console.log(movies);

  return (
    <div className="relative text-white">
    {movies.filter(movie=>movie.id===activeMovieId).map((movie)=>(<Movie key={movie.id} movie={movie}/>))}

      <PaginateIndicator />
    </div>
  );
};

export default FeatureMovie;
