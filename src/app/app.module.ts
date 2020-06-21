import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { ChallengerComponent } from './challenger/challenger.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailComponent } from './detail/detail.component';
import { RandomizerPipe } from './randomizer.pipe';
import { DoubleCasePipe } from './double-case.pipe';
import { CapitalizerPipe } from './capitalizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    ChallengerComponent,
    PageNotFoundComponent,
    DetailComponent,
    RandomizerPipe,
    DoubleCasePipe,
    CapitalizerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
