export type GetWebsitesWithRanks = {
  website: Website
  globalRank: Rank[]
  categoriesRanks: CategoriesRank[]
}[]

export type CategoriesRank = {
  category: Category
  ranks: Rank[]
}

export type Category = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  slug: string
  description: null
}

export type Rank = {
  id: string
  createdAt: string
  updatedAt: string
  ranking: number
  change: null
  period: null
  websiteId: string
  reportId: string
  categoryId: null | string
  category: Category | null
}

export type Website = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  url: string
  description: null
  wrongMeasure: boolean
  categories: Category[]
  ranks: Rank[]
}
