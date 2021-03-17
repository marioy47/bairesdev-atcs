import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const Aircrafts = () => {
  const [aircrafts, setAircrafts] = useState([]);

  const getAircrafts = async () => {
    const planes = await axios.get(`http://localhost:8080/api/aircrafts`);
    if (planes.data) {
      setAircrafts(planes.data);
    }
  };

  useEffect(() => {
    getAircrafts();
  }, []);

  return (
    <>
      <h1>Aircrafts</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Size</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {aircrafts.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.aircraft_type}</td>
                <td>{item.aircraft_size}</td>
                <td>{item.created_at}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Aircrafts;
