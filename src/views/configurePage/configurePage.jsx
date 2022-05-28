import React from 'react';

const Configurepage = () => {
  return (
    <div className="pt-10">
      <div className="h-12 bg-[#f3f2f2] px-8 items-center flex">
        <h5 className="text-[#6b6b6b]">Operational characteristics</h5>
      </div>
      <div className="pt-10">
        <p>
          <span className="text-[#00aec7]">Analog input value: </span>
          <span className="text-[#6b6b6b]">15.7 mA</span>
        </p>
      </div>

      <div className="pt-5">
        <p>
          <span className="text-[#00aec7]">Spool position: </span>
          <span className="text-[#6b6b6b]">68.6&#37;</span>
        </p>
      </div>
      <div className="pt-5">
        <p>
          <span className="text-[#00aec7]">Pressure (P): </span>
          <span className="text-[#6b6b6b]">35.2 bar</span>
        </p>
      </div>
      <div className="pt-5">
        <p>
          <span className="text-[#00aec7]">Flow torque: </span>
          <span className="text-[#6b6b6b]">520 mNm</span>
        </p>
      </div>
    </div>
  );
};

export default Configurepage;
