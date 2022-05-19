import { Link } from "react-router-dom";

export default function App() {
  return (
      <div>
        <h1>Workee APP</h1>
        <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
        >
          <Link to="/">Home</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/register">register</Link> |{" "}
        </nav>
      </div>
  );
}