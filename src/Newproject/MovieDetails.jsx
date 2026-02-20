import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../api/MoviesApi";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function loadMovie() {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    }
    loadMovie();
  }, [id]);

  if (!movie) return <h1 style={{ color: "white", textAlign: "center" }}>Loading...</h1>;

  return (
    <div style={styles.page}>
      <button onClick={() => navigate(-1)} style={styles.backBtn}>⬅ Back</button>

      <div style={styles.wrapper}>
        {/* Poster */}
        <img
          src={IMG_URL + movie.poster_path}
          alt={movie.title}
          style={styles.poster}
        />

        {/* Info section */}
        <div style={styles.infoBox}>
          <h1 style={styles.title}>{movie.title}</h1>

          {movie.tagline && <p style={styles.tagline}>{movie.tagline}</p>}

          <div style={styles.ratingRow}>
            <p style={styles.rating}>⭐ {movie.vote_average}</p>
            <p style={styles.popularity}>🔥 Popularity: {movie.popularity}</p>
          </div>

          <p style={styles.subInfo}><strong>📅 Release Date:</strong> {movie.release_date}</p>

          <p style={styles.overview}>{movie.overview}</p>

          {/* Genres */}
          {movie.genres && (
            <div style={styles.genreContainer}>
              {movie.genres.map((g) => (
                <span key={g.id} style={styles.genreTag}>{g.name}</span>
              ))}
            </div>
          )}

          {/* Runtime */}
          <p style={styles.runtime}><strong>⏳ Duration:</strong> {movie.runtime} mins</p>

          {/* Status */}
          <p style={styles.status}><strong>Status:</strong> {movie.status}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#0d0d0d",
    minHeight: "100vh",
    padding: "30px",
    color: "white",
  },

  backBtn: {
    background: "#333",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    color: "white",
    marginBottom: "20px",
    fontSize: "16px",
  },

  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "50px",
  },

  poster: {
    width: "320px",
    borderRadius: "12px",
    boxShadow: "0 0 25px rgba(255,255,255,0.2)",
  },

  infoBox: {
    maxWidth: "600px",
  },

  title: {
    fontSize: "2.4rem",
    fontWeight: "700",
    marginBottom: "10px",
  },

  tagline: {
    fontStyle: "italic",
    color: "#aaa",
    marginBottom: "20px",
    fontSize: "18px",
  },

  overview: {
    marginTop: "20px",
    lineHeight: "1.6",
    fontSize: "18px",
    color: "#ddd",
  },

  ratingRow: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    marginTop: "10px",
  },

  rating: {
    fontSize: "20px",
    color: "gold",
  },

  popularity: {
    fontSize: "16px",
    color: "orange",
  },

  subInfo: {
    marginTop: "10px",
    fontSize: "17px",
    color: "#ccc",
  },

  genreContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "15px",
  },

  genreTag: {
    background: "#222",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "14px",
    color: "#eee",
  },

  runtime: {
    marginTop: "20px",
    fontSize: "17px",
  },

  status: {
    marginTop: "10px",
    fontSize: "17px",
    color: "#75d977",
  },
};

export default MovieDetails;