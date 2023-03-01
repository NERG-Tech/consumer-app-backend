import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
}

interface CartState {
  cart: Food[];
  protein: number;
  water: number;
}

const initialState: CartState = {
  cart: [],
  protein: 0,
  water: 0,
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
      }>
    ) => {
      let objIndex = state.cart.findIndex(
        (obj) =>
          obj.description === action.payload.description &&
          obj.disseminationText === action.payload.disseminationText
      );

      if (objIndex > -1) {
        // when there is existing item
        let oldQuantity = state.cart[objIndex].quantity;
        state.cart.splice(objIndex, 1, {
          name: action.payload.name,
          description: action.payload.description,
          quantity: oldQuantity + action.payload.quantity,
          foodNutrients: action.payload.foodNutrients,
          disseminationText: action.payload.disseminationText,
          gramPerWeight: action.payload.gramPerWeight,
        });
      } else {
        // push a new item
        state.cart.push({
          name: action.payload.name,
          description: action.payload.description,
          quantity: action.payload.quantity,
          foodNutrients: action.payload.foodNutrients,
          disseminationText: action.payload.disseminationText,
          gramPerWeight: action.payload.gramPerWeight,
        });
      }
      console.log("state.cart", state.cart);
    },
    resetCart: (state, action) => {
      state.cart = [];
    },
  },
});
export default FoodSlice.reducer;
export const { addCart, resetCart, removeCart } = FoodSlice.actions;
