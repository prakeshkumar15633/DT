import india from './PlacesObject'
import {useLocation} from 'react-router-dom'

function Place(){
    let pathname=useLocation().pathname;
    let path=pathname.slice(15)
    path=path.replaceAll('%20',' ')
    let data={}
    let index=['northindia','eastindia','westindia','southindia','centralindia']
    for(let i of index){
        console.log(path)
        for(let j=0;j<10;j++){
            if(path==india[i][j].name){
                data=india[i][j]
                break
            }
        }
    }
    return (
        <div>
            <h2 className='text-center'>{data.name}</h2>
            <br/>
            <img src={data.image} className='d-block mx-auto w-50 rounded rounded-3'/>
            <h4>{data.location}</h4>
            <p>{data.description}</p>
        </div>
    )
}

export default Place