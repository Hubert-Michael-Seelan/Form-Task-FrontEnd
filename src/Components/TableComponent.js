// TableComponent.js
import React, { useEffect, useState } from "react";
import "./CSS/Table.css";
import { Link } from "react-router-dom";
import axios from "axios";

const TableComponent = () => {
  const [emp, setEmp] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/allEmp")
    .then(result => setEmp(result.data))
    .catch(error=>console.log(error))
  }, [])
  
  return (
    <table className="container">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Name</th>
          <th>DOB</th>
          <th>Phone Number</th>
          <th>Email Id</th>
          <th>Department</th>
          <th>Date of Joining</th>
          <th>Experience</th>
          <th>LinkedIn</th>
          {/* <th>Id Proof</th> */}
          {/* <th>Date and Time Stamp</th> */}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {emp.map((data) => {
          return <tr key={data.emp_id}>
              <td>{data.emp_id}</td>
              <td>{data.name}</td>
              <td>{data.dob}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
              <td>{data.department}</td>
              <td>{data.doj}</td>
              <td>{data.experience}</td>
              <td>{data.linkedin}</td>
              <td>
                <Link to={`/update/${data._id}`} className="btn btn-success">
                  <span className="material-symbols-outlined">edit</span>
                </Link>
                <button className="btn btn-danger">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </td>
            </tr>
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
