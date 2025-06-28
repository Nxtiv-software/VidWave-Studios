import { useEffect, useState } from "react";
import Button from "../../components/Button";
import styles from "./Home.module.css";
import NavBar from "../../components/NavBar";

function Home() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setShowNav(true);
      
      } else {
        setShowNav(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.background}>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <p className={styles.title}>
          Your Vision,{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3C1F81] via-[#BAABDC] to-[#3C1F81]">
            Cinematically Told
          </span>
        </p>
        <p className="text-2xl font-extralight text-stone-300">
          From concept to screen - we provide videos that move people
        </p>
        <Button>Start Your Story</Button>
        <NavBar show={showNav}/>
      </div>
    </div>
  );
}

export default Home;
