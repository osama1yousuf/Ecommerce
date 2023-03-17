import Dashboard from "./Pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import Cartpage from "./Pages/Cartpage";
import { totalProducts } from "./Pages/Slice/productSlice";
import Data from "./product.json";
function App() {
  const dispatch = useDispatch();
  dispatch(totalProducts(Data));
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/cart" element={<Cartpage />} />
    </Routes>
  );
}

export default App;
