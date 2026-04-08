import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Quiz Overs — Mock Exam Platform',
      featured: true,
      type: 'Full Stack',
      description: 'An online mock exam preparation platform enabling users to take topic-based quizzes, track scores, and review answers — built end-to-end across Angular, ASP.NET Core, and SQL Server.',
      points: [
        'Designed and implemented RESTful CRUD APIs for quiz creation, user responses, and result management using ASP.NET Core Web API',
        'Used Entity Framework Core and LINQ for efficient database operations; wrote optimised SQL queries to improve response time',
        'Collaborated with frontend team to align API contracts, authentication flows, and data handling between Angular UI and backend',
        'Participated in cross-layer debugging and testing to ensure a reliable, defect-free user experience',
      ],
      stack: ['Angular', 'ASP.NET Core', 'SQL Server', 'Entity Framework Core', 'LINQ', 'REST API']
    },
    {
      title: 'Finovers — Finance Management System',
      featured: false,
      type: 'Frontend + API',
      description: 'A finance management platform with transaction tracking, reporting dashboards, and multi-module workflows — integrating Angular UI with REST APIs for real-time data rendering.',
      points: [
        'Developed Angular UI modules for transaction and reporting workflows, integrating REST APIs for real-time data rendering',
        'Implemented robust form validation and error handling, reducing user-submitted data errors significantly',
        'Coordinated with backend team to maintain API consistency and data integrity across all modules',
      ],
      stack: ['Angular', 'TypeScript', 'RxJS', 'Reactive Forms', 'REST API', '.NET Core']
    }
  ];
}