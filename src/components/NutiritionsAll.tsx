import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Box, TextField } from "@mui/material";
import Accordian from "./Accordian";
import { useAppSelector } from "../store/store";
import { resetCart, removeCart } from "../store/features/foodSlice";
import { useAppDispatch } from "../store/store";

const Nutritions = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  console.log("cart", cart);

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

  const [protein, setProtein] = useState<number>(0);
  const [proteinUnit, setProteinUnit] = useState<string>();

  useEffect(() => {
    let pro = 0;
    cart.map((cart) => {
      pro += cart.foodNutrients[0].value * cart.quantity;
      setProteinUnit(cart.foodNutrients[0].unitName);
    });

    setProtein(pro);
  }, [cart]);

  return (
    <Box>
      {loading ? (
        <Box>
          Loading...
          <Box>...{foods.length} results are loaded</Box>
        </Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          <Box sx={{}}>
            <Box sx={{ display: "flex", alignItems: "center", mr: 2, mt: 3 }}>
              <Box sx={{ pr: 2, fontWeight: "bold" }}>
                {" "}
                Search on usda.gov
                <br />
                (Required All)
              </Box>
              <TextField
                placeholder="Ingredients"
                onChange={(e) => setIngredient(e.target.value)}
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
                return (
                  <Box
                    key={index}
                    sx={{
                      border: "1px solid lightgray",
                      m: 2,
                      p: 2,
                      backgroundColor: "white",
                    }}
                  >
                    <Box>
                      Name:{" "}
                      <span style={{ fontWeight: "bold", color: "#778899" }}>
                        {cart.name}
                      </span>
                    </Box>
                    <Box sx={{ pt: 1 }}>Desc: {cart.description}</Box>
                    <Box>Qty: {cart.quantity}</Box>
                    <Box sx={{ pt: 1 }}>
                      Protein: {cart.foodNutrients[0].value}
                    </Box>
                    <Box>
                      Protein * Quantity = {cart.foodNutrients[0].value} *{" "}
                      {cart.quantity} ={" "}
                      {(cart.foodNutrients[0].value * cart.quantity).toFixed(2)}{" "}
                      {cart.foodNutrients[0].unitName}
                    </Box>
                    <Button
                      onClick={() =>
                        dispatch(removeCart({ description: cart.description }))
                      }
                      sx={{ mt: 2, border: "1px solid lightgrey" }}
                    >
                      Remove From Cart
                    </Button>
                  </Box>
                );
              })}
            </Box>
            <Box>
              <span style={{ fontWeight: "bold" }}>Result</span>:{" "}
              <Box sx={{ pt: 2 }}>
                Total Protein {protein.toFixed(2)} {proteinUnit}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Nutritions;
