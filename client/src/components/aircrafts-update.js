import { useState, useEffect } from "react";
import AircraftsForm from "./aircrafts-form";
import axios from "axios";

const AircraftsUpdate = ({ match: { params } }) => {
  const [aircraft, setAircraft] = useState({});
  const url = `http://localhost:8080/api/aircrafts/${params?.id}`;

  const getAircraft = async () => {
    const temp = await axios.get(url);
    if (temp.data) {
      setAircraft(temp.data);
    }
  };

  useEffect(() => {
    getAircraft();
  }, []);

  if (aircraft) {
    return <AircraftsForm url={url} aircraft={aircraft} />;
  } else {
    return <></>;
  }
};

export default AircraftsUpdate;
