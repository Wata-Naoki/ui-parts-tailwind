import React from "react";
import { Link } from "react-router-dom";
import { WideCard } from "../components/WideCard";
//npm i react-router-dom する必要あり
export const Main = () => {
  //横長カードに表示する情報
  const props = [
    {
      title: "School of Social Information",
      imageUrl:
        "https://media.istockphoto.com/vectors/creative-statistics-graph-banner-vector-id1192490084?k=20&m=1192490084&s=612x612&w=0&h=CMbFcw9_OAp5bxU1T6H7NBKkPVvbwuxPooyE3k7gnog=",
      description: "こちらは社会情報学部の過去問サイトです。",
      to: "/product", //遷移先
    },
    {
      title: "School of Social Information",
      imageUrl:
        "https://media.istockphoto.com/vectors/creative-statistics-graph-banner-vector-id1192490084?k=20&m=1192490084&s=612x612&w=0&h=CMbFcw9_OAp5bxU1T6H7NBKkPVvbwuxPooyE3k7gnog=",
      description: "こちらは社会情報学部の過去問サイトです。",
      to: "/product",
    },
    {
      title: "School of Social Information",
      imageUrl:
        "https://media.istockphoto.com/vectors/creative-statistics-graph-banner-vector-id1192490084?k=20&m=1192490084&s=612x612&w=0&h=CMbFcw9_OAp5bxU1T6H7NBKkPVvbwuxPooyE3k7gnog=",
      description: "こちらは社会情報学部の過去問サイトです。",
      to: "/product",
    },
    {
      title: "School of Social Information",
      imageUrl:
        "https://media.istockphoto.com/vectors/creative-statistics-graph-banner-vector-id1192490084?k=20&m=1192490084&s=612x612&w=0&h=CMbFcw9_OAp5bxU1T6H7NBKkPVvbwuxPooyE3k7gnog=",
      description: "こちらは社会情報学部の過去問サイトです。",
      to: "/product",
    },
  ];
  return (
    <div>
      <div className="text-center">Main</div>
      <Link to={"/product"} className="text-center underline">
        Productのカードへ
      </Link>
      <div className="text-center">
        横長のカードレイアウト。データを渡すだけで↓のレイアウトになります。レスポンシブも対応させました。
      </div>
      <div>
        <WideCard propsChild={props} />
      </div>
    </div>
  );
};
