
import './App.css';
import MovieDetails from './Newproject/MovieDetails';
import Home from './Newproject/Home';
import Navbar from './Newproject/Navbar';
import Moviesp from './Newproject/Moviesp';
import Favourites from './Newproject/Favourites';
import Notfound from './Newproject/Notfound';
import {Routes,Route} from "react-router-dom"


function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movies" element={<Moviesp/>}></Route>
        <Route path="/movie/:id" element={<MovieDetails/>}></Route>
        <Route path="/favourites" element={<Favourites/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
