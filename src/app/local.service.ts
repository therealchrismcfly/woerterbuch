import { Injectable } from '@angular/core';
import {TranslationEntry} from "./app.component";

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  public saveDictionary(value: Array<TranslationEntry>) {
    localStorage.setItem("myPolishDictionary", JSON.stringify(value));
  }

  public getDictionary(): Array<TranslationEntry> {
    const savedData = localStorage.getItem("myPolishDictionary");
    if (!savedData) {return []}
    const dictionary = JSON.parse(savedData) as Array<TranslationEntry>;
    return dictionary
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData(){
    localStorage.clear();
  }

  }
