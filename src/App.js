import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./layout/Footer.js";
import Header from "./layout/Header.js";
import Navbar from "./layout/Navbar.js";
import ArkanIslam from "./pages/ArkanIslam.js";
import Tasks from "./pages/Tasks.js";
import Douaa from "./pages/Douaa.js";
import { useContext } from "react";
import { AppContext } from "./context.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";

function App() {
  const { isNavbarOpen } = useContext(AppContext);
  return (
    <div dir="rtl">
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Signup />} />
        </Routes> */}

        <Header />
        {isNavbarOpen && <Navbar />}
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="arkan-islam" element={<ArkanIslam />} />
          <Route path="douaa" element={<Douaa />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
