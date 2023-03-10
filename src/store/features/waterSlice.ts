import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Water {
  value: number;
  dateTime: number;
}

export interface CartState {
  cart: Water[];
}

const initialState: CartState = {
  cart: [],
};

export const WaterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addWater: (
      state,
      action: PayloadAction<{
        value: number;
        dateTime: number;
      }>
    ) => {
      state.cart.push({
        value: action.payload.value,
        dateTime: action.payload.dateTime,
      });
    },
    resetWater: (state, action) => {
      state.cart = [];
    },
  },
});
export default WaterSlice.reducer;
export const { addWater, resetWater } = WaterSlice.actions;
