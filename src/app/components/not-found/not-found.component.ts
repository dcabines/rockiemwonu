import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as helm from '@helm';

@Component({
  standalone: true,
  imports: [...helm.directives, RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {}
