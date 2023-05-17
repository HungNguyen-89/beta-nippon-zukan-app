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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/tu-vung" element={<FlashCard />} />
        <Route path="/game" element={<WordGuessGame />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
