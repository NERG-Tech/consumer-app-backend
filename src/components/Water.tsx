import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import dayjs, { Dayjs } from "dayjs";

var utc = require("dayjs/plugin/utc");

const Water = () => {
  let now = dayjs();
  dayjs.extend(utc);
  const [time, setTime] = useState<Dayjs | null>(dayjs(now));
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
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
        <TextField label="Water in ounces" sx={{ mt: 2 }} />
      </Box>
      <Box
        sx={{
          width: "400px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          backgroundColor: "#eff8ff",
          p: 4,
        }}
      >
        Result:<Box></Box>
      </Box>
    </Box>
  );
};

export default Water;
