const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { sendContactEmail } = require('../utils/mailer');

// POST /api/contact
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    
    try {
      await sendContactEmail({ name, email, message });
    } catch (emailError) {
      console.error('Email failed to send, but contact was saved:', emailError);
    }

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// GET /api/projects
router.get('/projects', (req, res) => {
  const projects = [
    {
      title: "Dynamic Reporting & Analytics Portal",
      tech: ["Angular", "TypeScript", "PrimeNG", "Bootstrap"],
      description: "A configurable and scalable dynamic reporting platform designed to generate real-time operational, financial, and analytical reports for enterprise users.",
      details: [
        "Built a configurable and scalable dynamic reporting platform designed to generate real-time operational, financial, and analytical reports for enterprise users",
        "Developed system supporting dynamic filters, role-based access, and multiple visualization formats to enable data-driven decision-making",
        "Led front-end development ensuring seamless integration with backend workflows and RESTful APIs",
        "Designed and implemented configurable report templates supporting tables, charts, and pivot views for flexible data presentation",
        "Built role-based dashboards with access control for Admins, Managers, and Business Users ensuring data security and appropriate visibility",
        "Optimized performance for large datasets using lazy loading and server-side pagination techniques",
        "Conducted unit testing, UAT support, production deployment, and post-release maintenance ensuring system stability and user satisfaction"
      ],
      category: "Angular",
      image: "assets/images/project_images/dynamicReports.png"
    },
    {
      title: "Commercial Corporate Cards Portal",
      tech: ["Angular", "TypeScript", "PrimeNG", "Bootstrap"],
      description: "Secure self-service corporate card management platform for 500+ users across multiple banks. Features role-based access control, cryptographic data protection, and Maker-Checker workflows.",
      details: [
        "Built secure self-service corporate card management platform for 500+ users across multiple banks serving AFS Admins, Bank Ops, Corporate Admins, Cost Center Admins, and Card Users",
        "Led front-end development ensuring seamless integration with backend workflows and RESTful APIs",
        "Implemented comprehensive security systems with role-based access control, cryptographic data protection, and Maker-Checker workflows for high-security transactions",
        "Improved transaction compliance accuracy by 30% through robust validation logic and real-time transaction controls",
        "Developed features including card activation, PIN management, balance enquiry, statement download, and transaction monitoring",
        "Built role-based components, dashboards, and transaction modules ensuring secure and user-friendly interfaces",
        "Handled unit testing, UAT, deployment, and post-production support ensuring zero downtime and high system reliability"
      ],
      category: "Angular",
      image: "assets/corporate-cards.jpg"
    },
    {
      title: "Knowledge Hub Portal",
      tech: ["Angular", "Node.js", "Bootstrap", "MongoDB"],
      description: "Enterprise ticket tracking and management system processing 2,000+ records per month. Features Micro Frontend architecture using Angular Module Federation.",
      details: [
        "Architected and developed a ticketing system processing 2,000+ records monthly",
        "Implemented Micro Frontend architecture using Angular Module Federation to decouple core features",
        "Developed bulk ticket upload capabilities and automated workflow assignments",
        "Integrated real-time notifications and dashboard analytics for SLA tracking"
      ],
      category: "Angular",
      image: "assets/knowledge-hub.jpg"
    },
    {
      title: "Hospital Management System",
      tech: ["JavaScript", "Bootstrap"],
      description: "Comprehensive hospital ERP system UI covering Administration, Billing, Laboratory, Pharmacy, and EMR.",
      details: [
        "Collaborated with clients to translate hospital processes into functional UI screens",
        "Designed and implemented modules for Administration, Billing, Laboratory, Pharmacy, and EMR",
        "Ensured responsive and accessible design using Bootstrap",
        "Optimized frontend performance for data-heavy administrative dashboards"
      ],
      category: "JavaScript",
      image: "assets/hospital-pro.jpg"
    }
  ];
  res.json(projects);
});

// GET /api/experience
router.get('/experience', (req, res) => {
  const experience = [
    {
      role: "Front-End Developer | Software Engineer",
      company: "Finsol Consultancy Private Limited",
      duration: "July 2022 – Present",
      location: "Visakhapatnam, India",
      description: [
        "Developed and maintained 15+ scalable enterprise web applications using Angular, ReactJS, TypeScript, JavaScript, HTML5, CSS3, and Bootstrap.",
        "Improved application performance by 30% through advanced coding techniques, debugging, UI optimization, and performance tuning.",
        "Reduced production defects by 40% using structured debugging methodologies, comprehensive unit testing with Jest and Mocha, and security systems validation.",
        "Increased deployment accuracy by 35% implementing GitHub version control workflows, code reviews, and CI-friendly deployment practices.",
        "Delivered Agile development cycles improving sprint delivery efficiency by 25% through iterative development, daily standups, and sprint planning.",
        "Implemented Redux for state management and integrated RESTful APIs with Angular and React frontends.",
        "Designed and developed Micro Frontend software architecture using Angular Module Federation for modular, scalable enterprise systems.",
        "Reduced UAT issue leakage by 20% through structured SIT and UAT coordination, comprehensive testing, and defect tracking.",
        "Trained and mentored 5+ junior developers on front-end development, Angular, React, and debugging techniques.",
        "Coordinated SIT, UAT, and Production releases ensuring zero downtime for 10+ deployments.",
        "Delivered L2 and L3 application support and troubleshooting for production issues, improving client satisfaction score by 30%.",
        "Collaborated with cross-functional teams to deliver high-quality, secure, and scalable software solutions.",
        "Implemented cryptographic security measures, role-based access control (RBAC), and secure data-handling techniques.",
        "Optimized UI performance using lazy loading, server-side pagination, and dynamic form components."
      ]
    }
  ];
  res.json(experience);
});

module.exports = router;
