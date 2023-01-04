import { Routes, Route } from "react-router-dom";
import Master from "../Master/index.jsx";
import Details from "../Details/index.jsx";

function Ejercicio1() {
  return (
    <Routes>
      <Route path="/" element={<Master />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default Ejercicio1;
