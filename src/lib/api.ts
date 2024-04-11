import type { Categories } from "../types/api/getCategories"
import type { CategoriesLeaderboardPreview } from "../types/api/getCategoriesLeaderboardPreview"

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
  return await fetcher(`/websites`)
}

export const getCategories = async () => {
  return (await fetcher(`/categories`)) as Categories
}
export const getLeaderboard = async () => {
  return await fetcher(`/leaderboard`)
}

export const getLeaderboardByCategory = async (categoryId: string) => {
  return await fetcher(`/leaderboard/${categoryId}`)
}

export const getCategoriesLeaderboardPreview = async () => {
  return (await fetcher(`/categories-leaderboard-preview`)) as CategoriesLeaderboardPreview
}
