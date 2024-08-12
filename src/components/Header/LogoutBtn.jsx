import { logout } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import authService from "../../appWrite/auth";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={() => handleLogout()}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
