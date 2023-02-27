import { useState } from "react";
import axios from "axios";
import { Button, Box, TextField } from "@mui/material";

const Nutritions = () => {
  //   const [data, setData] = useState(null);
  const [ingredient, setIngredient] = useState<string>();
  console.log("ingredient");

  const getNut = async () => {
    const options = {
      method: "GET",
      url: `https://api.nal.usda.gov/fdc/v1/foods/search?query=${ingredient}&pageSize=2&api_key=QZ7VNZbDnIBJmovwFOZsI0MZn3c62DlHX0gVQHtC`,
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  // https://world.openfoodfacts.org/api/2
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ pr: 2, fontWeight: "bold" }}> Search on usda.gov</Box>
        <TextField
          placeholder="Ingredients"
          onChange={(e) => setIngredient(e.target.value)}
        />
        <Button variant="contained" onClick={getNut} sx={{ height: "55px" }}>
          click
        </Button>
      </Box>
    </Box>
  );
};

export default Nutritions;
