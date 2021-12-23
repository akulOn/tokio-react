import { makeAutoObservable } from "mobx";
import { footerData } from "../componenets/data/footerData";
import { headerData } from "../componenets/data/headerData";
import { Language } from "../types/Enums";

export default class MainStore {
  selcetedLanguage: Language = Language.Serbian; // kasnije da se cita iz memorije/cookie
  headerData: string[] | undefined = [];
  footerData: string[] | undefined = [];

  constructor() {
    makeAutoObservable(this);
    this.getHeaderData();
    this.getFooterData();
  }

  setLanguage = (selcetedLanguage: number) => {
    this.selcetedLanguage = selcetedLanguage;
    this.getHeaderData();
    this.getFooterData();
  };

  getHeaderData = () => {
    this.headerData = headerData.find(
      (x) => x.key === this.selcetedLanguage
    )?.data;
  };

  getFooterData = () => {
    this.footerData = footerData.find(
      (x) => x.key === this.selcetedLanguage
    )?.data;
  };
}
