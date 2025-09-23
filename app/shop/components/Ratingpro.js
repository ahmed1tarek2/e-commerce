import * as React from 'react';
import Rating from '@mui/material/Rating';
// import products from './products.js'

export default function Ratingpro({rating}) {
  return (
    <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
  );
}