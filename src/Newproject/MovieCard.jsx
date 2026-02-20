import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <Link
      to={`/movie/${movie.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div style={styles.card}>
        <img
          src={IMG_URL + movie.poster_path}
          alt={movie.title}
          style={styles.image}
        />

        <h3 style={styles.title}>{movie.title}</h3>
        <p style={styles.rating}>⭐ {movie.vote_average}</p>
      </div>
    </Link>
  );
}

const styles = {
  card: {
  width: "100%",               
  maxWidth: "220px",          
  background: "#1c1c1c",
  padding: "10px",
  borderRadius: "10px",
  textAlign: "center",
  //height:"260px"
},

  image: {
    width: "100%",
    height: "320px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  title: {
    color: "white",
    marginTop: "10px",
    fontSize: "14px",
    minHeight: "40px",
  },

  rating: {
    color: "gold",
    fontSize: "14px",
    marginTop: "5px",
  },
};

export default MovieCard;