import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Payment from "./pages/Payment.jsx";

function App() {
  const isLoggedIn = localStorage.getItem("user"); // simple auth check

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />}
        />

        {/* Dashboard Route (Protected) */}
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
        />

        {/* Payments Route */}
        <Route path="/payments" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;