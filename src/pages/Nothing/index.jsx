import {React} from 'react';
import { NavLink } from "react-router-dom"

const Nothing = () => {
    return(
    <>       
        <div className='t1'>
        <b>Page not found!</b>
        <p>Go to the <NavLink to="/">Homepage</NavLink>.</p>
        </div>
    </>    
    )
}

export default Nothing