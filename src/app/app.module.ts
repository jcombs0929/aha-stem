import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { DonateComponent } from "./donate/donate.component";
import { FrontPageComponent } from "./front-page/front-page.component";
import { AboutComponent } from "./about/about.component";
import { LeadershipComponent } from "./leadership/leadership.component";
import { VolunteerComponent } from "./volunteer/volunteer.component";
import { ContactComponent } from "./contact/contact.component";
import { EventsComponent } from "./events/events.component";
import { HeroComponent } from "./front-page/hero/hero.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DonateComponent,
    FrontPageComponent,
    AboutComponent,
    LeadershipComponent,
    VolunteerComponent,
    ContactComponent,
    EventsComponent,
    HeroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ModalModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
