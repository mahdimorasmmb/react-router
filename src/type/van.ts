export type CategoryVans = "simple" | "luxury" | "rugged";

export type TVan = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: CategoryVans;
  hostId:string
};