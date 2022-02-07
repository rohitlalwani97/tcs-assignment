import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import {
  countryAction,
  countrySuccessAction,
  countryFailureAction,
} from "../actions/weather.actions";

export interface State {}

export const initialRegionState: any = {
  data: {},
  success: false,
  pending: false,
  failure: false,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export function regionReducer(
  state: any = initialRegionState,
  action: any
): any {
  switch (action.type) {
    case countryAction.type:
      return {
        data: {...state.data },
        success: false,
        pending: true,
        failure: false,
      };
    case countrySuccessAction.type:
      let obj = { ...state.data };
      if (action.payload && action.payload.region) {
        obj = {
          ...state.data,
          ...{ [action.payload.region]: action.payload.data },
        };
      }
      return {
        data: obj,
        success: true,
        pending: false,
        failure: false,
      };
    case countryFailureAction.type:
      return {
        data: action.payload,
        success: false,
        pending: false,
        failure: true,
      };
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<State> = {
  regionReducer,
};

export const selectRegion = (state: any) => state.regionReducer;
