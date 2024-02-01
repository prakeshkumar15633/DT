import hospitals from "./Hospitalsobject";
import HospitalCard from "./HospitalCard";

function Hospital() {
    return (
        <div className='d-block mx-auto'>
            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-5' style={{minWidth:'300px'}}>
            {
                hospitals.map((place)=>(
                    
                    <div key={place.name}>
                        <HospitalCard data={place}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Hospital