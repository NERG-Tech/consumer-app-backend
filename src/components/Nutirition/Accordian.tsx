import { useState } from "react";
import { Box } from "@mui/system";
import { Dayjs } from "dayjs";
import AccordianAddButton from "./AccordianAddButton";

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
  dateTime: Dayjs;
}

const Accordian = (props: Props) => {
  const [show, setShow] = useState(false);
  return (
    <Box sx={{ cursor: "pointer", fontSize: "13px" }}>
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

          <Box>additionalDescriptions: {props.food.additionalDescriptions}</Box>

          {props.food.foodMeasures.map((measure, index) => {
            if (measure.disseminationText !== "Quantity not specified") {
              let gramPerWeight = measure.gramWeight / 100;
              return (
                <AccordianAddButton
                  key={index}
                  measure={measure}
                  food={props.food}
                  disseminationText={measure.disseminationText}
                  gramPerWeight={gramPerWeight}
                  dateTime={props.dateTime}
                />
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
