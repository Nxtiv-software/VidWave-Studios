import React from "react";
import {
  ArrowRight,
  Calendar,
  Users,
  Palette,
  DollarSign,
  Mail,
  Phone,
  MapPin,
  Star,
  Play,
} from "lucide-react";
import styles from "./Home.module.css";

import logo1 from "../../../public/logos/Jetwing.png";
import logo2 from "../../../public/logos/Kernells.png";
import logo3 from "../../../public/logos/hotchocolate.png";
import logo4 from "../../../public/logos/IIT.png";
import logo5 from "../../../public/logos/GDG.png";
import logo6 from "../../../public/logos/brownsHotels.png";
import logo7 from "../../../public/logos/co-labs.png";
import logo8 from "../../../public/logos/Trace.png";
import logo9 from "../../../public/logos/AtomSports.png";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            {/* <p className={styles.subtitle}>VIDEO PRODUCTION AS A SERVICE</p> */}
            <h1 className={styles.heroTitle}>
              Make your audience fall in love
              <br />
              with your brand story
            </h1>
            <p className={styles.heroDescription}>
              The first-ever <strong>video production subscription</strong> for
              growing businesses.
              <br />
              Thoughtfully crafting compelling videos your audience won't want
              to stop watching.
            </p>

            <div className={styles.heroButtons}>
              <button className={styles.primaryBtn}>Start Project</button>
              <button className={styles.secondaryBtn}>
                Schedule a Call
                <ArrowRight size={16} />
              </button>
            </div>

            <div className={styles.testimonial}>
              <div className={styles.avatars}>
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40"
                  alt="Avatar 1"
                  className={styles.avatar}
                />
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=40&h=40"
                  alt="Avatar 2"
                  className={styles.avatar}
                />
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40"
                  alt="Avatar 3"
                  className={styles.avatar}
                />
              </div>
              <div className={styles.testimonialText}>
                <div className={styles.rating}>★★★★★</div>
                <p>Trusted by amazing brands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className={styles.clientLogos}>
        <div className={styles.logoGrid}>
          <div className={styles.clientLogo}>Netflix</div>
          <div className={styles.clientLogo}>Adobe</div>
          <div className={styles.clientLogo}>TESLA</div>
          <div className={styles.clientLogo}>NIKE</div>
          <div className={styles.clientLogo}>Spotify</div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={styles.problemSection}>
        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <div className={styles.problemIcon}>
              <Calendar className={styles.icon} />
            </div>
            <h3>Struggling to create consistent video content?</h3>
            <p>
              When your business grows, it can be hard to maintain consistent
              video quality and brand messaging across all your content.
            </p>
          </div>

          <div className={styles.problemCard}>
            <div className={styles.problemIcon}>
              <Palette className={styles.icon} />
            </div>
            <h3>Unhappy with your current video quality?</h3>
            <p>
              When focusing on your business, video production can sometimes
              become inconsistent and unprofessional, which impacts your brand
              image.
            </p>
          </div>

          <div className={styles.problemCard}>
            <div className={styles.problemIcon}>
              <DollarSign className={styles.icon} />
            </div>
            <h3>No budget for an entire video production team?</h3>
            <p>
              Great videographers and editors are expensive. Who can afford
              A-players to create and maintain high-quality video content?
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={styles.solutionSection}>
        <div className={styles.solutionContent}>
          <div className={styles.solutionText}>
            <h2>
              Focus on your business—
              <br />
              let us handle your videos
            </h2>
            <p>
              We'll take care of creating your{" "}
              <strong>premium video content</strong> including commercials,
              explainer videos and social media content. And we'll produce it
              using the <strong>latest video production techniques</strong> – no
              templates, no shortcuts.
            </p>
          </div>

          <div className={styles.solutionVisual}>
            <div className={styles.mockupContainer}>
              <div className={styles.mockup}>
                <div className={styles.mockupHeader}>
                  <div className={styles.mockupDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className={styles.mockupTitle}>Brand Video</span>
                </div>
                <div className={styles.mockupContent}>
                  <div className={styles.mockupSection}>
                    <h4>Premium Brand Stories</h4>
                    <p>Cinematic Quality</p>
                    <div className={styles.mockupButton}>Watch Demo</div>
                  </div>
                </div>
              </div>

              <div className={styles.mockup2}>
                <div className={styles.mockupHeader}>
                  <div className={styles.mockupDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className={styles.mockupTitle}>Social Content</span>
                </div>
                <div className={styles.mockupContent}>
                  <div className={styles.mockupDark}>
                    <p>Engaging videos</p>
                    <p>for social media</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContent}>
          <h2 className={styles.featuresTitle}>
            Why Choose Our Video Production Service?
          </h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Play className={styles.icon} />
              </div>
              <h3>Unlimited Revisions</h3>
              <p>
                We'll keep refining your videos until they're perfect. No extra
                charges, no limits.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Users className={styles.icon} />
              </div>
              <h3>Dedicated Team</h3>
              <p>
                Work with the same creative team throughout your project for
                consistent quality.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Calendar className={styles.icon} />
              </div>
              <h3>Fast Turnaround</h3>
              <p>
                Get your videos delivered within 5-7 business days, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContent}>
          <h2 className={styles.testimonialsTitle}>What Our Clients Say</h2>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialRating}>
                <Star className={styles.starIcon} />
                <Star className={styles.starIcon} />
                <Star className={styles.starIcon} />
                <Star className={styles.starIcon} />
                <Star className={styles.starIcon} />
              </div>
              <p className={styles.testimonialText}>
                "The video quality exceeded our expectations. Our brand video
                increased engagement by 300% within the first month."
              </p>
              <div className={styles.testimonialAuthor}>
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60"
                  alt="Sarah Johnson"
                  className={styles.authorAvatar}
                />
                <div>
                  <div className={styles.authorName}>Sarah Johnson</div>
                  <div className={styles.authorTitle}>
                    Marketing Director, TechCorp
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialRating}>
                <Star className={styles.starIcon} />
                <Star className={styles.starIcon} />
                <Star className={styles.starIcon} />
                <Star className={styles.starIcon} />
                <Star className={styles.starIcon} />
              </div>
              <p className={styles.testimonialText}>
                "Professional, creative, and always on time. They transformed
                our product launch with stunning visuals."
              </p>
              <div className={styles.testimonialAuthor}>
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60"
                  alt="Michael Chen"
                  className={styles.authorAvatar}
                />
                <div>
                  <div className={styles.authorName}>Michael Chen</div>
                  <div className={styles.authorTitle}>CEO, StartupXYZ</div>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialRating}>
                <Star className={styles.starIcon} />
                <Star className={styles.starIcon} />
                <Star className={styles.starIcon} />
                <Star className={styles.starIcon} />
                <Star className={styles.starIcon} />
              </div>
              <p className={styles.testimonialText}>
                "Best investment we made for our marketing. The subscription
                model makes budgeting so much easier."
              </p>
              <div className={styles.testimonialAuthor}>
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60"
                  alt="Emily Rodriguez"
                  className={styles.authorAvatar}
                />
                <div>
                  <div className={styles.authorName}>Emily Rodriguez</div>
                  <div className={styles.authorTitle}>
                    Brand Manager, Fashion Co
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className={styles.trustedClientsSection}>
        <div className={styles.trustedClientsContent}>
          <h2 className={styles.trustedClientsTitle}>
            Trusted by Industry Leaders
          </h2>
          <div className={styles.logoStrip}>
            <div className={styles.logoTrack}>
              <div className={styles.trustedLogo}>
                <img src={logo1} alt="Google" />
              </div>
              <div className={styles.trustedLogo}>
                <img src={logo2} alt="Microsoft" />
              </div>
              <div className={styles.trustedLogo}>
                <img src={logo3} alt="Amazon" />
              </div>
              <div className={styles.trustedLogo}>
                <img src={logo4} alt="Apple" />
              </div>
              <div className={styles.trustedLogo}>
                <img src={logo5} alt="Meta" />
              </div>
              <div className={styles.trustedLogo}>
                <img src={logo6} alt="Uber" />
              </div>
              <div className={styles.trustedLogo}>
                <img src={logo7} alt="Netflix" />
              </div>
              <div className={styles.trustedLogo}>
                <img src={logo8} alt="Adobe" />
              </div>
              {/* Duplicate logos for seamless loop */}
              <div className={styles.trustedLogo}>
                <img
                  src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=140&h=70"
                  alt="Google"
                />
              </div>
              <div className={styles.trustedLogo}>
                <img
                  src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=140&h=70"
                  alt="Microsoft"
                />
              </div>
              <div className={styles.trustedLogo}>
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=140&h=70"
                  alt="Amazon"
                />
              </div>
              <div className={styles.trustedLogo}>
                <img
                  src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=140&h=70"
                  alt="Apple"
                />
              </div>
              <div className={styles.trustedLogo}>
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=140&h=70"
                  alt="Meta"
                />
              </div>
              <div className={styles.trustedLogo}>
                <img
                  src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=140&h=70"
                  alt="Uber"
                />
              </div>
              <div className={styles.trustedLogo}>
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=140&h=70"
                  alt="Netflix"
                />
              </div>
              <div className={styles.trustedLogo}>
                <img
                  src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=140&h=70"
                  alt="Adobe"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2 className={styles.contactTitle}>
              Ready to Start Your Video Project?
            </h2>
            <p className={styles.contactDescription}>
              Let's discuss your vision and create videos that will captivate
              your audience and drive results.
            </p>

            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <Mail className={styles.icon} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Email Us</div>
                  <div className={styles.contactValue}>
                    hello@videoproduction.com
                  </div>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <Phone className={styles.icon} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Call Us</div>
                  <div className={styles.contactValue}>+1 (555) 123-4567</div>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.contactIcon}>
                  <MapPin className={styles.icon} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Visit Us</div>
                  <div className={styles.contactValue}>
                    123 Creative Street, LA, CA 90210
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Full Name</label>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email Address</label>
                <input
                  type="email"
                  className={styles.formInput}
                  placeholder="Enter your email"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Company</label>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Enter your company name"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Project Type</label>
                <select className={styles.formSelect}>
                  <option>Select project type</option>
                  <option>Brand Video</option>
                  <option>Product Demo</option>
                  <option>Social Media Content</option>
                  <option>Commercial</option>
                  <option>Documentary</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Project Details</label>
                <textarea
                  className={styles.formTextarea}
                  rows={4}
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className={styles.formSubmit}>
                Send Message
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
