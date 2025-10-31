import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import Navbar from "./component/Navbar";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main_content">
        <Routes>
          <Route path="/MovieSearchApp" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
