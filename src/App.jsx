import Sidebar from './components/sidebar/Sidebar';
import MainContent from './containers/MainContent';
import './sass/app.scss'

function App() {

  return (
   <div className="portfolio">
    <Sidebar />
    <MainContent />
    </div>
  );
}

export default App
