import {Link,Outlet,useLocation,useNavigate} from "react-router-dom"
import {useState} from "react";
import './Home.css'

function Home() {
    let navigate=useNavigate();
    let [def,setDef]=useState(false);
    let pathname = useLocation().pathname;
    function isActive(path){
        return pathname.includes(path);
    }
    return (
        <div>
            <ul className="nav justify-content-center mt-3 ">
                <li className="nav-item">
                    <Link className="nav-link rounded" to="/explore" key={def} style={isActive("/explore")?{backgroundColor:'blue',color:'white'}:{color:'black'}}>
                        <h3>Explore</h3>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link rounded" to="/hotel" style={isActive("/hotel")?{backgroundColor:'blue',color:'white'}:{color:'black'}}>
                        <h3>Hotel</h3>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link rounded" to="/hospital" style={isActive("/hospital")?{backgroundColor:'blue',color:'white'}:{color:'black'}}>
                        <h3>Hospital</h3>
                    </Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Home