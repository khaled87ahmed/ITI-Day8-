import { RouterProvider } from 'react-router-dom';
import './App.css';
import AboutMePage from './Components/AboutMePage/AboutMePage';
import ContactPage from './Components/ContactPage/ContactPage';
import PortfolioPage from './Components/PortfolioPage/PortfolioPage';
import SkillsPage from './Components/SkillsPage/SkillsPage';
import TitlePage from './Components/TitlePage/TitlePage';
import {routes} from '../src/Routes/Routes'


function App() {
  return <RouterProvider router={routes} />
}

export default App;
