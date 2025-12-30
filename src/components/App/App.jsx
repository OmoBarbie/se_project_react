import { useState, useEffect } from "react";

import "./App.css";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
      <ModalWithForm />
      <ItemModal />
    </div>
  );
}

export default App;
