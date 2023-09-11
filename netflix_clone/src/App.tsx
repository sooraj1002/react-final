import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home } from "./pages/Home";
import { AuthContextProvider } from "./Context/AuthContext";
import Login from "./pages/Login";
import { Signup } from "./pages/Signup";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar /> //present in all routes so above all of them
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
