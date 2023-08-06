import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ContactPage } from "./Pages/ContactPage";
import { HomePage } from "./Pages/HomePage";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence >      
      <Routes>
        <Route path="/tusharportfolio" element={<HomePage />} />
        <Route path="/tusharportfolio/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
