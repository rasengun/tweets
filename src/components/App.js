import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./Layout/Layout";
import Loader from "./Loader/Loader";

const Home = lazy(() => import("../pages/Home/Home"));
const Tweets = lazy(() => import("../pages/Tweets/Tweets"));

function App() {
  return (
    <HashRouter basename="/tweets">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/tweets" element={<Tweets />} />
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
