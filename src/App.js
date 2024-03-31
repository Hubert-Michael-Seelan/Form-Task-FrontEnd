// App.js
import React from "react";
import FormComponent from "./Components/FormComponent";
import TableComponent from "./Components/TableComponent";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormUpdate from "./Components/FormUpdate";

const App = () => {
  // const [tableData, setTableData] = useState([]);

  // const handleSubmit = (formData) => {
  //   setTableData([...tableData, formData]);
  // };

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path="/update" element={<FormUpdate />} />
          <Route path="/table" element={<TableComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
