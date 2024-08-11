import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Product {
  id: number;
  qty: number;
}

interface ProductCartStore {
  products: Product[];

  setProduct: (product: Product[]) => void;
}

export const useProductCartStore = create<ProductCartStore>()(
  devtools(
    persist<ProductCartStore>(
      (set) => ({
        products: [],
        setProduct: (product: Product[]) => set({ products: product }),
      }),
      {
        name: "product",
      }
    )
  )
);
