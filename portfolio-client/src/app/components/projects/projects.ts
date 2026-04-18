import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  filteredProjects: any[] = [];
  categories = ['All Projects', 'Angular', 'JavaScript'];
  selectedCategory = 'All Projects';
  error: string | null = null;
  isLoading = true;
  selectedProject: any = null;
  private routeSub: Subscription | null = null;

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

    // 2. Fetch projects (with fallback)
    this.apiService.getProjects().subscribe({
        next: (data) => {
          this.isLoading = false;
          this.projects = data.map((p: any) => ({
          ...p,
          slug: p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        }));
        this.filterProjects('All Projects');
        this.syncProjectFromSlug(this.route.snapshot.params['slug']);
        
        setTimeout(() => {
          import('aos').then(AOS => AOS.refresh());
        }, 500);
      },
      error: (e) => {
        console.error('Error fetching projects', e);
        this.projects = [
          {
            title: "Dynamic Reporting & Analytics Portal",
            tech: ["Angular", "TypeScript", "PrimeNG", "Bootstrap"],
            description: "A comprehensive data visualization ecosystem built for enterprise scale, featuring real-time telemetry, customizable dashboards, and complex RBAC management.",
            role: "Lead Developer",
            duration: "8 Months",
            outcome: "40% Efficiency Gain",
            challenge: "The challenge was to replace a legacy, fragmented reporting system with a unified, high-performance portal capable of handling millions of data points across global regions.",
            solution: "Working closely with stakeholders, I architected the frontend using Angular’s latest Signal API.",
            features: [
              { title: "Real-time Advanced Analytics", desc: "Live data processing engine.", icon: "chart" },
              { title: "Granular RBAC", desc: "Sophisticated permission system.", icon: "lock" },
              { title: "Dynamic Templates", desc: "Drag-and-drop report builder.", icon: "layout" }
            ],
            category: "Angular",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
          },
          {
            title: "Commercial Corporate Cards Portal",
            tech: ["Angular", "TypeScript", "PrimeNG", "Bootstrap"],
            description: "Secure self-service corporate card management platform.",
            role: "Senior Engineer",
            duration: "12 Months",
            outcome: "Zero Downtime",
            challenge: "Migrating sensitive financial operations to a digital portal.",
            solution: "Implemented cryptographic data handling.",
            features: [
              { title: "Cryptographic Security", desc: "End-to-end encryption.", icon: "shield" },
              { title: "Maker-Checker Workflow", desc: "Dual-approval mechanism.", icon: "users" }
            ],
            category: "Angular",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80"
          },
          {
            title: "Knowledge Hub Portal",
            tech: ["Angular", "Node.js", "Bootstrap", "MongoDB"],
            description: "Enterprise ticket tracking system.",
            role: "Architect",
            duration: "6 Months",
            outcome: "2k+ Monthly Tickets",
            challenge: "Monolithic tool extraction.",
            solution: "Micro Frontend architecture.",
            features: [
              { title: "Micro Frontend Arch", desc: "Decoupled modules.", icon: "cube" }
            ],
            category: "Angular",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80"
          },
          {
            title: "Hospital Management System",
            tech: ["JavaScript", "Bootstrap"],
            description: "Comprehensive hospital ERP system UI.",
            role: "Frontend Dev",
            duration: "5 Months",
            outcome: "Paperless Ops",
            challenge: "Digitizing manual hospital records.",
            solution: "Designed touch-target interfaces.",
            features: [
              { title: "EMR Integration", desc: "Lab results to EMR.", icon: "activity" }
            ],
            category: "JavaScript",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
          }
        ].map((p: any) => ({
          ...p,
          slug: p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        }));
        this.isLoading = false;
        this.filterProjects('All Projects');
        this.syncProjectFromSlug(this.route.snapshot.params['slug']);
      }
    });
  }

  private syncProjectFromSlug(slug: string | null) {
    if (!slug) {
      this.selectedProject = null;
      document.body.style.overflow = '';
      this.cd.detectChanges();
      return;
    }

    if (this.projects.length === 0) return;

    const project = this.projects.find(p => p.slug === slug);
    if (project) {
      this.selectedProject = project;
      document.body.style.overflow = 'hidden';
    } else {
      this.router.navigate(['projects']);
    }
    this.cd.detectChanges();
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
    this.router.navigate(['projects']);
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
