import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { addCart } from "../../store/features/foodSlice";
import { useAppDispatch } from "../../store/store";

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
  dateTime: number;
}

const AccordianAddButton = (props: Props) => {
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = React.useState(1);

  console.log("props.food", props);
  return (
    <div>
      <Box sx={{ display: "flex", py: 1 }}>
        <Box sx={{ width: "300px", fontSize: "13px" }}>
          {props.measure.disseminationText} <br />-{" "}
          {(props.food.foodNutrients[5].value * props.gramPerWeight).toFixed(2)}{" "}
          {props.food.foodNutrients[5].unitName} Water
          <br />+{" "}
          {(props.food.foodNutrients[3].value * props.gramPerWeight).toFixed(
            2
          )}{" "}
          Cals
          <br />- Health Activity: +{" "}
          {(
            props.food.foodNutrients[3].value *
            props.gramPerWeight *
            20
          ).toFixed(0)}{" "}
          steps
        </Box>
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
                dateTime: props.dateTime,
              })
            )
          }
          sx={{ border: "1px solid lightgrey", height: "37px" }}
        >
          Add
        </Button>
      </Box>
    </div>
  );
};

export default AccordianAddButton;
