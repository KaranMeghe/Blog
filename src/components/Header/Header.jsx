import { LogoutBtn, Container, Button } from "../index";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  // const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/slug", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Posts", slug: "/add-posts", active: authStatus },
  ];

  const listElement = navItems.map((item) =>
    item.active ? (
      <li key={item.name}>
        <Button
          onClick={() => navigate(item.slug)}
          className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
        >
          {item.name}
        </Button>
      </li>
    ) : null
  );

  const logoutButton = authStatus && (
    <li>
      <LogoutBtn />
    </li>
  );

  return (
    <header className="py-3 w-full shadow bg-[#BBBFCA]">
      <Container>
        <nav className="flex items-center">
          <div className="mr-4">
            <a className="text-xxl font-bold">WAYNE BLOGS</a>
          </div>

          <ul className="flex items-center ml-auto">
            {listElement}
            {logoutButton}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
