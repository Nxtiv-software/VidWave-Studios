import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";
import Home from "./ui/Home/Home";
import Stories from "./ui/Home/Stories";

function MainPage() {
  return (
    <div>
      <NavBar />
      <Home />
      <Stories />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default MainPage;
