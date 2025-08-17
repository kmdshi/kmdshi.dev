import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackgroundVideo from "./components/BackgroundVideo";
import PortfolioPage from "./pages/PortfolioPage";
import NotFoundPage from "./pages/NotFoundPage"; 

function App() {
  return (
    <BrowserRouter>
      <BackgroundVideo>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </BackgroundVideo>
    </BrowserRouter>
  );
}

export default App;
