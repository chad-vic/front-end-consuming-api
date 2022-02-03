import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";
import NotFound from "./components/NotFound";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="user/:userId" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
