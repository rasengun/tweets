import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home"));
const Tweets = lazy(() => import("../pages/Tweets/Tweets"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/tweets" element={<Tweets />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
