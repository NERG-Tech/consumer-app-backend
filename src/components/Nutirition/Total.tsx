import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { useAppSelector } from "../../store/store";
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

  const [vitaminB12, setVitaminB12] = useState<number>(0);
  const [vitaminB12Unit, setVitaminB12Unit] = useState<string>();

  const [vitaminC, setVitaminC] = useState<number>(0);
  const [vitaminCUnit, setVitaminCUnit] = useState<string>();

  const [vitaminD, setVitaminD] = useState<number>(0);
  const [vitaminDUnit, setVitaminDUnit] = useState<string>();

  const [folate, setFolate] = useState<number>(0);
  const [folateUnit, setFolateUnit] = useState<string>();

  const [vitaminE, setVitaminE] = useState<number>(0);
  const [vitaminEUnit, setVitaminEUnit] = useState<string>();

  const [vitaminK, setVitaminK] = useState<number>(0);
  const [vitaminKUnit, setVitaminKUnit] = useState<string>();

  const [cholesterol, setCholesterol] = useState<number>(0);
  const [cholesterolUnit, setCholesterolUnit] = useState<string>();

  const [choline, setCholine] = useState<number>(0);
  const [cholineUnit, setCholineUnit] = useState<string>();

  const [calcium, setCalcium] = useState<number>(0);
  const [calciumUnit, setCalciumUnit] = useState<string>();

  const [caffeine, setCaffeine] = useState<number>(0);
  const [caffeineUnit, setCaffeineUnit] = useState<string>();

  const [energy, setEnergy] = useState<number>(0);
  const [energyUnit, setEnergyUnit] = useState<string>();

  const [theobromine, setTheobromine] = useState<number>(0);
  const [theobromineUnit, setTheobromineUnit] = useState<string>();

  const [sugar, setSugar] = useState<number>(0);
  const [sugarUnit, setSugarUnit] = useState<string>();

  const [iron, setIron] = useState<number>(0);
  const [ironUnit, setIronUnit] = useState<string>();

  const [sodium, setSodium] = useState<number>(0);
  const [sodiumUnit, setSodiumUnit] = useState<string>();

  //Retinol
  const [retinol, setRetinol] = useState<number>(0);
  const [retinolUnit, setRetinolUnit] = useState<string>();

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
      vitaminB6 = 0,
      vitaminB12 = 0,
      vitaminC = 0,
      vitaminD = 0,
      folate = 0,
      vitaminE = 0,
      vitaminK = 0,
      cholesterol = 0,
      choline = 0,
      calcium = 0,
      caffeine = 0,
      energy = 0,
      theobromine = 0,
      sugar = 0,
      iron = 0,
      sodium = 0,
      retinol = 0;

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
      setVitaminB6Unit(cart.foodNutrients[Cart.indexes["VitaminB6"]].unitName);

      // vitaminB12
      vitaminB12 +=
        cart.foodNutrients[Cart.indexes["VitaminB12"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setVitaminB12Unit(
        cart.foodNutrients[Cart.indexes["VitaminB12"]].unitName
      );

      // vitaminC
      vitaminC +=
        cart.foodNutrients[Cart.indexes["VitaminC"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setVitaminCUnit(cart.foodNutrients[Cart.indexes["VitaminC"]].unitName);

      // vitaminD
      vitaminD +=
        cart.foodNutrients[Cart.indexes["VitaminD"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setVitaminDUnit(cart.foodNutrients[Cart.indexes["VitaminD"]].unitName);

      // folate
      folate +=
        cart.foodNutrients[Cart.indexes["Folate"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setFolateUnit(cart.foodNutrients[Cart.indexes["Folate"]].unitName);

      // vitaminE
      vitaminE +=
        cart.foodNutrients[Cart.indexes["VitaminE"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setVitaminEUnit(cart.foodNutrients[Cart.indexes["VitaminE"]].unitName);

      // vitaminK
      vitaminK +=
        cart.foodNutrients[Cart.indexes["VitaminK"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setVitaminKUnit(cart.foodNutrients[Cart.indexes["VitaminK"]].unitName);

      // cholesterol
      cholesterol +=
        cart.foodNutrients[Cart.indexes["Cholesterol"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setCholesterolUnit(
        cart.foodNutrients[Cart.indexes["Cholesterol"]].unitName
      );

      // choline
      choline +=
        cart.foodNutrients[Cart.indexes["Choline"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setCholineUnit(cart.foodNutrients[Cart.indexes["Choline"]].unitName);

      // Calcium
      calcium +=
        cart.foodNutrients[Cart.indexes["Calcium"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setCalciumUnit(cart.foodNutrients[Cart.indexes["Calcium"]].unitName);

      // caffeine
      caffeine +=
        cart.foodNutrients[Cart.indexes["Caffeine"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setCaffeineUnit(cart.foodNutrients[Cart.indexes["Caffeine"]].unitName);

      // energy
      energy +=
        cart.foodNutrients[Cart.indexes["Energy"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setEnergyUnit(cart.foodNutrients[Cart.indexes["Energy"]].unitName);

      // theobromine
      theobromine +=
        cart.foodNutrients[Cart.indexes["Theobromine"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setTheobromineUnit(
        cart.foodNutrients[Cart.indexes["Theobromine"]].unitName
      );

      // sugar
      sugar +=
        cart.foodNutrients[Cart.indexes["Sugar"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setSugarUnit(cart.foodNutrients[Cart.indexes["Sugar"]].unitName);

      // iron
      iron +=
        cart.foodNutrients[Cart.indexes["Iron"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setIronUnit(cart.foodNutrients[Cart.indexes["Iron"]].unitName);

      // sodium
      sodium +=
        cart.foodNutrients[Cart.indexes["Sodium"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setSodiumUnit(cart.foodNutrients[Cart.indexes["Sodium"]].unitName);

      // retinol
      retinol +=
        cart.foodNutrients[Cart.indexes["Retinol"]].value *
        cart.quantity *
        cart.gramPerWeight;
      setRetinolUnit(cart.foodNutrients[Cart.indexes["Retinol"]].unitName);
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
    setVitaminB12(vitaminB12);
    setVitaminC(vitaminC);
    setVitaminD(vitaminD);
    setVitaminE(vitaminE);
    setFolate(folate);
    setVitaminK(vitaminK);
    setCholesterol(cholesterol);
    setCholine(choline);
    setCalcium(calcium);
    setCaffeine(caffeine);
    setEnergy(energy);
    setTheobromine(theobromine);
    setSugar(sugar);
    setIron(iron);
    setSodium(sodium);
    setRetinol(retinol);
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
        <Box>
          Vitamin B12: {vitaminB12.toFixed(2)} {vitaminB12Unit}
        </Box>
        <Box>
          Vitamin C: {vitaminC.toFixed(2)} {vitaminCUnit}
        </Box>
        <Box>
          Vitamin D (D2 + D3): {vitaminD.toFixed(2)} {vitaminDUnit}
        </Box>
        <Box>
          Folate: {folate.toFixed(2)} {folateUnit}
        </Box>
        <Box>
          Vitamin E (alpha-tocopherol): {vitaminE.toFixed(2)} {vitaminEUnit}
        </Box>
        <Box>
          Vitamin K (phylloquinone): {vitaminK.toFixed(2)} {vitaminKUnit}
        </Box>
        <Box>
          Cholesterol: {cholesterol.toFixed(2)} {cholesterolUnit}
        </Box>
        <Box>
          Choline: {choline.toFixed(2)} {cholineUnit}
        </Box>
        <Box>
          Calcium: {calcium.toFixed(2)} {calciumUnit}
        </Box>
        <Box>
          Caffein: {caffeine.toFixed(2)} {caffeineUnit}
        </Box>

        <Box>
          Theobromine: {theobromine.toFixed(2)} {theobromineUnit}
        </Box>
        <Box>
          Sugar: {sugar.toFixed(2)} {sugarUnit}
        </Box>
        <Box>
          Iron: {iron.toFixed(2)} {ironUnit}
        </Box>
        <Box>
          Sodium: {sodium.toFixed(2)} {sodiumUnit}
        </Box>
        <Box>
          Retinol: {retinol.toFixed(2)} {retinolUnit}
        </Box>
        <Box
          sx={{
            color: "#4682B4",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Energy: {energy.toFixed(2)} {energyUnit}
        </Box>
      </Box>
    </div>
  );
};

export default Total;
