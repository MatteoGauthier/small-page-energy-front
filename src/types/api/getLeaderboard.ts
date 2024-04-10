// getLeaderboard

export interface Leaderboard {
  rank:       number;
  change:     null;
  siteWeight: number;
  website:    Website;
}

export interface Website {
  id:         string;
  name:       string;
  url:        string;
  categories: string;
}
