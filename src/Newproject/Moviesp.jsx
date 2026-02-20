import { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "../api/MoviesApi";
import MovieCard from "./MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  // Load popular movies
  useEffect(() => {
    async function loadData() {
      const data = await fetchPopularMovies();
      setMovies(data.results);
    }
    loadData();
  }, []);

  // Handle search
  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      const data = await fetchPopularMovies();
      setMovies(data.results);
    } else {
      const data = await searchMovies(value);
      setMovies(data.results);
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Popular Movies</h1>

      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={handleSearch}
          style={styles.search}
        />
      </div>

      {/* Movie Grid */}
      <div style={styles.grid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    background: "#0d0d0d",
    padding: "80px 20px 40px 20px", 
    overflowX: "hidden", 
  },

  heading: {
    textAlign: "center",
    color: "white",
    marginBottom: "25px",
    fontSize: "28px",
    fontWeight: "700",
  },

  searchContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "35px",
  },

  search: {
    width: "400px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#1a1a1a",
    color: "white",
    fontSize: "16px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))", 
    gap: "22px",
    width: "100%",
    justifyItems: "center",
    
  },
};

export default Movies;