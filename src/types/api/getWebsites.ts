// src/types/api/getWebsites.ts

export type GetWebsitesResult = {
  id:           string;
  createdAt:    string;
  updatedAt:    string;
  name:         string;
  url:          string;
  description:  null;
  wrongMeasure: boolean;
  categories:   Category[];
}[]

export type Category = {
  name: string;
}
