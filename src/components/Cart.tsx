import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useAppSelector } from "../store/store";
import { useAppDispatch } from "../store/store";
import { removeCart } from "../store/features/foodSlice";

const indexes = { Protein: 0, TotalLipidFat: 1, Water: 5 };

type Props = {
  cart: {
    disseminationText: string;
    description: string;
    name: string;
    quantity: number;
    foodNutrients: Array<any>;
    gramPerWeight: number;
  };
  index: number;
};

const Cart = (props: Props) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  const [loading, setLoading] = useState<boolean>(false);

  /* Start of Total Values */
  const [protein, setProtein] = useState<number>(0);
  const [proteinUnit, setProteinUnit] = useState<string>();

  const [water, setWater] = useState<number>(0);
  const [waterUnit, setWaterUnit] = useState<string>();
  /* End of Total Values */

  // Calculate total values each time cart is changed
  useEffect(() => {
    let protein = 0;
    cart.forEach((cart) => {
      protein +=
        cart.foodNutrients[0].value * cart.quantity * cart.gramPerWeight;
      setProteinUnit(cart.foodNutrients[0].unitName);
    });
    setProtein(protein);
  }, [cart]);

  return (
    <Box
      key={props.index}
      sx={{
        border: "1px solid lightgray",
        m: 2,
        p: 2,
        backgroundColor: "white",
        fontSize: "14px",
      }}
    >
      {loading && <Box>Removing...</Box>}

      <Box sx={{ fontSize: "14px" }}>
        <span style={{ fontWeight: "bold", color: "#778899" }}>
          {props.cart.description}
          <div style={{ color: "#2F4F4F", paddingTop: "3px" }}>
            {props.cart.disseminationText}
          </div>
        </span>
      </Box>
      <Box sx={{ pt: 1 }}>Name: {props.cart.name}</Box>
      <Box>Qty: {props.cart.quantity}</Box>

      <Box>
        <Box sx={{ pt: 1 }}>
          Protein: {props.cart.foodNutrients[indexes["Protein"]].value}
        </Box>
        <Box>
          Protein * Quantity * gramWeight ={" "}
          {props.cart.foodNutrients[indexes["Protein"]].value} *{" "}
          {props.cart.quantity} * {props.cart.gramPerWeight} ={" "}
          {(
            props.cart.foodNutrients[indexes["Protein"]].value *
            props.cart.quantity *
            props.cart.gramPerWeight
          ).toFixed(2)}{" "}
          {props.cart.foodNutrients[indexes["Protein"]].unitName}
        </Box>
      </Box>

      {/* <Box>
      <Box sx={{ pt: 1 }}>
        Protein: {cart.foodNutrients[indexes["Protein"]].value}
      </Box>
      <Box>
        Protein * Quantity * gramWeight ={" "}
        {cart.foodNutrients[indexes["Protein"]].value} *{" "}
        {cart.quantity} * {cart.gramPerWeight} ={" "}
        {(
          cart.foodNutrients[indexes["Protein"]].value *
          cart.quantity *
          cart.gramPerWeight
        ).toFixed(2)}{" "}
        {cart.foodNutrients[indexes["Protein"]].unitName}
      </Box>
    </Box>

    <Box>
      <Box sx={{ pt: 1 }}>
        Total lipid (fat):{" "}
        {cart.foodNutrients[indexes["TotalLipidFat"]].value}
      </Box>
      <Box>
        Total lipid (fat) * Quantity * gramWeight ={" "}
        {cart.foodNutrients[indexes["TotalLipidFat"]].value} *{" "}
        {cart.quantity} * {cart.gramPerWeight} ={" "}
        {(
          cart.foodNutrients[indexes["TotalLipidFat"]].value *
          cart.quantity *
          cart.gramPerWeight
        ).toFixed(2)}{" "}
        {cart.foodNutrients[indexes["TotalLipidFat"]].unitName}
      </Box>
    </Box>

    <Box>
      <Box sx={{ pt: 1 }}>
        Water: {cart.foodNutrients[indexes["Water"]].value}
      </Box>
      <Box>
        Water * Quantity * gramWeight ={" "}
        {cart.foodNutrients[indexes["Water"]].value} *{" "}
        {cart.quantity} * {cart.gramPerWeight} ={" "}
        {(
          cart.foodNutrients[indexes["Water"]].value *
          cart.quantity *
          cart.gramPerWeight
        ).toFixed(2)}{" "}
        {cart.foodNutrients[indexes["Water"]].unitName}
      </Box>
    </Box> */}
      <button
        onClick={() => {
          setLoading(true);
          dispatch(
            removeCart({
              description: props.cart.description,
              disseminationText: props.cart.disseminationText,
            })
          );
          setLoading(false);
        }}
        style={{
          border: "1px solid lightgrey",
          padding: "2px",
          marginTop: "5px",
        }}
      >
        Remove From Cart
      </button>
    </Box>
  );
};

export default Cart;
