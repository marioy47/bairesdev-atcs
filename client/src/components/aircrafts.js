import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const URL = `http://localhost:8080/api/aircrafts`;

const Aircrafts = () => {
  const [aircrafts, setAircrafts] = useState([]);
  const [alert, setAlert] = useState('');

  const getAircrafts = async () => {
    const planes = await axios.get(URL);
    if (planes.data) {
      setAircrafts(planes.data);
    }
  };

  const deleteAircraft = async (id) => {
    const res = await axios({
      method: "delete",
      headers: {
        "Content-Type": "Content-Type: application/json",
      },
      url: URL + '/' + id 
    });
    console.log(res);
    if (res.status !== 200) {
       setAlert(<Alert variant="danger">{res.statusText}</Alert>);
      return;
    }
    const newPlanes = aircrafts.filter( item => item.id !== id);
    setAlert(<Alert variant="success">{res.statusText}</Alert>);
    setAircrafts(newPlanes);
  };

  useEffect(() => {
    getAircrafts();
  }, []);

  return (
    <>
      <h1>Aircrafts</h1>
      {alert}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Size</th>
            <th>Creation Date</th>
            <th></th>
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
                <td>
                  <Button onClick={() => deleteAircraft(item.id)} >Del</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Link to="/aircrafts-form" className="btn btn-primary">
        Add new
      </Link>
    </>
  );
};

export default Aircrafts;
