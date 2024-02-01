import {Link,useLocation,useNavigate,Outlet} from 'react-router-dom'
import {useState,useEffect} from 'react';
import './Explore.css'

function Explore() {
    let navigate=useNavigate();
    let [def,setDef]=useState(true);
    let pathname = useLocation().pathname;
    function isActive(path){
        return pathname.includes(path);
    }
    useEffect(()=>{
        if(pathname=='/explore'){
            navigate('region/northindia')
        }
        if(pathname.includes('place')){
            setDef(false)
        }
        if(pathname.includes('india')){
            setDef(true)
        }
    })
    return (
        <div className='m-4 rounded p-4 explore'>
            {
            def&&<div>
                <h2 className='m-3'>Select a destination by region</h2>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="region/northindia" style={isActive('northindia')?{borderBottom:'3px solid blue'}:null}>
                            <h5>North India</h5>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="region/eastindia" style={isActive('eastindia')?{borderBottom:'3px solid blue'}:null}>
                            <h5>East India</h5>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="region/westindia" style={isActive('westindia')?{borderBottom:'3px solid blue'}:null}>
                            <h5>West India</h5>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="region/southindia" style={isActive('southindia')?{borderBottom:'3px solid blue'}:null}>
                            <h5>South India</h5>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="region/centralindia" style={isActive('centralindia')?{borderBottom:'3px solid blue'}:null}>
                            <h5>Central India</h5>
                        </Link>
                    </li>
                </ul>
            </div>
            }
            <Outlet/>
        </div>
    )
}

export default Explore