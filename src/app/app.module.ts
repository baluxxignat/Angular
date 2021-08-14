import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './components/search/search.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home/home.component';
import {MatIconModule} from "@angular/material/icon";
import { GenresComponent } from './components/genres/genres.component';
import { GenrComponent } from './components/genr/genr.component';


let routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/:video-search', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    GenresComponent,
    GenrComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatIconModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
