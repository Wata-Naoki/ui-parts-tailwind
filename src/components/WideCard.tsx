import React from "react";
import { Link } from "react-router-dom";
//npm i react-router-dom する必要あり

type WideCardProps = {
  id?: string;
  title: string;
  imageUrl: string;
  description?: string;
  to: string; //遷移先
}[];

//propsを受け取る
export const WideCard = (propsParent: { propsChild: WideCardProps }) => {
  console.log(propsParent);

  return (
    <>
      <div className="flex-wrap items-center justify-center hidden w-screen my-10 md:flex gap-x-10 gap-y-5">
        {propsParent.propsChild.map((prop: any) => {
          return (
            <div className="">
              <Link
                to={prop.to}
                className="m-8 transition-all ease-out border-transparent hover:shadow-2xl hover:opacity-75 hover:ease-in"
              >
                <div className="flex flex-col items-center h-56 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img
                    className="object-fill h-full rounded-t-lg w-80"
                    src={prop.imageUrl}
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {prop.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* モバイル用レイアウト */}
      <div className="flex flex-wrap items-center justify-center w-screen my-10 md:hidden gap-x-10 gap-y-2">
        {propsParent.propsChild.map((prop: any) => {
          return (
            <div className="">
              <Link
                to={prop.to}
                className="mx-20 my-8 transition-all ease-out border-transparent hover:shadow-2xl hover:opacity-75 hover:ease-in"
              >
                <div className="flex flex-col items-center h-64 pb-24 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img
                    className="object-cover w-full h-full rounded-t-lg sm:w-80"
                    src={prop.imageUrl}
                    alt="画像"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate w-80 dark:text-white">
                      {prop.title}
                    </h5>
                    <p className="font-normal text-center text-gray-700 truncate w-80 dark:text-gray-400">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
