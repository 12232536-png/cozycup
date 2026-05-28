import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Order from "./pages/Order";
import Menu from "./pages/Menu";






function App() {
  return (
    <>
      <Navbar/>
   
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
   
    </>
  );
}
export default App;