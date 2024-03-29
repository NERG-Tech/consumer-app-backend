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
    fattyAcidSaturated = 0,
    copper = 0,
    magnesium = 0,
    selenium = 0,
    zinc = 0,
    potassium = 0,
    dha = 0;

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
  let copperUnit = "";
  let magnesiumUnit = "";
  let seleniumUnit = "";
  let zincUnit = "";
  let potassiumUnit = "";
  let dhaUnit = "";

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

    copper +=
      cart.foodNutrients[Cart.indexes["Copper"]].value *
      cart.quantity *
      cart.gramPerWeight;
    copperUnit = cart.foodNutrients[Cart.indexes["Copper"]].unitName;

    // magnesium
    magnesium +=
      cart.foodNutrients[Cart.indexes["Magnesium"]].value *
      cart.quantity *
      cart.gramPerWeight;
    magnesiumUnit = cart.foodNutrients[Cart.indexes["Magnesium"]].unitName;
    //selenium
    selenium +=
      cart.foodNutrients[Cart.indexes["Selenium"]].value *
      cart.quantity *
      cart.gramPerWeight;
    seleniumUnit = cart.foodNutrients[Cart.indexes["Selenium"]].unitName;
    // zinc
    zinc +=
      cart.foodNutrients[Cart.indexes["Zinc"]].value *
      cart.quantity *
      cart.gramPerWeight;
    zincUnit = cart.foodNutrients[Cart.indexes["Zinc"]].unitName;
    // potassium
    potassium +=
      cart.foodNutrients[Cart.indexes["Potassium"]].value *
      cart.quantity *
      cart.gramPerWeight;
    potassiumUnit = cart.foodNutrients[Cart.indexes["Potassium"]].unitName;

    dha +=
      cart.foodNutrients[Cart.indexes["DHA"]].value *
      cart.quantity *
      cart.gramPerWeight;
    dhaUnit = cart.foodNutrients[Cart.indexes["DHA"]].unitName;
  });

  return {
    potassiumUnit,
    potassium,
    zincUnit,
    zinc,
    selenium,
    seleniumUnit,
    magnesium,
    magnesiumUnit,
    copper,
    copperUnit,
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
    dha,
    dhaUnit,
  };
};

const getTwoDigitFloat = (num: number): number => {
  return parseFloat(num.toFixed(2));
};

const caloriesToGram = (calories: number): number => {
  return getTwoDigitFloat(calories * 0.129598);
};

const gramToOunces = (gram: number): number => {
  return getTwoDigitFloat(gram / 28.35);
};

