import React from "react";

type ProductCardProps = {
  id?: string;
  title: string;
  imageUrl: string;
  price: number;
  description?: string;
}[];

export const ProductCard = (propsParent: { propsChild: ProductCardProps }) => {
  return <div>ProductCard</div>;
};
