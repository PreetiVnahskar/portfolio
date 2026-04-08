import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  active = 0;

  jobs = [
    {
      role: 'Junior Software Developer',
      company: 'Episeron Pvt Ltd',
      location: 'Indore, MP',
      from: 'Mar 2024',
      to: 'Jan 2026',
      current: true,
      points: [
        'Developed and maintained Angular modules integrated with .NET Core REST APIs, contributing to 2 production applications serving end-users.',
        'Built 10+ reusable UI components and reactive forms, reducing code duplication and improving maintainability across teams.',
        'Integrated and validated REST APIs using Postman, collaborating with backend developers to streamline data flow and reduce integration defects.',
        'Automated UI test scenarios using Cypress, improving regression test coverage and reducing manual QA effort.',
        'Managed sprint tasks and project progress using Tracker, the company\'s internal project management tool, ensuring timely delivery.',
        'Assisted in backend debugging across UI and API layers including SQL Server query verification during issue resolution.',
      ],
      tech: ['Angular', 'TypeScript', '.NET Core', 'REST API', 'Cypress', 'SQL Server', 'Postman', 'Git', 'Agile']
    }
  ];

  education = [
    {
      degree: 'Master of Computer Science & Applications (MCA)',
      school: 'Dr. Hari Singh Gaur Central University, Sagar MP',
      year: 'Graduated Sept 2023'
    },
    {
      degree: 'Bachelor of Computer Science & Applications (BCA)',
      school: 'MCRPV, Bhopal',
      year: 'Graduated Sept 2019'
    }
  ];
}