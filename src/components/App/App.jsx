import { useState, useEffect } from "react";
import "./App.css";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
// import Footer from "../Footer/Footer.jsx";
// import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
// import ItemModal from "../ItemModal/ItemModal.jsx";

function App() {
  const [weatherData, setweatherData] = useState({ type: "cold" });
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
        {/* <Footer /> */}
        {/*<ItemModal /> */}
      </div>
      <ModalWithForm />
    </div>
  );
}

export default App;
