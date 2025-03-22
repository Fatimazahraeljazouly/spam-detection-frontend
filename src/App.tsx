import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SpamEmail from './pages/SpamEmail';
import NoSpamEmail from './pages/NoSpamEmails'; 
import AllEmails from './pages/AllEmails';
import Header from './pages/Header';
import DetailsEmails from './pages/DetailsEmails';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Header/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<AllEmails />} />
            <Route path="/spam" element={<SpamEmail />} />
            <Route path="/no-spam" element={<NoSpamEmail />} />
            <Route path="/all" element={<AllEmails />} />
            <Route path="/details/" element={<DetailsEmails/>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
