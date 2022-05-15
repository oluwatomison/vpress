import React from "react";
const STYLE = {
  clipPath:
    "polygon(50% 5%, 61% 40%, 98% 40%, 68% 62%, 79% 96%, 50% 75%, 21% 96%, 32% 62%, 2% 40%, 39% 40%)",
};
const RatingStar = ({ fraction }) => {
    const width=fraction>1?"100%":`${fraction*100}%`;
  return (
    <div className="h-6 w-6 overflow-clip relative bg-cyan-100 hover:scale-150 transition-all" style={STYLE}>
      <div className={`bg-orange-400 absolute h-full`} style={{width}}></div>
    </div>
  );
};
export default RatingStar;
