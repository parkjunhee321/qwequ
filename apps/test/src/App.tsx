import React, { ReactNode, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import MainPage from "./pages/main";

const CoreApp = React.lazy(() => import("@admin/core"));

function DefaultFallback({ children }: { children: ReactNode }) {
  return <Suspense fallback={<div>asd</div>}>{children}</Suspense>;
}

//v6에서는 exact -> *
function App() {
  return (
    <>
      <Routes>
        <Route path="/*">
          <DefaultFallback>
            <CoreApp />
          </DefaultFallback>
        </Route>
        <Route path="/test">
          <DefaultFallback>
            <LoginPage />
          </DefaultFallback>
        </Route>
        <Route path="/">
          <DefaultFallback>
            <MainPage />
          </DefaultFallback>
        </Route>
      </Routes>
    </>
  );
}

export default App;
