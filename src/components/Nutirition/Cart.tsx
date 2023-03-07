import React, { useState } from "react";
import { Box } from "@mui/system";
import { useAppDispatch } from "../../store/store";
import { removeCart } from "../../store/features/foodSlice";
import dayjs, { Dayjs } from "dayjs";

interface ObjectType {
  [key: string]: number;
}

export const indexes: ObjectType = {
  Protein: 0,
  TotalLipidFat: 1,
  Carbohydrate: 2,
  Water: 5,
  Fiber: 9,
  VitaminA: 20,
  Thiamin: 29,
  Riboflavin: 30,
  Niacin: 31,
  VitaminB6: 32,
  VitaminB12: 34,
  VitaminC: 28,
  VitaminD: 24,
  Folate: 33,
  VitaminE: 23,
  VitaminK: 36,
  Cholesterol: 42,
  Choline: 35,
  Calcium: 10,
  Caffeine: 6,
  Theobromine: 7,
  Sugar: 8,
  Iron: 11,
  Sodium: 15,
  Retinol: 19,
  Energy: 3,
};

type Props = {
  cart: {
    disseminationText: string;
    description: string;
    name: string;
    quantity: number;
    foodNutrients: Array<any>;
    gramPerWeight: number;
    dateTime: number;
  };
  index: number;
};

const Cart = (props: Props) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  let html = ``;
  for (const ingredient in indexes) {
    // console.log(ingredient);
    let index = indexes[ingredient as keyof ObjectType];
    html +=
      "<br /><Box> " +
      ingredient +
      ": " +
      props.cart.foodNutrients[index].value +
      "<Box></Box><br /><Box>" +
      ingredient +
      " * Quantity * gramWeight = " +
      props.cart.foodNutrients[index].value +
      " * " +
      props.cart.quantity +
      " * " +
      props.cart.gramPerWeight +
      " = " +
      (
        props.cart.foodNutrients[index].value *
        props.cart.quantity *
        props.cart.gramPerWeight
      ).toFixed(2) +
      " " +
      props.cart.foodNutrients[index].unitName +
      "</Box><br />";
  }

  return (
    <Box>
      <Box
        key={props.index}
        sx={{
          border: "1px solid lightgray",
          p: 2,
          backgroundColor: "white",
          fontSize: "14px",
          mt: 1,
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
        <Box sx={{ color: "#FF8C00" }}>
          Date & Time:{" "}
          {dayjs(props.cart.dateTime * 1000).format("YYYY/MM/DD h:mm A")}
        </Box>
        <Box sx={{ pt: 1 }}>Name: {props.cart.name}</Box>
        <Box>Qty: {props.cart.quantity}</Box>

        <div dangerouslySetInnerHTML={{ __html: html }}></div>

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
    </Box>
  );
};

export default Cart;
