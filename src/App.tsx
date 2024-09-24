
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Top100ShortUrls from './components/Top100ShortUrls'
import NewShortUrl from './components/NewShortUrl';


function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Top100ShortUrls />} />
        <Route path='/new-short-url' element={ <NewShortUrl/>} />
      </Routes>
      
    </Router>
  )
}

export default App