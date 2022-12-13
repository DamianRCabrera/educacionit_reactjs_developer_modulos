import { useEffect, useState } from "react";
import Company from "../Company/index"
import Address from "../Address/index"
import "./style.css";

function User(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`)
      .then((r) => r.json())
      .then((u) => setUser(u));
  });

  return(
    <div className="user">

      <h2 className="user__name">{user.name}</h2>

      <div className="user__data">
        <span><b>Username:</b> {user.username} | <b>E-mail:</b> {user.email}</span>
      </div>

      <div className="user__contact">
        <span><b>Telephone:</b> {user.phone} | <b>Website:</b> {user.website}</span>
      </div>

      <div className="user__company">
        <Company user={user}></Company>
      </div>

      <div className="user__address">
        <Address user={user}></Address>
      </div>

    </div>
  )
}

export default User;
