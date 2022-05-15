import React, { useState } from "react";
import CustomButton from "../button/customButton";

const CustomSearchForm = ({onSubmit },ref) => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    ref.current=e.target.value;
    setSearch(e.target.value);
  };
  return (
    <div className="flex flex-wrap items-center gap-4">
      <input
        value={search}
        placeholder="Search Title"
        onChange={handleChange}
        type="text"
        className="outline-none p-4 h-9 border-1 rounded-md border-solid border-[#fff] bg-[#fff] w-[300px] focus:border-none focus:outline-none "
      />
     <CustomButton onClick={onSubmit}>
         Search
     </CustomButton>
    </div>
  );
};

export default React.forwardRef(CustomSearchForm);
