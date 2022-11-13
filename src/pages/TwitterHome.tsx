import React from "react";
import { atom } from "recoil";
import { useSetRecoilState } from "recoil";
import TwitterDrawer from "../components/twitter/TwitterDrawer";

//npm i recoil
//npm install @headlessui/react
//を追加する必要あり。

export const isDrawerOpenState = atom({
  key: "isDrawerOpenState", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

//サイドバーとかでボタン押したら横からメニューがでてくるやつ
const TwitterHome = () => {
  const setIsDrawerOpen = useSetRecoilState(isDrawerOpenState);
  return (
    <>
      <main className="text-black">
        <button
          onClick={() => {
            setIsDrawerOpen(true);
          }}
        >
          最新のツイート
        </button>

        <TwitterDrawer />
      </main>
    </>
  );
};
export default TwitterHome;
