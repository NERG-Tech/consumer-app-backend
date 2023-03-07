import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

import { Button, Box, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { resetCart } from "../../store/features/foodSlice";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import axios from "axios";

import Accordian from "./Accordian";
import Cart from "./Cart";
import Total from "./Total";

var utc = require("dayjs/plugin/utc");

const Nutritions = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  let now = dayjs();
  dayjs.extend(utc);

  const [time, setTime] = useState<Dayjs | null>(dayjs(now));
  console.log("time", time);

  const [data, setData] = useState();

  const [foods, setFoods] = useState<
    Array<{
      description: string;
      unitName: string;
      value: number;
      nutrientName: string;
      foodNutrientId: number;
      foodMeasures: Array<{
        gramWeight: number;
        disseminationText: string;
      }>;
    }>
  >([]);

  const [ingredient, setIngredient] = useState<string>();
  const [loading, setLoading] = useState(false);

  const getDataWithPageNumber = async (i: number) => {
    // types: Branded,SR%20Legacy,Foundation,Survey%20%28FNDDS%29
    let legacy = ",SR%20Legacy";
    let extra = "&dataType=Foundation,Survey%20%28FNDDS%29";
    let added = `&pageSize=200&pageNumber=${i}&requireAllWords=No`;
    const options = {
      method: "GET",
      url: `https://api.nal.usda.gov/fdc/v1/foods/search?query=${ingredient}&api_key=EMNTUpEDEMSChkOQGusceI72JQeMvrnKuzknPLnc${added}${extra}`,
    };
    return await axios.request(options).then((response) => {
      setData(response.data);
      setFoods((foods) => foods.concat(response.data.foods));

      return response.data.totalPages;
    });
  };
  const getDataWithPageNumber2 = async () => {
    // types: Branded,SR%20Legacy,Foundation,Survey%20%28FNDDS%29

    let legacy = "&dataType=SR%20Legacy";
    // let extra = "&dataType=Foundation,Survey%20%28FNDDS%29" + legacy;
    let added = `&pageSize=200&requireAllWords=No`;
    const options = {
      method: "GET",
      url: `https://api.nal.usda.gov/fdc/v1/foods/search?query=${ingredient}&api_key=EMNTUpEDEMSChkOQGusceI72JQeMvrnKuzknPLnc${added}${legacy}`,
    };
    await axios.request(options).then((response) => {
      setData(response.data);
      //   setFoods((foods) => foods.concat(response.data.foods));
      console.log("Version 2) legacy, ", response.data.foods);

      //   return response.data.totalPages;
    });
  };

  const getAllNutritions = async () => {
    setLoading(true);
    setFoods([]);

    try {
      const totalPages = await getDataWithPageNumber(1);

      if (totalPages && totalPages > 0)
        for (let i = 2; i <= totalPages; i++) {
          await getDataWithPageNumber(i);
        }
    } catch (error) {
      setLoading(false);
    }

    getDataWithPageNumber2();
    setLoading(false);
  };

  console.log("Total data) ", data);
  console.log("Version 1) ", foods);

  return (
    <Box>
      {loading ? (
        <Box sx={{ fontSize: "32px" }}>Loading...Please wait</Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          <Box sx={{}}>
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: "120px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Date & Time{" "}
              </Box>
              <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
                <DateTimePicker
                  label="Controlled picker"
                  value={time}
                  onChange={(newValue) => setTime(newValue)}
                />
              </DemoContainer>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mr: 2, mt: 3 }}>
              <Box sx={{ pr: 2, fontWeight: "bold", width: "105px" }}>
                Search
              </Box>
              <TextField
                placeholder="Ingredients"
                onChange={(e) => setIngredient(e.target.value)}
                value={ingredient || ""}
              />
              <Button
                variant="contained"
                onClick={getAllNutritions}
                sx={{ height: "55px" }}
              >
                click
              </Button>
            </Box>

            <Box sx={{ lineHeight: "180%", maxWidth: "600px", pt: 3 }}>
              {foods.map((food: any, index: number) => (
                <Box key={index}>
                  {time && (
                    <Accordian index={index} food={food} dateTime={time} />
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{ minWidth: "300px", backgroundColor: "#F0F8FF", p: 4, ml: 1 }}
          >
            <Button
              onClick={() => dispatch(resetCart({}))}
              sx={{ border: "1px solid lightgray", backgroundColor: "white" }}
            >
              RESET ALL
            </Button>
            <Box sx={{ mt: 2, fontWeight: "bold" }}>Selected Items:</Box>
            <Box>
              {cart.map((cart, index) => {
                console.log("===> cart ", cart);
                return <Cart cart={cart} index={index} key={index} />;
              })}
            </Box>
            {cart.length > 0 && <Total />}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Nutritions;
