import * as FoodSlice from "../../store/features/foodSlice";
import * as Cart from "../Nutirition/Cart";

export const calculate = (cart: FoodSlice.Food[]) => {
  // console.log("calculate cart", cart);
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

  let proteinUnit = "";
  let totalLipidFatUnit = "";
  let waterUnit = "";
  let carbohydrateUnit = "";
  let fiberUnit = "";
  let vitaminAUnit = "";
  let thiaminUnit = "";
  let riboflavinUnit = "";
  let niacinUnit = "";
  let vitaminB6Unit = "";
  let vitaminB12Unit = "";
  let vitaminCUnit = "";
  let vitaminDUnit = "";
  let folateUnit = "";
  let vitaminEUnit = "";
  let vitaminKUnit = "";
  let cholesterolUnit = "";
  let cholineUnit = "";
  let calciumUnit = "";
  let caffeineUnit = "";
  let energyUnit = "";
  let theobromineUnit = "";
  let sugarUnit = "";
  let ironUnit = "";
  let sodiumUnit = "";
  let retinolUnit = "";

  cart.forEach((cart) => {
    // Protein
    protein +=
      cart.foodNutrients[Cart.indexes["Protein"]].value *
      cart.quantity *
      cart.gramPerWeight;
    proteinUnit = cart.foodNutrients[Cart.indexes["Protein"]].unitName;

    // totalLipidFat
    totalLipidFat +=
      cart.foodNutrients[Cart.indexes["TotalLipidFat"]].value *
      cart.quantity *
      cart.gramPerWeight;
    totalLipidFatUnit =
      cart.foodNutrients[Cart.indexes["TotalLipidFat"]].unitName;

    // Water
    water +=
      cart.foodNutrients[Cart.indexes["Water"]].value *
      cart.quantity *
      cart.gramPerWeight;
    waterUnit = cart.foodNutrients[Cart.indexes["Water"]].unitName;

    // carbohydrate
    carbohydrate +=
      cart.foodNutrients[Cart.indexes["Carbohydrate"]].value *
      cart.quantity *
      cart.gramPerWeight;
    carbohydrateUnit =
      cart.foodNutrients[Cart.indexes["Carbohydrate"]].unitName;

    // fiber
    fiber +=
      cart.foodNutrients[Cart.indexes["Fiber"]].value *
      cart.quantity *
      cart.gramPerWeight;
    fiberUnit = cart.foodNutrients[Cart.indexes["Fiber"]].unitName;

    // vitaminA
    vitaminA +=
      cart.foodNutrients[Cart.indexes["VitaminA"]].value *
      cart.quantity *
      cart.gramPerWeight;
    vitaminAUnit = cart.foodNutrients[Cart.indexes["VitaminA"]].unitName;

    // thiamin
    thiamin +=
      cart.foodNutrients[Cart.indexes["Thiamin"]].value *
      cart.quantity *
      cart.gramPerWeight;
    thiaminUnit = cart.foodNutrients[Cart.indexes["Thiamin"]].unitName;

    // riboflavin
    riboflavin +=
      cart.foodNutrients[Cart.indexes["Riboflavin"]].value *
      cart.quantity *
      cart.gramPerWeight;
    riboflavinUnit = cart.foodNutrients[Cart.indexes["Riboflavin"]].unitName;

    // niacin
    niacin +=
      cart.foodNutrients[Cart.indexes["Niacin"]].value *
      cart.quantity *
      cart.gramPerWeight;
    niacinUnit = cart.foodNutrients[Cart.indexes["Niacin"]].unitName;

    // vitaminB6
    vitaminB6 +=
      cart.foodNutrients[Cart.indexes["VitaminB6"]].value *
      cart.quantity *
      cart.gramPerWeight;
    vitaminB6Unit = cart.foodNutrients[Cart.indexes["VitaminB6"]].unitName;

    // vitaminB12
    vitaminB12 +=
      cart.foodNutrients[Cart.indexes["VitaminB12"]].value *
      cart.quantity *
      cart.gramPerWeight;
    vitaminB12Unit = cart.foodNutrients[Cart.indexes["VitaminB12"]].unitName;

    // vitaminC
    vitaminC +=
      cart.foodNutrients[Cart.indexes["VitaminC"]].value *
      cart.quantity *
      cart.gramPerWeight;
    vitaminCUnit = cart.foodNutrients[Cart.indexes["VitaminC"]].unitName;

    // vitaminD
    vitaminD +=
      cart.foodNutrients[Cart.indexes["VitaminD"]].value *
      cart.quantity *
      cart.gramPerWeight;
    vitaminDUnit = cart.foodNutrients[Cart.indexes["VitaminD"]].unitName;

    // folate
    folate +=
      cart.foodNutrients[Cart.indexes["Folate"]].value *
      cart.quantity *
      cart.gramPerWeight;
    folateUnit = cart.foodNutrients[Cart.indexes["Folate"]].unitName;

    // vitaminE
    vitaminE +=
      cart.foodNutrients[Cart.indexes["VitaminE"]].value *
      cart.quantity *
      cart.gramPerWeight;
    vitaminEUnit = cart.foodNutrients[Cart.indexes["VitaminE"]].unitName;

    // vitaminK
    vitaminK +=
      cart.foodNutrients[Cart.indexes["VitaminK"]].value *
      cart.quantity *
      cart.gramPerWeight;
    vitaminKUnit = cart.foodNutrients[Cart.indexes["VitaminK"]].unitName;

    // cholesterol
    cholesterol +=
      cart.foodNutrients[Cart.indexes["Cholesterol"]].value *
      cart.quantity *
      cart.gramPerWeight;
    cholesterolUnit = cart.foodNutrients[Cart.indexes["Cholesterol"]].unitName;

    // choline
    choline +=
      cart.foodNutrients[Cart.indexes["Choline"]].value *
      cart.quantity *
      cart.gramPerWeight;
    cholineUnit = cart.foodNutrients[Cart.indexes["Choline"]].unitName;

    // Calcium
    calcium +=
      cart.foodNutrients[Cart.indexes["Calcium"]].value *
      cart.quantity *
      cart.gramPerWeight;
    calciumUnit = cart.foodNutrients[Cart.indexes["Calcium"]].unitName;

    // caffeine
    caffeine +=
      cart.foodNutrients[Cart.indexes["Caffeine"]].value *
      cart.quantity *
      cart.gramPerWeight;
    caffeineUnit = cart.foodNutrients[Cart.indexes["Caffeine"]].unitName;

    // energy
    energy +=
      cart.foodNutrients[Cart.indexes["Energy"]].value *
      cart.quantity *
      cart.gramPerWeight;
    energyUnit = cart.foodNutrients[Cart.indexes["Energy"]].unitName;

    // theobromine
    theobromine +=
      cart.foodNutrients[Cart.indexes["Theobromine"]].value *
      cart.quantity *
      cart.gramPerWeight;
    theobromineUnit = cart.foodNutrients[Cart.indexes["Theobromine"]].unitName;

    // sugar
    sugar +=
      cart.foodNutrients[Cart.indexes["Sugar"]].value *
      cart.quantity *
      cart.gramPerWeight;
    sugarUnit = cart.foodNutrients[Cart.indexes["Sugar"]].unitName;

    // iron
    iron +=
      cart.foodNutrients[Cart.indexes["Iron"]].value *
      cart.quantity *
      cart.gramPerWeight;
    ironUnit = cart.foodNutrients[Cart.indexes["Iron"]].unitName;

    // sodium
    sodium +=
      cart.foodNutrients[Cart.indexes["Sodium"]].value *
      cart.quantity *
      cart.gramPerWeight;
    sodiumUnit = cart.foodNutrients[Cart.indexes["Sodium"]].unitName;

    // retinol
    retinol +=
      cart.foodNutrients[Cart.indexes["Retinol"]].value *
      cart.quantity *
      cart.gramPerWeight;
    retinolUnit = cart.foodNutrients[Cart.indexes["Retinol"]].unitName;
  });

  return {
    protein,
    proteinUnit,
    totalLipidFat,
    totalLipidFatUnit,
    water,
    waterUnit,
    carbohydrate,
    carbohydrateUnit,
    fiber,
    fiberUnit,
    vitaminA,
    vitaminAUnit,
    thiamin,
    thiaminUnit,
    riboflavin,
    riboflavinUnit,
    niacin,
    niacinUnit,
    vitaminB6,
    vitaminB6Unit,
    vitaminB12,
    vitaminB12Unit,
    vitaminC,
    vitaminCUnit,
    vitaminD,
    vitaminDUnit,
    folate,
    folateUnit,
    vitaminE,
    vitaminEUnit,
    vitaminK,
    vitaminKUnit,
    cholesterol,
    cholesterolUnit,
    choline,
    cholineUnit,
    calcium,
    calciumUnit,
    caffeine,
    caffeineUnit,
    energy,
    energyUnit,
    theobromine,
    theobromineUnit,
    sugar,
    sugarUnit,
    iron,
    ironUnit,
    sodium,
    sodiumUnit,
    retinol,
    retinolUnit,
  };
};

