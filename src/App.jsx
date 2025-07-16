import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "./MainPage";
import Portfolio from "./Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="portfolio" element={<Portfolio />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
