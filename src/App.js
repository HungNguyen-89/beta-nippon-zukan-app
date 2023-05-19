import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
//import TestHomePage from "./components/Test/TestHomePage";
import Test from "./components/Test/Test";
import FlashCard from "./components/FlashCard/FlashCard";
import WordGuessGame from "./components/WordGuessGame/WordGuessGame";
import Navigation from "./components/Navigation/Navigation";
import Navbar from "./components/Navbar/Navbar";
import NavbarTest from "./components/Navbar/NavbarTest";
import PopUp from "./components/PopUp/PopUp";

function App() {
  return (
    <div className="App">
      <PopUp />
    </div>
  );
}

export default App;
