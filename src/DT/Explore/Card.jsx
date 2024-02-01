import {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Card({data}) {
    let [style,setStyle]=useState("card m-3 border-1 bg-light")
    let navigate=useNavigate();
    function Click(){
        navigate(`/explore/place/${data.name}`)
    }
    function mouseEnter(event){
        setStyle("card m-3 shadow-lg border-1 bg-light")
    }
    function mouseLeave(){
        setStyle("card m-3 border-1 bg-light")
    }
    return (
        <div className={style} onClick={Click} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={{height:'100%'}}>
            <img src={data.image} className='d-block mx-auto p-3 rounded' style={{height:'40vh', maxWidth:'100%'}}/>
            <div className='card-body'>
                <p>{data.name}</p>
                <p>{data.location}</p>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default Card