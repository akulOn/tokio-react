import { makeAutoObservable } from "mobx";
import { headerData } from "../componenets/data/headerData";
import { Data } from "../types/Data";
import { Language } from "../types/Enums";

export default class MainStore {
  selcetedLanguage: Language = Language.Serbian;
  headerData: Data[] = headerData;

  constructor() {
    makeAutoObservable(this);
  }

  setLanguage = (selcetedLanguage: number) => {
    this.selcetedLanguage = selcetedLanguage;
  };

  getHeaderData = () => {
    return headerData.find((x) => x.key === this.selcetedLanguage)?.data;
  };
}
