import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { DonateComponent } from "./donate/donate.component";
import { EventsComponent } from "./events/events.component";
import { FrontPageComponent } from "./front-page/front-page.component";
import { LeadershipComponent } from "./leadership/leadership.component";
import { VolunteerComponent } from "./volunteer/volunteer.component";

const routes: Routes = [
  { path: "", component: FrontPageComponent },
  { path: "about", component: AboutComponent },
  { path: "events", component: EventsComponent },
  { path: "contact", component: ContactComponent },
  { path: "donate", component: DonateComponent },
  { path: "leadership", component: LeadershipComponent },
  { path: "volunteer", component: VolunteerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
