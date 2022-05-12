import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import RegisterPage from "../../pages/Register";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default RoutesComponent;