const kgToPounds = (value: number): number => {
  return value * 2.205;
};
const ouncesToCups = (value: number): number => {
  return getTwoDigitFloat(value / 8);
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
  copper: number;
  copperUnit: string;
  magnesium: number;
  magnesiumUnit: string;
  selenium: number;
  seleniumUnit: string;
  zinc: number;
  zincUnit: string;
  potassium: number;
  potassiumUnit: string;
  dha: number;
  dhaUnit: string;
  recommendedWater: number;
  totalWater: number;
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
  console.log("recommendedWater in calculator", nutrition.recommendedWater);

  let waterMath;
  let water;

  if (nutrition.data.sex === "Male" || nutrition.data.sex === "male") {
    let tbw =
      2.447 -
      0.09156 * nutrition.data.age +
      0.1074 * nutrition.data.heightInCm +
      0.3362 * nutrition.data.weightInKg;

    let weightInPounds = kgToPounds(nutrition.data.weightInKg);
    let recommendedWater =
      ((weightInPounds * tbw) / 100 / 2.204623 / 2 / 7) * 33.814;
    let totalIntakeWater =
      parseFloat(gramToOunces(nutrition.water).toFixed(2)) +
      nutrition.totalWater; // ounces

    water = getTwoDigitFloat((totalIntakeWater / recommendedWater) * 100);
    waterMath = `&#128512; Recommended water is ${recommendedWater.toFixed(
      2
    )} ounces<br />Water from food: ${nutrition.water.toFixed(2)} ${
      nutrition.waterUnit
    }<br />Convert water from food to ounces: ${nutrition.water.toFixed(
      2
    )} / 28.35
    = ${gramToOunces(
      nutrition.water
    )} ounces<br />&#10070; Water from food: ${gramToOunces(
      nutrition.water
    )} ounces<br />&#10070; Water intake from drinking: ${
      nutrition.totalWater
    } ounces
  <br />&#10095;&#10095; Total water intake of the user: 
  <span className="green">${gramToOunces(nutrition.water)} + ${
      nutrition.totalWater
    } = ${totalIntakeWater} ounces</span>
    <br /> 

    TBW: 2.447 -
    0.09156 * ${nutrition.data.age} +
    0.1074 * ${nutrition.data.heightInCm} +
    0.3362 * ${nutrition.data.weightInKg} = ${tbw.toFixed(2)}%<br />
    &#10095;&#10095; Recommended water intake from our formula: ${weightInPounds.toFixed(
      1
    )} * ${tbw.toFixed(
      2
    )} / 100 / 2.204623 / 2 / 7 * 33.814 &#10144;&#10144; ${recommendedWater.toFixed(
      2
    )} ounces per day.
    <br />About ${ouncesToCups(recommendedWater)} cups of water
    <br />Result: (${totalIntakeWater}   / ${recommendedWater.toFixed(
      2
    )}) * 100 = ${water}`;
  } else {
    let tbw =
      -2.097 +
      0.1069 * nutrition.data.heightInCm +
      0.2466 * nutrition.data.weightInKg;
    let weightInPounds = kgToPounds(nutrition.data.weightInKg);
    let recommendedWater =
      ((weightInPounds * tbw) / 100 / 2.204623 / 2 / 7) * 33.814;
    let totalIntakeWater =
      parseFloat(gramToOunces(nutrition.water).toFixed(2)) +
      nutrition.totalWater; // ounces

    water = getTwoDigitFloat((totalIntakeWater / recommendedWater) * 100);
    waterMath = `&#128512; Recommended water is ${recommendedWater.toFixed(
      2
    )} ounces<br />Water from food: ${nutrition.water.toFixed(2)} ${
      nutrition.waterUnit
    }<br />Convert water from food to ounces: ${nutrition.water.toFixed(
      2
    )} / 28.35
    = ${gramToOunces(
      nutrition.water
    )} ounces<br />&#10070; Water from food: ${gramToOunces(
      nutrition.water
    )} ounces<br />&#10070; Water intake from drinking: ${
      nutrition.totalWater
    } ounces
  <br />&#10095;&#10095; Total water intake of the user: 
  <span className="green">${gramToOunces(nutrition.water)} + ${
      nutrition.totalWater
    } = ${totalIntakeWater} ounces</span>
    <br /> 

    TBW: -2.097 + 0.1069 * ${nutrition.data.heightInCm} + 0.2466 * ${
      nutrition.data.weightInKg
    } = ${tbw.toFixed(2)}%<br />
    &#10095;&#10095; Recommended water intake from our formula: ${weightInPounds.toFixed(
      1
    )} * ${tbw.toFixed(
      2
    )} / 100 / 2.204623 / 2 / 7 * 33.814 &#10144;&#10144; ${recommendedWater.toFixed(
      2
    )} ounces per day.
    <br />About ${ouncesToCups(recommendedWater)} cups of water
    <br />Result: (${totalIntakeWater}   / ${recommendedWater.toFixed(
      2
    )}) * 100 = ${water}`;
  }

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
  ${getTwoDigitFloat(
    nutrition.cholesterol
  )} / ${cholesterolPoint} * 100 = ${cholesterol}`;

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

  let folateMath = `Math: ((${getTwoDigitFloat(
    nutrition.folate
  )} * 100) / 400) ${nutrition.folateUnit}`;
  let folate = getTwoDigitFloat((nutrition.folate * 100) / 400);

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

  let vitaminB2Math =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? `Math: ((${getTwoDigitFloat(nutrition.riboflavin)} * 100) / 1.3) ${
          nutrition.riboflavinUnit
        }`
      : `Math: ((${getTwoDigitFloat(nutrition.riboflavin)} * 100) / 1.1) ${
          nutrition.riboflavinUnit
        }`;
  let vitaminB2 =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? getTwoDigitFloat((nutrition.riboflavin * 100) / 1.3)
      : getTwoDigitFloat((nutrition.riboflavin * 100) / 1.1);

  let copperMath = `Math: ((${getTwoDigitFloat(
    nutrition.copper
  )} * 100) / 900) ${nutrition.copperUnit}`;
  let copper = getTwoDigitFloat((nutrition.copper * 100) / 900);

  let magnesiumMath =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? `Math: ((${getTwoDigitFloat(nutrition.magnesium)} * 100) / 420) ${
          nutrition.magnesiumUnit
        }`
      : `Math: ((${getTwoDigitFloat(nutrition.magnesium)} * 100) / 360) ${
          nutrition.magnesiumUnit
        }`;
  let magnesium =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? getTwoDigitFloat((nutrition.magnesium * 100) / 420)
      : getTwoDigitFloat((nutrition.magnesium * 100) / 360);

  let seleniumMath = `Math: ((${getTwoDigitFloat(
    nutrition.selenium
  )} * 100) / 55) ${nutrition.seleniumUnit}`;
  let selenium = getTwoDigitFloat((nutrition.selenium * 100) / 55);

  let zincMath =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? `Math: ((${getTwoDigitFloat(nutrition.zinc)} * 100) / 11) ${
          nutrition.magnesiumUnit
        }`
      : `Math: ((${getTwoDigitFloat(nutrition.zinc)} * 100) / 9) ${
          nutrition.magnesiumUnit
        }`;
  let zinc =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? getTwoDigitFloat((nutrition.zinc * 100) / 11)
      : getTwoDigitFloat((nutrition.zinc * 100) / 9);

  //
  let potassiumMath =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? `Math: ((${getTwoDigitFloat(nutrition.potassium)} * 100) / 3400) ${
          nutrition.potassiumUnit
        }`
      : `Math: ((${getTwoDigitFloat(nutrition.potassium)} * 100) / 2600) ${
          nutrition.potassiumUnit
        }`;
  let potassium =
    nutrition.sex === "Male" || nutrition.sex === "male"
      ? getTwoDigitFloat((nutrition.potassium * 100) / 3400)
      : getTwoDigitFloat((nutrition.potassium * 100) / 2600);

  let dhaMath = `Math: ((${getTwoDigitFloat(nutrition.dha)} * 100) / 1) ${
    nutrition.dhaUnit
  }<br />You had ${getTwoDigitFloat(nutrition.dha)} ${nutrition.dhaUnit}`;
  let dha = getTwoDigitFloat(nutrition.dha * 100);

  return {
    dha,
    dhaMath,
    potassiumMath,
    potassium,
    zincMath,
    zinc,
    selenium,
    seleniumMath,
    magnesium,
    magnesiumMath,
    copper,
    copperMath,
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
    vitaminB2, // rivoflavin
    vitaminB2Math,
    waterMath,
    water,
  };
};
