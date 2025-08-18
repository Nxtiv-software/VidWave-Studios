import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./ui/Home/Home";
// import ProjectStart from "./ui/Home/ProjectStart";

function MainPage() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <ProjectStart /> */}
      <Footer />
    </div>
  );
}

export default MainPage;
