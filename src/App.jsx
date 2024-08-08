import "./index.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header, Footer } from "./components/index";
import { login, logout } from "./redux/slices/authSlice";
import authService from "./appWrite/auth";

function App() {
  const [loading, setLoading] = useState(true);
  // const dispatch = useDispatch();
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
