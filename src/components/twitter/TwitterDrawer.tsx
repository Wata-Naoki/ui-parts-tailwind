import React from "react";

import TwitterDrawerTransition from "./TwitterDrawerTransition";
import { useRecoilState } from "recoil";
import { isDrawerOpenState } from "../../pages/TwitterHome";

const TwitterDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenState);
  return (
    <TwitterDrawerTransition isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen}>
      <div className="flex-1 max-w-xs min-w-0 bg-white border-r border-opacity-10">
        <div className="flex items-center px-3 border-b h-14 border-twitter-border-color">
          <h2 className="flex-grow text-lg font-bold">アカウント情報</h2>
        </div>
      </div>
    </TwitterDrawerTransition>
  );
};

export default TwitterDrawer;
