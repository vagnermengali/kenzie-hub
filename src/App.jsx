import Authenticator from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
        <Authenticator />
        <ToastContainer 
        toastStyle={{ backgroundColor: "#343B41", color: "white" }}autoClose={1500}/>
      
    </>
  )
}

export default App;
