import "./index.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header, Footer } from "./components/index";
import { login, logout } from "./redux/slices/authSlice";
import authService from "./appWrite/auth";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between items-center bg-[#EEEDEB]">
      <div className="w-full  flex flex-col items-center">
        <Header />
        <main>TODO:{/* <Outlet></Outlet> */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
