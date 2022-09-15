import Landing from "./pages/landing/index";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
