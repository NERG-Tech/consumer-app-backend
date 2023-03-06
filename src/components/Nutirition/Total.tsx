import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { useAppSelector } from "../../store/store";

import * as Calculator from "./calculator";

const Total = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  const [nutrition, setNutrition] = useState<any>(null);

  useEffect(() => {
    console.log("Calculator.calculate(cart)", Calculator.calculate(cart));
    setNutrition(Calculator.calculate(cart));
  }, [cart]);

  console.log(nutrition);

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

        {nutrition && (
          <Box>
            <Box>
              Protein: {nutrition.protein.toFixed(2)} {nutrition.proteinUnit}
            </Box>
            <Box>
              Total Lipid (Fat): {nutrition.totalLipidFat.toFixed(2)}{" "}
              {nutrition.totalLipidFatUnit}
            </Box>
            <Box>
              Carbohydrate: {nutrition.carbohydrate.toFixed(2)}{" "}
              {nutrition.carbohydrateUnit}
            </Box>
            <Box>
              Water: {nutrition.water.toFixed(2)} {nutrition.waterUnit}
            </Box>
            <Box>
              Fiber: {nutrition.fiber.toFixed(2)} {nutrition.fiberUnit}
            </Box>
            <Box>
              Vitamin A: {nutrition.vitaminA.toFixed(2)}{" "}
              {nutrition.vitaminAUnit}
            </Box>
            <Box>
              Thiamin (B1): {nutrition.thiamin.toFixed(2)}{" "}
              {nutrition.thiaminUnit}
            </Box>
            <Box>
              Riboflavin (B2): {nutrition.riboflavin.toFixed(2)}{" "}
              {nutrition.riboflavinUnit}
            </Box>
            <Box>
              Niacin (B3): {nutrition.niacin.toFixed(2)} {nutrition.niacinUnit}
            </Box>
            <Box>
              Vitamin B6: {nutrition.vitaminB6.toFixed(2)}{" "}
              {nutrition.vitaminB6Unit}
            </Box>
            <Box>
              Vitamin B12: {nutrition.vitaminB12.toFixed(2)}{" "}
              {nutrition.vitaminB12Unit}
            </Box>
            <Box>
              Vitamin C: {nutrition.vitaminC.toFixed(2)}{" "}
              {nutrition.vitaminCUnit}
            </Box>
            <Box>
              Vitamin D (D2 + D3): {nutrition.vitaminD.toFixed(2)}{" "}
              {nutrition.vitaminDUnit}
            </Box>
            <Box>
              Folate: {nutrition.folate.toFixed(2)} {nutrition.folateUnit}
            </Box>
            <Box>
              Vitamin E (alpha-tocopherol): {nutrition.vitaminE.toFixed(2)}{" "}
              {nutrition.vitaminEUnit}
            </Box>
            <Box>
              Vitamin K (phylloquinone): {nutrition.vitaminK.toFixed(2)}{" "}
              {nutrition.vitaminKUnit}
            </Box>
            <Box>
              Cholesterol: {nutrition.cholesterol.toFixed(2)}{" "}
              {nutrition.cholesterolUnit}
            </Box>
            <Box>
              Choline: {nutrition.choline.toFixed(2)} {nutrition.cholineUnit}
            </Box>
            <Box>
              Calcium: {nutrition.calcium.toFixed(2)} {nutrition.calciumUnit}
            </Box>
            <Box>
              Caffein: {nutrition.caffeine.toFixed(2)} {nutrition.caffeineUnit}
            </Box>

            <Box>
              Theobromine: {nutrition.theobromine.toFixed(2)}{" "}
              {nutrition.theobromineUnit}
            </Box>
            <Box>
              Sugar: {nutrition.sugar.toFixed(2)} {nutrition.sugarUnit}
            </Box>
            <Box>
              Iron: {nutrition.iron.toFixed(2)} {nutrition.ironUnit}
            </Box>
            <Box>
              Sodium: {nutrition.sodium.toFixed(2)} {nutrition.sodiumUnit}
            </Box>
            <Box>
              Retinol: {nutrition.retinol.toFixed(2)} {nutrition.retinolUnit}
            </Box>
            <Box
              sx={{
                color: "#4682B4",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Energy: {nutrition.energy.toFixed(2)} {nutrition.energyUnit}
            </Box>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Total;
