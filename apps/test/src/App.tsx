import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import CoreApp from "@admin/core";

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
