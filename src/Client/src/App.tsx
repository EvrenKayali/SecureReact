import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { Items } from "./pages/items";

const App: React.FC = () => (
  <React.Fragment>
    <Header />
    <div className="content">
      <Items />
    </div>
  </React.Fragment>
);

export default App;
