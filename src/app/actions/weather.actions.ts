import { createAction, props } from '@ngrx/store';

export const tcsWeathers = createAction(
  '[Weather] TCS Weathers'
);

export const countryAction = createAction(
  '[Country] TCS country'
);

export const countrySuccessAction = createAction(
  '[Country] TCS country success'
);

export const countryFailureAction = createAction(
  '[Country] TCS country failure'
);

