import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Feed from "./pages/Feed/Feed";
import Header from "./components/Header/Header";
import "./styles/App.css";
import Library from "./pages/Library/Library";
import Upload from "./pages/Upload/Upload";
import PageMore from "./pages/PageMore/PageMore";
import Metroboomin from "./pages/Metroboomin/Metroboomin";

function App() {
  return (
    <>
        <div>
          <Header />

          <div className="displayPage">
            <Routes>
              <Route path="/" element={<Metroboomin />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/feed" element={<Feed />}></Route>
              <Route path="/library" element={<Library />}></Route>
              <Route path="/upload" element={<Upload />}></Route>
              <Route path="/pages" element={<PageMore />}></Route>
            </Routes>
          </div>
        </div>
    </>
  );
}

export default App;
