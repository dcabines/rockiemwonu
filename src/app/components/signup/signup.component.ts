import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { LetDirective } from '@ngrx/component';
import helm from '@helm';
import { actions, selectors } from '@store/signup';
import { BrnDialogState } from '@spartan-ng/ui-dialog-brain';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [LetDirective, ...helm],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  store = inject(Store);

  dialogOpen$ = this.store.select(selectors.getDialogOpen).pipe(
    map((dialogOpen): BrnDialogState => (dialogOpen ? 'open' : 'closed'))
  );

  onCloseClick = () => this.store.dispatch(actions.signup.closeClicked());
}
