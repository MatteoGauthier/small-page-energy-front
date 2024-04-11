// getLeaderboard

export interface Leaderboard {
  rank: number
  change: null
  siteWeight: number
  website: Website
}

export type Website = {
  id: string
  name: string
  url: string
  categories: Category[]
}

export type Category = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  slug: string
  description: null
}
