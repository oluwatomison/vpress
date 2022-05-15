import React from "react";

const Content = ({ children }) => {
  return (
    <div className="max-w-[1440px] bg-white/25 w-full md:w-11/12 mx-auto m-20 p-4 md:p-4 lg:p-4 2xl:p-4">
      {children}
    </div>
  );
};

export default Content;
