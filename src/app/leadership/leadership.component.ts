import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-leadership",
  templateUrl: "./leadership.component.html",
  styleUrls: ["./leadership.component.scss"],
})
export class LeadershipComponent implements OnInit {
  leadership = [
    {
      id: 1,
      name: "Amanda Maynard",
      title: "President, STEM",
      experience: 8,
      bio: " ",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      id: 2,
      name: "Samantha Crowley",
      title: "Vice President, STEM",
      experience: 8,
      bio: " ",
      photo:
        "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
    },
    {
      id: 3,
      name: "Todd Fletcher",
      title: "Chief Financial Officer",
      experience: 7,
      bio: " ",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      id: 4,
      name: "Tiffany Edwards",
      title: "Marketing Director",
      experience: 6,
      bio: " ",
      photo:
        "https://images.unsplash.com/photo-1601931935821-5fbe71157695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    },
    {
      id: 5,
      name: "Chelsea Clayton",
      title: "Director, Public Relations",
      experience: 5,
      bio: " ",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
    },
    {
      id: 6,
      name: "Kevin McCallister",
      title: "Art Director",
      experience: 5,
      bio: " ",
      photo:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
