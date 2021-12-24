import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent implements OnInit {
  stemType: string;
  stemTypeInterval: any;

  types: any = [
    "Scientists",
    "Technologists",
    "Engineers",
    "Mathematicians",
    "You",
  ];

  constructor() {
    this.stemType = this.types[0];
    this.getStemType();
  }

  ngOnInit(): void {}

  getStemType() {
    let num = 0;
    this.stemTypeInterval = setInterval(() => {
      if (num > 3) num = 0;
      else num += 1;
      this.stemType = this.types[num];
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.stemTypeInterval);
  }
}
