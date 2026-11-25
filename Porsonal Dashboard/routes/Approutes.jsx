import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Beforeloging from '../layouts/Beforeloging';
import Athenticateduser from '../layouts/Athenticateduser';
import Mainpage from '../pages/Mainpage'
import Bigveiwtodo from '../pages/Bigveiwtodo'
import FeaturesAbout from '../pages/FeaturesAbout'
import Books from '../pages/Books'
import Cardforbooks from '../pages/Cardforbooks'
import Register from '../layouts/Register';


const Approutes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element:<Beforeloging/>
            
        },


        {
            path:'/resisterpage',
            element:<Register/>
        },

        {
            path: '/home',
            element:<Athenticateduser/>,
            children:[
                {
                    index: true,
                    path:"",
                    element: <Mainpage />
                    
                },
                {
                    path: 'bigW',
                    element: <Bigveiwtodo />
                },
                {
                    path: 'bookstore',
                    element: <Books />
                },
                {
                    path: 'detail/:id',
                    element: <Cardforbooks />
                },
                {
                    path: 'about',
                    element: <FeaturesAbout />
                },
            ]
        }
    ])
  return <RouterProvider router={router} />
}

export default Approutes