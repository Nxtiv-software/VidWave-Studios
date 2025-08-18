import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Upload,
  Calendar,
  DollarSign,
  Users,
  Play,
  Star,
  Clock,
} from "lucide-react";
import styles from "./ProjectStart.module.css";

const ProjectStart = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
  const [formData, setFormData] = useState({
    projectType: "",
    budget: "",
    timeline: "",
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    projectDescription: "",
    targetAudience: "",
    goals: "",
    style: "",
    duration: "",
    deliverables: [],
  });

  const steps = [
    {
      number: 1,
      title: "Project Type",
      description: "What kind of video do you need?",
    },
    {
      number: 2,
      title: "Budget & Timeline",
      description: "Your budget and timeline preferences",
    },
    { number: 3, title: "Contact Info", description: "How can we reach you?" },
    {
      number: 4,
      title: "Project Details",
      description: "Tell us about your vision",
    },
    {
      number: 5,
      title: "Review & Submit",
      description: "Review your project details",
    },
  ];

  const projectTypes = [
    {
      id: "brand",
      title: "Brand Video",
      description: "Tell your brand story",
      icon: <Star size={24} />,
    },
    {
      id: "product",
      title: "Product Demo",
      description: "Showcase your product",
      icon: <Play size={24} />,
    },
    {
      id: "social",
      title: "Social Media Content",
      description: "Engaging social videos",
      icon: <Users size={24} />,
    },
    {
      id: "commercial",
      title: "Commercial",
      description: "TV/Online advertisements",
      icon: <DollarSign size={24} />,
    },
    {
      id: "explainer",
      title: "Explainer Video",
      description: "Explain complex concepts",
      icon: <Check size={24} />,
    },
    {
      id: "testimonial",
      title: "Testimonial",
      description: "Customer success stories",
      icon: <Star size={24} />,
    },
  ];

  const budgetRanges = [
    { id: "5k-10k", label: "$5,000 - $10,000", popular: false },
    { id: "10k-25k", label: "$10,000 - $25,000", popular: true },
    { id: "25k-50k", label: "$25,000 - $50,000", popular: false },
    { id: "50k+", label: "$50,000+", popular: false },
    { id: "custom", label: "Custom Budget", popular: false },
  ];

  const timelineOptions = [
    { id: "2-4weeks", label: "2-4 weeks", icon: <Clock size={20} /> },
    { id: "1-2months", label: "1-2 months", icon: <Clock size={20} /> },
    { id: "2-3months", label: "2-3 months", icon: <Clock size={20} /> },
    { id: "3months+", label: "3+ months", icon: <Clock size={20} /> },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Project submitted:", formData);
    setShowSuccessOverlay(true);
  };

  const closeSuccessOverlay = () => {
    setShowSuccessOverlay(false);
    // Optionally redirect to home page
    // window.location.href = '/';
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Start Your Video Project</h1>
          <p className={styles.headerSubtitle}>
            Let's bring your vision to life. Tell us about your project and
            we'll create something amazing together.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className={styles.progressSection}>
        <div className={styles.progressContainer}>
          <div className={styles.progressSteps}>
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`${styles.progressStep} ${
                  currentStep >= step.number ? styles.active : ""
                } ${currentStep > step.number ? styles.completed : ""}`}
              >
                <div className={styles.stepNumber}>
                  {currentStep > step.number ? (
                    <Check size={16} />
                  ) : (
                    step.number
                  )}
                </div>
                <div className={styles.stepInfo}>
                  <div className={styles.stepTitle}>{step.title}</div>
                  <div className={styles.stepDescription}>
                    {step.description}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={styles.stepConnector}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>
                What type of video do you need?
              </h2>
              <div className={styles.projectTypes}>
                {projectTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`${styles.projectTypeCard} ${
                      formData.projectType === type.id ? styles.selected : ""
                    }`}
                    onClick={() => handleInputChange("projectType", type.id)}
                  >
                    <div className={styles.projectTypeIcon}>{type.icon}</div>
                    <h3 className={styles.projectTypeTitle}>{type.title}</h3>
                    <p className={styles.projectTypeDescription}>
                      {type.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Budget & Timeline */}
          {currentStep === 2 && (
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>Budget & Timeline</h2>

              <div className={styles.budgetSection}>
                <h3 className={styles.sectionTitle}>
                  What's your budget range?
                </h3>
                <div className={styles.budgetOptions}>
                  {budgetRanges.map((budget) => (
                    <div
                      key={budget.id}
                      className={`${styles.budgetOption} ${
                        formData.budget === budget.id ? styles.selected : ""
                      } ${budget.popular ? styles.popular : ""}`}
                      onClick={() => handleInputChange("budget", budget.id)}
                    >
                      {budget.popular && (
                        <div className={styles.popularBadge}>Most Popular</div>
                      )}
                      <div className={styles.budgetLabel}>{budget.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.timelineSection}>
                <h3 className={styles.sectionTitle}>
                  When do you need this completed?
                </h3>
                <div className={styles.timelineOptions}>
                  {timelineOptions.map((timeline) => (
                    <div
                      key={timeline.id}
                      className={`${styles.timelineOption} ${
                        formData.timeline === timeline.id ? styles.selected : ""
                      }`}
                      onClick={() => handleInputChange("timeline", timeline.id)}
                    >
                      <div className={styles.timelineIcon}>{timeline.icon}</div>
                      <div className={styles.timelineLabel}>
                        {timeline.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {currentStep === 3 && (
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>Contact Information</h2>
              <div className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Company Name</label>
                    <input
                      type="text"
                      className={styles.formInput}
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={(e) =>
                        handleInputChange("companyName", e.target.value)
                      }
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Contact Name *</label>
                    <input
                      type="text"
                      className={styles.formInput}
                      placeholder="Enter your full name"
                      value={formData.contactName}
                      onChange={(e) =>
                        handleInputChange("contactName", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email Address *</label>
                    <input
                      type="email"
                      className={styles.formInput}
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Phone Number</label>
                    <input
                      type="tel"
                      className={styles.formInput}
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Project Details */}
          {currentStep === 4 && (
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>Project Details</h2>
              <div className={styles.projectDetailsForm}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Project Description *
                  </label>
                  <textarea
                    className={styles.formTextarea}
                    rows={4}
                    placeholder="Describe your project, what you want to achieve, and any specific requirements..."
                    value={formData.projectDescription}
                    onChange={(e) =>
                      handleInputChange("projectDescription", e.target.value)
                    }
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Target Audience</label>
                    <input
                      type="text"
                      className={styles.formInput}
                      placeholder="Who is your target audience?"
                      value={formData.targetAudience}
                      onChange={(e) =>
                        handleInputChange("targetAudience", e.target.value)
                      }
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Video Duration</label>
                    <select
                      className={styles.formSelect}
                      value={formData.duration}
                      onChange={(e) =>
                        handleInputChange("duration", e.target.value)
                      }
                    >
                      <option value="">Select duration</option>
                      <option value="30sec">30 seconds</option>
                      <option value="1min">1 minute</option>
                      <option value="2min">2 minutes</option>
                      <option value="3-5min">3-5 minutes</option>
                      <option value="5min+">5+ minutes</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Goals & Objectives</label>
                  <textarea
                    className={styles.formTextarea}
                    rows={3}
                    placeholder="What do you want to achieve with this video? (e.g., increase brand awareness, drive sales, educate customers)"
                    value={formData.goals}
                    onChange={(e) => handleInputChange("goals", e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Style Preferences</label>
                  <textarea
                    className={styles.formTextarea}
                    rows={3}
                    placeholder="Describe your preferred style, tone, or any reference videos you like..."
                    value={formData.style}
                    onChange={(e) => handleInputChange("style", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Review & Submit */}
          {currentStep === 5 && (
            <div className={styles.stepContent}>
              <h2 className={styles.stepTitle}>Review Your Project</h2>
              <div className={styles.reviewSection}>
                <div className={styles.reviewCard}>
                  <h3 className={styles.reviewCardTitle}>Project Overview</h3>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Project Type:</span>
                    <span className={styles.reviewValue}>
                      {projectTypes.find(
                        (type) => type.id === formData.projectType
                      )?.title || "Not selected"}
                    </span>
                  </div>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Budget:</span>
                    <span className={styles.reviewValue}>
                      {budgetRanges.find(
                        (budget) => budget.id === formData.budget
                      )?.label || "Not selected"}
                    </span>
                  </div>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Timeline:</span>
                    <span className={styles.reviewValue}>
                      {timelineOptions.find(
                        (timeline) => timeline.id === formData.timeline
                      )?.label || "Not selected"}
                    </span>
                  </div>
                </div>

                <div className={styles.reviewCard}>
                  <h3 className={styles.reviewCardTitle}>
                    Contact Information
                  </h3>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Name:</span>
                    <span className={styles.reviewValue}>
                      {formData.contactName || "Not provided"}
                    </span>
                  </div>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Email:</span>
                    <span className={styles.reviewValue}>
                      {formData.email || "Not provided"}
                    </span>
                  </div>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Company:</span>
                    <span className={styles.reviewValue}>
                      {formData.companyName || "Not provided"}
                    </span>
                  </div>
                </div>

                <div className={styles.reviewCard}>
                  <h3 className={styles.reviewCardTitle}>Project Details</h3>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Description:</span>
                    <span className={styles.reviewValue}>
                      {formData.projectDescription || "Not provided"}
                    </span>
                  </div>
                  <div className={styles.reviewItem}>
                    <span className={styles.reviewLabel}>Goals:</span>
                    <span className={styles.reviewValue}>
                      {formData.goals || "Not provided"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className={styles.formNavigation}>
            {currentStep > 1 && (
              <button className={styles.prevButton} onClick={handlePrevious}>
                <ArrowLeft size={16} />
                Previous
              </button>
            )}

            {currentStep < 5 ? (
              <button className={styles.nextButton} onClick={handleNext}>
                Next
                <ArrowRight size={16} />
              </button>
            ) : (
              <button className={styles.submitButton} onClick={handleSubmit}>
                Submit Project
                <Check size={16} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 Video Production Agency. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>
              Privacy Policy
            </a>
            <a href="#" className={styles.footerLink}>
              Terms of Service
            </a>
            <a href="#" className={styles.footerLink}>
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Success Overlay */}
      {showSuccessOverlay && (
        <div className={styles.successOverlay}>
          <div className={styles.overlayContent}>
            <div className={styles.successIcon}>
              <Check size={48} />
            </div>
            <h2 className={styles.successTitle}>
              Project Submitted Successfully!
            </h2>
            <p className={styles.successMessage}>
              Thank you for choosing our video production services. We've
              received your project details and will get back to you within 24
              hours.
            </p>
            <div className={styles.successDetails}>
              <div className={styles.successDetailItem}>
                <strong>What's Next?</strong>
                <p>
                  Our team will review your project requirements and contact you
                  to discuss the next steps.
                </p>
              </div>
              <div className={styles.successDetailItem}>
                <strong>Response Time:</strong>
                <p>
                  You can expect to hear from us within 24 hours during business
                  days.
                </p>
              </div>
              <div className={styles.successDetailItem}>
                <strong>Questions?</strong>
                <p>
                  Feel free to reach out to us at{" "}
                  <a href="mailto:hello@videoproduction.com">
                    hello@videoproduction.com
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.successActions}>
              <button
                className={styles.primaryAction}
                onClick={closeSuccessOverlay}
              >
                Continue
              </button>
              <button
                className={styles.secondaryAction}
                onClick={() => (window.location.href = "/")}
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectStart;
