import { createBrowserRouter,RouterProvider } from "react-router-dom"
import RootLayout from "../RootLayout/RootLayout"
import ErrorRoute from "../ErrorRoute/ErrorRoute"
import Home from "../Home/Home"
import Register from "../Register/Register"
import Login from "../Login/Login"
import Profile from "../Profile/Profile"
import Explore from "../Explore/Explore"
import Hotel from "../Hotel/Hotel"
import Hospital from "../Hospital/Hospital"
import Place from "../Explore/Place"
import Region from "../Explore/Region"
import HotelCard from "../Hotel/HotelCard"

function Demo() {
    let router=createBrowserRouter([
        {
            path:'',
            element:<RootLayout/>,
            errorElement:<ErrorRoute/>,
            children:[
                {
                    path:'',
                    element:<Home/>,
                    children:[
                        {
                            path:'explore',
                            element:<Explore/>,
                            children:[
                                {
                                    path:'region/:region',
                                    element:<Region/>,
                                },
                                {
                                    path:'place/:place',
                                    element:<Place/>
                                }
                            ]
                        },
                        {
                            path:'hotel',
                            element:<Hotel/>,
                            children:[
                                {
                                    path:':region/:place',
                                    element:<HotelCard/>
                                }
                            ]
                        },
                        {
                            path:'hospital',
                            element:<Hospital/>
                        }
                    ]
                },
                {
                    path:'register',
                    element:<Register/>
                },
                {
                    path:'login',
                    element:<Login/>
                },
                {
                    path:'profile/:username',
                    element:<Profile/>
                }
            ]
        }
    ]);
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default Demo