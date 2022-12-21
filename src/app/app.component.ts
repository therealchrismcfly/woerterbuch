import { Component } from "@angular/core";
import { LocalService } from './local.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private localStore: LocalService) {

  }

  ngOnInit(): void {
this.myDictionary = this.localStore.getDictionary()
  }

  title = "woerterbuch";

  filter: "all" | "active" | "done" = "all";

  myDictionary: Array<TranslationEntry> = [{polnisch: "Dobranoc",deutsch: "Gute Nacht" }]

removeTranslationEntry(translationEntry: TranslationEntry) {
    this.myDictionary = this.myDictionary.filter(entry => entry !== translationEntry)
   this.localStore.saveDictionary(this.myDictionary);

}


  addTranslationEntry(deutsch: string, polnisch: string) {
    this.myDictionary.push({deutsch, polnisch})
    this.localStore.saveDictionary(this.myDictionary);
  }
};

export interface TranslationEntry {polnisch: string, deutsch: string}
