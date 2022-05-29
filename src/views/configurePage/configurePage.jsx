import React from 'react';

const Configurepage = (props) => {
  let {configure} = props;
  return (
    <div className="pt-10">
      <div className="h-12 bg-[#f3f2f2] px-8 items-center flex">
        <h5 className="text-[#6b6b6b]">Operational characteristics</h5>
      </div>
      <div className="pt-10">
        <p>
          <span className="text-[#00aec7]">Analog input value: </span>
          <span className="text-[#6b6b6b]">{`${configure.inputValue}mA`}</span>
        </p>
      </div>

      <div className="pt-5">
        <p>
          <span className="text-[#00aec7]">Spool position: </span>
          <span className="text-[#6b6b6b]">
            {`${configure.spoolPosition}`}&#37;
          </span>
        </p>
      </div>
      <div className="pt-5">
        <p>
          <span className="text-[#00aec7]">Pressure (P): </span>
          <span className="text-[#6b6b6b]">{`${configure.pressure}Bar`}</span>
        </p>
      </div>
      <div className="pt-5">
        <p>
          <span className="text-[#00aec7]">Flow torque: </span>
          <span className="text-[#6b6b6b]">{`${configure.flowTorque}mNm`}</span>
        </p>
      </div>
    </div>
  );
};

export default Configurepage;
