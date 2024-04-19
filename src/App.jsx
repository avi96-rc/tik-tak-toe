import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import TicTac from "./components/tic-tak";

function App() {
  return (
    <>
      <TicTac></TicTac>

      <ToastContainer
        autoClose={1000}
        position="top-center"
        hideProgressBar={true}
        theme="colored"
      />
    </>
  );
}

export default App;
