export type GetWebsiteResult = {
  website: Website
  globalRank: Rank[]
  categoriesRanks: CategoriesRank[]
}

type CategoriesRank = {
  category: Category
  ranks: Rank[]
}

type Category = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  slug: string
  description: null
}

type Rank = {
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

type Website = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  url: string
  description: null
  wrongMeasure: boolean
  ranks: Rank[]
}
