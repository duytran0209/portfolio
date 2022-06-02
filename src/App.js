import { lazy, Suspense } from "react";
import Main from "./Components/Main";
import AboutPage from "./Pages/AboutPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import ResumePage from "./Pages/ResumePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Homepage = lazy(() => import("./Pages/Homepage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route path="/" element={<Homepage />}></Route>

            <Route path="/about" element={<AboutPage />} />

            <Route path="/blogs" element={<BlogsPage />} />

            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portfolios" element={<PortfoliosPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
