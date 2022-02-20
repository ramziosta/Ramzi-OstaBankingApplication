import LoginLogoutButton from "./LoginLogoutButton";
import { NavLink } from "react-router-dom";
import "./siteSideBar.css";
export default function SiteSideBar() {

  return (
    <>
    <div className="sidebar bg-dark">
      <NavLink to="/dashboard" 
      style={{color:"white"}}
      >Dashboard</NavLink>
      <NavLink to="/deposit" 
      style={{color:"white"}}
      >Deposit</NavLink>
      <NavLink to="/withdraw" 
      style={{color:"white"}}
      >Withdraw</NavLink>
      <NavLink to="/alldata" 
      style={{color:"white"}}
      >Users</NavLink>
      <LoginLogoutButton 
       />
    </div>
    </>
  );
}

