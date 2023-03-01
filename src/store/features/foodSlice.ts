import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type arrayType = {
//   foodNutrientId: number;
// };
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
  foodMeasures: Array<any>;
}

interface CartState {
  cart: Food[];
}

const initialState: CartState = {
  cart: [],
};

export const FoodSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (
      state,
      action: PayloadAction<{
        name: string;
        description: string;
        quantity: number;
        foodNutrients: Array<any>;
        foodMeasures: Array<any>;
      }>
    ) => {
      let objIndex = state.cart.findIndex(
        (obj) => obj.description === action.payload.description
      );

      if (objIndex > -1) {
        let oldQuantity = state.cart[objIndex].quantity;
        state.cart.splice(objIndex, 1, {
          name: action.payload.name,
          description: action.payload.description,
          quantity: oldQuantity + action.payload.quantity,
          foodNutrients: action.payload.foodNutrients,
          foodMeasures: action.payload.foodMeasures,
        });
      } else {
        state.cart.push({
          name: action.payload.name,
          description: action.payload.description,
          quantity: action.payload.quantity,
          foodNutrients: action.payload.foodNutrients,
          foodMeasures: action.payload.foodMeasures,
        });
      }
    },
    resetCart: (state, action) => {
      state.cart = [];
    },
  },
});
export default FoodSlice.reducer;
export const { addCart, resetCart } = FoodSlice.actions;
