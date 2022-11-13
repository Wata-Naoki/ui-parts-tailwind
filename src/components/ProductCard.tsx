import React from "react";

type ProductCardProps = {
  id?: string;
  title: string;
  imageUrl: string;
  price: number;
  description?: string;
}[];

export const ProductCard = (propsParent: { propsChild: ProductCardProps }) => {
  console.log(propsParent.propsChild);
  return (
    <div>
      {/* {propsParent.propsChild.map((prop: any) => {
        return (
          <div className="flex flex-col items-center h-64 pb-24 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full h-full rounded-t-lg sm:w-80"
              src={prop.imageUrl}
              alt="画像"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {prop.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {prop.description}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {prop.price}
              </p>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};
