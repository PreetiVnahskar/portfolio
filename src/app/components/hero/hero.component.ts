import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  displayedName = '';
  nameTyped = false;
  activeRole = 0;
  exitRole = -1;
 
  private nameTimer: any;
  private roleTimer: any;
  private fullName = 'Preeti Banshkar';
 
  roles = [
    'Angular Applications',
    'Full Stack Solutions',
    '.NET Core APIs',
    'Scalable Web Apps',
  ];
 
  stats = [
    { num: '2+', label: 'Years exp.' },
    { num: '10+', label: 'Components' },
    { num: '2', label: 'Prod apps' },
    { num: 'MCA', label: 'Education' },
  ];
 
  techPills = ['Angular 17', '.NET Core', 'TypeScript', 'RxJS', 'SQL Server', 'Cypress', 'REST API', 'Entity Framework', 'Agile'];
 
  cardBadges = ['Angular', '.NET Core', 'TypeScript', 'SQL Server', 'Cypress'];
 
  ngOnInit() {
    // Typewriter for name
    let i = 0;
    this.nameTimer = setInterval(() => {
      this.displayedName = this.fullName.slice(0, i + 1);
      i++;
      if (i >= this.fullName.length) {
        clearInterval(this.nameTimer);
        setTimeout(() => this.nameTyped = true, 800);
      }
    }, 80);
 
    // Rotating roles
    this.roleTimer = setInterval(() => {
      this.exitRole = this.activeRole;
      this.activeRole = (this.activeRole + 1) % this.roles.length;
      setTimeout(() => this.exitRole = -1, 500);
    }, 2800);
  }
 
  ngOnDestroy() {
    clearInterval(this.nameTimer);
    clearInterval(this.roleTimer);
  }
}
 

