import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { App } from "./App";

ReactDOM.render(
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search/:city" element={<App />} />
        <Route path="*" element={<App />} />
      </Routes>
    </div>
  </Router>,
  document.getElementById("root")
);
