import { NavLink } from 'react-router-dom';

function Header() {

  return(
    <div className="links">
      <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/DM"}>DM</NavLink>
      <NavLink to={"/PD"}>PD</NavLink>
      <NavLink to={"/VM"}>VM</NavLink>
      </nav>
    </div>
  )
}

export default Header;