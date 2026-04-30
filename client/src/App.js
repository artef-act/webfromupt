import { BrowserRouter, Routes, Route } from "react-router-dom";

import Public from "./access/Public";
import Admin from "./access/Admin";
import User from "./access/User";
import ProtectedRoute from "./access/ProtectedRoute";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";


import Pendaftar from "./pages/user/Pendaftar";

import Dashboard from "./pages/admin/Dashboard";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Public />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* USER */}
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        >
          <Route path="pendaftar" element={<Pendaftar />} />
        </Route>

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
