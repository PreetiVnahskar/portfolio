import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  activeFilter = signal<string>('all');

  filters = [
    { key: 'all',      label: 'All Skills',  icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>` },
    { key: 'frontend', label: 'Frontend',    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
    { key: 'backend',  label: 'Backend',     icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>` },
    { key: 'database', label: 'Database',    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg>` },
    { key: 'tools',    label: 'Tools',       icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>` },
  ];

  categories = [
    {
      key: 'frontend', title: 'Frontend', sub: 'UI development', exp: '2 yrs', highlight: true,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      skills: [
        { name: 'Angular', level: 'high' },
        { name: 'TypeScript', level: 'high' },
        { name: 'RxJS', level: 'high' },
        { name: 'Reactive Forms', level: 'high' },
        { name: 'HTML5', level: 'high' },
        { name: 'CSS3', level: 'high' },
        { name: 'HTTP Client', level: 'high' },
        { name: 'JavaScript', level: 'mid' },
        { name: 'Responsive UI', level: 'mid' },
      ]
    },
    {
      key: 'backend', title: 'Backend & API', sub: 'Server-side', exp: '1 yrs', highlight: false,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      skills: [
        { name: 'ASP.NET Core Web API', level: 'high' },
        { name: '.NET Core', level: 'high' },
        { name: 'C#', level: 'high' },
        { name: 'REST API Design', level: 'high' },
        { name: 'Entity Framework Core', level: 'mid' },
        { name: 'LINQ', level: 'mid' },
        { name: 'OOP', level: 'mid' },
        { name: 'JWT Auth', level: 'mid' },
      ]
    },
    {
      key: 'database', title: 'Database', sub: 'Data layer', exp: '1 yrs', highlight: false,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg>`,
      skills: [
        { name: 'SQL Server', level: 'high' },
        { name: 'Query Writing', level: 'high' },
        { name: 'Stored Procedures', level: 'mid' },
        { name: 'Table Design', level: 'mid' },
        { name: 'DB Optimisation', level: 'mid' },
      ]
    },
    {
      key: 'tools', title: 'Tools & Process', sub: 'Dev workflow', exp: '2 yrs', highlight: false,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
      skills: [
        { name: 'Git', level: 'high' },
        { name: 'Postman', level: 'high' },
        { name: 'Cypress (E2E)', level: 'high' },
        { name: 'Visual Studio', level: 'high' },
        { name: 'VS Code', level: 'high' },
        { name: 'Agile / Scrum', level: 'mid' },
        { name: 'Code Reviews', level: 'mid' },
        { name: 'Swagger / OpenAPI', level: 'mid' },
      ]
    }
  ];

  also = ['OOP', 'SDLC', 'RESTful Services', 'Salesforce (Learning)', 'Tracker (PM Tool)', 'Cross-layer Debugging', 'SignalR (basics)'];

  getFiltered() {
    const f = this.activeFilter();
    return f === 'all' ? this.categories : this.categories.filter(c => c.key === f);
  }

  getCount(key: string) {
    if (key === 'all') return this.categories.reduce((a, c) => a + c.skills.length, 0);
    return this.categories.find(c => c.key === key)?.skills.length ?? 0;
  }

  getLevelLabel(level: string) {
    return level === 'high' ? 'Daily use' : level === 'mid' ? 'Proficient' : 'Familiar';
  }
}