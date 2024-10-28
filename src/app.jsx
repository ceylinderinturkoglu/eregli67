import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/header";
import ProjectDetail from "./pages/ProjectDetail";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hakkimda" element={<About />} />
      <Route path="/projeler">
        <Route index element={<Projects />} />
        <Route path=":projectId" element={<ProjectDetail />} />
      </Route>
      <Route path="/hizmetler" element={<Services />} />
      <Route path="/iletisim" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
