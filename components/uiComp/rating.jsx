import * as React from "react";
import Rating from "@mui/material/Rating";
import { pro } from "@/data/data";

export default function ProductRating() {
  return <Rating name="rating" value={pro[1].rating} />;
}
