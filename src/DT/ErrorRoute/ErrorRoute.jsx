import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'

function ErrorRoute() {
  return (
    <div>
      <NavBar/>
      <div className='m-5 text-center d-flex' style={{minHeight:'50vh'}}>
        <div className='my-auto mx-auto'>
          <h1>We could not find the page you were looking for</h1>
          {/* <div className='mx-auto my-3' style={{width:'40vw',height:'35vh'}}>
            <iframe src="https://chromedino.com/" className='' frameborder="0" width="100%" height="100%" loading="lazy" style={{clipPath:'polygon(0% 30%,100% 30%,100% 100%,0% 100%)'}}></iframe>
          </div> */}
          <Link to='/explore'>
            <button className='btn btn-primary m-5 mt-3'>Go to Home Page</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorRoute