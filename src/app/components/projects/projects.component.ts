import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  activeFilter = signal<string>('All');
  filters = ['All', 'Full Stack', 'Frontend', 'Upcoming'];

  show(type: string) {
    const f = this.activeFilter();
    return f === 'All' || f === type;
  }

  assetStack = ['Angular', 'TypeScript', 'Reactive Forms', 'HTTP Client', 'ASP.NET Core', 'C#', 'REST API', 'JWT Auth', 'SQL Server', 'EF Core', 'Visual Studio'];
  portfolioStack = ['Angular 17', 'TypeScript', 'CSS3', 'GitHub Pages', 'angular-cli-ghpages'];
  quizStack = ['Angular', 'ASP.NET Core', 'SQL Server', 'Entity Framework Core', 'LINQ', 'REST API'];
  finoStack = ['Angular', 'TypeScript', 'RxJS', 'Reactive Forms', '.NET Core', 'REST API'];
  // expenseStack = ['Angular', 'TypeScript', 'Chart.js', 'localStorage', 'GitHub Pages'];
  // kanbanStack = ['Angular', 'Angular CDK', 'TypeScript', 'CSS3', 'localStorage'];

  suggestions = [
    { name: 'Weather App', desc: 'Call OpenWeather API, show 5-day forecast with Angular pipes', time: '1–2 days' },
    { name: 'GitHub Profile Viewer', desc: 'Search GitHub users, show repos and stats using GitHub API', time: '2 days' },
    { name: 'Notes App', desc: 'CRUD notes with tags, search, and localStorage persistence', time: '2–3 days' },
    { name: 'BMI Calculator', desc: 'Reactive form with real-time BMI calculation and health tips', time: '1 day' },
  ];
}