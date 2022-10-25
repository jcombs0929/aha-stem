import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"],
})
export class EventsComponent implements OnInit {
  newsEvents = [
    {
      id: 1,
      title: "STEM Goes Red Conference",
      subtitle: "",
      date: "October 19, 2022",
      time: "1:00PM - 5:00PM",
      description: "",
      location: "The Omni Hotel",
      city: "Dallas",
      state: "TX",
      icon: "icon",
      type: "register",
    },
    {
      id: 2,
      title: "Mentor/Mentee Interactions",
      subtitle: "",
      date: "October 19, 2022",
      time: "1:00PM - 5:00PM",
      description:
        "Real-life experience in a STEM career Mentor and Mentee Interactions",
      location: "",
      city: "",
      state: "",
      icon: "mentor-icon",
      type: "info",
    },
    {
      id: 3,
      title: "Steering Committee Meeting",
      subtitle: "You're My Why",
      date: "November 30, 2022",
      time: "1:00PM - 3:00PM",
      description:
        "Provide expertise in producing an impactful and educational program.",
      location: "",
      city: "",
      state: "",
      icon: "committee-icon",
      type: "register",
    },
    {
      id: 4,
      title: "STEM Seminar",
      subtitle: "You're My Why",
      date: "November 14, 2022",
      time: "4:00PM - 6:00PM",
      description:
        "Learn about the future growth of STEM careers.",
      location: "",
      city: "",
      state: "",
      icon: "icon",
      type: "info",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
