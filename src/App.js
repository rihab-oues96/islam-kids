import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar.js";
import ArkanIslam from "./pages/ArkanIslam.js";
import Tasks from "./pages/Tasks.js";
import Douaa from "./pages/Douaa.js";
import { useContext } from "react";
import { AppContext } from "./context.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { isNavbarOpen } = useContext(AppContext);
  return (
    <div dir="rtl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Signup />} />
        </Routes>

        {isNavbarOpen && <Navbar />}
        <Routes>
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/arkan-islam"
            element={
              <ProtectedRoute>
                <ArkanIslam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/douaa"
            element={
              <ProtectedRoute>
                <Douaa />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
