import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroComponent, SkillsComponent,
            ProjectsComponent, ExperienceComponent, ContactComponent],
  template: `
    <app-navbar></app-navbar>
    <main style="padding-top: 72px">
      <app-hero></app-hero>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-experience></app-experience>
      <app-contact></app-contact>
    </main>
  `,
  styles: [`main { background: #0a0a0f; min-height: 100vh; }`]
})
export class AppComponent {}