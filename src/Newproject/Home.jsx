import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Welcome to Movie Explorer 🎬</h1>
        <p style={styles.subtitle}>
          Search movies, explore details & enjoy clean UI.
        </p>

        <Link to="/movies" style={styles.button}>Browse Movies</Link>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#0d0d0d",
    minHeight: "100vh",
  },

  hero: {
    height: "80vh",
    backgroundImage:
      "url('https://image.tmdb.org/t/p/original/kqjL17yufvn9OVLyXYpvtyrFfak.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textShadow: "0 4px 20px black",
  },

  title: {
    color: "white",
    fontSize: "40px",
    fontWeight: "700",
  },

  subtitle: {
    color: "#ddd",
    marginTop: "10px",
    fontSize: "20px",
  },

  button: {
    marginTop: "25px",
    padding: "12px 25px",
    background: "#ff4444",
    borderRadius: "8px",
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Home;