export const getPercentages = (nutrition: {
  caffeine: number;
  caffeineUnit: string;
  calcium: number;
  calciumUnit: string;
  carbohydrate: number;
  carbohydrateUnit: string;
  cholesterol: number;
  cholesterolUnit: string;
  choline: number;
  cholineUnit: string;
  energy: number;
  energyUnit: string;
  fiber: number;
  fiberUnit: string;
  folate: number;
  folateUnit: string;
  iron: number;
  ironUnit: string;
  niacin: number;
  niacinUnit: string;
  protein: number;
  proteinUnit: string;
  retinol: number;
  retinolUnit: string;
  riboflavin: number;
  riboflavinUnit: string;
  sodium: number;
  sodiumUnit: string;
  sugar: number;
  sugarUnit: string;
  theobromine: number;
  theobromineUnit: string;
  thiamin: number;
  thiaminUnit: string;
  totalLipidFat: number;
  totalLipidFatUnit: string;
  vitaminA: number;
  vitaminAUnit: string;
  vitaminB6: number;
  vitaminB6Unit: string;
  vitaminB12: number;
  vitaminB12Unit: string;
  vitaminC: number;
  vitaminCUnit: string;
  vitaminD: number;
  vitaminDUnit: string;
  vitaminE: number;
  vitaminEUnit: string;
  vitaminK: number;
  vitaminKUnit: string;
  water: number;
  waterUnit: string;
  sex: string;
  calory: number;
}) => {
  let proteinMath =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? `Math: (${getTwoDigitFloat(nutrition.protein)} * 100) / 56 `
      : `Math: (${getTwoDigitFloat(nutrition.protein)} * 100) / 46 `;
  let protein =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? getTwoDigitFloat((nutrition.protein * 100) / 56)
      : getTwoDigitFloat((nutrition.protein * 100) / 46);

  let fiberMath =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? `Math: ((${getTwoDigitFloat(nutrition.fiber)} * 100) / 38)`
      : `Math: ((${getTwoDigitFloat(nutrition.fiber)} * 100) / 25)`;
  let fiber =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? getTwoDigitFloat((nutrition.fiber * 100) / 38)
      : getTwoDigitFloat((nutrition.fiber * 100) / 25);

  let carbMath = `((${getTwoDigitFloat(nutrition.carbohydrate)} * 100) / 130`;
  let carb = getTwoDigitFloat((nutrition.carbohydrate * 100) / 130);

  let fatPoint = getTwoDigitFloat(nutrition.energy * 0.2);
  let fat = getTwoDigitFloat((nutrition.totalLipidFat / fatPoint) * 100);
  let fatMath = `Calory: ${getTwoDigitFloat(
    nutrition.energy
  )} kcal/day, 100% Fat Point (20%) is ${getTwoDigitFloat(
    fatPoint
  )} kcal/day, You had ${nutrition.totalLipidFat} ${
    nutrition.totalLipidFatUnit
  } `;

  return {
    protein,
    proteinMath,
    fiberMath,
    fiber,
    fatMath,
    fat,
    fatPoint,
    carb,
    carbMath,
  };
};

const getTwoDigitFloat = (num: number): number => {
  return parseFloat(num.toFixed(2));
};
