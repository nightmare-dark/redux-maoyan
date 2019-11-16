import React from "react";
import "./App.css";
import "./assets/style/global.scss";
import MovieList from "./pages/movie/MovieList";
import Tab from "./components/common/tab";
import TabBar from "./components/common/tabbar";
import "./utils/rem";
import Nav from "./pages/movie/Nav";

function App() {
  return (
    <div className="App">
      <Tab />
      <Nav />
      <MovieList />
      <TabBar />
    </div>
  );
}

export default App;
