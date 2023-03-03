import { useState, useEffect } from "react";
import { Button, Box, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/store";
import { resetCart } from "../store/features/foodSlice";

import axios from "axios";

import Accordian from "./Accordian";
import Cart from "./Cart";
import Total from "./Total";

const Nutritions = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

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
    let added = `&pageSize=200&pageNumber=${i}&requireAllWords=Yes`;
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
    let word = "Banana";
    let legacy = "&dataType=SR%20Legacy";
    let extra = "&dataType=Foundation,Survey%20%28FNDDS%29" + legacy;
    let added = `&pageSize=200&requireAllWords=Yes`;
    const options = {
      method: "GET",
      url: `https://api.nal.usda.gov/fdc/v1/foods/search?query=${word}&api_key=EMNTUpEDEMSChkOQGusceI72JQeMvrnKuzknPLnc${added}${legacy}`,
    };
    await axios.request(options).then((response) => {
      setData(response.data);
      //   setFoods((foods) => foods.concat(response.data.foods));
      console.log("legacy, ", response.data.foods);

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

  console.log("data", data);
  console.log("foods", foods);

  //   useEffect(() => {
  //     testLegacy();
  //     testSearchById();
  //   }, []);

  //   const [legacy, setLegacy] = useState();
  //   const [legacy2, setLegacy2] = useState();

  //   const testLegacy = async () => {
  //     let legacy = "&dataType=SR%20Legacy&Foundation";
  //     // let extra = "&dataType=Foundation,Survey%20%28FNDDS%29";
  //     let extra = `&pageSize=200&requireAllWords=Yes`;
  //     const options = {
  //       method: "GET",
  //       url: `https://api.nal.usda.gov/fdc/v1/foods/search?query=${ingredient}&api_key=EMNTUpEDEMSChkOQGusceI72JQeMvrnKuzknPLnc${extra}${legacy}`,
  //     };
  //     await axios.request(options).then((response) => {
  //       setLegacy(response.data);
  //       //   console.log("testLegacy Legacy response.data", response.data);
  //     });
  //   };

  //   const testSearchById = async () => {
  //     const options = {
  //       method: "GET",
  //       url: `https://api.nal.usda.gov/fdc/v1/food/2344721?api_key=EMNTUpEDEMSChkOQGusceI72JQeMvrnKuzknPLnc&dataType=SR%20Legacy&format=full`,
  //     };
  //     await axios.request(options).then((response) => {
  //       setLegacy2(response.data);
  //     });
  //   };

  //   console.log("legacy", legacy);
  //   console.log("legacy2", legacy2);

  return (
    <Box>
      {loading ? (
        <Box sx={{ fontSize: "32px" }}>Loading...Please wait</Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          <Box sx={{}}>
            <Box sx={{ display: "flex", alignItems: "center", mr: 2, mt: 3 }}>
              <Box sx={{ pr: 2, fontWeight: "bold" }}>
                {/* Search on usda.gov
                <br />
                (Required All) */}
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
            {cart.length > 0 && <Total />}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Nutritions;
