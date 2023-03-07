import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { TextField, Button } from "@mui/material/";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppSelector } from "../store/store";
import * as Calculator from "./Nutirition/calculator";
import dayjs from "dayjs";
import * as FoodSlice from "../store/features/foodSlice";

const Calories = () => {
  const cartUnsorted = useAppSelector((state) => state.cart.cart);

  const [cart, setCart] = useState<FoodSlice.Food[]>();

  const [nutrition, setNutrition] = useState<any>(null);
  const [percentage, setPercentage] = useState<{
    protein: number;
    proteinMath: string;
    fiber: number;
    fiberMath: string;
    carb: number;
    carbMath: string;
    fatPoint: number;
    fatMath: string;
    fat: number;
    vitaminAMath: string;
    vitaminA: number;
    thiaminMath: string;
    thiamin: number;
    niacin: number;
    niacinMath: string;
    vitaminB6Math: string;
    vitaminB6: number;
    vitaminB12Math: string;
    vitaminB12: number;
    vitaminCMath: string;
    vitaminC: number;
    vitaminD: number;
    vitaminDMath: string;
    vitaminE: number;
    vitaminEMath: string;
    vitaminKMath: string;
    vitaminK: number;
    cholineMath: string;
    chloine: number;
  }>({
    protein: 0,
    proteinMath: "",
    fiber: 0,
    fiberMath: "",
    carb: 0,
    carbMath: "",
    fatPoint: 0,
    fatMath: "",
    fat: 0,
    vitaminAMath: "",
    vitaminA: 0,
    thiaminMath: "",
    thiamin: 0,
    niacin: 0,
    niacinMath: "",
    vitaminB6Math: "",
    vitaminB6: 0,
    vitaminB12Math: "",
    vitaminB12: 0,
    vitaminCMath: "",
    vitaminC: 0,
    vitaminD: 0,
    vitaminDMath: "",
    vitaminE: 0,
    vitaminEMath: "",
    vitaminKMath: "",
    vitaminK: 0,
    cholineMath: "",
    chloine: 0,
  });
  const [msg, setMsg] = useState("");

  const [data, setData] = useState<{
    sex: string;
    age: number;
    weightInKg: number;
    heightInCm: number;
    heightFeet: number;
    weight: number; // pounds
    bmr: number;
    calory: number;
  }>();

  useEffect(() => {
    setNutrition(Calculator.calculate(cartUnsorted));

    let newArray = [...cartUnsorted];

    newArray.sort(function (a: FoodSlice.Food, b: FoodSlice.Food) {
      return a.dateTime - b.dateTime;
    });
    setCart(newArray);
    console.log(newArray);
  }, [cartUnsorted]);

  useEffect(() => {
    if (nutrition && data) {
      setPercentage(
        Calculator.getPercentages({
          ...nutrition,
          sex: data.sex,
        })
      );
    } else {
      setMsg("Please put age, gender, weight and height");
    }
  }, [nutrition, data]);

  // console.log(nutrition);
  // console.log(percentage);

  const [factor, setFactor] = React.useState("Sedentary");
  const [err, setErr] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setFactor(event.target.value);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    const target = event.target;

    if (
      target.age.value &&
      target.age.value > 0 &&
      target.weight.value &&
      target.weight.value > 0 &&
      target.sex.value &&
      target.heightFeet &&
      target.heightInch &&
      target.weight
    ) {
      setErr("");
      const heightInCm = feetInchesToCm(
        target.heightFeet.value,
        target.heightInch.value
      );
      const weightInKg = parseFloat((target.weight.value / 2.205).toFixed(2));
      const bmr = calculateBMR(
        weightInKg,
        heightInCm,
        target.age.value,
        target.sex.value
      );
      const calory = calculateDailyCalory(factor, bmr);

      const data = {
        age: target.age.value,
        weight: target.weight.value,
        sex: target.sex.value,
        heightFeet: target.heightFeet.value,
        heightInch: target.heightInch.value,
        weightInKg: weightInKg,
        heightInCm: heightInCm,
        factor: factor,
        bmr: bmr,
        calory: calory,
      };
      // console.log(data);
      setData(data);
    } else {
      setErr("Error: please check your input.");
    }
  };

  const feetInchesToCm = (feet: number, inch: number): number => {
    return parseFloat((feet * 30.48 + inch * 2.54).toFixed(2));
  };
  const calculateBMR = (
    weightInKg: number,
    heightInCm: number,
    age: number,
    sex: string
  ): number => {
    if (sex === "Male" || sex === "male") {
      const num = 66.5 + 13.75 * weightInKg + 5.003 * heightInCm - 6.75 * age;
      return parseFloat(num.toFixed(1));
    } else {
      const num = 655.1 + 9.563 * weightInKg + 1.85 * heightInCm - 4.676 * age;
      return parseFloat(num.toFixed(1));
    }
  };
  const calculateDailyCalory = (factor: string, bmr: number) => {
    switch (factor) {
      case "Lightly":
        return Math.round(bmr * 1.375);
      case "Moderately":
        return Math.round(bmr * 1.55);
      case "Very":
        return Math.round(bmr * 1.725);
      case "Extra":
        return Math.round(bmr * 1.9);
      default: // Sedentary
        return Math.round(bmr * 1.2);
    }
  };
  return (
    <Box sx={{ width: "1200px", display: "flex" }}>
      <Box
        sx={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <form className="form" onSubmit={onSubmit}>
          <Box sx={{ pb: 2, fontWeight: "bold", fontSize: "25px" }}>
            Calories Calculator{" "}
            <a
              rel="noreferrer"
              href="https://www.omnicalculator.com/health/bmr-harris-benedict-equation#what-is-a-bmr-calculator"
              target={"_blank"}
              style={{ fontSize: "13px" }}
            >
              Link
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ pr: 2, width: "45px", textAlign: "right" }}>Age: </Box>
            <TextField id="age" label="" variant="filled" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pt: 2,
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                pr: 2,
                width: "45px",
                textAlign: "right",
                justifyContent: "center",
              }}
            >
              Gender:{" "}
            </Box>
            <TextField id="sex" label="Male or Female" variant="filled" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pt: 2,
              justifyContent: "center",
            }}
          >
            <Box sx={{ pr: 2, width: "45px", textAlign: "right" }}>
              Weight:{" "}
            </Box>
            <TextField id="weight" label="Weight in pounds" variant="filled" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pt: 2,
              justifyContent: "center",
            }}
          >
            <Box sx={{ pr: 2, width: "45px", textAlign: "right" }}>
              Height:{" "}
            </Box>
            <TextField
              id="heightFeet"
              label="Feet"
              variant="filled"
              sx={{ width: "80px" }}
            />
            <TextField
              id="heightInch"
              label="Inch"
              variant="filled"
              sx={{ width: "80px", ml: 1 }}
            />
          </Box>

          <Box sx={{ pt: 3, pb: 2 }}>
            <FormControl sx={{ m: 1, minWidth: "80%" }} size="small">
              <InputLabel id="demo-select-small">Activity factor</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={factor}
                label="Factor"
                onChange={handleChange}
              >
                <MenuItem value={"Sedentary"}>Sedentary</MenuItem>
                <MenuItem value={"Lightly"}>Lightly active</MenuItem>
                <MenuItem value={"Moderately"}>Moderately active</MenuItem>
                <MenuItem value={"Very"}>Very active</MenuItem>
                <MenuItem value={"Extra"}>Extra active</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button type="submit" variant="outlined" size="medium" sx={{ mt: 2 }}>
            Submit
          </Button>

          <Box
            sx={{
              textAlign: "left",
              pt: 2,
              lineHeight: "170%",
              fontSize: "13px",
            }}
          >
            <ul>
              <li>Sedentary (little or no exercise)</li>
              <li>Lightly active (light exercise/sports 1-3 days/week)</li>
              <li>
                Moderately active (moderate exercise/sports 3-5 days/week)
              </li>
              <li>Very active (hard exercise/sports 6-7 days a week)</li>
              <li>Extra active (very hard exercise/sports & a physical job)</li>
            </ul>
          </Box>
        </form>
      </Box>
      <Box>
        {err.length > 1 ? (
          <Box sx={{ mt: 3, pl: 3, lineHeight: "180%" }}>{err}</Box>
        ) : (
          <Box sx={{ mt: 3, pl: 3, lineHeight: "180%" }}>
            <Box sx={{ mb: "4px" }}>Foods you ate (time asc order):</Box>
            {cart &&
              cart.map((food, index) => {
                return (
                  <Box key={index}>
                    {index + 1}. {food.description} ({food.disseminationText}) -{" "}
                    Qty: {food.quantity}{" "}
                    <span style={{ color: "orange", paddingLeft: "2px" }}>
                      {dayjs(food.dateTime * 1000).format("YYYY/MM/DD h:mm A")}
                    </span>
                  </Box>
                );
              })}

            <Box sx={{ pt: 1 }}>
              === Last entry: {cart && cart[cart.length - 1].description} -{" "}
              <span style={{ color: "orange", paddingLeft: "2px" }}>
                {cart &&
                  dayjs(cart[cart.length - 1].dateTime * 1000).format(
                    "YYYY/MM/DD h:mm A"
                  )}
              </span>
            </Box>
            <Box sx={{ display: "flex" }}>
              {nutrition && (
                <Box sx={{ color: "blue" }}>
                  Energy from foods you ate: {nutrition.energy}{" "}
                  {nutrition.energyUnit}
                </Box>
              )}
            </Box>

            <Box
              sx={{
                borderTop: "1px solid lightgray",
                pl: 3,
                pt: 2,
                fontSize: "14px",
                mt: 2,
              }}
            >
              <Box>
                Nutrient Log Analysis - We are going to sort by date later
              </Box>

              {cart &&
                cart.map((food, index) => {
                  if (
                    parseInt(dayjs(food.dateTime * 1000).format("HH")) >= 6 &&
                    parseInt(dayjs(food.dateTime * 1000).format("HH")) < 12
                  ) {
                    return <Box>Morning: {food.description} - Calory: </Box>;
                  } else if (
                    parseInt(dayjs(food.dateTime * 1000).format("HH")) >= 12 &&
                    parseInt(dayjs(food.dateTime * 1000).format("HH")) < 18
                  ) {
                    return <Box>Afternoon: {food.description}</Box>;
                  } else {
                    return <Box>Night: {food.description}</Box>;
                  }
                })}
            </Box>

            {data && (
              <Box sx={{ color: "black" }}>
                {data && data.sex === "Male" ? (
                  <Box>
                    <Box
                      sx={{ borderTop: "1px solid lightgrey", mt: 2, pt: 1 }}
                    >
                      Calculate BMR:
                    </Box>
                    <Box>
                      Man's BMR = 66.5 + (13.75 × weight in kg) + (5.003 ×
                      height in cm) - (6.75 × age)
                    </Box>
                    <Box
                      sx={{
                        color: "#191970",
                        fontWeight: "bold",
                      }}
                    >
                      BMR = 66.5 + ( 13.75 * {data.weightInKg} (kg) ) + ( 5.003
                      * {data.heightInCm} (cm)) - (6.75 * {data.age}) ={" "}
                      {data.bmr} kcal/day
                    </Box>

                    <Box
                      sx={{
                        pt: 1,
                        color: "#2F4F4F",
                        textDecoration: "underline",
                      }}
                    >
                      &#128512; Calories to Consume: {data.calory} kcal/day
                    </Box>
                  </Box>
                ) : (
                  <Box>
                    <Box>
                      Woman's BMR = 655.1 + (9.563 x weight in kg) + (1.850 ×
                      height in cm) - (4.676 x age)
                    </Box>
                    <Box
                      sx={{
                        color: "#191970",
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      BMR = 66.5 + ( 13.75 * {data.weightInKg} (kg) ) + ( 5.003
                      * {data.heightInCm} (cm)) - (6.75 * {data.age}) ={" "}
                      {data.bmr} kcal/day
                    </Box>
                    <Box sx={{ pt: 1 }}>
                      * Total daily calorie needs: {data.calory} kcal/day
                    </Box>
                  </Box>
                )}
              </Box>
            )}
          </Box>
        )}
        {percentage && data && (
          <Box sx={{ mt: 3, pl: 3, lineHeight: "150%", fontSize: "14px" }}>
            <Box sx={{ borderTop: "1px solid lightgray", pt: 1, mt: 1 }}>
              Percentage of nutrients taken:
              <Box sx={{ pt: 1 }}>
                &#128512; Recommended protein is{" "}
                {data.sex === "Male" || data.sex === "male"
                  ? "56 g/day (male)"
                  : "46 g/day (female)"}
                <Box>{percentage.proteinMath && percentage.proteinMath}</Box>
                <Box>
                  You had{" "}
                  <span style={{ color: "#008080" }}>
                    {percentage.protein}%
                  </span>{" "}
                  of recommended proteins.
                </Box>
              </Box>
              <Box sx={{ pt: 1 }}>
                &#128512; Recommended fiber is{" "}
                {data.sex === "Male" || data.sex === "male"
                  ? "38 g/day (male)"
                  : "25 g/day (female)"}
                <Box>{percentage.fiberMath && percentage.fiberMath}</Box>
                <Box>
                  You had{" "}
                  <span style={{ color: "#008080" }}>{percentage.fiber}%</span>{" "}
                  of recommended fiber.
                </Box>
              </Box>{" "}
              <Box sx={{ pt: 1 }}>
                &#128512; Recommended carb is 130 g/day
                <Box>Math: {percentage.carbMath && percentage.carbMath}</Box>
                <Box>
                  You had{" "}
                  <span style={{ color: "#008080" }}>{percentage.carb}%</span>{" "}
                  of recommended fiber of a day.
                </Box>
              </Box>
              <Box sx={{ pt: 1 }}>
                &#128512; Recommended fat is {percentage.fatPoint} g/day
                <Box>{percentage.carb && percentage.fatMath}</Box>
                <Box>
                  You had{" "}
                  <span style={{ color: "#008080" }}>{percentage.fat}%</span> of
                  fat in calories.
                </Box>
              </Box>
              <Box sx={{ pt: 1 }}>
                &#128512; Recommended vitamin A is{" "}
                {data.sex === "Male" || data.sex === "male"
                  ? "900 µg (male)"
                  : "700 µg (female)"}
                <Box>{percentage.vitaminAMath && percentage.vitaminAMath}</Box>
                <Box>
                  You had{" "}
                  <span style={{ color: "#008080" }}>
                    {percentage.vitaminA}%
                  </span>{" "}
                  of recommended vitamin A of a day.
                </Box>
              </Box>
              <Box sx={{ pt: 1 }}>
                &#128512; Recommended thiamin is{" "}
                {data.sex === "Male" || data.sex === "male"
                  ? "1.2 mg (male)"
                  : "1.1 mg (female)"}
                <Box>{percentage.thiaminMath && percentage.thiaminMath}</Box>
                <Box>
                  You had{" "}
                  <span style={{ color: "#008080" }}>
                    {percentage.thiamin}%
                  </span>{" "}
                  of recommended thiamin of a day.
                </Box>
              </Box>
              <Box sx={{ pt: 1 }}>
                &#128512; Recommended niacin is{" "}
                {data.sex === "Male" || data.sex === "male"
                  ? "1.2 mg (male)"
                  : "1.1 mg (female)"}
                <Box>{percentage.niacinMath && percentage.niacinMath}</Box>
                <Box>
                  You had{" "}
                  <span style={{ color: "#008080" }}>{percentage.niacin}%</span>{" "}
                  of recommended niacin of a day.
                </Box>
              </Box>
              <Box sx={{ pt: 1 }}>
                &#128512; Recommended vitaminB6 is{" "}
                {data.sex === "Male" || data.sex === "male"
                  ? "1.7 mg (male)"
                  : "1.5 mg (female)"}
                <Box>
                  {percentage.vitaminB6Math && percentage.vitaminB6Math}
                </Box>
                <Box>
                  You had{" "}
                  <span style={{ color: "#008080" }}>
                    {percentage.vitaminB6}%
                  </span>{" "}
                  of recommended vitaminB6 of a day.
                </Box>
              </Box>
              <Box sx={{ pt: 1 }}>
                &#128512; Recommended vitaminB12 is 2.4
                <Box>
                  {percentage.vitaminB12Math && percentage.vitaminB12Math}
                </Box>
                <Box>
                  You had{" "}
                  <span style={{ color: "#008080" }}>
                    {percentage.vitaminB12}%
                  </span>{" "}
                  of recommended vitaminB6 of a day.
                </Box>
              </Box>
              <Box sx={{ pt: 1 }}>
                &#128512; Recommended vitaminC is{" "}
                {data.sex === "Male" || data.sex === "male" ? "90" : "75"}
                <Box>{percentage.vitaminCMath && percentage.vitaminCMath}</Box>
                <Box>
                  You had{" "}
                  <span style={{ color: "#008080" }}>
                    {percentage.vitaminC}%
                  </span>{" "}
                  of recommended vitaminC of a day.
                </Box>
              </Box>
              <Box sx={{ pt: 1 }}>
                &#128512; Recommended vitaminD is 20
                <Box>{percentage.vitaminDMath && percentage.vitaminDMath}</Box>
                <Box>
                  You had{" "}
                  <span style={{ color: "#008080" }}>
                    {percentage.vitaminD}%
                  </span>{" "}
                  of recommended vitaminD of a day.
                </Box>
              </Box>
              <Box sx={{ pt: 1 }}>
                &#128512; Recommended vitaminE is 15
                <Box>{percentage.vitaminEMath && percentage.vitaminEMath}</Box>
                <Box>
                  You had{" "}
                  <span style={{ color: "#008080" }}>
                    {percentage.vitaminE}%
                  </span>{" "}
                  of recommended vitaminE of a day.
                </Box>
              </Box>
              <Box sx={{ pt: 1 }}>
                &#128512; Recommended vitaminK is{" "}
                {data.sex === "Male" || data.sex === "male" ? "120" : "90"}
                <Box>{percentage.vitaminKMath && percentage.vitaminKMath}</Box>
                <Box>
                  You had{" "}
                  <span style={{ color: "#008080" }}>
                    {percentage.vitaminK}%
                  </span>{" "}
                  of recommended vitaminK of a day.
                </Box>
              </Box>
              <Box sx={{ pt: 1 }}>
                &#128512; Recommended chloine is{" "}
                {data.sex === "Male" || data.sex === "male" ? "550" : "425"}
                <Box>{percentage.cholineMath && percentage.cholineMath}</Box>
                <Box>
                  You had{" "}
                  <span style={{ color: "#008080" }}>
                    {percentage.chloine}%
                  </span>{" "}
                  of recommended chloine of a day.
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Calories;
