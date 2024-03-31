
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home'
import FavoritesView from './Views/FavoritesView'
import DetailView from './Views/DetailView'
import './App.css'


function App() {


  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoritesView />} />
        <Route path="/detail/:id" element={<DetailView />} />
        <Route path="/detail/undefined" element={<Home />} />
      </Routes>

    </Router>
  )
}

export default App
