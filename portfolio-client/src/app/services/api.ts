import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5001/api';

  constructor() {}

  // Static portfolio data (replace with your real data)
  getProjects(): Observable<any[]> {
    return of([
      {
        id: 1,
        title: "Dynamic Reporting & Analytics Portal",
        tech: ["Angular", "TypeScript", "PrimeNG", "Bootstrap"],
        category: "Angular",
        description: "A highly configurable and scalable enterprise reporting platform built to process and visualize large-scale financial and operational data. The system features a custom template engine, role-based access control, and dynamic filtering capabilities, enabling business users to generate real-time insights across various visualization formats like pivot tables and interactive charts.",
        details: [
          "Built a configurable and scalable dynamic reporting platform designed to generate real-time operational, financial, and analytical reports for enterprise users",
          "Developed system supporting dynamic filters, role-based access, and multiple visualization formats",
          "Led front-end development ensuring seamless integration with backend workflows and RESTful APIs",
          "Designed and implemented configurable report templates supporting tables, charts, and pivot views",
          "Built role-based dashboards with access control for Admins, Managers, and Business Users",
          "Optimized performance for large datasets using lazy loading and server-side pagination",
          "Conducted unit testing, UAT support, and production deployment"
        ],
        overview: 'A configurable and scalable dynamic reporting platform designed to generate real-time operational, financial, and analytical reports for enterprise users. The system supports dynamic filters, role-based access, and multiple visualization formats to enable data-driven decision-making.',
        role: 'Lead Front-end Developer',
        duration: '8 Months',
        outcome: '40% Efficiency Gain',
        challenge: 'The challenge was to replace a legacy, fragmented reporting system with a unified, high-performance portal capable of handling millions of data points across global regions.',
        solution: 'Led front-end development ensuring seamless integration with backend workflows. Designed and implemented configurable report templates using lazy loading and server-side pagination for maximum performance.',
        features: [
          { title: 'Real-time Advanced Analytics', desc: 'Live data processing engine.', icon: 'chart' },
          { title: 'Granular RBAC', desc: 'Sophisticated permission system for Admins and Managers.', icon: 'lock' },
          { title: 'Dynamic Templates', desc: 'Configurable report builder for diverse data views.', icon: 'layout' }
        ],
        responsibilities: [
          'Led front-end development ensuring seamless integration with backend workflows',
          'Designed and implemented configurable report templates supporting tables, charts, and pivot views',
          'Built role-based dashboards with access control for Admins, Managers, and Business Users',
          'Optimized performance for large datasets using lazy loading and server-side pagination',
          'Conducted unit testing, UAT support, production deployment, and post-release maintenance',
          'Collaborated with backend teams to define flexible APIs for dynamic reporting requirements'
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 2,
        title: "Commercial Corporate Cards Portal",
        tech: ["Angular", "TypeScript", "PrimeNG", "Bootstrap"],
        category: "Angular",
        description: "A secure, high-traffic self-service portal designed for commercial banking clients to manage corporate card lifecycles. The platform integrates complex security protocols for card activation, PIN management, and transaction monitoring, significantly improving transaction compliance and reducing manual banking overhead for over 500+ institutional users.",
        details: [
          "Built secure self-service corporate card management platform for 500+ users across multiple banks",
          "Implemented comprehensive security systems with role-based access control and cryptographic data protection",
          "Improved transaction compliance accuracy by 30% through robust validation logic",
          "Developed features including card activation, PIN management, and transaction monitoring",
          "Handled unit testing, UAT, and post-production support"
        ],
        overview: 'Commercial Cards Portal solution is a self-service web application to manage different services from cardholders for Commercial cards project. Its functionality supports the Commercial Cards Proposition of Banks. The main intended audience of this application are AFS Admins, Bank Ops team, Corporate and Cost Center Admins, Call Center and Card Users.',
        role: 'Front-End Developer',
        duration: '12 Months',
        outcome: 'Zero Downtime',
        challenge: 'Developing a multi-level access system for Corporate, Cost Center, and individual Card Users while maintaining high transaction integrity.',
        solution: 'Involved in design and developing the front end which communicates with the portal business layer. Implemented Maker-checker for different functions and modules, including cost center management, card activation, and transaction controls, utilizing cryptography for sensitive data security.',
        features: [
          { title: 'Multi-Level Access Control', desc: 'Custom portals for AFS Admins, Banks, Corporates, and Cardholders.', icon: 'lock' },
          { title: 'Maker-Checker Logic', desc: 'Secure dual-approval workflows for critical operations.', icon: 'users' },
          { title: 'Self-Service PIN & Activation', desc: 'Cardholder services like PIN set/change and balance enquiry.', icon: 'activity' },
          { title: 'Enterprise Cryptography', desc: 'Implementation of high-security encryption for sensitive financial data.', icon: 'shield' }
        ],
        responsibilities: [
          'Involved in design and developing the front end which communicates with the portal business layer',
          'Understanding and developing the application as per the requirement',
          'Implementation of Maker-checker for different functions and modules',
          'Unit Testing of Developed Modules',
          'UAT/Production support with Implementation and Deployment',
          'Cryptography implementation for sensitive data'
        ],
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 3,
        title: "Knowledge Hub Portal",
        tech: ["Angular", "Node.js", "Bootstrap", "MongoDB"],
        category: "Angular",
        description: "An enterprise-grade service management and ticketing system engineered with a Micro Frontend architecture for modularity and high availability. The platform processes over 2,000+ support records monthly, featuring automated workflow assignments, real-time status notifications, and consolidated dashboard analytics to streamline internal organizational knowledge sharing.",
        details: [
          "Architected and developed a ticketing system processing 2,000+ records monthly",
          "Implemented Micro Frontend architecture using Angular Module Federation",
          "Developed bulk ticket upload capabilities and automated workflow assignments",
          "Integrated real-time notifications and dashboard analytics"
        ],
        overview: 'The Finsol Knowledge Hub Portal is an internal ticket tracking and management system used to monitor client-raised issues across UAT, SIT, and Production environments. It provides end-to-end visibility into ticket lifecycles — from issue creation to resolution — ensuring efficient collaboration, timely closures, and transparency across support and development teams.',
        role: 'Full-Stack Developer',
        duration: '6 Months',
        outcome: '2k+ Monthly Tickets',
        challenge: 'Providing end-to-end visibility and environment-based segregation for ticket lifecycles across multiple client support tiers.',
        solution: 'Developed end-to-end features using React Js for the frontend and Java with MongoDB for the backend. Designed RESTful APIs to handle ticket creation, updates, filtering, and environment-based segregation, including bulk upload/export functionalities.',
        features: [
          { title: 'Ticket Lifecycle Management', desc: 'End-to-end tracking from issue creation to resolution.', icon: 'activity' },
          { title: 'Environment Segregation', desc: 'Distinct tracking for UAT, SIT, and Production environments.', icon: 'lock' },
          { title: 'Bulk Data Operations', desc: 'High-performance Excel bulk upload and PDF/Excel export.', icon: 'layout' },
          { title: 'Maker-Checker Security', desc: 'Role-based access control for balanced data visibility.', icon: 'users' }
        ],
        responsibilities: [
          'Developed end-to-end features using React Js for the frontend and Java with MongoDB for the backend',
          'Designed RESTful APIs to handle ticket creation, updates, filtering, and environment-based segregation',
          'Implemented bulk ticket upload via Excel and export functionality to Excel and PDF formats',
          'Built Maker-Checker logic and role-based access control for ticket actions and data visibility',
          'Optimized MongoDB queries for performance and applied cryptographic security for sensitive data',
          'Handled unit testing, UAT coordination, production deployment, and post-release support'
        ],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 4,
        title: "Hospital Management System",
        tech: ["JavaScript", "Bootstrap"],
        category: "JavaScript",
        description: "A comprehensive ERP solution tailored for healthcare administration, streamlining complex hospital workflows from patient registration to billing and pharmacy management. The system provides a centralized digital environment for EMR handling, laboratory reports, and inventory tracking, optimized for high performance and accessibility in critical medical environments.",
        details: [
          "Collaborated with clients to translate hospital processes into functional UI screens",
          "Designed and implemented modules for Administration, Billing, Laboratory, Pharmacy, and EMR",
          "Ensured responsive and accessible design using Bootstrap",
          "Optimized frontend performance for data-heavy dashboards"
        ],
        overview: 'The Hospital Management System is designed to automate the complete day-to-day activities of different departments. This HMS ERP system includes Hospital Administration, Outpatient and Inpatient Management, Complete Investigations Billing and Reporting, Stores, EMR and other modules. These modules track Cash and Credit status and provide live bed management.',
        role: 'Frontend Developer',
        duration: '5 Months',
        outcome: 'Paperless Operations',
        challenge: 'Digitizing complex manual hospital records and automating inter-departmental stock flow and live bed management.',
        solution: 'Developed functionality using Java and Bootstrap based on functional specification analysis. Integrated EMR modules with Billing and Pharmacy to achieve a paperless state, and handled production issue support and unit testing.',
        features: [
          { title: 'Electronic Medical Records (EMR)', desc: 'Generates electronic prescriptions and integrates with billing/pharmacy.', icon: 'activity' },
          { title: 'Live Bed Management', desc: 'Real-time monitoring of bed vacancies and inpatient status.', icon: 'layout' },
          { title: 'Automated Stock Flow', desc: 'Stores module for tracking correct stock statements across departments.', icon: 'chart' },
          { title: 'Integrated Investigations', desc: 'Complete investigations billing, reporting, and hospital administration.', icon: 'lock' }
        ],
        responsibilities: [
          'Analyzing the Functional Specification document and understanding the requirement',
          'Development of functionality in Java and Bootstrap',
          'Interacting with the client support team for understanding of the production issues',
          'Prepare Unit test cases and perform Unit Testing',
          'Clearing process development',
          'Implementation and Code review'
        ],
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80'
      }
    ]);
  }

  getExperience(): Observable<any[]> {
    return of([
      {
        id: 1,
        role: "Front-End Developer | Software Engineer",
        company: "Finsol Consultancy Private Limited",
        duration: "July 2022 – Present",
        location: "Visakhapatnam, India",
        isCurrent: true,
        summary: 'Dedicated Front End developer with close to 4 years of experience in designing and developing enterprise level web applications.',
        description: [
          "Developed and maintained 15+ scalable enterprise web applications using Angular, ReactJS, and TypeScript.",
          "Improved application performance by 30% through advanced coding techniques and UI optimization.",
          "Reduced production defects by 40% using structured debugging and unit testing.",
          "Increased deployment accuracy by 35% implementing GitHub version control workflows.",
          "Delivered Agile development cycles improving sprint delivery efficiency by 25%.",
          "Implemented Redux/NgRx for state management and integrated RESTful APIs.",
          "Designed Micro Frontend architecture using Angular Module Federation.",
          "Reduced UAT issue leakage by 20% through structured testing and coordination.",
          "Mentored junior developers on front-end development and debugging techniques.",
          "Coordinated 10+ Production releases ensuring zero downtime.",
          "Delivered L2/L3 support, improving client satisfaction score by 30%."
        ]
      }
    ]);
  }

  sendMessage(data: any): Observable<any> {
    console.log('Message sent:', data);
    return of({ success: true });
  }
}