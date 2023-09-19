import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { Reset } from 'styled-reset'
import GlobalStyle from "./Components/GlobalStyle";
import Modal from "./Components/Modal";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
      <Modal />
    </>
  );
}
export default App;
