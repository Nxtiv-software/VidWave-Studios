import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Star,
  Users,
  TrendingUp,
  Award,
  MessageCircle,
  Calendar,
  Shield,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  X,
} from "lucide-react";
import styles from "./Community.module.css";

const Community = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    members: 0,
    projects: 0,
    satisfaction: 0,
  });
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animated counter for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate members counter
          let memberCount = 0;
          const memberInterval = setInterval(() => {
            memberCount += 200;
            if (memberCount >= 10000) {
              memberCount = 10000;
              clearInterval(memberInterval);
            }
            setAnimatedStats((prev) => ({ ...prev, members: memberCount }));
          }, 50);

          // Animate projects counter
          let projectCount = 0;
          const projectInterval = setInterval(() => {
            projectCount += 10;
            if (projectCount >= 500) {
              projectCount = 500;
              clearInterval(projectInterval);
            }
            setAnimatedStats((prev) => ({ ...prev, projects: projectCount }));
          }, 60);

          // Animate satisfaction counter
          let satisfactionCount = 0;
          const satisfactionInterval = setInterval(() => {
            satisfactionCount += 2;
            if (satisfactionCount >= 98) {
              satisfactionCount = 98;
              clearInterval(satisfactionInterval);
            }
            setAnimatedStats((prev) => ({
              ...prev,
              satisfaction: satisfactionCount,
            }));
          }, 80);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      {/* <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Join our{" "}
            <span className={styles.heroAccent}>CreativeWave Community</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Connect with fellow creators, get exclusive insights, and be part of
            a thriving community of video professionals.
          </p>
        </div>
      </section> */}

      {/* Community Showcase Section */}
      <section className={styles.communitySection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Join our{" "}
            <span className={styles.heroAccent}>CreativeWave Community</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Connect with fellow creators, get exclusive insights, and be part of
            a thriving community of video professionals.
          </p>
        </div>
        <div className={styles.particleBackground}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={styles.particle}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        <div className={styles.communityContent}>
          <div className={styles.titleContainer}>
            <h2 className={styles.communityTitle}>
              Our <span className={styles.gradientText}>Amazing Community</span>
            </h2>
            <div className={styles.titleUnderline}></div>
          </div>
          <p className={styles.communitySubtitle}>
            Join thousands of creators who are already part of our vibrant
            community.
          </p>

          <div className={styles.communityStats} ref={statsRef}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>👥</div>
              <div className={styles.statNumber}>
                {animatedStats.members >= 10000
                  ? "10K+"
                  : `${Math.floor(animatedStats.members / 100) / 10}K`}
              </div>
              <div className={styles.statLabel}>Active Members</div>
              <div className={styles.statProgress}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${(animatedStats.members / 10000) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🎬</div>
              <div className={styles.statNumber}>{animatedStats.projects}+</div>
              <div className={styles.statLabel}>Projects Completed</div>
              <div className={styles.statProgress}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${(animatedStats.projects / 500) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>⭐</div>
              <div className={styles.statNumber}>
                {animatedStats.satisfaction}%
              </div>
              <div className={styles.statLabel}>Satisfaction Rate</div>
              <div className={styles.statProgress}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${animatedStats.satisfaction}%` }}
                ></div>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🚀</div>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Support Available</div>
              <div className={styles.statProgress}>
                <div
                  className={styles.progressBar}
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className={styles.communityFeatures}>
            <div
              className={styles.communityFeature}
              onMouseEnter={() => setIsHovering("discord")}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className={styles.featureIconContainer}>
                <MessageCircle size={32} color="#6366f1" />
                <div className={styles.iconGlow}></div>
              </div>
              <h3>WhatsApp Community</h3>
              <p>
                Join our active Discord server for real-time collaboration,
                feedback, and networking with industry professionals.
              </p>
              {/* <button className={`${styles.joinBtn} ${styles.discordBtn}`}> */}
              <a
                href="https://wa.me/message/F57FQASLHONHH1"
                className={`${styles.joinBtn} ${styles.discordBtn}`}
              >
                Join Community
              </a>
              <div className={styles.buttonRipple}></div>
              {/* <span>Join Community</span> */}

              {/* </button> */}
              <div className={styles.memberAvatars}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={styles.memberAvatar}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <img
                      src={`https://images.pexels.com/photos/${
                        1239291 + i
                      }/pexels-photo-${
                        1239291 + i
                      }.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop&crop=face`}
                      alt="Member"
                    />
                  </div>
                ))}
                <div className={styles.moreMembers}>+2.5K</div>
              </div>
            </div>

            <div
              className={styles.communityFeature}
              onMouseEnter={() => setIsHovering("workshop")}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className={styles.featureIconContainer}>
                <Calendar size={32} color="#6366f1" />
                <div className={styles.iconGlow}></div>
              </div>
              <h3>Weekly Workshops</h3>
              <p>
                Attend live workshops covering the latest techniques, trends,
                and tools in video production and storytelling.
              </p>
              <button className={`${styles.joinBtn} ${styles.workshopBtn}`}>
                <span>View Schedule</span>
                <div className={styles.buttonRipple}></div>
              </button>
              <div className={styles.upcomingWorkshop}>
                <div className={styles.workshopDate}>Next: Dec 15</div>
                <div className={styles.workshopTopic}>
                  Advanced Color Grading
                </div>
              </div>
            </div>

            <div
              className={styles.communityFeature}
              onMouseEnter={() => setIsHovering("vip")}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className={styles.featureIconContainer}>
                <Shield size={32} color="#6366f1" />
                <div className={styles.iconGlow}></div>
              </div>
              <h3>VIP Client Portal</h3>
              <p>
                Access exclusive resources, templates, and priority support
                through our premium client portal.
              </p>
              <button className={`${styles.joinBtn} ${styles.vipBtn}`}>
                <span>Get VIP Access</span>
                <div className={styles.buttonRipple}></div>
              </button>
              <div className={styles.vipBenefits}>
                <div className={styles.benefit}>✨ Premium Templates</div>
                <div className={styles.benefit}>🎯 Priority Support</div>
                <div className={styles.benefit}>📚 Exclusive Resources</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive cursor follower */}
        <div
          className={styles.cursorFollower}
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            opacity: isHovering ? 1 : 0,
          }}
        >
          {isHovering === "discord" && "💬"}
          {isHovering === "workshop" && "🎓"}
          {isHovering === "vip" && "👑"}
        </div>
      </section>

      {/* Community Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsContent}>
          <h2 className={styles.benefitsTitle}>Why Join Our Community?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <Users size={32} color="#6366f1" />
              </div>
              <h3>Network with Professionals</h3>
              <p>
                Connect with industry experts, fellow creators, and potential
                collaborators from around the world.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <Award size={32} color="#6366f1" />
              </div>
              <h3>Learn from the Best</h3>
              <p>
                Access exclusive tutorials, workshops, and masterclasses from
                award-winning video professionals.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <TrendingUp size={32} color="#6366f1" />
              </div>
              <h3>Grow Your Skills</h3>
              <p>
                Participate in challenges, get feedback on your work, and
                continuously improve your craft.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <MessageCircle size={32} color="#6366f1" />
              </div>
              <h3>Get Support</h3>
              <p>
                Ask questions, share experiences, and get help from our
                supportive community members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Join Our Community?</h2>
          <p className={styles.ctaDescription}>
            Take the first step towards connecting with thousands of creative
            professionals.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryCTABtn}>Join Community Now</button>
            <button className={styles.secondaryCTABtn}>
              <ArrowRight size={16} />
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
