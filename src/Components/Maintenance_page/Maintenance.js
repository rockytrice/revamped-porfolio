import minion from "../../minion.png";
import "./Maintenance.css";

function Maintenance() {
  const headerStyle = {
    color: "black",
    fontFamily: "FrederickatheGreat",
    fontSize: "3rem",
  };

  const subHeaderStyle = {
    color: "black",
    fontFamily: "minion",
    fontSize: "1.5rem",
  };
  return (
    <div className="wrapper text-center p-5 m-3">
      <p className="text-header container" style={headerStyle}>
        We'll Be Up and running soon...
      </p>
      <div className="img p-5">
        <img src={minion} alt="Logo" width="320" />
      </div>
      <div className="subtitle d-flex justify-content-center">
        <div className="col-5">
          <p style={subHeaderStyle}>
            Just doing some nerdy stuff to the website to make it even better.
            Sorry for the inconvenience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
