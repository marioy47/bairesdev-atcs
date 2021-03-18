import { Form, FormControl, Alert } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AircraftsForm = ({ url, aircraft = { size: 100, type: 3, id: '' } }) => {
  console.log(aircraft);
  const [size, setSize] = useState(aircraft.size);
  const [type, setType] = useState(aircraft.type);
  const history = useHistory();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const res = await axios({
      method: "post",
      headers: {
        "Content-Type": "Content-Type: application/json",
      },
      url: url,
      data: {
        aircraft_size: size,
        aircraft_type: type,
      },
    });

    if (res.status === 201) {
      history.push("/aircrafts");
    } else {
      return <Alert variant="warning">{res.statusText}</Alert>;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type="hidden" value={aircraft.id} />
      <Form.Group>
        <Form.Label>Size</Form.Label>
        <Form.Control
          type="number"
          placeholder="0"
          value={size}
          onChange={(ev) => setSize(ev.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control
          as="select"
          value={type}
          onChange={(ev) => setType(ev.target.value)}
        >
          <option value="1">Type 1</option>
          <option value="2">Type 2</option>
          <option value="3">Type 3</option>
          <option value="4">Type 4</option>
        </Form.Control>
      </Form.Group>
      <FormControl as="button">Send</FormControl>
    </Form>
  );
};

export default AircraftsForm;
