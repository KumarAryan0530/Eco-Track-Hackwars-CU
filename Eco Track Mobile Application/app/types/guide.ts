export enum GuideCategory {
  home = "home",

}

export interface Guide {
  title: string;
  category: GuideCategory;
  body: string;
  key: string;
}
