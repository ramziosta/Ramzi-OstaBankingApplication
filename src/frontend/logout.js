import { Link } from "react-router-dom";

function Logout() {
  return (
    <>
      <div style={{ height: "500px", background:"grey" }}>
        <Link to="/login" class="fa fa-user"></Link>
        <h1 className="text-white" style={{ textAlign: "center", marginTop: "5rem"}}>
          Account Logout
        </h1>
      </div>
    </>
  );
}

export default Logout;
