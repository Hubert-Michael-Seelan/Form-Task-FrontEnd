// TableComponent.js
import React, { useState } from "react";
import "./CSS/Table.css";
import { Link } from "react-router-dom";

const TableComponent = ({ data }) => {
  const [emp, setEmp] = useState([
    {
      emp_id: "1",
      name: "Hubert",
      dob: "06-09-1999",
      phone: 9488,
      email: "hms@gmail.com",
      department: "maths",
      doj: "01-04-2024",
      experience: 22,
      salary: "23k",
      linkedin: "@linkedin",
    },
  ]);
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
          return <tr>
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
                <Link to="/update">
                  <span className="material-symbols-outlined">edit</span>
                </Link>
                <button>
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
