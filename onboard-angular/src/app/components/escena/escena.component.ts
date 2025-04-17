import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { iStep } from '../../interfaces/iStep.interface';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
  animations: [
    trigger('slideCard', [
      transition(':increment', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          '300ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          '300ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class EscenaComponent {
  @Input() steps: iStep[] = [];

  current = 0;
  direction: 'left' | 'right' = 'right';

  nextSlide() {
    this.direction = 'right';
    this.current = (this.current + 1) % this.steps.length;
  }

  prevSlide() {
    this.direction = 'left';
    this.current = (this.current - 1 + this.steps.length) % this.steps.length;
  }

  goToSlide(index: number) {
    if (index > this.current) {
      this.direction = 'right';
    } else if (index < this.current) {
      this.direction = 'left';
    }
    this.current = index;
  }
}
