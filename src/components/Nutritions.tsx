import { useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/store";
import { resetCart } from "../store/features/foodSlice";

import axios from "axios";

import Accordian from "./Accordian";
import Cart from "./Cart";

const Nutritions = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  const [err, setErr] = useState("");
  const [data, setData] = useState();
  const [foods, setFoods] = useState<
    Array<{
      description: string;
    }>
  >([]);
  const [ingredient, setIngredient] = useState<string>();
  const [loading, setLoading] = useState(false);

  const getDataWithPageNumber = async (i: number) => {
    // Branded is removed
    let added = `&pageSize=200&pageNumber=${i}&dataType=Foundation,Survey%20%28FNDDS%29&requireAllWords=Yes`;
    const options = {
      method: "GET",
      url: `https://api.nal.usda.gov/fdc/v1/foods/search?query=${ingredient}&api_key=EMNTUpEDEMSChkOQGusceI72JQeMvrnKuzknPLnc${added}`,
    };
    return await axios.request(options).then((response) => {
      setData(response.data);
      setFoods((foods) => foods.concat(response.data.foods));

      return response.data.totalPages;
    });
  };

  const getNut = async () => {
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
    setLoading(false);
  };

  console.log("data", data);
  console.log("foods", foods);

  return (
    <Box>
      {loading ? (
        <Box sx={{ fontSize: "32px" }}>Loading...Please wait</Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          <Box sx={{}}>
            <Box sx={{ display: "flex", alignItems: "center", mr: 2, mt: 3 }}>
              <Box sx={{ pr: 2, fontWeight: "bold" }}>
                Search on usda.gov
                <br />
                (Required All)
              </Box>
              <TextField
                placeholder="Ingredients"
                onChange={(e) => setIngredient(e.target.value)}
                value={ingredient || ""}
              />
              <Button
                variant="contained"
                onClick={getNut}
                sx={{ height: "55px" }}
              >
                click
              </Button>
            </Box>

            <Box sx={{ lineHeight: "180%", maxWidth: "600px", pt: 3 }}>
              {foods.map((food: any, index: number) => (
                <Box key={index}>
                  <Accordian index={index} food={food} />
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
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Nutritions;
