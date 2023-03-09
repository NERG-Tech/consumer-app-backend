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
    retinol = 0,
    monounsaturatedFat = 0,
    polyunsaturatedFat = 0,
    fattyAcidSaturated = 0;

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
  let monounsaturatedFatUnit = "";
  let polyunsaturatedFatUnit = "";
  let fattyAcidSaturatedUnit = "";

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

    monounsaturatedFat +=
      cart.foodNutrients[Cart.indexes["MonounsaturatedFat"]].value *
      cart.quantity *
      cart.gramPerWeight;
    monounsaturatedFatUnit =
      cart.foodNutrients[Cart.indexes["MonounsaturatedFat"]].unitName;

    polyunsaturatedFat +=
      cart.foodNutrients[Cart.indexes["PolyunsaturatedFat"]].value *
      cart.quantity *
      cart.gramPerWeight;
    polyunsaturatedFatUnit =
      cart.foodNutrients[Cart.indexes["PolyunsaturatedFat"]].unitName;

    // fattyAcidSaturated
    fattyAcidSaturated +=
      cart.foodNutrients[Cart.indexes["fattyAcidSaturated"]].value *
      cart.quantity *
      cart.gramPerWeight;
    fattyAcidSaturatedUnit =
      cart.foodNutrients[Cart.indexes["fattyAcidSaturated"]].unitName;
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
    monounsaturatedFat,
    monounsaturatedFatUnit,
    polyunsaturatedFat,
    polyunsaturatedFatUnit,
    fattyAcidSaturated,
    fattyAcidSaturatedUnit,
  };
};

const getTwoDigitFloat = (num: number): number => {
  return parseFloat(num.toFixed(2));
};

// const gramToCalory = (grams: number): number => {
//   return getTwoDigitFloat(grams * 7.716179);
// };

