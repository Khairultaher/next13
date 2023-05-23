import React from "react";
import { Providers } from "@/app/provider";
import SearchInput from "@/components/SearchInput";

const page = () => {
  return (
    <div>
      <Providers>
        <SearchInput />
      </Providers>
    </div>
  );
};

export default page;
