const CustomSearchForm = (props) => {
  let {onSubmit, search} = props;
  return (
    <div className="flex flex-wrap items-center gap-4">
      <input
        value={search}
        placeholder="Search Title"
        onChange={onSubmit}
        type="text"
        className="outline-none p-4 h-9 border-1 rounded-md border-solid border-[#000] bg-[#6b6b6b] text-[#fff] w-[300px] focus:border-none focus:outline-none "
      />
    </div>
  );
};

export default CustomSearchForm;
