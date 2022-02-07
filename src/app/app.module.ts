import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule} from '@angular/common/http';
import { CountryComponent } from './component/country/country.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryInfoComponent } from './component/country-info/country-info.component';
import { CountryEffects } from './effects/country.effects';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([CountryEffects]),
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
