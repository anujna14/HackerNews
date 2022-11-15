import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ShowStories from "./Components/Stories/ShowStories";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home>
              <ShowStories />
            </Home>
          }
        />
        <Route path="/:type" element={<ShowStories />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
