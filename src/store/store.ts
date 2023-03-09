import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { FoodSlice } from "./features/foodSlice";
import { WaterSlice } from "./features/waterSlice";

export const store = configureStore({
  reducer: { cart: FoodSlice.reducer, waterCart: WaterSlice.reducer },
});
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
