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

  const [vitaminA, setVitaminA] = useState<number>(0);
  const [vitaminAUnit, setVitaminAUnit] = useState<string>();

  const [thiamin, setThiamin] = useState<number>(0);
  const [thiaminUnit, setThiaminUnit] = useState<string>();

  const [riboflavin, setRiboflavin] = useState<number>(0);
  const [riboflavinUnit, setRiboflavinUnit] = useState<string>();

  const [niacin, setNiacin] = useState<number>(0);
  const [niacinUnit, setNiacinUnit] = useState<string>();

  const [vitaminB6, setVitaminB6] = useState<number>(0);
  const [vitaminB6Unit, setVitaminB6Unit] = useState<string>();

  //Riboflavin

  // Calculate total values each time cart is changed
  useEffect(() => {
    let protein = 0,
      water = 0,
      totalLipidFat = 0,
      carbohydrate = 0,
      fiber = 0,
      vitaminA = 0,
      thiamin = 0,
      riboflavin = 0,
      niacin = 0,
      vitaminB6 = 0;

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

      // vitaminA
      vitaminA +=
        cart.foodNutrients[Cart.indexes["VitaminA"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setVitaminAUnit(cart.foodNutrients[Cart.indexes["VitaminA"]].unitName);

      // thiamin
      thiamin +=
        cart.foodNutrients[Cart.indexes["Thiamin"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setThiaminUnit(cart.foodNutrients[Cart.indexes["Thiamin"]].unitName);

      // riboflavin
      riboflavin +=
        cart.foodNutrients[Cart.indexes["Riboflavin"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setRiboflavinUnit(
        cart.foodNutrients[Cart.indexes["Riboflavin"]].unitName
      );

      // niacin
      niacin +=
        cart.foodNutrients[Cart.indexes["Niacin"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setNiacinUnit(cart.foodNutrients[Cart.indexes["Niacin"]].unitName);

      // vitaminB6
      vitaminB6 +=
        cart.foodNutrients[Cart.indexes["VitaminB6"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setVitaminB6Unit(cart.foodNutrients[Cart.indexes["Niacin"]].unitName);
    });

    setProtein(protein);
    setTotalLipidFat(totalLipidFat);
    setWater(water);
    setCarbohydrate(carbohydrate);
    setFiber(fiber);
    setVitaminA(vitaminA);
    setThiamin(thiamin);
    setRiboflavin(riboflavin);
    setNiacin(niacin);
    setVitaminB6(vitaminB6);
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
          Total Lipid (Fat): {totalLipidFat.toFixed(2)} {totalLipidFatUnit}
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
        <Box>
          Vitamin A: {vitaminA.toFixed(2)} {vitaminAUnit}
        </Box>
        <Box>
          Thiamin (B1): {thiamin.toFixed(2)} {thiaminUnit}
        </Box>
        <Box>
          Riboflavin (B2): {riboflavin.toFixed(2)} {riboflavinUnit}
        </Box>
        <Box>
          Niacin (B3): {niacin.toFixed(2)} {niacinUnit}
        </Box>
        <Box>
          Vitamin B6: {vitaminB6.toFixed(2)} {vitaminB6Unit}
        </Box>
      </Box>
    </div>
  );
};

export default Total;
