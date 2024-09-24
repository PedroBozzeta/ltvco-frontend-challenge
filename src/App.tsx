
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Top100ShortUrls from './components/Top100ShortUrls';


function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Top100ShortUrls />} />
      </Routes>
      
    </Router>
  )
}

export default App