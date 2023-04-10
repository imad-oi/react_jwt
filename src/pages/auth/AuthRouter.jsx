import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

function AuthRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1> 404 not found </h1>} />
    </Routes>
  );
}

export default AuthRouter;