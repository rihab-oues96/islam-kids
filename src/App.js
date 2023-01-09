import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./layout/Footer.js";
import Header from "./layout/Header.js";
import ArkanIslam from "./pages/ArkanIslam.js";
import Tasks from "./pages/Tasks.js";
import Douaa from "./pages/Douaa.js";

function App() {
  return (
    <div dir="rtl">
      <BrowserRouter>
        <Header />
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
