import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../Logo.jpg';
import logotext from '../LogoText.jpg';
import { FaUser } from "react-icons/fa";
import './NavBar.css';

function NavBar() {
    const userob =( localStorage.getItem("user"));
    const user = JSON.parse(userob)
    const navigate = useNavigate();

    return (
        <div className='bg-black d-flex justify-content-between'>
            <div>
                <NavLink className='nav-link' to="/explore/region/northindia">
                <img src={logo} style={{height:'5vh',margin:'1vh',marginRight:0}}/>
                <img src={logotext} style={{height:'3vh',margin:'1vh',marginLeft:0}}/>
                </NavLink>
            </div>
            <ul className="nav text-center" style={{fontSize:'1.3rem'}}>
                <li className="nav-item my-auto li">
                    <NavLink className="nav-link" to="/explore/region/northindia">
                        Home
                    </NavLink>
                </li>
                {!user && 
                <li className="nav-item my-auto li">
                    <NavLink className="nav-link" to="register">
                        Register
                    </NavLink>
                </li>}
                {
                    !user &&
                <li className="nav-item my-auto li">
                    <NavLink className="nav-link" to="login">
                        Login
                    </NavLink>
                </li>
                }
                
                {
                    user &&
                    <li className="nav-item my-auto">
                    <NavLink className="nav-link rounded-circle" to="login" onClick={
                        ()=>{
                            localStorage.clear();
                            navigate('/login');
                        }
                        
                    }>
                        logout
                    </NavLink>
                     </li>
                }
                {
                    user &&
                <li className="nav-item my-auto">
                    <NavLink className="nav-link rounded-circle" to={`profile/${user.username}`}>
                        <FaUser />
                    </NavLink>
                </li>
                }
            </ul>
        </div>
    )
}

export default NavBar