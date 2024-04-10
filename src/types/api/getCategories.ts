// getCategories

type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  slug: string;
  description: string | null;
};

export type Categories = Category[];
