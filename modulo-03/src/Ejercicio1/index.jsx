import { useState,useEffect } from "react";

function ListadoUsers() {
  const [listado, setListado] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setListado(data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Adress</th>
          <th>City</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {listado.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.street} {item.address.suite}</td>
            <td>{item.address.city}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
            <td>{item.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ListadoUsers;
