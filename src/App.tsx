import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/index.scss";
import MainNav from "./components/MainNav";
import HomePage from "./pages/Home";
import { useAppDispatch } from "./store/typedStoreHooks";
import { getShows } from "./store/shows/showsSlice";
import TopRated from "./pages/TopRated";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getShows());
  }, [dispatch]);

  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/toprated" element={<TopRated/>}/>
      </Routes>
    </div>
  );
}

export default App;
