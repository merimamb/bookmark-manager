"use client";

import Button from "../Button";
import { useIsUserAuthenticated } from "@/app/util/utils";

const Header = () => {
  const { isAuthenticated } = useIsUserAuthenticated();
  return (
    <div className="flex p-4 justify-between border-b-2 border-neutral-200 items-center">
      <h1 className="font-medium">Bookmarks manager</h1>
      {!isAuthenticated && (
        <div className="flex gap-2">
          <Button className="h-9">Sign In</Button>
          <Button className="h-9">Sign Up</Button>
        </div>
      )}
    </div>
  );
};
export default Header;
