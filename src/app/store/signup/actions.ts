import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const signup = createActionGroup({
  source: 'Signup Dialog',
  events: {
    CloseClicked: emptyProps()
  }
});
