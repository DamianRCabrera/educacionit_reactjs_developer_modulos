import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const notAvalaibleStyle = {
    color: "grey",
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  if (id === "4") {
    return (
      <div>
        <h1>
          We are sorry, the master you are looking for is not longer available
        </h1>
        <div style={{ backgroundColor: "lightgrey" }}>
          <h2 style={notAvalaibleStyle}>{data.name}</h2>
          <p style={notAvalaibleStyle}>{data.email}</p>
          <p style={notAvalaibleStyle}>{data.phone}</p>
        </div>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Detail</h1>
        <h2>{data.name}</h2>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    );
  }
}

export default Details;
