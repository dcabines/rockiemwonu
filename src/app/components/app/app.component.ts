import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import helm from '@helm';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ...helm],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
