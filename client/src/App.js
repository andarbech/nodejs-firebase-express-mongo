import{BrowserRouter,Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home";
import SigUp from "./pages/sigUp.js/SigUp";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/sigUp" element={<SigUp />} />
        
  </Routes>
  </BrowserRouter>
    );
  }
  
export default App;
