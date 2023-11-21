import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";

const CoreApp = React.lazy(() => import("@admin/core"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<CoreApp />} />
        <Route path="/test" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
