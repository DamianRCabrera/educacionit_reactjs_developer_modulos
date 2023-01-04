import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';


function Details(){
  const {id} = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

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

export default Details;