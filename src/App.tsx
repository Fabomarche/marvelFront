
import { SetStateAction, useState, Dispatch } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FavoritesContext from './infrastructure/context/FavoritesContext';
import Home from './Views/Home'
import FavoritesView from './Views/FavoritesView'
import DetailView from './Views/DetailView'
import { FavoriteType } from './infrastructure/Card';
import './App.css'


function App() {
  const [favorites, setFavorites]: [FavoriteType[], Dispatch<SetStateAction<FavoriteType[]>>] = useState<FavoriteType[]>([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>

      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesView />} />
          <Route path="/detail/:id" element={<DetailView />} />
          <Route path="/detail/undefined" element={<Home />} />
          {/* add 404 page */}
        </Routes>

      </Router>

    </ FavoritesContext.Provider>
  )
}

export default App
