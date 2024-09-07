export interface IallCategories {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}