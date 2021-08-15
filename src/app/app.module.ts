import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './components/search/search.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import {MatIconModule} from "@angular/material/icon";
import { GenresComponent } from './components/genres/genres.component';
import { SingleGenreComponent } from './components/genres/single_genre/single-genre.component';
import { DetailsComponent } from './components/details/details.component';
import { MainComponent } from './components/main/main.component';
import {GaugeModule} from "angular-gauge";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {NgxPaginationModule} from "ngx-pagination";
import {MovieResolveService} from "./services/movie-resolve.service";



let routes: Routes = [
  {path: '', component: MainComponent, resolve: {xxx: MovieResolveService}},
  {path: 'search/:video-search', component: MainComponent},
  {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    GenresComponent,
    SingleGenreComponent,
    DetailsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatIconModule,
    GaugeModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    NgxPaginationModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
