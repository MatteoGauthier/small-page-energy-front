import type { CategoriesLeaderboardPreview } from "../types/api/getCategoriesLeaderboardPreview"

const BASE_URL = "https://small-page-energy.osc-fr1.scalingo.io"

const fetcher = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}/api${endpoint}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${import.meta.env.API_TOKEN}`,
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
  return await fetcher(`/categories`)
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
