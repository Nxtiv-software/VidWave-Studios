import Button from "../../components/Button";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.background}>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <p className={styles.title}>
          <span className="block">Your story deserves</span>{" "}
          <span className="">to look this </span>
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#3C1F81] via-[#BAABDC] to-[#3C1F81]">
            stunning
          </span>
        </p>
      </div>
    </div>
  );
}

export default Home;
