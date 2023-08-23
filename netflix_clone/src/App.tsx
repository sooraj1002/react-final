import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Navbar /> //present in all routes so above all of them
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
