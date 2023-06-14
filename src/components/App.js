import { Routes, Route } from "react-router-dom";

import { Layout } from "./Layout/Layout";

import Tweets from "../pages/Tweets/Tweets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/tweets" element={<Tweets />} />
      </Route>
    </Routes>
  );
}

export default App;
