import React from 'react'
import {  createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import TitlePage from '../Components/TitlePage/TitlePage'
import AboutMePage from '../Components/AboutMePage/AboutMePage'
import SkillsPage from '../Components/SkillsPage/SkillsPage'
import PortfolioPage from '../Components/PortfolioPage/PortfolioPage'


export let routes = createHashRouter([
    {path:'',element:<Layout /> ,children:[
        {index:true , element: <TitlePage />},
        {path:'aboutme' , element:<AboutMePage />},
        {path:'skills' , element:<SkillsPage />},
        {path:'portfolio', element:<PortfolioPage />}
    ]}
])


