import Sidebar from './components/sidebar/Sidebar';
import MainContent from './components/containers/MainContent.jsx';

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
