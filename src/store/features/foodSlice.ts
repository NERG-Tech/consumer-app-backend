import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dayjs } from "dayjs";

export interface Food {
  name: string;
  description: string;
  quantity: number;
  foodNutrients: Array<{
    foodNutrientId: string;
    nutrientName: string;
    unitName: string;
    value: number;
  }>;
  disseminationText: string;
  gramPerWeight: number;
  dateTime: number;
}

export interface CartState {
  cart: Food[];
}

const initialState: CartState = {
  cart: [],
};

export const FoodSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeCart: (
      state,
      action: PayloadAction<{
        description: string;
        disseminationText: string;
      }>
    ) => {
      state.cart = state.cart.filter(
        (item) =>
          item.description !== action.payload.description ||
          item.disseminationText !== action.payload.disseminationText
      );
    },
    addCart: (
      state,
      action: PayloadAction<{
        name: string;
        description: string;
        quantity: number;
        foodNutrients: Array<any>;
        disseminationText: string;
        gramPerWeight: number;
        dateTime: number;
      }>
    ) => {
      state.cart.push({
        name: action.payload.name,
        description: action.payload.description,
        quantity: action.payload.quantity,
        foodNutrients: action.payload.foodNutrients,
        disseminationText: action.payload.disseminationText,
        gramPerWeight: action.payload.gramPerWeight,
        dateTime: action.payload.dateTime,
      });
    },
    resetCart: (state, action) => {
      state.cart = [];
    },
  },
});
export default FoodSlice.reducer;
export const { addCart, resetCart, removeCart } = FoodSlice.actions;
