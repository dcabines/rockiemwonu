import { createActionGroup, emptyProps, props } from '@ngrx/store';

export default createActionGroup({
  source: 'Signup Dialog',
  events: {
    CloseClicked: emptyProps()
  }
});
