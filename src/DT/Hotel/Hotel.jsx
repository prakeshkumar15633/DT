import hotels from "./hotelsobject";
import HotelCard from "./HotelCard";

function Hotel() {
    return (
        <div className='d-block mx-auto'>
            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-5' style={{minWidth:'300px'}}>
            {
                hotels.map((place)=>(
                    
                    <div key={place.name}>
                        <HotelCard data={place}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Hotel