import india from './PlacesObject'
import {useLocation,Outlet} from 'react-router-dom'
import Card from './Card'

function Place(){
    let path=useLocation().pathname;
    let key=path.slice(16)
    let data=india[key]
    return (
        <div className='d-block mx-auto'>
            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-5' style={{minWidth:'300px'}}>
            {
                data.map((place)=>(
                    <div key={place.name}>
                        <Card data={place}/>
                    </div>
                ))
            }
            </div>
            <Outlet/>
        </div>
    )
}

export default Place