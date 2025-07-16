import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "./MainPage";
import Portfolio from "./Portfolio";
import Team from "./ui/AboutUs/Team";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="portfolio" element={<Portfolio />}></Route>
          <Route path="aboutus" element={<Team />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
