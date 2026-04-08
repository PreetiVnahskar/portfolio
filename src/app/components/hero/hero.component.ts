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
  cursorBlink = false;
  private t: any;

  stats = [
    { num: '2+', label: 'Years experience' },
    { num: '10+', label: 'UI components built' },
    { num: '2', label: 'Production apps' },
    { num: '100%', label: 'Agile delivery' },
  ];

  ngOnInit() { this.t = setTimeout(() => this.cursorBlink = true, 1200); }
  ngOnDestroy() { clearTimeout(this.t); }
}