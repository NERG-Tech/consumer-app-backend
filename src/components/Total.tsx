import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { useAppSelector } from "../store/store";
import * as Cart from "./Cart";

const Total = () => {
  const cart = useAppSelector((state) => state.cart.cart);

  const [protein, setProtein] = useState<number>(0);
  const [proteinUnit, setProteinUnit] = useState("");

  const [totalLipidFat, setTotalLipidFat] = useState<number>(0);
  const [totalLipidFatUnit, setTotalLipidFatUnit] = useState("");

  const [carbohydrate, setCarbohydrate] = useState<number>(0);
  const [carbohydrateUnit, setCarbohydrateUnit] = useState("");

  const [water, setWater] = useState<number>(0);
  const [waterUnit, setWaterUnit] = useState<string>();

  const [fiber, setFiber] = useState<number>(0);
  const [fiberUnit, setFiberUnit] = useState<string>();

  // Calculate total values each time cart is changed
  useEffect(() => {
    let protein = 0,
      water = 0,
      totalLipidFat = 0,
      carbohydrate = 0,
      fiber = 0;

    cart.forEach((cart) => {
      // Protein
      protein +=
        cart.foodNutrients[Cart.indexes["Protein"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setProteinUnit(cart.foodNutrients[Cart.indexes["Protein"]].unitName);

      // totalLipidFat
      totalLipidFat +=
        cart.foodNutrients[Cart.indexes["TotalLipidFat"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setTotalLipidFatUnit(
        cart.foodNutrients[Cart.indexes["TotalLipidFat"]].unitName
      );
      // Water
      water +=
        cart.foodNutrients[Cart.indexes["Water"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setWaterUnit(cart.foodNutrients[Cart.indexes["Water"]].unitName);

      // carbohydrate
      carbohydrate +=
        cart.foodNutrients[Cart.indexes["Carbohydrate"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setCarbohydrateUnit(
        cart.foodNutrients[Cart.indexes["Carbohydrate"]].unitName
      );

      // fiber
      fiber +=
        cart.foodNutrients[Cart.indexes["Fiber"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setFiberUnit(cart.foodNutrients[Cart.indexes["Fiber"]].unitName);
    });

    setProtein(protein);
    setTotalLipidFat(totalLipidFat);
    setWater(water);
    setCarbohydrate(carbohydrate);
    setFiber(fiber);
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
          Total Lipid Fat: {totalLipidFat.toFixed(2)} {totalLipidFatUnit}
        </Box>
        <Box>
          Carbohydrate: {carbohydrate.toFixed(2)} {carbohydrateUnit}
        </Box>
        <Box>
          Water: {water.toFixed(2)} {waterUnit}
        </Box>
        <Box>
          Fiber: {fiber.toFixed(2)} {fiberUnit}
        </Box>
      </Box>
    </div>
  );
};

export default Total;
