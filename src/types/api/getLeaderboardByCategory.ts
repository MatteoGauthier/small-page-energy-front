// getLeaderboardByCategory

export type GetLeaderboardByCategoryResult = {
  rank: number
  change: null
  website: Website
  siteWeight: number
}[]

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
