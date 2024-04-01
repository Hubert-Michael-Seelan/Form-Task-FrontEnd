import React, { useState, useEffect } from "react";
import "./CSS/Form.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const FormUpdate = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});
  const {id} = useParams()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    axios.get("http://localhost:4000/getEmp/"+id)
    .then(result => setFormData(result.data.name))
    .catch(error=>console.log(error))
  }, [])

  return (
    <div>
      <h3 className="d-flex justify-content-center mt-3">Update Data</h3>
      <form  className="form mt-2 container">
        <label>Full Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <label>Date of Birth: </label>
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          onChange={handleChange}
          required
        />
        <label>Phone Number: </label>
        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <label>Email Id: </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <label>Department: </label>
        <input
          type="text"
          name="department"
          placeholder="Department"
          onChange={handleChange}
          required
        />
        <label>Date of Joining: </label>
        <input
          type="date"
          name="doj"
          placeholder="Date of Birth"
          onChange={handleChange}
          required
        />
        <label>Reporting Person: </label>
        <select className="form-select" aria-label="Default select example" name="rep">  
          <option selected>Reporting Person</option>
          <option value="1">Alex</option>
          <option value="2">Albert</option>
          <option value="3">Anish</option>
        </select>
        <label>Experience (in months): </label>
        <input
          type="text"
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
          required
        />
        <label>Salary: </label>
        <input
          type="text"
          name="salary"
          placeholder="Salary"
          onChange={handleChange}
          required
        />
        <label>Linked: </label>
        <input
          type="link"
          name="linkedin"
          placeholder="LinkedIn Url"
          onChange={handleChange}
          required
        />
        <label>Upload any Government Proof: </label>
        <input
          type="file"
          accept="image/*"
          name="idproof"
          placeholder="Id Proof"
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default FormUpdate;
