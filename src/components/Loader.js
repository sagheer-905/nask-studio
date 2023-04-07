import React from "react";
import { Circles } from "react-loader-spinner";
export const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#483B8B"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
