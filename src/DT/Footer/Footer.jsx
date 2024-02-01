import React from 'react'
import Twitter from '../twitter-logo.png'
import Insta from '../insta-logo.png'
import Facebook from '../facebook-logo.png'

function Footer() {
    return (
        <div>
            <div className="text-light p-3 my-auto bg-black" style={{width:'100vw'}}>
                <div className="row p-2 text-center">
                    <h3>TouristTalks</h3>
                    <br/>
                    <div>
                        <img src={Twitter} style={{width:30}}/>
                        <img src={Insta} style={{width:30}}/>
                        <img src={Facebook} style={{width:30}}/>
                    </div>
                </div>
                <div className='row w-75 mx-auto row-cols-sm-1 row-cols-md-2 row-cols-lg-3 text-center'>
                {/* <div className="col p-2">
                    Quality<br/>
                    Help<br/>
                    Share<br/>
                    Carrers<br/>
                    Work<br/>
                    Testimonials
                </div>
                <div className="col p-2">
                    233-44444-333<br/>
                    sahilmadan0805@gmail.com<br/>
                    rakeshp22052005@gmail.com<br/>
                </div>
                <div className="col p-2">
                    Terms & Conditions<br/>
                    Privacy Policy
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default Footer