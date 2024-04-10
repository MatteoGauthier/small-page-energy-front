// getLeaderboardByCategory

export type LeaderboardByCategory = {
  rank: number
  change: null
  website: Website
  siteWeight: number
}

type Website = {
  id: string
  name: string
  url: string
  categories: Category[]
}

type Category = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  slug: string
  description: null
}
