import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function Users() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => {
        response.json().then((result) => {
          console.warn("result", result);
          setData(result);
          localStorage.setItem('users' , JSON.stringify(result))
        });
      })
      .catch((err) => {
        let collection = localStorage.getItem('users')
        setData(JSON.parse(collection))
        setMode("offline");
      });
  }, []);

  console.warn("data", data);

  return (
    <div>
      <div>
        {mode === "offline" ? (
          <div className="alert alert-warning" role="alert">
            You are in offline mode or your internet connection is slow.
          </div>
        ) : null}
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
