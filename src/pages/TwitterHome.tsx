import React from "react";
import { atom } from "recoil";

import { useSetRecoilState } from "recoil";
import TwitterDrawer from "../components/twitter/TwitterDrawer";

export const isDrawerOpenState = atom({
  key: "isDrawerOpenState", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

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
