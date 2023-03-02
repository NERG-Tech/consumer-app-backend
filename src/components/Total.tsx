import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { useAppSelector } from "../store/store";
import * as Cart from "./Cart";

const Total = () => {
  const cart = useAppSelector((state) => state.cart.cart);

  const [protein, setProtein] = useState<number>(0);
  const [proteinUnit, setProteinUnit] = useState("");

  const [water, setWater] = useState<number>(0);
  const [waterUnit, setWaterUnit] = useState<string>();

  // Calculate total values each time cart is changed
  useEffect(() => {
    let protein = 0,
      water = 0;
    cart.forEach((cart) => {
      // Protein
      protein +=
        cart.foodNutrients[Cart.indexes["Protein"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setProteinUnit(cart.foodNutrients[Cart.indexes["Protein"]].unitName);

      // Water
      water +=
        cart.foodNutrients[Cart.indexes["Water"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setWaterUnit(cart.foodNutrients[Cart.indexes["Water"]].unitName);
    });
    setProtein(protein);
    setWater(water);
  }, [cart]);

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "white",
          mt: 3,
          p: 2,
          border: "1px solid black",
          lineHeight: "180%",
          fontSize: "14px",
        }}
      >
        <Box sx={{ fontWeight: "bold" }}>Total Values:</Box>
        <Box>
          Protein: {protein.toFixed(2)} {proteinUnit}
        </Box>
        <Box>
          Water: {water.toFixed(2)} {waterUnit}
        </Box>
      </Box>
    </div>
  );
};

export default Total;
