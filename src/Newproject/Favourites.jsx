function Favourites() {
  return (
    <div style={styles.page}>
      <h1 style={styles.text}>Your Favourite Movies ❤️</h1>
      <p style={styles.text}>You have no favourite movies yet.</p>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "80vh",
    color: "white",
    background: "#0d0d0d",
    padding: "20px",
  },
  text: {
    color: "#bbb",
    marginTop: "20px",
    fontSize: "18px",
  },
  text:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

  }
};

export default Favourites;