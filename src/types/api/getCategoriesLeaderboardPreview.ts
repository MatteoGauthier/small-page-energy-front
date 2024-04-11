// getCategoriesLeaderboardPreview

export type CategoriesLeaderboardPreview = {
  id:    string;
  name:  string;
  slug:  string;
  ranks: Rank[];
}[]

export type Rank = {
  website:    Website;
  rank:       number;
  change:     null;
  siteWeight: number;
}

export type Website = {
  id:         string;
  name:       string;
  url:        string;
  categories: Category[];
}

export type Category = {
  id:          string;
  createdAt:   string;
  updatedAt:   string;
  name:        string;
  slug:        string;
  description: null;
}

