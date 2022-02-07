import { Inject, Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  countrySuccessAction,
  countryAction,
} from "../actions/weather.actions";
import { map, switchMap } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
import { TcsServiceService } from "../tcs-service.service";
import { Observable, of } from "rxjs";
import { selectRegion } from "../reducers";

@Injectable()
export class CountryEffects {
  private regionData$: Observable<any>;
  constructor(
    private actions$: Actions,
    @Inject(Store) private store: Store<any>,
    private weatherService: TcsServiceService
  ) {
    this.regionData$ = this.store.pipe(select(selectRegion));
  }

  @Effect() country$ = this.actions$.pipe(
    ofType<any>(countryAction.type),
    switchMap((action) => {
      const selectData = this.store.pipe(select(selectRegion));
      let isExist = false;
      selectData.subscribe((regionReducer) => {
        isExist = regionReducer.data[action.payload.region] ? true : false;
      });
      if (isExist) {
        return of({
          type: countrySuccessAction.type,
        });
      }
      return this.weatherService.getCountry(action.payload).pipe(
        map((res: any) => {
          return {
            type: countrySuccessAction.type,
            payload: { data: res, region: action.payload.region },
          };
        })
      );
    })
  );
}
