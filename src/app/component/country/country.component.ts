import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { countryAction } from "src/app/actions/weather.actions";
import { selectRegion } from "src/app/reducers";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.css"],
})
export class CountryComponent implements OnInit {
  constructor(
    private FB: FormBuilder,
    @Inject(Store) private store: Store<any>
  ) {}

  countryForm: FormGroup;
  regionData$: Observable<any>;
  selectedIndex: number;
  countryInfo = {};
  countryDisabled: boolean = true;
  ngOnInit() {
    this.createCountryForm();
    this.regionData$ = this.store.pipe(select(selectRegion));
  }

  createCountryForm() {
    this.countryForm = this.FB.group({
      region: ["", Validators.required],
      country: ["", Validators.required],
    });
  }

  country(region) {
    this.store.dispatch({
      type: countryAction.type,
      payload: { region },
    });
  }

  countryInformation(index) {
    this.selectedIndex = index;
  }
}
