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
          <input
            style={{
              height: "16px",
              width: "30px",
              border: "1px solid lightgrey",
              padding: "10px",
            }}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <Button
            onClick={() =>
              dispatch(
                addCart({
                  name: props.food.foodCategory,
                  description: props.food.description,
                  quantity: 1,
                  foodNutrients: props.food.foodNutrients,
                })
              )
            }
            sx={{ border: "1px solid lightgrey" }}
          >
            Select this
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Accordian;
