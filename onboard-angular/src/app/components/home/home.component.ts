// src/app/components/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { StepsService } from '../../services/steps.service';
import { iStep } from '../../interfaces/iStep.interface';
import { EscenaComponent } from '../escena/escena.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  steps: iStep[] = [];

  constructor(private stepsService: StepsService) {}

  ngOnInit() {
    this.steps = this.stepsService.getSteps();
  }
}
