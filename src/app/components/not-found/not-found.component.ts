import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import helm from '@helm';

@Component({
  standalone: true,
  imports: [...helm, RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {}
