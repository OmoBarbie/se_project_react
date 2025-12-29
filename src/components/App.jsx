import "./App.css";
import Header from "./Header.jsx";
import Main from "./Main";
import Animal from "./Animal";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Animal selectedAnimal="dog" />
    </>
  );
}

export default App;
