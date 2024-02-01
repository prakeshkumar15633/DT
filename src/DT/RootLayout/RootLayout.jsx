import {Outlet,useNavigate,useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import logo from '../Logo.jpg'
import logotext from '../LogoText.jpg'
import './RootLayout.css'

function RootLayout(){
    let pathname=useLocation().pathname;
    let navigate=useNavigate()
    let [f1,setF1]=useState("second1")
    let [f2,setF2]=useState("first2")
    let [i1,setI1]=useState("i11")
    let [i2,setI2]=useState("i21")
    let [btn,setBtn]=useState({});
    let [bg,setBg]=useState('');
    useEffect(()=>{
        if(pathname!='/'){
            clicked()
        }
    })
    function clicked(){
        if(pathname=='/'){
            setTimeout(()=>{
                navigate('explore');
            },1000)
        }
        setF2('second2')
        setI1('i12')
        setI2('i22')
        setBtn({opacity:0})
        setTimeout(()=>setBg('test2'),1000)
        setTimeout(()=>setF1('first1'),1000)
    }
    return(
        <div className="position" style={{minheight:'100vh'}}>
            <div className={`one ${f1}`}>
                <NavBar/>
                <div className="mt-5">
                <Outlet/>
                </div>
                <Footer/>
            </div>
            <div className={`${bg} test`} style={{width:'100vw',height:'100vh'}}>
            <div className={`two ${f2}`}>
                <img className={`image1 ${i1}`} src={logo}/>
                <img className={`image2 ${i2}`} src={logotext}/>
                <button className="d-block mx-auto btn btn-primary" onClick={clicked} style={btn}>Enter</button>
            </div>
            </div>
        </div>
    )
}

export default RootLayout