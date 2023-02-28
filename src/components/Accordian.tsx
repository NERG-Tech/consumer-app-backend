import React, { useState } from "react";
import { Box } from "@mui/system";

export interface Props {
  index: number;
  food: {
    description: string;
    dataType: string;
    foodCategory: string;
    allHighlightFields: string;
    additionalDescriptions: string;
  };
}

const Accordian = (props: Props) => {
  const [show, setShow] = useState(false);
  console.log(show);
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
        </Box>
      )}
    </Box>
  );
};

export default Accordian;
