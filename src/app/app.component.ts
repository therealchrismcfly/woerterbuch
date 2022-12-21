import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "shoppinglist";

  filter: "all" | "active" | "done" = "all";

  Polnisch = [{ polnisch: "Dobranoc", done: true }];
  Deutsch = [{ deutsch: "Gute Nacht", done: true }];

  get woerterPolnisch() {
    if (this.filter === "all") {
      return this.Polnisch;
    }
    return this.Polnisch.filter((wortPolnisch) =>
      this.filter === "done" ? wortPolnisch.done : !wortPolnisch.done
    );
  }

  get woerterDeutsch() {
    if (this.filter === "all") {
      return this.Deutsch;
    }
    return this.Deutsch.filter((wortDeutsch) =>
      this.filter === "done" ? wortDeutsch.done : !wortDeutsch.done
    );
  }

  addPolnisch(polnisch: string) {
    this.Polnisch.push({
      polnisch,
      done: false
    });
  }

  addDeutsch(deutsch: string) {
    this.Deutsch.push({
      deutsch,
      done: false
    });
  }
}
