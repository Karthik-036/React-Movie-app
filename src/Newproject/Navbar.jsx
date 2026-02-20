import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🎬 Movie Explorer</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/movies" style={styles.link}>Movies</Link>
        <Link to="/favourites" style={styles.link}>Favourites</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    background: "rgba(20,20,20,0.9)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    position: "sticky",
    top: 0,
    zIndex: 10,
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  logo: {
    color: "white",
    margin: 0,
    fontSize: "22px",
  },
  links: {
    display: "flex",
    gap: "25px",
  },
  link: {
    color: "white",
    fontSize: "18px",
    textDecoration: "none",
    transition: "0.3s",
  }
};

export default Navbar;