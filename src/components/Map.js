import Volunteers from "./Volunteers";
import "./MapStyles.css";

const Map = () => {
  return (
    <div className="map">
      <div className="map-content">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1KuScCeSARyQyY3xVEMZWvOVTcRQDcLg&ehbc=2E312F&noprof=1"
          width="1000"
          height="500"
        ></iframe>

        <div className="info-container">
          <div className="map-info">
            <h2>
              Welcome to the Miami Food Pantries Locator! This interactive map
              is designed to help you easily find local food pantries in the
              Miami area. Whether you're in need of assistance or looking to
              support those in your community, this map provides valuable
              information about the locations of food pantries, their operating
              hours, and contact details.
            </h2>
          </div>

          <div className="how-to-use">
            <h2>How to Use </h2>

            <p> Explore the map to discover food pantry locations. </p>
            <p>
              {" "}
              Click on markers for detailed information about each pantry.{" "}
            </p>
            <p> Check contact details for the latest information. </p>
            <p> Help spread the word to support those in need. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
