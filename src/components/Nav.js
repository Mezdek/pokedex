const NavStyle = {
  display: "flex",
  backgroundColor: "#353a40",
  height: "60px",
};
const NavText = {
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  padding: "2px",
  fontWeight: "bold",
  color: "white",
  fontSize: "1.5rem",
};

function Nav() {
  return (
    <div style={NavStyle}>
      <div className="navLogo" style={{ display: "flex", margin: "0 0 0 10%" }}>
        <img
          style={{ display: "block" }}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
          alt="Pokeball"
        />
      </div>
      <div className="navText" style={NavText}>
        <p>Pokédex</p>
      </div>
    </div>
  );
}
export default Nav;
