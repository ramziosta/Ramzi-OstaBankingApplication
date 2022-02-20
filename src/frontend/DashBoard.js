import { useContext } from "react";
import { UserContext } from "../components/context";
import Card from "../components/context";
import SiteSideBar from "../components/siteSideBar";
import { NavLink, Link } from "react-router-dom";
import LoginLogoutButton from "../components/LoginLogoutButton";
import Header from "../components/Header"
import Table2 from '../components/Table2'
import "./alldata.css";

function DashBoard() {
  const ctx = useContext(UserContext);
  return (

    <>
    {ctx.users[0].user === "" ? (
      <>
      <div style={{background:"grey", height:"50vh"}}>
        <Link to="/login" className="fa fa-user"></Link>
        <div className="text-center fs-4 mt-5" >
          Please <LoginLogoutButton />
          <br />
          or <NavLink to="/createaccount/" style={{textDecoration: "none", color:"white"}}>Create An Account.</NavLink>
        </div>
        </div>
        </>
      
    ) : (
      <>
      <SiteSideBar />
      <div className="content">
        <Card
          body={
            <div>
              <table>
                <Header />
                <Table2 />
              </table>
            </div>
          }
         />
     </div>
      </>
    )}
  </>

  
  );
}

export default DashBoard;
