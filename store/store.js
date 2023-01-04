import create from "zustand";

export const useStore = create((set) => ({
  //cart
  cart: {
    foods: [],
  },

  //add Food in Cart
  addFood: (data) =>
    set((state) => ({
      cart: {
        foods: [...state.cart.foods, data],
      },
    })),

  // Remove Food
  removeFood: (index) =>
    set((state) => ({
      cart: {
        foods: state.cart.foods.filter((_, i) => i != index),
      },
    })),
  resetCart: () =>
    set(() => ({
      cart: {
        foods: [],
      },
    })),
}));
