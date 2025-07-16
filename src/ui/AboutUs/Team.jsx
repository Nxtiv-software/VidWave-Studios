import React from "react";
import styles from "./Team.module.css";



const teamMembers = [
  {
    id: 1,
    name: "Vihan Mendis",
    role: "Founder CEO",
    image: "../../../public/vihan.jpg",
  },
  {
    id: 2,
    name: "Darren Fernando",
    role: "Video Editor",
    image: "../../../public/darren.jpg",
  },
  {
    id: 3,
    name: "Chamiru Fernando",
    role: "Videographer",
    image: "../../../public/vihan.jpg",
  },
  {
    id: 4,
    name: "Sean Fernando",
    role: "Videographer",
    image: "../../../public/sean.jpg",
  },
];

function  Team ()  {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our team</h2>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.memberCard}>
              <div className={styles.imageContainer}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.memberImage}
                />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
            </div>
          ))}
        </div>

        <button className={styles.joinButton}>Join our team!!</button>
      </div>

      {/* <div className={styles.characterIllustration}>
        <img
          src="/images/team/character.jpg"
          alt="Team character"
          className={styles.characterImage}
        />
      </div> */}
    </section>
  );
};

export default Team;
