import React from "react";
import { Box } from "@mui/system";
import { TextField, Button } from "@mui/material/";

const Calories = () => {
  return (
    <Box
      sx={{
        // border: "1px solid red",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Box sx={{ pb: 2, fontWeight: "bold", fontSize: "25px" }}>
        Calories Calculator
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ pr: 2, width: "45px", textAlign: "right" }}>Age: </Box>
        <TextField id="filled-basic" label="" variant="filled" />
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
        <TextField id="filled-basic" label="Male or Female" variant="filled" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pt: 2,
          justifyContent: "center",
        }}
      >
        <Box sx={{ pr: 2, width: "45px", textAlign: "right" }}>Weight: </Box>
        <TextField
          id="filled-basic"
          label="Weight in pounds"
          variant="filled"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pt: 2,
          justifyContent: "center",
        }}
      >
        <Box sx={{ pr: 2, width: "45px", textAlign: "right" }}>Height: </Box>
        <TextField
          id="filled-basic"
          label="Feet"
          variant="filled"
          sx={{ width: "80px" }}
        />
        <TextField
          id="filled-basic"
          label="Inch"
          variant="filled"
          sx={{ width: "80px", ml: 1 }}
        />
      </Box>
      <Button variant="outlined" size="medium" sx={{ mt: 2 }}>
        Submit
      </Button>
      <Box sx={{ mt: 3 }}>Calculate BMR:</Box>
    </Box>
  );
};

export default Calories;
