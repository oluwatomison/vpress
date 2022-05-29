import React from 'react';
import Customtimer from '../../utils/customTimer';
const Infopage = (props) => {
  let {info} = props;
  return (
    <div className="pt-10">
      <div className="h-12 bg-[#f3f2f2] px-8 items-center flex">
        <h5 className="text-[#6b6b6b]">Integrated electronics</h5>
      </div>
      <div className="flex justify-center items-center py-10">
        <div className="mr-10 flex items-center flex-col">
          <div className="bg-[#00aec7] h-12 w-36 items-center justify-center flex">
            <p className="text-[#f3f2f2]">{info.temperature}&#8451;</p>
          </div>
          <div>
            <p className="text-[#6b6b6b]">Temperature</p>
          </div>
        </div>

        <div className="flex items-center flex-col">
          <div className="bg-[#00aec7] h-12 w-40 items-center justify-center flex">
            <Customtimer operationalTime={info.operatingHours} />
          </div>
          <div>
            <p className="text-[#6b6b6b]">Operating Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infopage;
