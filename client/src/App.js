import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Public from "./access/Public";
import Admin from "./access/Admin";
import User from "./access/User";
import ProtectedRoute from "./access/ProtectedRoute";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/user/Register";


import Pendaftar from "./pages/user/Pendaftar";
import Dashboard from "./pages/admin/Dashboard";
import AfterRegister from "./pages/user/AfterRegister";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Public />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="after-register" element={<AfterRegister />} />
        </Route>

        {/* USER */}
        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRole="pendaftar">
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
            <ProtectedRoute allowedRole="admin">
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
