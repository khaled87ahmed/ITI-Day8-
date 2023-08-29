import React from 'react'
import {  createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import Home from '../Components/Home/Home'
import Details from '../Components/Details/Details'
import Favorites from '../Components/Favorites/Favorites'


export let routes = createHashRouter([
    {path:'',element:<Layout /> ,children:[
        {index:true , element: <Home />},
        {path:'details' , element:<Details />},
        {path:'favorites' , element:<Favorites />},
    ]}
])


