import { useState } from "react";
import "./styles.css";

export default function App() {
  const locationPoints = [];
  const [location, setLocation] = useState(null);

  function update() {
    navigator.geolocation.getCurrentPosition((position) => {
      if (location === null) {
        setLocation(position);
        let pointOfLocation = {
          timestamp: position.timestamp,
          location: position
        };
        locationPoints.push(pointOfLocation);
      } else {
        if (location !== position) {
          setLocation(position);
          let pointOfLocation = {
            timestamp: position.timestamp,
            location: position
          };
          locationPoints.push(pointOfLocation);
        }
      }
    });
    setTimeout(update, 5000);
  }
  update();

  return (
    <>
      <section>
        <h1>Aktuelle Position:</h1>
       <div>Longitude: {}</div>
        <div>Latitude: {}</div>
      </section>
      <section>
        <h1>Gespeichter Positionen:</h1>
        <table>
          <tr>
            <th>Timestamp</th>
            <th>Longitude</th>
            <th>Latitude</th>
          </tr>
          {this.locationPoints.map((position, i) => {
            <tr>
            <td>{position.timestamp}</td>
            <td>position.coords.longitude</td>
            <td>position.coords.latitude</td>
          </tr>
          })}
        </table>
      </section>
    </>
  );
}
