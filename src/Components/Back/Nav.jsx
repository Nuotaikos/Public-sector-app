import { NavLink } from "react-router-dom";
import Messages from "./Messages";

function Nav() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="nav">
              <NavLink to="/admin/" className="nav-link" style={
                ({ isActive }) =>
                  isActive ? {
                    color: 'crimson'
                  } : null
              }>Admin</NavLink>
              <NavLink to="/admin/cats" className="nav-link" style={
                ({ isActive }) =>
                  isActive ? {
                    color: 'crimson'
                  } : null
              }>Municipalities</NavLink>
              <NavLink to="/admin/products" className="nav-link" style={
                ({ isActive }) =>
                  isActive ? {
                    color: 'crimson'
                  } : null
              }>Sectors</NavLink>
              <NavLink to="/admin/comments" className="nav-link" style={
                ({ isActive }) =>
                  isActive ? {
                    color: 'crimson'
                  } : null
              }>Comments</NavLink>
            </nav>
          </div>
        </div>
      </div>
      <Messages></Messages>
    </>
  );
}
export default Nav;
