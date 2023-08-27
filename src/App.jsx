import './App.css';
import AboutMePage from './Components/AboutMePage/AboutMePage';
import ContactPage from './Components/ContactPage/ContactPage';
import PortfolioPage from './Components/PortfolioPage/PortfolioPage';
import SkillsPage from './Components/SkillsPage/SkillsPage';
import TitlePage from './Components/TitlePage/TitlePage';

function App() {
  return (
    <div className="App">

      <TitlePage />
      <AboutMePage />
      <SkillsPage />
      <PortfolioPage />
      <ContactPage />

    </div>
  );
}

export default App;
