import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Feed from "./pages/Feed/Feed";
import Header from "./components/Header/Header";
import "./styles/App.css";
import Library from "./pages/Library/Library";
import Upload from "./pages/Upload/Upload";
import PageMore from "./pages/PageMore/PageMore";
import Metroboomin from "./pages/Metroboomin/Metroboomin";
import Login from "./pages/signIn/Login";
import SingUp from "./pages/SignUp/SingUp";
import SingIn from "./container/Login/SingIn";
import Portas from "./components/PortalsModal/Portas";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <>
        <div>
          <Header />

          <div className="displayPage">
            <Routes>
              <Route path="/" element={<Metroboomin />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/feed" element={
                <ProtectedRoute>
                  <Feed />
                </ProtectedRoute>
              }></Route>
              <Route path="/library" element={
                <ProtectedRoute>
                  <Library />
                </ProtectedRoute>
              }></Route>
              <Route path="/upload" element={<Upload />}></Route>
              <Route path="/pages" element={<PageMore />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SingUp />}></Route>
            </Routes>
          </div>
        </div>
    </>
  );
}

export default App;
