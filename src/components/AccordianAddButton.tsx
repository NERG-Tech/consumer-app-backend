import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { addCart } from "../store/features/foodSlice";
import { useAppDispatch } from "../store/store";

type MeasureType = { disseminationText: string };
type FoodType = {
  foodCategory: string;
  description: string;
  foodNutrients: Array<any>;
  foodMeasures: Array<any>;
};

interface Props {
  measure: MeasureType;
  food: FoodType;
  disseminationText: string;
  gramPerWeight: number;
}

const AccordianAddButton = (props: Props) => {
  const dispatch = useAppDispatch();
  //   console.log("gramWeight", props.gramWeight);

  const [quantity, setQuantity] = React.useState(1);
  return (
    <div>
      <Box sx={{ display: "flex", py: 1 }}>
        <Box sx={{ width: "200px" }}>{props.measure.disseminationText}</Box>
        <input
          style={{
            height: "16px",
            width: "30px",
            border: "1px solid lightgrey",
            padding: "10px",
          }}
          type="number"
          min="1"
          max="999"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <Button
          onClick={() =>
            dispatch(
              addCart({
                name: props.food.foodCategory,
                description: props.food.description,
                quantity: quantity,
                foodNutrients: props.food.foodNutrients,
                disseminationText: props.measure.disseminationText,
                gramPerWeight: props.gramPerWeight,
              })
            )
          }
          sx={{ border: "1px solid lightgrey" }}
        >
          Add
        </Button>
      </Box>
    </div>
  );
};

export default AccordianAddButton;
