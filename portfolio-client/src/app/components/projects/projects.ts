import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: any[] = [];
  filteredProjects: any[] = [];
  categories = ['All Projects', 'Angular', 'JavaScript'];
  selectedCategory = 'All Projects';
  error: string | null = null;
  isLoading = true;
  selectedProject: any = null;
  activeSection: string = 'overview';
  private routeSub: Subscription | null = null;
  private observer: IntersectionObserver | null = null;

  constructor(
    private apiService: ApiService, 
    private cd: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // 1. Always listen to route changes
    this.routeSub = this.route.params.subscribe(params => {
      this.syncProjectFromSlug(params['slug']);
    });

    // 2. Set projects directly (Frontend Only)
    this.projects = [
      {
        id: 1,
        title: 'Dynamic Reporting & Analytics Portal',
        tech: ['Angular', 'TypeScript', 'PrimeNg', 'Bootstrap'],
        category: 'Angular',
        description: 'Led front-end development of a configurable reporting platform. Designed and implemented report templates supporting tables, charts, and pivot views, with role-based dashboards and performance optimization for large datasets.',
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
        title: 'Commercial Corporate Cards Portal',
        tech: ['Angular', 'TypeScript', 'PrimeNg', 'Bootstrap'],
        category: 'Angular',
        description: 'A comprehensive self-service platform for Commercial Card Management, supporting Banks, AFS Admins, Corporate Admins, and Card Users with dual-approval Maker-Checker security and cryptographic data handling.',
        overview: 'Commercial Cards Portal solution is a self-service web application to manage different services from cardholders for Commercial cards project. Its functionality supports the Commercial Cards Proposition of Banks. The main intended audience of this application are AFS Admins, Bank Ops team, Corporate and Cost Center Admins, Call Center and Card Users. AFS Admin creates bank Users, at the same time Bank Ops can operate different Company related activities like adding different Companies, Creating individual accounts etc. Companies will have different Access Levels like Corporate Admins, Cost Center Admins and Card Users. Company Super Admins can do different operations like creating Cost Centers, creating Card Users, Inviting card holders and different transaction controls. Cost Center admins can create different login ids, card transaction controls etc. Card Users can handle different services for their own accounts like Activate Card, set PIN, change PIN, Balance Enquiry, Block Card, View Statement, Transaction History and download E-Statement.',
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
        title: 'Knowledge Hub Portal',
        tech: ['React Js', 'Java', 'MongoDB', 'Bootstrap'],
        category: 'Full-Stack',
        description: 'An internal internal ticket tracking and management system for monitoring client-raised issues across UAT, SIT, and Production environments, built with React and Java.',
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
        title: 'Hospital Management System',
        tech: ['Java', 'Bootstrap'],
        category: 'Enterprise ERP',
        description: 'A comprehensive HMS ERP system automating hospital admin, investigations, billing, and EMR, ensuring a completely paperless and efficient environment.',
        overview: 'The Hospital Management System is designed to automate the complete day-to-day activities of different departments. This HMS ERP system includes Hospital Administration, Outpatient and Inpatient Management, Complete Investigations Billing and Reporting, Stores, EMR and other modules. These modules track complete Cash and Credit status of different billing in a hospital and provide the live bed vacant status with Bed Management. The Stores module automates the process of stock flow from one department to another department and gives correct stock statements in any department. EMR module generates Electronic Prescription and integrates with Billing, Investigations and Pharmacy modules to make the hospital completely paperless.',
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
    ].map((p: any) => ({
      ...p,
      slug: p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }));

    this.isLoading = false;
    this.filterProjects('All Projects');
    this.syncProjectFromSlug(this.route.snapshot.params['slug']);

    setTimeout(() => {
      import('aos').then((m) => {
        const AOS = m.default || m;
        AOS.refresh();
      });
    }, 500);
  }

  private syncProjectFromSlug(slug: string | null) {
    if (!slug) {
      this.selectedProject = null;
      this.activeSection = 'overview';
      document.body.style.overflow = '';
      this.cleanupObserver();
      this.cd.detectChanges();
      return;
    }

    if (this.projects.length === 0) return;

    const project = this.projects.find(p => p.slug === slug);
    if (project) {
      this.selectedProject = project;
      document.body.style.overflow = 'hidden';
      // Setup observer after small delay to allow DOM to render
      setTimeout(() => this.setupIntersectionObserver(), 100);
    } else {
      this.router.navigate(['projects']);
    }
    this.cd.detectChanges();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
    }
  }

  private setupIntersectionObserver() {
    this.cleanupObserver();

    const options = {
      root: null, // modal is fixed, document scroll or local overflow
      rootMargin: '-100px 0px -40% 0px', // Header offset and viewport trigger point
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
          this.cd.detectChanges();
        }
      });
    }, options);

    const sections = ['overview', 'techstack', 'approach', 'features', 'contributions'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer?.observe(el);
    });
  }

  private cleanupObserver() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
    if (category === 'All Projects') {
      this.filteredProjects = this.projects;
    } else {
      // Filter by category field if exists, else loosely filter by tech stack for demo
      this.filteredProjects = this.projects.filter(p => 
        p.category === category || p.tech.some((t: string) => category.includes(t))
      );
    }
  }

  openDetails(project: any) {
    this.router.navigate(['projects', project.slug]);
  }

  getTheme(index: number) {
    const themes = [
      {
        border: 'hover:border-blue-500/30',
        bgNum: 'group-hover:text-blue-500/10',
        gradient: 'from-blue-900/20',
        dot: 'bg-blue-500/80',
        category: 'text-blue-400',
        title: 'group-hover:text-blue-300',
        button: 'group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-blue-500/30'
      },
      {
        border: 'hover:border-purple-500/30',
        bgNum: 'group-hover:text-purple-500/10',
        gradient: 'from-purple-900/20',
        dot: 'bg-purple-500/80',
        category: 'text-purple-400',
        title: 'group-hover:text-purple-300',
        button: 'group-hover:bg-purple-600 group-hover:border-purple-600 group-hover:shadow-purple-500/30'
      },
      {
        border: 'hover:border-emerald-500/30',
        bgNum: 'group-hover:text-emerald-500/10',
        gradient: 'from-emerald-900/20',
        dot: 'bg-emerald-500/80',
        category: 'text-emerald-400',
        title: 'group-hover:text-emerald-300',
        button: 'group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:shadow-emerald-500/30'
      },
      {
        border: 'hover:border-amber-500/30',
        bgNum: 'group-hover:text-amber-500/10',
        gradient: 'from-amber-900/20',
        dot: 'bg-amber-500/80',
        category: 'text-amber-400',
        title: 'group-hover:text-amber-300',
        button: 'group-hover:bg-amber-600 group-hover:border-amber-600 group-hover:shadow-amber-500/30'
      },
      {
        border: 'hover:border-rose-500/30',
        bgNum: 'group-hover:text-rose-500/10',
        gradient: 'from-rose-900/20',
        dot: 'bg-rose-500/80',
        category: 'text-rose-400',
        title: 'group-hover:text-rose-300',
        button: 'group-hover:bg-rose-600 group-hover:border-rose-600 group-hover:shadow-rose-500/30'
      }
    ];
    return themes[index % themes.length];
  }

  closeDetails() {
    this.cleanupObserver();
    this.router.navigate(['projects']);
  }

  ngOnDestroy() {
    this.cleanupObserver();
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
