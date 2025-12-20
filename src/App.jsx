import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdLanding from './pages/AdLanding';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router basename="/stockideasbyshivam">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<AdLanding />} />
      </Routes>
    </Router>
  )
}





export default App
