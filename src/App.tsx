import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Top100ShortUrls from './components/Top100ShortUrls'
import NewShortUrl from './components/NewShortUrl';
import Footer from './components/Footer';

function App() {
  
  return (
    <Router>
      <Navbar />
        <main>
          <Routes>
            <Route path='/top-100' element={<Top100ShortUrls />} />
            <Route path='/' element={ <NewShortUrl/>} />
          </Routes>
        </main>
      <Footer/>
    </Router>
  )
}

export default App;
