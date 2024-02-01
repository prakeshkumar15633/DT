import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

function HotelCard({data}) {
    let [style,setStyle]=useState("card m-3 border-1 bg-light")
    function mouseEnter(event){
        setStyle("card m-3 shadow-lg border-1 bg-light")
    }
    function mouseLeave(){
        setStyle("card m-3 border-1 bg-light")
    }
    return (
        <div className={style} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={{height:'100%'}}>
            {/* <img src={data.image} className='d-block mx-auto p-3 rounded' style={{height:'40vh', maxWidth:'100%'}}/> */}
            <div className='card-body'>
                <h3>{data.name}</h3>
                <p>{data.address}</p>
                <div className='d-flex'>
                  <p>Rating : </p>
                  {(Array.from({ length: Math.floor(data.rating) }, (_, index) => index)).map((index) => (
                    <IoMdStar />
                  ))}
                  {(data.rating/0.5%2!=0)&&<IoMdStarHalf />}
                </div>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default HotelCard