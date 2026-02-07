"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "about", label: "ABOUT" },
    { id: "featured", label: "FEATURED PROJECT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "skills", label: "SKILLS" },
    { id: "contact", label: "CONTACT" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border z-50">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 md:hidden z-40 p-2 rounded-lg bg-card hover:bg-secondary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar Navigation */}
        <aside
          className={`fixed md:sticky top-0 left-0 w-64 md:w-96 h-screen bg-card border-r border-border transition-transform duration-300 md:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } z-30`}
        >
          <div className="p-8 flex flex-col h-full overflow-y-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Ikenna
              </h1>
              <p className="text-primary font-medium mb-4">
                Full-Stack Developer
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Specializing in scalable web applications, fintech systems, and
                secure APIs using React, Next.js, Node.js, and TypeScript.
              </p>
            </div>

            {/* Navigation */}
            <nav className="mb-12 flex-1">
              <div className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 text-sm font-medium ${
                      activeSection === section.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Contact Info */}
            <div className="space-y-4 pt-8 border-t border-border">
              <a
                href="mailto:agugbuenzubechi@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group"
              >
                <Mail
                  size={18}
                  className="flex-shrink-0 group-hover:text-primary"
                />
                <span className="break-all">agugbuenzubechi@gmail.com</span>
              </a>
              <a
                href="tel:+234903935743"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group"
              >
                <Phone
                  size={18}
                  className="flex-shrink-0 group-hover:text-primary"
                />
                <span>+234 903 935 4723</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="flex-shrink-0" />
                <span>Enugu, Nigeria</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 pt-8 border-t border-border">
              <a
                href="https://github.com/Co-den"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ikenna-agugbue-a73838335/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20 bg-gradient-to-br from-background via-background to-card">
            <div className="max-w-3xl w-full">
              <div className="mb-8 inline-block">
                <span className="text-primary font-semibold text-sm">
                  WELCOME
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
                Building Scalable,{" "}
                <span className="text-primary">Production-Ready</span> Web
                Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl text-balance">
                Full-Stack Developer with 4+ years of experience crafting
                high-performance applications. I specialize in fintech systems,
                secure APIs, and modern web architecture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("featured")}
                  className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 group"
                >
                  View Projects
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="px-6 md:px-12 py-20 bg-background">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl font-bold text-foreground mb-8">About</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I am a full-stack developer passionate about building web
                  applications that solve real business problems. With 4+ years
                  of professional experience, I have developed expertise in
                  designing scalable systems, implementing secure
                  authentication, and optimizing performance.
                </p>
                <p>
                  My technical foundation spans modern JavaScript/TypeScript,
                  React, Next.js on the frontend, and Node.js with Express on
                  the backend. I am experienced in payment processing systems,
                  fintech applications, and complex dashboard development with a
                  focus on code quality, security, and maintainability.
                </p>
                <p>
                  I believe in building software that's not just functional, but
                  also performant, secure, and easy to maintain. I approach
                  every project with a business-first mindset, ensuring that
                  technical decisions align with real user needs and
                  organizational goals.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Project */}
          <section id="featured" className="px-6 md:px-12 py-20 bg-card">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl font-bold text-foreground mb-12">
                Featured Project
              </h3>

              <div className="rounded-xl overflow-hidden border border-border bg-background mb-8">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block px-6 py-3 bg-primary/20 rounded-lg mb-4">
                      <p className="text-primary font-semibold text-sm">
                        FINTECH PLATFORM
                      </p>
                    </div>
                    <p className="text-2xl font-bold text-foreground">
                      PayPort
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Payment Processing Platform
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Overview
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    PayPort is a comprehensive payment processing platform built
                    to handle multi-tier merchant onboarding, payment processing
                    across multiple channels, and comprehensive analytics. It's
                    designed to support businesses of all sizes with secure,
                    scalable infrastructure.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Multi-tier merchant onboarding with automated KYC verification",
                      "Payment processing supporting cards, transfers, and cryptocurrency",
                      "Admin dashboard with real-time analytics and comprehensive reporting",
                      "Secure REST API with JWT authentication and 2FA",
                      "Subscription billing and automated invoice generation",
                      "Fraud detection and prevention systems",
                    ].map((feature, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary font-bold flex-shrink-0 mt-1">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    Impact & Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <p className="text-2xl font-bold text-primary mb-2">
                        40%
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Fraud Reduction
                      </p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <p className="text-2xl font-bold text-primary mb-2">
                        10K+
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Merchants Supported
                      </p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <p className="text-2xl font-bold text-primary mb-2">
                        99.9%
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Uptime SLA
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "Tailwind CSS",
                      "Shadcn UI",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://pay-deck.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity group"
                >
                  View Live Project
                  <ExternalLink
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>
                <div className="rounded-xl overflow-hidden border border-border bg-background mb-8">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-background flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block px-6 py-3 bg-primary/20 rounded-lg mb-4">
                        <p className="text-primary font-semibold text-sm">
                          AUTHENTICATION
                        </p>
                      </div>
                      <p className="text-2xl font-bold text-foreground">
                        Voice-Auth
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Authentication System Using Voice Recognition
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      Overview
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Voice-Auth is a secure authentication system that
                      leverages voice recognition technology to provide a
                      seamless and secure login experience. It uses advanced
                      machine learning algorithms to analyze voice patterns and
                      ensure only authorized users can access the system.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "User registration with voice sample collection",
                        "Voice-based authentication with machine learning algorithms",
                        "Multi-factor authentication support",
                        "Secure REST API with JWT authentication",
                        "Real-time voice analysis and verification",
                        "voiceprint management and updates",
                      ].map((feature, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-muted-foreground"
                        >
                          <span className="text-primary font-bold flex-shrink-0 mt-1">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4">
                      Impact & Achievements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-background rounded-lg border border-border">
                        <p className="text-2xl font-bold text-primary mb-2">
                          30%
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Voice Recognition Accuracy Improvement
                        </p>
                      </div>
                      <div className="p-4 bg-background rounded-lg border border-border">
                        <p className="text-2xl font-bold text-primary mb-2">
                          5K+
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Active Users
                        </p>
                      </div>
                      <div className="p-4 bg-background rounded-lg border border-border">
                        <p className="text-2xl font-bold text-primary mb-2">
                          99.9%
                        </p>
                        <p className="text-sm text-muted-foreground">
                          System Uptime
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "Tailwind CSS",
                        "Shadcn UI",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="https://voic-auth.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity group"
                  >
                    View Live Project
                    <ExternalLink
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </a>
                  <div className="rounded-xl overflow-hidden border border-border bg-background mb-8">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-background flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-block px-6 py-3 bg-primary/20 rounded-lg mb-4">
                          <p className="text-primary font-semibold text-sm">
                            FLOWDECK
                          </p>
                        </div>
                        <p className="text-2xl font-bold text-foreground">
                          Customer_health_dashboard
                        </p>
                        <p className="text-muted-foreground mt-2">
                          A comprehensive dashboard for monitoring customer
                          health metrics.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3">
                        Overview
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        FlowDeck is a customer health dashboard designed to help
                        businesses monitor and analyze key customer metrics in
                        real-time. It provides insights into customer
                        engagement, satisfaction, and retention through an
                        intuitive interface and powerful analytics tools.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {[
                          "Real-time customer health metrics and KPIs",
                          "Customizable dashboards with drag-and-drop widgets",
                          "Advanced analytics and reporting tools",
                          "Integration with CRM and support systems",
                          "Automated alerts for at-risk customers",
                          "User management and role-based access control",
                        ].map((feature, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-muted-foreground"
                          >
                            <span className="text-primary font-bold flex-shrink-0 mt-1">
                              ✓
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-4">
                        Impact & Achievements
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-background rounded-lg border border-border">
                          <p className="text-2xl font-bold text-primary mb-2">
                            ..
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Improvement in Customer Retention
                          </p>
                        </div>
                        <div className="p-4 bg-background rounded-lg border border-border">
                          <p className="text-2xl font-bold text-primary mb-2">
                            ..
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Active Users
                          </p>
                        </div>
                        <div className="p-4 bg-background rounded-lg border border-border">
                          <p className="text-2xl font-bold text-primary mb-2">
                            ..%
                          </p>
                          <p className="text-sm text-muted-foreground">
                            System Uptime
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React",
                          "Next.js",
                          "TypeScript",
                          "Node.js",
                          "Express",
                          "MongoDB",
                          "Tailwind CSS",
                          "Shadcn UI",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href="https://health-dashboard-rho-eosin.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity group"
                    >
                      View Live Project
                      <ExternalLink
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            className="px-6 md:px-12 py-20 bg-background"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl font-bold text-foreground mb-12">
                Experience
              </h3>

              <div className="space-y-12">
                <div className="border-l-2 border-primary pl-8 pb-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground">
                        Freelance Full-Stack Developer
                      </h4>
                      <p className="text-primary font-medium mt-1">
                        Self-Employed
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 text-sm">
                    4+ years of professional development
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Built full-stack products from initial requirements through deployment, managing entire development lifecycle",
                      "Designed and implemented secure authentication systems with role-based access control (RBAC) and JWT tokens",
                      "Integrated payment processing systems using Paystack and Stripe for e-commerce and SaaS platforms",
                      "Developed responsive admin dashboards with advanced analytics, making complex data accessible to non-technical users",
                      "Managed infrastructure and deployments using Vercel, Render, and MongoDB Atlas for production applications",
                      "Optimized application performance, achieving 90+ Lighthouse scores and sub-2s load times",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-muted-foreground text-sm"
                      >
                        <span className="text-accent flex-shrink-0 mt-1">
                          →
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="px-6 md:px-12 py-20 bg-card">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl font-bold text-foreground mb-12">
                Technical Skills
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    Frontend
                  </h4>
                  <div className="space-y-2">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "Material UI",
                      "Redux",
                      "Zustand",
                    ].map((skill) => (
                      <p key={skill} className="text-muted-foreground">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    Backend
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Node.js",
                      "Express.js",
                      "REST APIs",
                      "MongoDB",
                      "SQL",
                      "Firebase",
                      "Supabase",
                    ].map((skill) => (
                      <p key={skill} className="text-muted-foreground">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    Testing & Tools
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Jest",
                      "React Testing Library",
                      "Git & GitHub",
                      "Postman",
                      "NPM",
                    ].map((skill) => (
                      <p key={skill} className="text-muted-foreground">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    Deployment & Cloud
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Vercel",
                      "Netlify",
                      "Render",
                      "MongoDB Atlas",
                      "Cloudinary",
                    ].map((skill) => (
                      <p key={skill} className="text-muted-foreground">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-border">
                <h4 className="text-lg font-bold text-foreground mb-6">
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Full-Stack Web Development",
                    "API Design & Integration",
                    "Authentication & Security",
                    "Database Design",
                    "Performance Optimization",
                    "CI/CD & Deployment",
                    "Responsive Design",
                    "Fintech Systems",
                  ].map((comp) => (
                    <span
                      key={comp}
                      className="px-4 py-2 bg-background border border-primary/30 text-foreground rounded-full text-sm font-medium"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="px-6 md:px-12 py-20 bg-background">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl font-bold text-foreground mb-8">
                Education & Languages
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    Education
                  </h4>
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">
                      BSc – Cooperative Economics & Management
                    </p>
                    <p className="text-muted-foreground">
                      Nnamdi Azikiwe University
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    Languages
                  </h4>
                  <div className="space-y-2">
                    <p className="text-foreground">
                      <span className="font-semibold">English</span>
                      <span className="text-muted-foreground ml-2">
                        (Fluent)
                      </span>
                    </p>
                    <p className="text-foreground">
                      <span className="font-semibold">Igbo</span>
                      <span className="text-muted-foreground ml-2">
                        (Native)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="px-6 md:px-12 py-20 bg-card">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-4xl font-bold text-foreground mb-6">
                Let's Work Together
              </h3>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                I'm always interested in discussing new projects, opportunities,
                and challenges. Feel free to reach out!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:agugbuenzubechi@gmail.com"
                  className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 group"
                >
                  <Mail size={20} />
                  Send Email
                </a>
                <a
                  href="https://linkedin.com/in/ikenna-agugbue-a73838335/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all inline-flex items-center justify-center gap-2 group"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
              </div>

              <p className="text-xs text-muted-foreground mt-12">
                © 2026 Agugbue Ikenna Nzubechi. All rights reserved.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
