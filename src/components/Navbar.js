import React from "react"
import {Outlet, NavLink, useLocation} from 'react-router-dom';

const Navbar = () => {
    const {pathname} = useLocation()
  
      return (
          <div>
            <header>
                <nav>
                        <NavLink to="/" className={pathname === "/" && "text-red" }>Home</NavLink>
                        
                        <NavLink to="/detail" className={pathname === "/detail" && "text-red" }>Detail</NavLink>
                </nav>
            </header>
          <main>
            <Outlet />
          </main>

         { pathname === "/" && <footer>
            <h1>Footer</h1>
          </footer> }
        </div>
      )
  }
  
  export default Navbar;