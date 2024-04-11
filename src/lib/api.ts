import type { Categories } from "../types/api/getCategories"
import type { CategoriesLeaderboardPreview } from "../types/api/getCategoriesLeaderboardPreview"
import type { Leaderboard } from "../types/api/getLeaderboard"
import type { GetLeaderboardByCategoryResult } from "../types/api/getLeaderboardByCategory"
import type { GetWebsiteResult } from "../types/api/getWebsite"
import type { GetWebsitesResult } from "../types/api/getWebsites"

const BASE_URL = "https://small-page-energy.osc-fr1.scalingo.io"

const fetcher = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}/api${endpoint}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer BQsZu102qg_Aq7RVnxmty`,
    },
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json()
}

export const getWebsites = async () => {
  return (await fetcher(`/websites`)) as GetWebsitesResult
}
export const getWebsite = async (websiteId: string) => {
  return (await fetcher(`/websites/${websiteId}`)) as GetWebsiteResult
}

export const getCategories = async () => {
  return (await fetcher(`/categories`)) as Categories
}
export const getLeaderboard = async () => {
  return (await fetcher(`/leaderboard`)) as Leaderboard
}

export const getLeaderboardByCategory = async (categoryId: string) => {
  return (await fetcher(`/leaderboard/${categoryId}`)) as GetLeaderboardByCategoryResult
}

export const getCategoriesLeaderboardPreview = async () => {
  return (await fetcher(`/categories-leaderboard-preview`)) as CategoriesLeaderboardPreview
}
