import { useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { addCart } from "../store/features/foodSlice";
import { useAppDispatch } from "../store/store";

export interface Props {
  index: number;
  food: {
    description: string;
    dataType: string;
    foodCategory: string;
    allHighlightFields: string;
    additionalDescriptions: string;
    foodNutrients: Array<Array<any>>;
    foodMeasures: Array<any>;
  };
}

const Accordian = (props: Props) => {
  const dispatch = useAppDispatch();

  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <Box sx={{ cursor: "pointer" }}>
      <Box
        sx={{
          textDecoration: "underline",
          fontWeight: "bold",
          pt: 1,
        }}
        onClick={() => setShow(!show)}
      >
        {props.index + 1}. {props.food.description}
      </Box>
      {show && (
        <Box sx={{ pl: 3 }}>
          <Box>dataType: {props.food.dataType}</Box>
          <Box>foodCategory: {props.food.foodCategory}</Box>
          <Box>
            allHighlightFields:{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: props.food.allHighlightFields,
              }}
            ></span>
          </Box>
          <Box>additionalDescriptions: {props.food.additionalDescriptions}</Box>

          {props.food.foodMeasures.map((measure) => {
            if (measure.disseminationText !== "Quantity not specified") {
              return (
                <Box sx={{ display: "flex", py: 1 }}>
                  <Box sx={{ width: "200px" }}>{measure.disseminationText}</Box>
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
                          foodMeasures: props.food.foodMeasures,
                        })
                      )
                    }
                    sx={{ border: "1px solid lightgrey" }}
                  >
                    Add
                  </Button>
                </Box>
              );
            }
            return null;
          })}
        </Box>
      )}
    </Box>
  );
};

export default Accordian;
