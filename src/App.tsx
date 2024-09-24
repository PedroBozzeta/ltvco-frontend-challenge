import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Top100ShortUrls from './components/Top100ShortUrls'
import NewShortUrl from './components/NewShortUrl';
import Footer from './components/Footer';

function App() {
  
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <main>
          <Routes>
            <Route path='/' element={<Top100ShortUrls />} />
            <Route path='/new-short-url' element={ <NewShortUrl/>} />
          </Routes>
        </main>
      </div>
      <Footer/>
    </Router>
  )
}

export default App;