const caloriesToGram = (calories: number): number => {
  return getTwoDigitFloat(calories * 0.129598);
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
  polyunsaturatedFat: number;
  polyunsaturatedFatUnit: string;
  monounsaturatedFat: number;
  monounsaturatedFatUnit: string;
  fattyAcidSaturated: number;
  fattyAcidSaturatedUnit: string;
  data: {
    sex: string;
    age: number;
    weightInKg: number;
    heightInCm: number;
    heightFeet: number;
    weight: number; // pounds
    bmr: number;
    calory: number;
  };
}) => {
  let proteinPoint = (nutrition.data.calory * 10) / 100;
  let proteinMath = `Math: ${
    nutrition.data.calory
  } cal x 10 / 100 = ${proteinPoint} kcal/day.  
  <br />${proteinPoint} kcal/day => convert calories to gram => ${caloriesToGram(
    proteinPoint
  )} ${nutrition.proteinUnit} (100% point)
  <br />The user took ${getTwoDigitFloat(nutrition.protein)} ${
    nutrition.proteinUnit
  } of protein`;
  let protein = getTwoDigitFloat(
    (nutrition.protein / caloriesToGram(proteinPoint)) * 100
  );

  let fiberPoint = nutrition.data.calory * 0.0014;
  let fiberMath = `Math: ${
    nutrition.data.calory
  } cal x 0.0014 = ${fiberPoint} [${fiberPoint} is 100% of fiber user has to take  in calories.] 
  <br />${proteinPoint} kcal/day => convert calories to gram => ${caloriesToGram(
    proteinPoint
  )} ${nutrition.proteinUnit} (100% point)
  <br />The user took ${getTwoDigitFloat(nutrition.fiber)} ${
    nutrition.fiberUnit
  } of fiber.`;
  let fiber = getTwoDigitFloat((nutrition.fiber / fiberPoint) * 100);

  let carbPoint = (nutrition.data.calory * 45) / 100;
  let carbMath = `Math: ${
    nutrition.data.calory
  } cal x 45 / 100 = ${carbPoint} [${carbPoint} is 100% of carb user has to take in calories.] 
  <br />${carbPoint} kcal/day => convert calories to gram => ${caloriesToGram(
    carbPoint
  )} ${nutrition.proteinUnit} (100% point)
  <br />The user took ${getTwoDigitFloat(nutrition.carbohydrate)} ${
    nutrition.proteinUnit
  }.`;
  let carb = getTwoDigitFloat(
    (nutrition.carbohydrate / caloriesToGram(carbPoint)) * 100
  );

  let fatPoint = (nutrition.data.calory * 20) / 100;
  let fatMath = `Math: ${
    nutrition.data.calory
  } cal x 20 / 100 = ${fatPoint}. [${fatPoint} is 100% of fat user has to take in calories.] 
  <br />${fatPoint} kcal/day => convert calories to gram => ${caloriesToGram(
    fatPoint
  )} ${nutrition.totalLipidFatUnit} (100% point)
  <br />The user took ${getTwoDigitFloat(nutrition.totalLipidFat)} ${
    nutrition.totalLipidFatUnit
  }.`;
  let fat = getTwoDigitFloat(
    (nutrition.totalLipidFat / caloriesToGram(fatPoint)) * 100
  );

  let polyunsaturatedFatPoint = (nutrition.data.calory * 5) / 100;
  let polyunsaturatedFatMath = `Math: ${
    nutrition.data.calory
  } cal x 5 / 100 = ${polyunsaturatedFatPoint} [${polyunsaturatedFatPoint} is 100% of polyunsaturated fat user has to take in calories.] 
  <br />${polyunsaturatedFatPoint} kcal/day => convert calories to gram => ${caloriesToGram(
    polyunsaturatedFatPoint
  )} G (100% point)
  <br />The user took ${getTwoDigitFloat(nutrition.polyunsaturatedFat)} ${
    nutrition.polyunsaturatedFatUnit
  }.`;
  let polyunsaturatedFat = getTwoDigitFloat(
    (nutrition.polyunsaturatedFat / caloriesToGram(polyunsaturatedFatPoint)) *
      100
  );

  let monounsaturatedFatPoint = (nutrition.data.calory * 15) / 100;
  let monounsaturatedFatMath = `Math: ${
    nutrition.data.calory
  } cal x 15 / 100 = ${monounsaturatedFatPoint} [${monounsaturatedFatPoint} is 100% of monounsaturated Fat user has to take in calories.] 
  <br />${monounsaturatedFatPoint} kcal/day => convert calories to gram => ${caloriesToGram(
    monounsaturatedFatPoint
  )} G (100% point)
  <br />The user took ${getTwoDigitFloat(nutrition.monounsaturatedFat)} ${
    nutrition.monounsaturatedFatUnit
  }.`;
  let monounsaturatedFat = getTwoDigitFloat(
    (nutrition.monounsaturatedFat / caloriesToGram(monounsaturatedFatPoint)) *
      100
  );

  let fattyAcidSaturatedPoint = (nutrition.data.calory * 10) / 100;
  let fattyAcidSaturatedMath = `Math: ${
    nutrition.data.calory
  } cal x 10 / 100 = ${fattyAcidSaturatedPoint} [${fattyAcidSaturatedPoint} is 100% of fatty Acid Saturated Fat user has to take in calories.] 
  <br />${fattyAcidSaturatedPoint} kcal/day => convert calories to gram => ${caloriesToGram(
    fattyAcidSaturatedPoint
  )} G (100% point)
  <br />The user took ${getTwoDigitFloat(nutrition.fattyAcidSaturated)} ${
    nutrition.fattyAcidSaturatedUnit
  }.`;
  let fattyAcidSaturated = getTwoDigitFloat(
    (nutrition.fattyAcidSaturated / caloriesToGram(fattyAcidSaturatedPoint)) *
      100
  );

  let sugarPoint = (nutrition.data.calory * 10) / 100;
  let sugarMath = `Math: ${
    nutrition.data.calory
  } cal x 10 / 100 = ${sugarPoint} [${sugarPoint} is 100% of sugar user has to take in calories.] 
  <br />${sugarPoint} kcal/day => convert calories to gram => ${caloriesToGram(
    sugarPoint
  )} G (100% point)
  <br />The user took ${getTwoDigitFloat(nutrition.sugar)} ${
    nutrition.sugarUnit
  }.`;
  let sugar = getTwoDigitFloat(
    (nutrition.sugar / caloriesToGram(sugarPoint)) * 100
  );

  let cholesterolPoint = 300;
  let cholesterol = getTwoDigitFloat(
    (nutrition.cholesterol / cholesterolPoint) * 100
  );
  let cholesterolMath = `Math: ${cholesterolPoint} ${
    nutrition.cholesterolUnit
  } [${cholesterolPoint} is 100% of cholesterol user has to take in calories.] 
  <br />The user took ${getTwoDigitFloat(nutrition.cholesterol)} ${
    nutrition.cholesterolUnit
  }.<br />
  ${nutrition.cholesterol} / ${cholesterolPoint} * 100 = ${cholesterol}`;

  // vitamin

  let vitaminAMath =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? `Math: ((${getTwoDigitFloat(nutrition.vitaminA)} * 100) / 900)`
      : `Math: ((${getTwoDigitFloat(nutrition.vitaminA)} * 100) / 700)`;
  let vitaminA =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? getTwoDigitFloat((nutrition.vitaminA * 100) / 900)
      : getTwoDigitFloat((nutrition.vitaminA * 100) / 700);

  let thiaminMath =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? `Math: ((${getTwoDigitFloat(nutrition.thiamin)} * 100) / 1.2) ${
          nutrition.thiaminUnit
        }`
      : `Math: (${getTwoDigitFloat(nutrition.thiamin)} * 100) / 1.1 ${
          nutrition.thiaminUnit
        }`;
  let thiamin =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? getTwoDigitFloat((nutrition.thiamin * 100) / 16)
      : getTwoDigitFloat((nutrition.thiamin * 100) / 14);

  let niacinMath =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? `Math: ((${getTwoDigitFloat(nutrition.niacin)} * 100) / 16) ${
          nutrition.niacinUnit
        }`
      : `Math: (${getTwoDigitFloat(nutrition.niacin)} * 100) / 14 ${
          nutrition.niacinUnit
        }`;
  let niacin =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? getTwoDigitFloat((nutrition.niacin * 100) / 16)
      : getTwoDigitFloat((nutrition.niacin * 100) / 14);

  let vitaminB6Math =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? `Math: ((${getTwoDigitFloat(nutrition.vitaminB6)} * 100) / 1.7) ${
          nutrition.vitaminB6Unit
        }`
      : `Math: (${getTwoDigitFloat(nutrition.vitaminB6)} * 100) / 1.5 ${
          nutrition.vitaminB6Unit
        }`;
  let vitaminB6 =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? getTwoDigitFloat((nutrition.vitaminB6 * 100) / 1.7)
      : getTwoDigitFloat((nutrition.vitaminB6 * 100) / 1.5);

  let folateMath =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? `Math: ((${getTwoDigitFloat(nutrition.vitaminB6)} * 100) / 1.7) ${
          nutrition.folate
        }`
      : `Math: ((${getTwoDigitFloat(nutrition.vitaminB6)} * 100) / 1.5) ${
          nutrition.folate
        }`;
  let folate =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? getTwoDigitFloat((nutrition.vitaminB6 * 100) / 1.7)
      : getTwoDigitFloat((nutrition.vitaminB6 * 100) / 1.5);

  let vitaminB12Math = `Math: ((${getTwoDigitFloat(
    nutrition.vitaminB12
  )} * 100) / 2.4) ${nutrition.vitaminB12Unit}`;
  let vitaminB12 = getTwoDigitFloat((nutrition.vitaminB12 * 100) / 2.4);

  let vitaminCMath =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? `Math: ((${getTwoDigitFloat(nutrition.vitaminC)} * 100) / 90) ${
          nutrition.vitaminCUnit
        }`
      : `Math: ((${getTwoDigitFloat(nutrition.vitaminC)} * 100) / 75) ${
          nutrition.vitaminCUnit
        }`;
  let vitaminC =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? getTwoDigitFloat((nutrition.vitaminC * 100) / 90)
      : getTwoDigitFloat((nutrition.vitaminC * 100) / 75);

  let vitaminDMath = `Math: ((${getTwoDigitFloat(
    nutrition.vitaminD
  )} * 100) / 20) ${nutrition.vitaminDUnit}`;
  let vitaminD = getTwoDigitFloat((nutrition.vitaminD * 100) / 20);

  let vitaminEMath = `Math: ((${getTwoDigitFloat(
    nutrition.vitaminE
  )} * 100) / 15) ${nutrition.vitaminEUnit}`;
  let vitaminE = getTwoDigitFloat((nutrition.vitaminE * 100) / 15);

  let vitaminKMath =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? `Math: ((${getTwoDigitFloat(nutrition.vitaminK)} * 100) / 120) ${
          nutrition.vitaminKUnit
        }`
      : `Math: ((${getTwoDigitFloat(nutrition.vitaminK)} * 100) / 90) ${
          nutrition.vitaminKUnit
        }`;
  let vitaminK =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? getTwoDigitFloat((nutrition.vitaminK * 100) / 120)
      : getTwoDigitFloat((nutrition.vitaminK * 100) / 90);

  let cholineMath =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? `Math: ((${getTwoDigitFloat(nutrition.choline)} * 100) / 550) ${
          nutrition.cholineUnit
        }`
      : `Math: ((${getTwoDigitFloat(nutrition.choline)} * 100) / 425) ${
          nutrition.cholineUnit
        }`;
  let chloine =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? getTwoDigitFloat((nutrition.choline * 100) / 550)
      : getTwoDigitFloat((nutrition.choline * 100) / 425);

  let calciumMath = `Math: ((${getTwoDigitFloat(
    nutrition.calcium
  )} * 100) / 1300) ${nutrition.calciumUnit}`;
  let calcium = getTwoDigitFloat((nutrition.calcium * 100) / 1300);

  let ironMath =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? `Math: ((${getTwoDigitFloat(nutrition.iron)} * 100) / 11) ${
          nutrition.ironUnit
        }`
      : `Math: ((${getTwoDigitFloat(nutrition.iron)} * 100) / 18) ${
          nutrition.ironUnit
        }`;
  let iron =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? getTwoDigitFloat((nutrition.iron * 100) / 11)
      : getTwoDigitFloat((nutrition.iron * 100) / 18);

  let sodiumMath = `Math: ((${getTwoDigitFloat(
    nutrition.sodium
  )} * 100) / 1500) ${nutrition.sodiumUnit}`;
  let sodium = getTwoDigitFloat((nutrition.sodium * 100) / 1500);

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
    vitaminAMath,
    vitaminA,
    thiaminMath,
    thiamin,
    niacinMath,
    niacin,
    vitaminB6Math,
    vitaminB6,
    folateMath,
    folate,
    vitaminB12Math,
    vitaminB12,
    vitaminCMath,
    vitaminC,
    vitaminDMath,
    vitaminD,
    vitaminEMath,
    vitaminE,
    vitaminKMath,
    vitaminK,
    cholineMath,
    chloine,
    calciumMath,
    calcium,
    ironMath,
    iron,
    sodiumMath,
    sodium,
    polyunsaturatedFatMath,
    polyunsaturatedFat,
    monounsaturatedFat,
    monounsaturatedFatMath,
    fattyAcidSaturatedMath,
    fattyAcidSaturated,
    sugarMath,
    sugar,
    cholesterol,
    cholesterolMath,
  };
};
