// getCategoriesLeaderboardPreview

export type CategoriesLeaderboardPreview = {
  id: string
  name: string
  slug: string
  ranks: Rank[]
}[]

type Rank = {
  website: Website
  rank: number
  change: null
  siteWeight: number
}

type Website = {
  id: string
  name: string
  url: string
}

