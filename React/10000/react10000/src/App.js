import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import { useState } from "react";

function App() {

  const [modalShow, setModalShow] = useState(false)

  return (
    <div id="app">
      <Header />
      <Main setmodalShow={setModalShow} />
      <Footer />
      {modalShow && <Modal setmodalShow={setModalShow} />}
    </div>
  );
}
export default App;
