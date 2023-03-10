import React, { useState, useEffect } from "react";
import { TextField, Box, Button } from "@mui/material";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import { addWater, resetWater } from "../store/features/waterSlice";
import { useAppDispatch } from "../store/store";
import { useAppSelector } from "../store/store";

import dayjs, { Dayjs } from "dayjs";

var utc = require("dayjs/plugin/utc");

const Water = () => {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.waterCart.cart);
  console.log("cart", cart);

  let now = dayjs();
  dayjs.extend(utc);

  const [value, setValue] = useState(0);
  const [time, setTime] = useState<Dayjs | null>(dayjs(now));
  const [err, setErr] = useState("");

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let num = 0;
    cart.map((water) => {
      num += water.value;
    });
    setTotal(num);
  }, [cart]);

  const submit = () => {
    if (time && value > 0 && !isNaN(value)) {
      setErr("");
      dispatch(
        addWater({
          value: value,
          dateTime: time.unix(),
        })
      );
    } else {
      setErr("Please check the input.");
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "350px" }}>
          <Box sx={{ pr: 1 }}>
            <Box>
              <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
                <DateTimePicker
                  label="Controlled picker"
                  value={time}
                  onChange={(newValue) => setTime(newValue)}
                />
              </DemoContainer>
            </Box>
            <Box sx={{ pt: 3 }}>
              How much water did you drink in{" "}
              <span style={{ color: "green" }}>ounces</span>?{" "}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "60px",
              mt: 2,
            }}
          >
            <TextField
              label="Water in ounces"
              onChange={(e) => setValue(parseInt(e.target.value))}
            />
            {time && (
              <Button variant="text" onClick={() => submit()}>
                Submit
              </Button>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            width: "400px",
            //   display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            backgroundColor: "#eff8ff",
            p: 4,
          }}
        >
          {err && err}
          {!err && (
            <Box>
              <Button
                sx={{
                  border: "1px solid lightgray",
                  backgroundColor: "white",
                  mb: 2,
                }}
                onClick={() => dispatch(resetWater({}))}
              >
                Reset All
              </Button>
              <Box>Result:</Box>
              <Box sx={{ pt: 2 }}>
                {cart.map((water, index) => {
                  return (
                    <Box key={index} sx={{ pb: 1 }}>
                      {index + 1}. {water.value} ounces -{" "}
                      {dayjs(water.dateTime * 1000).format("YYYY/MM/DD h:mm A")}
                    </Box>
                  );
                })}
              </Box>
              <Box sx={{ pt: 2 }}>
                Total:{" "}
                <span style={{ fontWeight: "bold", color: "green" }}>
                  {total}
                </span>{" "}
                ounces
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={{ pt: 5, lineHeight: "170%", fontSize: "14px" }}>
        <Box>* Example of How we calculate water</Box>
        <Box sx={{ pl: 2 }}>
          <Box sx={{ color: "green", fontWeight: "bold" }}>For men,</Box>
          <Box>TBW = 2.447 - 0.09156 × A + 0.1074 × H + 0.3362 × W</Box>
          <Box sx={{ pl: 3 }}>
            1. Example:{" "}
            <span style={{ color: "red" }}>
              age = 22, height (cm) = 155, height (feet, inch) = 5 feet 1 inch,
              weight (kg) = 82, weight (pounds) = 180 lbs
            </span>
            <Box>
              &rarr; TBW = 2.447 - 0.09156 * 22 + 0.1074 * 155 + 0.3362 * 82 =
              44.6% <br />
              &rarr; Body Water weight = 180 lbs * 0.446 = 80.28 &rarr; pound to
              liter convertion &rarr; 80.28 / 2.204623 = 36.41 liter
              <br />
              &rarr; Divide by 2 &rarr; 36.41 / 2 = 18.205 &rarr; Get Daily
              (divide by 7) &rarr; 18.205 / 7 = 2.6 liter
              <br />
              &rarr; Liter to ounces = 2.6 * 33.814 = 87.9165 ounces
            </Box>
          </Box>
          <Box>
            If this user didn't set the gender, recommended water intake is 3.7
            liter.
            <br />
            3.7 liter = liter to ounces = 3.7 * 33.814 = 125.112 ounces.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Water;
