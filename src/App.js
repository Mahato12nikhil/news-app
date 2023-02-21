import "./App.css";

import React, { useState } from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App = ()=> {

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={progress} 
            
          />
          <Routes>
            <Route
              exact
              path="/home"
              element={
                <News setProgress={setProgress}
                  key="general"
                  country={"in"}
                  pageSize={5}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={setProgress}
                  key="entertainment"
                  country={"in"}
                  pageSize={5}
                  category={"entertainment"}
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News setProgress={setProgress}
                  key="general"
                  country={"in"}
                  pageSize={5}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={setProgress}
                  key="health"
                  country={"in"}
                  pageSize={5}
                  category={"health"}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={setProgress}
                  key="science"
                  country={"in"}
                  pageSize={5}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={setProgress}
                  key="sports"
                  country={"in"}
                  pageSize={5}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={setProgress}
                  key="technology"
                  country={"in"}
                  pageSize={5}
                  category={"technology"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={setProgress}
                  key="business"
                  country={"in"}
                  pageSize={5}
                  category={"business"}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );

}
export default App