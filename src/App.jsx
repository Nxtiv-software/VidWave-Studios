import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from "./MainPage";
import Portfolio from "./Portfolio";
import Team from "./ui/AboutUs/Team";
import ProjectStart from "./ui/Home/ProjectStart";
import CreativeWave from "./CreativeWave";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/aboutus" element={<Team />}></Route>
          <Route path="/community" element={<CreativeWave />}></Route>
          <Route path="/project-start" element={<ProjectStart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
