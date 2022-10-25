import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  Characters, Episode, Home, Location } from "./pages/Index";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/episode" element={< Episode/>} />
        <Route path="/location" element={<Location />} />
        <Route path="/characters" element={<Characters />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
