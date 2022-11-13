import React from "react";
import { ProductCard } from "../components/ProductCard";

export const Product = () => {
  const props = [
    {
      id: "price_1LMWgcCoJHKLH4DVImor13kW",
      title: "プログラミング応用",
      description: "中間テストの問題と解答",
      price: 500,
      imageUrl:
        "https://www.dospara.co.jp/5info/img/str_pcuse_programming/programming01.png",
    },
    {
      id: "price_1LMWgcCoJHKLH4DVImor13kW",
      title: "プログラミング応用",
      description: "中間テストの問題と解答",
      price: 500,
      imageUrl:
        "https://www.dospara.co.jp/5info/img/str_pcuse_programming/programming01.png",
    },
  ];
  return (
    <div>
      <div>
        <div>ProductCard</div>
        <ProductCard propsChild={props} />
      </div>
    </div>
  );
};
