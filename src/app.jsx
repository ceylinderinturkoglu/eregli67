import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./Services";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hakkimizda" element={<About />} />
      <Route path="/projelerimiz" element={<Projects />} />
      <Route path="/hizmetlerimiz" element={<Services />} />
    </Routes>
  </BrowserRouter>
);
