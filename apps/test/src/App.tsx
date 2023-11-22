import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import MainPage from "./pages/main";

const CoreApp = React.lazy(() => import("@admin/core"));

//v6에서는 exact -> *
function App() {
  return (
    <Routes>
      <Route path="/*" element={<CoreApp />} />

      <Route path="/test" element={<LoginPage />} />

      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
