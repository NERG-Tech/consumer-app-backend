import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Food {
  name: string;
  description: string;
  quantity: number;
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
      }>
    ) => {
      let objIndex = state.cart.findIndex(
        (obj) => obj.name == action.payload.name
      );
      console.log("objIndex", objIndex);

      if (objIndex > -1) {
        let oldQuantity = state.cart[objIndex].quantity;
        state.cart.splice(objIndex, 1, {
          name: action.payload.name,
          description: action.payload.description,
          quantity: oldQuantity + action.payload.quantity,
        });
      } else {
        state.cart.push({
          name: action.payload.name,
          description: action.payload.description,
          quantity: action.payload.quantity,
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
